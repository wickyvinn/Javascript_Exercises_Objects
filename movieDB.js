// Movie Database


var movieDatabase =
{
    title: "Pulp Fiction",
    duration: 120,
    stars: ["Bruce Willis", "Uma Thurman"]
}

function printMovie(movie) {
    console.log(movie.title + " lasts for " + movie.duration         + " minutes. Stars: " + movie.stars.join(", ") + ".")
}

printMovie(movieDatabase);