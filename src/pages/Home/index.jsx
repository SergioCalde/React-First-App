import { useState, useEffect } from "react"
import { Link, useLocation } from "wouter"
import getGifs from "../../services/getGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Category from "../../components/Category";
import { useGifs } from "../../hooks/useGifs";


const POPULAR_GIFS = ["Luffy", "Tanjiro", "Pokemon", "HunterXHunter"]

export default function Home() {
  const [ keyword , setKeyword ] = useState('');
  const [ path, pushLocation ] = useLocation();
  const { loading, gifs} = useGifs();


  const handleSubmit = evt => {
    evt.preventDefault();
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif here..." />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
        <Category
          name="Categorias populares"
          options={POPULAR_GIFS}
        />
        <Category
          name="Peliculas"
          options={['Avengers','John Wick', 'Fast and Furious']}
        />
        </div>
      </div>
    </>
  )
}