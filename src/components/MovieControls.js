import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ type, movie }) => {
    const { removeMovieFromWatchlist, removeMovieFromWatched, moveToWatchlist, addMovieToWatched } = useContext(GlobalContext)

    return (
        <div className="inner-card-controls">

            {type === 'watched' && (
                <>
                    <button className="ctrl-btn"
                    onClick={() => moveToWatchlist(movie)}
                    >
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>
                    <button className="ctrl-btn"
                    onClick={() => removeMovieFromWatched(movie.id)}
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === 'watchlist' && (
                <>
                    <button className="ctrl-btn"
                    onClick={() => addMovieToWatched(movie)}
                    >
                        <i className="fa-fw far fa-eye"></i>
                    </button>
                    <button className="ctrl-btn"
                    onClick={() => removeMovieFromWatchlist(movie.id)}
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    );
};