// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

// PostgreSQL Pool Setup
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'suny_assembly_db',
  password: 'iamgoingtoUSC@1',
  port: 5432,
});

// Optional: Test the database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err.stack);
  } else {
    console.log('Connected to PostgreSQL at', res.rows[0].now);
  }
});

// Serve index.html at /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve submit.html at /submit
app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'submit.html'));
});

// Create a new post
app.post('/posts', async (req, res) => {
  const { title, university_name, issue } = req.body;
  console.log('Received data:', req.body);
  try {
    const result = await pool.query(
      'INSERT INTO posts (title, university_name, issue) VALUES ($1, $2, $3) RETURNING *',
      [title, university_name, issue]
    );
    console.log('Post inserted:', result.rows[0]);
    res.redirect('/');
  } catch (err) {
    console.error('Error in POST /posts:', err);
    res.status(500).send('Server Error');
  }
});

// Get all posts
app.get('/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts ORDER BY likes DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error in GET /posts:', err);
    res.status(500).send('Server Error');
  }
});

// Like a post
app.put('/posts/:id/like', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send('Post not found');
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error in PUT /posts/:id/like:', err);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
