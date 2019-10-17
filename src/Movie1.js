import React from "react";
import Proptypes from "prop-types";
import "./Movie.css";

function Movie1({ year, title, poster, genres }) {
        if (title.length >= 12) {
            return (
                <div class="tile">
                    <div class="tile__media">
                        <img class="tile__img" src={poster} alt={title} title={title} />
                    </div>
                    <div className="tile__details">
                        <div className="tile__title"><h3>{title.slice(0, 12) + "..."}</h3></div>
                            <h5 className="tile__year">{year}</h5>
                            <ul className="tile__genres">
                                {genres.map((genre, index) => (
                                    <li key={index} className="genres__genre">{genre}</li>
                                ))}
                            </ul>    
                        </div>
                    </div>
                );
            }
        else {
            return (
                <div class="tile">
                    <div class="tile__media">
                        <img class="tile__img" src={poster} alt={title} title={title} />
                    </div>
                    <div className="tile__details">
                        <div className="tile__title"><h3>{title}</h3></div>
                            <h5 className="tile__year">{year}</h5>
                            <ul className="tile__genres">
                                {genres.map((genre, index) => (
                                    <li key={index} className="genres__genre">{genre}</li>
                                ))}
                            </ul>    
                        </div>
                    </div>
                );
            }
        }

Movie1.propTypes = {
    id: Proptypes.number.isRequired,
    year: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired
};

export default Movie1;