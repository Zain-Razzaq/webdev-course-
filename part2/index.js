import express from 'express';

const app = express();
const port = 3000;

// Handling GET request for /hello/amjad
app.get('/hello/amjad', (req, res) => {
    res.status(200).send('Hello, Amjad.');
});


app.get('/' , (req, res) => {
    res.status(200).send('Main Page');
});
// Starting the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
