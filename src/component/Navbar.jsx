import EditSection from './EditSection';

const Navbar = ({addMovieRef}) => {

    return (
        <header>
            
            <div className="logo">
                <h1>MyMovies</h1>
            </div>

            <EditSection addMovieRef={addMovieRef} />
        
        </header>
    );
}

export default Navbar;
