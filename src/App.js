import React, { useEffect, useState } from 'react'
import './App.css';
import MovieCard from './MovieCard';
import SerachIcon from './search.svg'
// c0f1a817
const App = () => {

  const API_URL = 'http://www.omdbapi.com/?apikey=c0f1a817&'
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search);
  }

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    searchMovie('Spiderman')
  }, [])


  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for Movie'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SerachIcon}
          onClick={() => searchMovie(search)}
        />
      </div>
      {
        movies.length > 0
          ? (
            <div className='container'>
              
              {
                movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))
              }
            </div>
          ) : (
            <div className='empty'>
              <h2>No Movie Found</h2>
            </div>
          )
      }

    </div>
  )
}

export default App