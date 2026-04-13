const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  const movies = [
      {
          Title: "The Thing",
          Released: "1982-06-25",
          Runtime: 109,
          Genres: ["Horror", "Mystery", "Sci-Fi"],
          Directors: ["John Carpenter"],
          Writers: ["Bill Lancaster", "John W. Campbell Jr."],
          Actors: ["Kurt Russell", "Wilford Brimley", "Keith David"],
          Plot: "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
          Poster: "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
          Metascore: 57,
          imdbRating: 8.2
      },
      {
          Title: "Inception",
          Released: "2010-07-16",
          Runtime: 148,
          Genres: ["Action", "Adventure", "Sci-Fi"],
          Directors: ["Christopher Nolan"],
          Writers: ["Christopher Nolan"],
          Actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
          Plot: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
          Poster: "https://m.media-amazon.com/images/M/MV5BMmU4ZjU0YzEtOTBjNi00ZjQ3LTg2ZTktN2Y0MzQzYjA1ZDc2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          Metascore: 74,
          imdbRating: 8.8
      },
      {
          Title: "Interstellar",
          Released: "2014-11-07",
          Runtime: 169,
          Genres: ["Adventure", "Drama", "Sci-Fi"],
          Directors: ["Christopher Nolan"],
          Writers: ["Jonathan Nolan", "Christopher Nolan"],
          Actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
          Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          Poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDUtNmI0YS00Y2E1LWI2OWEtNDY2OTY5MzA1N2Y0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          Metascore: 74,
          imdbRating: 8.7
      }
  ]

  res.json(movies)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

