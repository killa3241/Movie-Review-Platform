const Movie = require('../models/Movie');
const Review = require('../models/Review');

// GET all movies
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET a specific movie by ID with its reviews
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate('reviews');
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new movie
exports.addMovie = async (req, res) => {
  const movie = new Movie(req.body);
  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Submit a new review for a movie
exports.submitReview = async (req, res) => {
  const { rating, reviewText } = req.body;
  const { id } = req.params;
  const userId = req.user.id; // Get user ID from the auth middleware

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    const review = new Review({
      userId,
      movieId: id,
      rating,
      reviewText,
    });

    await review.save();

    // Add the new review to the movie's reviews array
    movie.reviews.push(review._id);

    // Recalculate the average rating
    const allReviews = await Review.find({ movieId: id });
    const totalRating = allReviews.reduce((sum, current) => sum + current.rating, 0);
    movie.averageRating = totalRating / allReviews.length;

    await movie.save();

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};