const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/Categories.json');

app.get('/', (req, res) => {
    res.send('Books api running')
});

app.get('/books-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log('dragon news server running on port', port)
})