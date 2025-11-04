import { errorMiddleware } from "../../middlewares/error.middleware";

describe("errorMiddleware", () => {
  const OLD_ENV = process.env.NODE_ENV;
  let statusMock: jest.Mock;
  let jsonMock: jest.Mock;
  let res: Partial<import("express").Response>;
  const req = {} as import("express").Request;
  const next = jest.fn();

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    res = { status: statusMock } as unknown as import("express").Response;
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    (console.error as jest.Mock).mockRestore();
    process.env.NODE_ENV = OLD_ENV;
    jest.clearAllMocks();
  });

  test("responds with 500 and default message when no error info", () => {
    const err = {};
    errorMiddleware(err, req, res as import("express").Response, next);
    expect(console.error).toHaveBeenCalledWith(err);
    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({ message: "Internal Server Error" });
  });

  test("uses error.statusCode and message and includes stack/details in development", () => {
    process.env.NODE_ENV = "development";
    const err: any = { statusCode: 400, message: "Bad Request", details: { field: "x" }, stack: "trace" };
    errorMiddleware(err, req, res as import("express").Response, next);
    expect(console.error).toHaveBeenCalledWith(err);
    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Bad Request",
      stack: "trace",
      details: { field: "x" },
    });
  });
});