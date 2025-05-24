const errorMiddleware = (err, req, res, next) => {
  console.error(`[ERROR] ${err}`);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
};

export default errorMiddleware;
