const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

// Register a new user
router.post('/register', userController.registerUser);

// Login a user
router.post('/login', userController.loginUser);

// Get user profile (protected)
router.get('/profile', authMiddleware, userController.getUserProfile);

// Add movie to watchlist (protected)
router.post('/watchlist', authMiddleware, userController.addMovieToWatchlist);

// Remove movie from watchlist (protected)
router.delete('/watchlist/:movieId', authMiddleware, userController.removeMovieFromWatchlist);

module.exports = router;