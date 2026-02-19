const express = require ('express');

const app = express();

app.use(express.json); // body parsing

// movie data:
const movies = [{
    id : 1,
    title : "the greatest movie ever"
}, {
    id : 2,
    title : "pretty boring movie"
}];

// GET - retrieve all movie resources
app.get("/movies", (req, res) => {
    res.send(movies);
});

// GET - retrieve a movie resource by id
app.get("/movies/:id", (req, res) => {
    res.send(movies.find(movie => movie.id === parseInt(req.params.id)));
});

// POST - create an movie resource
app.post("/movies", (req, res) => {
    if (!req.body) {
        return res.status(400).send({ errorMessage : "No JSON body provided." });
    }
    const providedMovie = req.body;

    movies.push(providedMovie);
    res.send({ data:providedMovie })

});


// PATCH - update parts of a movie resource
app.patch("/movies/:id", (req, res) => {



});

// post fix notation:
// console.log(number++) <- logger først, ændrer bagefter

// pre-fix notation:
// console.log(++number) <- ændrer først, logger bagefter

// DELETE - Delete a movie ressource
app.delete("movies/:id", (req, res) => {
    const providedMovieId = Number(req.params.id);
    const foundMovieIndex = movies.findIndex((movie) => movie.id === providedMovieId);
    if (foundMovieIndex === -1) {
        return res.status(404).send({ errorMessage : `No movie found by id: ${res.params.id}`});

    }

    movies.splice(foundMovieIndex, 1);

    res.status(204).send();

});





app.listen(8080);