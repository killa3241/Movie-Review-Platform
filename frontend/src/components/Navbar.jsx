import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [isAuth]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MovieFlix
        </Link>
        <div>
          <Link to="/" className="mx-2 hover:text-gray-400">
            Home
          </Link>
          {isAuth ? (
            <>
              <Link to="/profile" className="mx-2 hover:text-gray-400">
                Profile
              </Link>
              <button onClick={handleLogout} className="mx-2 hover:text-gray-400">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="mx-2 hover:text-gray-400">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;