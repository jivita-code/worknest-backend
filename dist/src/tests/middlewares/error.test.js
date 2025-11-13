import { errorMiddleware } from "../../middlewares/error.middleware.js";
describe("errorMiddleware", () => {
    const OLD_ENV = process.env.NODE_ENV;
    let statusMock;
    let jsonMock;
    let res;
    const req = {};
    const next = jest.fn();
    beforeEach(() => {
        jsonMock = jest.fn();
        statusMock = jest.fn().mockReturnValue({ json: jsonMock });
        res = { status: statusMock };
        jest.spyOn(console, "error").mockImplementation(() => { });
    });
    afterEach(() => {
        console.error.mockRestore();
        process.env.NODE_ENV = OLD_ENV;
        jest.clearAllMocks();
    });
    test("responds with 500 and default message when no error info", () => {
        const err = {};
        errorMiddleware(err, req, res, next);
        expect(console.error).toHaveBeenCalledWith(err);
        expect(statusMock).toHaveBeenCalledWith(500);
        expect(jsonMock).toHaveBeenCalledWith({ message: "Internal Server Error" });
    });
    test("uses error.statusCode and message and includes stack/details in development", () => {
        process.env.NODE_ENV = "development";
        const err = { statusCode: 400, message: "Bad Request", details: { field: "x" }, stack: "trace" };
        errorMiddleware(err, req, res, next);
        expect(console.error).toHaveBeenCalledWith(err);
        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({
            message: "Bad Request",
            stack: "trace",
            details: { field: "x" },
        });
    });
});
