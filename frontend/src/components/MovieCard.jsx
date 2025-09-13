import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <Link to={`/movies/${movie._id}`}>
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-72 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-400">{movie.releaseYear}</p>
        <p className="mt-2 text-yellow-400">
          Rating: {movie.averageRating.toFixed(1)} / 5
        </p>
      </div>
    </div>
  );
};

export default MovieCard;