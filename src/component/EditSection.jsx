const EditSection = ({addMovieRef}) => {

    const handleAddMovie = ()=>{
        addMovieRef.current.scrollIntoView();
    }

    return (
        <div className="edit-section">
            <button className="btn" onClick={()=>{handleAddMovie()}} >Add Movie</button>
        </div>
    );
}

export default EditSection;
