import React from 'react';

const MovieCard = ({ movie }) => {
  const URL="https://www.google.com/search?q="+movie.Title+"&";
  console.log(URL);
  return (
    <div className='movie'>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <a href={URL} target="_blank" rel="noreferrer">
          <img
            src={
              movie.Poster !== 'N/A'
                ? movie.Poster
                : 'https://via.placeholder.com/400'
            }
            alt={movie.Title}
          />
        </a>
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
