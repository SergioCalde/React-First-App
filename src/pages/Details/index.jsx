// import { useContext } from "react"
// import StaticContext from '../../context/StaticContext'
// import GifsContext from '../../context/GifsContext'
import Gif from "../../components/Gif/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";

export default function Detail ({ params }) {
  // const staticConfig = useContext(StaticContext);
  // console.log(staticConfig);
  // console.log(params.id)

  const gifs = useGlobalGifs();
  // console.log(gifs);

  const gif = gifs.find(singleGif => 
    singleGif.id === params.id)

  // console.log(gif)

  return <>
  <h3 className="App-title">{gif.title}</h3>
  <Gif { ...gif } />
  </>
  
}