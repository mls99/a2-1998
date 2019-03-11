const express = require('express');
const bodyParser = require('body-parser');
const giveMeaJoke = require('give-me-a-joke');
const randomname = require('random-name');

const app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.post('/api/random-joke', (req, res) => {
    giveMeaJoke.getCustomJoke (req.body.firstName, req.body.lastName, function(joke) {
        res.status(200).send ({joke: joke})})
})

app.get('/api/random-name', (req, res) => {
    res.send ({ first: randomname.first(), last: randomname.last()});
});

const PORT = 3000;
app.listen(PORT, function() {
  console.log(`server running on port ${PORT}`)
})