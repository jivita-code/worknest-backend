export function errorMiddleware(err, req, res, next) {
    // log the error server-side
    // replace with structured logger if you have one
    console.error(err);
    const status = err?.statusCode ?? 500;
    const message = err?.message ?? "Internal Server Error";
    const details = err?.details ?? undefined;
    res.status(status).json({
        message,
        ...(process.env.NODE_ENV === "development" ? { stack: err.stack, details } : {}),
    });
}
