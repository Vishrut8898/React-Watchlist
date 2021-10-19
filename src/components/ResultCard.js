import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const ResultCard = ({movie}) => {
    const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext)

    const storedWatchlistMovie = watchlist.find(m => m.id === movie.id)
    const storedWatchedMovie = watched.find(m => m.id === movie.id)

    const watchlistDisabled = storedWatchlistMovie ? true : storedWatchedMovie ? true : false;

    const watchedDisabled = storedWatchedMovie ? true : false

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {(movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title} Poster`} /> : (
                    <div className="filler-poster"></div>
                ))}
            </div>

            <div className="info">
                <div className="header">
                    <div className="title">{movie.title}</div>
                    <h4 className="release-date">
                        {(movie.release_date ? movie.release_date.substring(0, 4) : '--')}
                    </h4>
                </div>

                <div className="controls">
                    <button className="btn"
                    disabled={watchlistDisabled}
                    onClick={() => addMovieToWatchlist(movie)}
                    >
                        Add to Watchlist
                    </button>
                    <button className="btn"
                    disabled={watchedDisabled}
                    onClick={() => addMovieToWatched(movie)}
                    >
                        Add to Watched
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResultCard
