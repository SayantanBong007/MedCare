// jwtMiddleware.js

const jwt = require('jsonwebtoken');
const { jwtSecret } = "ouhfsfnasdfnueafnouafouae"; // Import your JWT secret key

// Middleware to generate JWT token with user information including roles
const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    roles: user.roles // Include user's roles in the JWT payload
  };
  return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
};

// Middleware to verify JWT token and extract user information including roles
const jwtAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);

    // Attach user data including roles to request for further use in routes
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

module.exports = { generateToken, jwtAuthMiddleware };
