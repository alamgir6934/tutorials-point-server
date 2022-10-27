const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const books = require('./data/books.json');



app.get('/', (req, res) => {
    res.send('Books api running')
});

app.get('/books-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_books = books.filter(b => b.category_id === id);
    res.send(category_books)
})
app.get('/books', (req, res) => {
    res.send(books)
})


app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const selectedBooks = books.find(b => b._id === id);
    res.send(selectedBooks);

});



app.listen(port, () => {
    console.log('dragon news server running on port', port)
})