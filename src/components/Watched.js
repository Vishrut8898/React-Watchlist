import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard'

const Watched = () => {
    const { watched } = useContext(GlobalContext)

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <div className="heading">
                        Watched Movies
                    </div>
                </div>

                {watched.length > 0 ? <div className="movie-grid">
                    {watched.map(movie => (
                        <MovieCard movie={movie} type="watched" key={movie.id} />
                    ))}
                </div> : <h2 className="no-movies">No movies in your list.</h2>}
            </div>
        </div>
    )
}

export default Watched
