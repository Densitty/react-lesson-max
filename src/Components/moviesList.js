import React from 'react';

const MoviesList = props => {
  const renderMovies = (movies) => {
    return movies ?
      movies.map((movie) => {
        console.log(movie)
        return (
          <div key={movie.id}>
            {movie.name}
          </div>
        )
      })
      :
      null
  }

  return (
    <div>
      {renderMovies(props.data.movies)}
    </div>
  )
}

export default MoviesList