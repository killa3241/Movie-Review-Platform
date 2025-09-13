import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login'); // Redirect to login if no token exists
        return;
      }

      try {
        const config = {
          headers: {
            'x-auth-token': token,
          },
        };
        const response = await api.get('/users/profile', config);
        setUser(response.data.user);
        setReviews(response.data.reviews);
      } catch (err) {
        setError('Failed to fetch profile data.');
        localStorage.removeItem('token'); // Clear invalid token
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading profile...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 font-semibold">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center mb-6">User Profile</h1>
        {user && (
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold">Username:</span> {user.username}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Member Since:</span> {new Date(user.joinDate).toLocaleDateString()}
            </p>
          </div>
        )}

        <h2 className="text-2xl font-bold mt-8 mb-4">Review History</h2>
        {reviews.length > 0 ? (
          <ul className="space-y-4">
            {reviews.map((review) => (
              <li key={review._id} className="p-4 border rounded">
                <p>
                  **Rating:** {review.rating} / 5
                </p>
                <p className="mt-2">
                  **Review:** {review.reviewText}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Reviewed on: {new Date(review.timestamp).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;