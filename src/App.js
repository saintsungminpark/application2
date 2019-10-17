import React from 'react';
import axios from "axios";
import Movie1 from "./Movie1";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies1: [],
    movies2: [],
    movies3: []
  };
  getMovies1 = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get(
      "https://yts.lt/api/v2/list_movies.json?sort_by=year&limit=50"
    );
    // console.log(movies);
    this.setState({ movies1: movies});
  };

  getMovies2 = async () => {
    const {
        data: {
          data: { movies }
        }
      } = await axios.get(
        "https://yts-proxy.now.sh/list_movies.json?sort_by=rating&with_rt_ratings=true&limit=50"
      );
    // console.log(movies);
    this.setState({ movies2: movies});
  };

  getMovies3 = async () => {
    const {
        data: {
          data: { movies }
        }
      } = await axios.get(
        "https://yts-proxy.now.sh/list_movies.json?sort_by=like_count&with_rt_ratings=true&limit=50"
      );
    // console.log(movies);
    this.setState({ isLoading: false, movies3: movies});
  };

  componentDidMount() {
    this.getMovies1();
    this.getMovies2();
    this.getMovies3();
  }

  render() {
    const { isLoading, movies1, movies2, movies3 } = this.state;
    return (
      <section className="contain">
        {isLoading ? (
          <div className="loader">
            {/* <span className="loader__text">Loading...</span> */}
            <div class="loader__svg">
              <svg width="75" height="75" viewBox="0 0 50 50">
              <path opacity="0" d="M24.828,1.998c-12.744,0-23.074,10.331-23.074,23.075c0,12.743,10.331,23.074,23.074,23.074
              c12.743,0,23.075-10.331,23.075-23.074C47.902,12.329,37.57,1.998,24.828,1.998z M24.828,46.252c-11.698,0-21.18-9.482-21.18-21.18
              S13.13,3.892,24.828,3.892c11.696,0,21.182,9.483,21.182,21.181S36.523,46.252,24.828,46.252z"/>
                <path fill="red" d="M41.757,12.382l1.532-1.153c-1.98-2.636-4.512-4.834-7.423-6.423l-0.898,1.669
              C37.638,7.934,39.941,9.964,41.757,12.382z">
                <animateTransform attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="0.5s"
                    repeatCount="indefinite"/>
              </path>
              </svg>
            </div>
          </div>
        ) : (
          <div className="row">
            <a href="#"><h1 class="header">Movie</h1></a>
            <h2 className="movie__header">Recently Year</h2>
              <div className="row__inner">
                {movies1.map(movie => (
                  <Movie1
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                ))}
              </div>
              <h2 className="movie__header">Rating</h2>
              <div className="row__inner">
                {movies2.map(movie => (
                  <Movie1
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                ))}
              </div>
              <h2 className="movie__header">Like Count</h2>
              <div className="row__inner">
                {movies3.map(movie => (
                  <Movie1
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                ))}
              </div>
            </div>
          )}
      </section>
    );
  }
}

export default App;