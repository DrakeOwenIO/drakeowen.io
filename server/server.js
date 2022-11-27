const express = require('express');
const { toEditorSettings } = require('typescript');
const { v4: uuidv4 } = require('uuid');
const app = express();
require('dotenv').config();

// MIDDLEWARE
app.use(express.json({extended: false}));

// Fake Data 
const articles = [
    {
        title: "My First Post",
        id: 1
    },
    {
        title: "Another Post",
        id: 2
    },
    {
        title: "Last Post update",
        id: 3
    }
]

// Basic get route
app.get("/", (req, res) => {
    res.status(200).json(articles)
});

// Basic Post
app.post("/", (req, res) => {
    const newArticle = {
        title: req.body.title,
        id: uuidv4()
    }

    articles.push(newArticle)
    res.status(201).json(articles)
});

// Open the server up on port 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});