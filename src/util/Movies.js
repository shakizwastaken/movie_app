const srcImg =
  "https://raw.githubusercontent.com/knazim667/Film-Review/master/images/uploads/slider3.jpg";
const trailer = "/trailer/trailer.mp4";

let moviesCount = 3;

let movies = [
  {
    id: 0,
    title: "The Drama",
    srcImg: srcImg,
    trailer: trailer,
    about: {
      rating: 2.5,
      genre: "drama",
      desc: "A movie that speaks about a drama... yes,thats it.",
      director: "yahya rhemmali",
      actors: ["me", "some actor", "some actress"],
    },
  },
  {
    id: 1,
    title: "The Pit",
    srcImg: srcImg,
    trailer: trailer,
    about: {
      rating: 4.5,
      genre: "action",
      desc: "A movie that speaks about a pit... yes,thats it.",
      director: "yahya rhemmali",
      actors: ["me", "some actor", "some actress"],
    },
  },
  {
    id: 2,
    title: "The Action",
    srcImg: srcImg,
    trailer: trailer,
    about: {
      rating: 4.5,
      genre: "action",
      desc: "A movie that speaks about a pit... yes,thats it.",
      director: "yahya rhemmali",
      actors: ["me", "some actor", "some actress"],
    },
  },
  {
    id: 3,
    title: "The Comedie",
    srcImg: srcImg,
    trailer: trailer,
    about: {
      rating: 4.5,
      genre: "comedie",
      desc: "A movie that speaks about a pit... yes,thats it.",
      director: "yahya rhemmali",
      actors: ["me", "some actor", "some actress"],
    },
  },
];

//getters
const getMovieById = (id) => {
  return movies[id];
};

const getMovies = () => {
  return movies;
};

const getTrendingMovies = (inputMovies) => {
  return inputMovies.filter(({ about, ...movie }) => {
    return about.rating > 3;
  });
};

const getMoviesByGenre = (inputMovies, genre) => {
  return inputMovies.filter(({ about, ...movie }) => {
    return about.genre === genre;
  });
};

//setters

//create a movie object.
const createMovie = (id, title, rating, genre, desc, director, actors) => {
  return {
    id: id,
    title: title,
    srcImg: srcImg,

    about: {
      rating: rating,
      genre: genre,
      desc: desc,
      director: director,
      actors: [...actors],
    },
  };
};

/*
calculates how relevant str2 is to str1.

 3 : equal
 2: relevant
 1: somewhat relevant
 0: non relevant

 */
const getRelevancy = (str1, str2) => {
  str1 = str1.toLocaleLowerCase().trim();
  str2 = str2.toLocaleLowerCase().trim();

  if (str1 === str2) return 3;
  if (str1.startsWith(str2)) return 2;
  if (str1.includes(str2)) return 1;
  return 0;
};

//finds relevant movies by name from input string.
const findMatch = (inputMovies, str) => {
  return inputMovies
    .filter((movie) => getRelevancy(movie.title, str) !== 0)
    .sort(
      (movieA, movieB) =>
        getRelevancy(movieB.title, str) - getRelevancy(movieA.title, str)
    );
};

export {
  movies,
  getMovies,
  getMovieById,
  getTrendingMovies,
  getMoviesByGenre,
  createMovie,
  findMatch,
};
