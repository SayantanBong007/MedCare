// jwtMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('./models/user');

// Middleware to verify JWT token
const jwtAuthMiddleware = async (req, res, next) => {
  // Extract token from request headers
  const token = req.headers.authorization;

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, "popipiiisjd");

    // Find user by ID from token payload
    const user = await User.findById(decoded.id);

    // Check if user exists
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    // Attach user object to request for further use in routes
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

module.exports = { jwtAuthMiddleware };
