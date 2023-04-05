import './App.css';
import { Link, Route } from "wouter"
import ListOfGifs from './components/ListOfGifs/ListOfGifs'

function App() {
  // const [keyword, setKeyword] = useState('luffy')

  return (
    <div className="App">
      <Link to="/">
        <img className='App-logo' src={"/logo.png"} alt="logo" />
      </Link>
      <h1>App</h1>
      <Link to="/">Home</Link> <br />
      <Link to="/gif/luffy">Gifs de Luffy</Link> <br />
      <Link to="/gif/tanjiro">Gifs de Tanjiro</Link> <br />
      <Link to="/gif/pokemon">Gifs de pokemon</Link> <br />
      <Route path="/gif/:keyword" component={ListOfGifs} />
      {/* <button onClick={() => setKeyword('tanjiro')}>Cambiar Keyword</button> */}
      {/* <ListOfGifs keyword={keyword}/> */}
      {/* <button onClick={() => setGifs(DIFFERENT_GIFS)}>Cambiar gifs</button> */}
    </div>
  )
}

export default App
