// jwtMiddleware.js

import { sign, verify } from 'jsonwebtoken';
const  jwtSecret  = "ouhfsfnasdfnueafnouafouae"; // Import your JWT secret key
//console.log(jwtSecret);
// Middleware to generate JWT token with user information including roles
const generateToken = (user) => {
  const payload = {
    email: user.email,
    roles: user.roles // Include user's roles in the JWT payload
  };
  return sign(payload, jwtSecret, { expiresIn: '1h' });
};

// Middleware to verify JWT token and extract user information including roles
const jwtAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = verify(token, jwtSecret);

    // Attach user data including roles to request for further use in routes
    req.user = decoded;
    

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};
//generateToken();
export default { generateToken, jwtAuthMiddleware };
