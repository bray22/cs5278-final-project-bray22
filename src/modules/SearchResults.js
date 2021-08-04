import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';

const SearchResults = (props) => {
  const openDetails = (imdbId) => {
    localStorage.setItem('movieImdbId', imdbId);
    window.location.href = '/details';
  }

  return (props.movies && props.movies.map( (movie, i) =>
    <>
      <div key={i} className="search-results-row">
        <div className="movie-title" onClick={() => openDetails(movie.imdbID)}>{movie.Title}</div>
        <div className="movie-type" onClick={() => openDetails(movie.imdbID)}>{movie.Type}</div>
        <div className="movie-year" onClick={() => openDetails(movie.imdbID)}>{movie.Year}</div>
        <div className="movie-imdb"><a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_new">IMDB page</a></div>
        <div className="add-watchlist" onClick={() => props.addMovieToFavs(movie)}><FontAwesomeIcon icon={faPlusCircle} /></div> 
      </div>
    </>
  ))
};

export default SearchResults;
