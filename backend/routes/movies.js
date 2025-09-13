const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const authMiddleware = require('../middleware/auth'); // Assuming this handles both user and admin auth

// GET all movies (with filtering and pagination)
router.get('/', movieController.getAllMovies);

// GET a specific movie by ID with its reviews
router.get('/:id', movieController.getMovieById);

// Add a new movie (admin only)
router.post('/', authMiddleware, movieController.addMovie);

// Submit a new review for a movie
router.post('/:id/reviews', authMiddleware, movieController.submitReview);

module.exports = router;