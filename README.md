# 🎬 Movie Review Platform

A full-stack movie review platform built with React, Node.js, Express, and MongoDB. This application allows users to browse movies, read and write reviews, and manage a personal watchlist.

## ✨ Features

* **Responsive UI:** A clean, modern interface that works seamlessly on desktop and mobile devices.
* **Movie Browsing:** View a list of movies with search and filter functionality.
* **User Authentication:** Secure user registration and login with JSON Web Tokens (JWT).
* **Movie Details:** Dedicated pages for each movie, showing details, cast, and user-submitted reviews.
* **Review System:** Users can submit star ratings and written reviews for movies.
* **Watchlist:** A personal watchlist to save movies for later.

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js (v18 or higher)
* npm
* MongoDB Atlas account or local MongoDB instance

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/movie-review-platform.git](https://github.com/your-username/movie-review-platform.git)
    cd movie-review-platform
    ```

2.  **Set up the backend:**
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory and add your environment variables:
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    ```
    To start the backend server, run:
    ```bash
    npm run dev
    ```

3.  **Set up the frontend:**
    ```bash
    cd ../client
    npm install
    ```
    Create a `.env` file in the `client` directory:
    ```
    REACT_APP_API_URL=http://localhost:5000/api
    ```
    To start the frontend application, run:
    ```bash
    npm start
    ```

The frontend should now be running on `http://localhost:3000` (or `http://localhost:5173` if you are using Vite).

## 🖥️ API Documentation

The backend provides a RESTful API with the following endpoints:

| Endpoint                          | Method | Description                                            | Authentication |
| --------------------------------- | ------ | ------------------------------------------------------ | -------------- |
| `/api/users/register`             | `POST`   | Registers a new user.                                  | Public         |
| `/api/users/login`                | `POST`   | Authenticates a user and returns a JWT.                | Public         |
| `/api/movies`                     | `GET`    | Retrieves all movies with optional filters.            | Public         |
| `/api/movies/:id`                 | `GET`    | Retrieves details for a specific movie.                | Public         |
| `/api/movies/:id/reviews`         | `POST`   | Submits a new review for a movie.                      | Private        |
| `/api/users/profile`              | `GET`    | Retrieves the authenticated user's profile and reviews.| Private        |
| `/api/users/watchlist`            | `GET`    | Retrieves the user's watchlist.                        | Private        |
| `/api/users/watchlist/:movieId`   | `POST`   | Adds a movie to the watchlist.                         | Private        |
| `/api/users/watchlist/:movieId`   | `DELETE` | Removes a movie from the watchlist.                    | Private        |

## 🤝 Contribution

Contributions are welcome! If you find a bug or have an idea for a new feature, please open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License.