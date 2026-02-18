const express = require ('express');

const app = express();

// movie data:
const movies = [{
    id : 1,
    title : "the greatest movie ever"
}, {
    id : 2,
    title : "pretty boring movie"
}]

// GET - retrieve all movie resources
app.get("/movies", (req, res) => {
    res.send(movies);
})

// GET - retrieve a movie resource by id
app.get("/movies/:id", (req, res) => {
    res.send(movies.find(movie => movie.id === parseInt(req.params.id)));
})


app.listen(8080);