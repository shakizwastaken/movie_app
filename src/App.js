import { useRef, useState } from 'react';
 
import HeroSection from "./component/HeroSection.jsx";
import AddMovie from './component/Movies/AddMovie.jsx';
import Movies from "./component/Movies/Movies.jsx";
import Navbar from "./component/Navbar.jsx";


function App() {

  const imgSrc= 'https://raw.githubusercontent.com/knazim667/Film-Review/master/images/uploads/slider3.jpg';

  const [movies,setMovies] = useState([

        {
            id:0,
            name:'Cool movie name part 1',
            imgSrc:imgSrc,
            about:{
                desc:'real movie, very interesting, i know this is very useful information.',
                director: 'steven famous',
                actors:['ur mom','some legendary actor'],
                rating: 4.5,
            },
            isFav:true,
        },
        {
            id:1,
            name:'Cool movie name part 2',
            imgSrc:imgSrc,
            about:{
                desc:'real movie, very interesting, i know this is very useful information.',
                director: 'steven famous',
                actors:['ur mom','some legendary actor'],
                rating: 4.9,
            },
            isFav:true,
        },
        {
            id:2,
            name:'Cool test name part 3',
            imgSrc:imgSrc,
            about:{
                desc:'real movie, very interesting, am very creative,i know.',
                director: 'steven famous',
                actors:['ur mom','some legendary actor'],
                rating: 3.7,
            },
            isFav:false,
        },
        {
            id:3,
            name:'Cool movie name part 4',
            imgSrc:imgSrc,
            about:{
                desc:'real movie, very interesting, am very creative,i know.',
                director: 'steven famous',
                actors:['ur mom','some legendary actor'],
                rating: 2.3,
            },
            isFav:true,
        }
  ]);

  //create new movie in collection.

  const createMovie = (name,desc,director,actors,rating,isFav)=>{

    let movie = {
      id:movies.length,
      name:name,
      imgSrc:imgSrc,
      about:{
        desc:desc,
        director:director,
        actors:actors,
        rating:rating,
      },
      isFav:isFav,
    };

     setMovies([...movies,movie]);

  }

  const [searchInput,setSearchInput] = useState('');

  const resultRef = useRef();

  const addMovie = useRef();

  return (
    <div className="container">

      <Navbar addMovieRef={addMovie} />
      
      <HeroSection setSearchInput={setSearchInput} resultRef={resultRef} />

      <Movies searchInput={searchInput} ref={resultRef} movies={movies} setMovies={setMovies} />

      <AddMovie ref={addMovie} createMovie={createMovie} />

    </div>
  );
}

export default App;
