const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // stack means the sequence of function calls that led to the error, useful for debugging

  // Mongoose bad ObjectId  (e.g. /api/notes/not-a-valid-id)
  if (err.name === 'CastError') {
    return res.status(400).json({ success: false, message: 'Invalid ID format' });
  }

  // Mongoose validation error  (e.g. missing required field)
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({ success: false, message: messages.join(', ') });
  }

  // Default
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal server error',
  });
};

module.exports = errorHandler;