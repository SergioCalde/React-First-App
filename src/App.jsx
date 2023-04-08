import './App.css';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Details'
import StaticContext from './context/StaticContext';
import {GifContextProvider} from './context/GifsContext';

import { Link, Route } from "wouter"


function App() {
  // const [keyword, setKeyword] = useState('luffy')

  return (
    <StaticContext.Provider value={{ name: 'Sergio' , developer: true}}>

    <div className="App">
      <section className='App-content'>  
        <Link to="/">
          <figure className='App-logo'>
          <img src={"/logo.png"} alt="Giffy logo" />
          </figure>
        </Link>
        <GifContextProvider>
          <Route 
            component={Home} 
            path='/' />
          <Route
            component={SearchResults}
            path="/search/:keyword"  />
          <Route
            component={Detail}
            path="/gif/:id"
          />
        </GifContextProvider>
      </section>
      {/* <Link to="/">Home</Link> <br />
      <Link to="/gif/luffy">Gifs de Luffy</Link> <br />
      <Link to="/gif/tanjiro">Gifs de Tanjiro</Link> <br />
      <Link to="/gif/pokemon">Gifs de pokemon</Link> <br />
      <Route path="/gif/:keyword" component={ListOfGifs} /> */}
      {/* <button onClick={() => setKeyword('tanjiro')}>Cambiar Keyword</button> */}
      {/* <ListOfGifs keyword={keyword}/> */}
      {/* <button onClick={() => setGifs(DIFFERENT_GIFS)}>Cambiar gifs</button> */}
    </div>
    </StaticContext.Provider>
  )
}

export default App
