SUNY Issues Platform
====================

This project is a web application for SUNY university students to raise issues, like posts, and prioritize the most-liked issues for discussion in the SUNY assembly. The application uses Node.js and Express.js for the backend, EJS for templating, and PostgreSQL for data storage.

Features
--------

- **Post Creation**: Users can create posts by entering their university name and the issue description.
- **Like Posts**: Users can like posts to prioritize important issues.
- **View Issues**: The homepage displays all posts sorted by the number of likes.
- **Database Integration**: Data is persisted in a PostgreSQL database.

Table of Contents
-----------------

- Tech Stack
- Project Structure
- Setup and Installation
- Database Schema
- Routes
- Screenshots
- Contributing

Tech Stack
----------

**Backend**

- Node.js: Server-side JavaScript runtime.
- Express.js: Framework for building web applications.

**Frontend**

- HTML/CSS: For basic layout and styling.
- EJS: Templating engine for dynamic HTML rendering.

**Database**

- PostgreSQL: Relational database for storing posts and their details.


Setup and Installation
----------------------

### Prerequisites

- Install Node.js and npm.
- Install PostgreSQL and set up the database.

### Steps

1. **Clone the repository:**


2. **Install dependencies:**


3. **Set up the PostgreSQL database:**

- Create a database named `suny_issues`:

  ```
  CREATE DATABASE suny_issues;
  ```

- Create a `posts` table:

  ```
  CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    university_name VARCHAR(255) NOT NULL,
    issue_description TEXT NOT NULL,
    like_count INTEGER DEFAULT 0
  );
  ```

4. **Start the server:**


5. **Open your browser and navigate to:**


Database Schema
---------------

The application uses the following schema for the `posts` table:

| Column             | Type         | Constraints  |
|--------------------|--------------|--------------|
| id                 | SERIAL       | PRIMARY KEY  |
| university_name    | VARCHAR(255) | NOT NULL     |
| issue_description  | TEXT         | NOT NULL     |
| like_count         | INTEGER      | DEFAULT 0    |

Routes
------

| HTTP Method | Route                  | Description                                    |
|-------------|------------------------|------------------------------------------------|
| GET         | `/`                    | Renders the homepage with all posts.           |
| GET         | `/posts`               | Returns all posts as JSON.                     |
| POST        | `/posts`               | Creates a new post.                            |
| POST        | `/posts/:post_id/like` | Increments the like count for a specific post. |

Screenshots
-----------

*Homepage*

*Create a Post*

*Like a Post*

Contributing
------------

Contributions are welcome! Please follow these steps:

1. **Fork the repository.**

2. **Create a new branch:**


3. **Commit your changes:**


4. **Push to your fork and submit a pull request.**

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.

Contact
-------

If you have any questions or suggestions, feel free to reach out to:

- **Email**: aryanmudgal4493@gmail.com
- **GitHub**: aryanmudgal-tech


