import { useEffect, useState } from 'react';
import getGifs from '../../services/getGifs';
import spinner from '../Spinner/index'
import Gif from '../Gif/Gif'

export default function ListOfGifs({ params }) {

  const { keyword } = params
  const [loading, setLoading] = useState(false)

  const [ gifs, setGifs ] = useState([])

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword])

    if (loading) return spinner

  return <>
    {
      gifs.map(({id, title, url}) => 
        <Gif  
          key={id}
          title={title} 
          url={url} 
          id={id} 
        />
      )
    }
  </>
  
}
