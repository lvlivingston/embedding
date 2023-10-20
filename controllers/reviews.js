const Movie = require('../models/movie');

module.exports = {
    create
};

async function create(req, res) {
    const movie = await Movie.findById(req.params.id);
    // We can push (or unshift) subdocs into Mongoose arrays
    movie.reviews.push(req.body);
    try {
        // save any changes made to the movie document
        await movie.save();
    } catch (err) {
        console.log(err);
    }
    // Step 5: respond to the request (redirect if data has been changed)
    res.redirect(`/movies/${movie._id}`);
}