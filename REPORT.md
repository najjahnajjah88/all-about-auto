# Auto Headz (Internship Project Report)

## Abstract
Auto Headz is a full-stack automotive web application that allows users to explore a global car catalogue, compare cars, and submit owner reviews. The system is implemented as a single Flask application that serves both the frontend website and backend REST APIs. Data is persisted in an SQLite database and authentication is handled via JSON Web Tokens (JWT).

## Problem Statement
Static websites cannot reliably store user data (accounts, reviews) or manage content (cars catalogue) without a backend. This project implements a secure backend with APIs, authentication, and a database to make the website fully functional and extensible.

## Objectives
1. Build a responsive car explorer website.
2. Provide backend REST APIs for cars and reviews.
3. Implement user registration and login using JWT.
4. Store cars and reviews in a database (SQLite).
5. Provide an admin module to manage cars.

## Technology Stack
1. Frontend: HTML, CSS, JavaScript
2. Backend: Python, Flask
3. Database: SQLite
4. Authentication: JWT (Flask-JWT-Extended)

## System Architecture
1. Browser loads UI pages from Flask.
2. UI calls REST APIs under `/api/*`.
3. Flask reads/writes data in SQLite via SQLAlchemy.

## Database Design (ER Summary)
Entities:
1. Users
   - id (PK), name, email (unique), password_hash, role, created_at
2. Cars
   - id (PK), name, brand, image_url, link, specs_json, created_at
3. Reviews
   - id (PK), user_id (FK -> users.id), car_id (FK -> cars.id), rating, comment, created_at

Relationships:
1. One User -> Many Reviews
2. One Car -> Many Reviews

## Modules
1. Authentication Module
   - Register/Login/Current user endpoint
   - Password hashing and JWT token issuance
2. Cars Catalogue Module
   - List cars and fetch car details
   - Admin CRUD for cars
3. Reviews Module
   - Create and list reviews stored in DB
   - Delete permission: author or admin
4. Admin Module
   - Admin-only form to add cars into the database

## API Endpoints
Authentication:
1. `POST /api/auth/register`
2. `POST /api/auth/login`
3. `GET /api/auth/me`

Cars:
1. `GET /api/cars`
2. `GET /api/cars/<id>`
3. `POST /api/cars` (admin)
4. `PUT /api/cars/<id>` (admin)
5. `DELETE /api/cars/<id>` (admin)

Reviews:
1. `GET /api/reviews`
2. `POST /api/reviews` (auth)
3. `DELETE /api/reviews/<id>` (author/admin)

## Setup and Execution
1. Create virtual environment and install dependencies.
2. Create `.env` using `.env.example`.
3. Run Flask app.
4. Open the website in the browser.

## Testing (Manual)
1. Open homepage and verify cars load from backend.
2. Register a new user and login.
3. Submit a review and refresh page to confirm persistence.
4. Login as admin and add a car via Admin Panel.

## Results
The application functions as a complete full-stack website with persistent data storage, authentication, and role-based admin operations.

## Conclusion
This project demonstrates full-stack development with Flask, REST APIs, database integration, and secure authentication.

## Future Scope
1. Deploy to a cloud platform (Render/Railway).
2. Add advanced search and filtering on the backend.
3. Add edit reviews, profile pages, and password reset.
4. Replace SQLite with PostgreSQL for production.
