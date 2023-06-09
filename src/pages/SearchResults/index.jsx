import Spinner from '@/components/Spinner'
import ListOfGifs from '@/components/ListOfGifs/ListOfGifs'
import { useGifs } from '@/hooks/useGifs'
import useNearScreen from '@/hooks/useNearScreen'
import { useCallback, useRef, useEffect } from 'react'
import debounce from 'just-debounce-it' //https://github.com/angus-c/just#just-debounce-it

function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ 
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback( debounce(
    () => setPage(prevPage => prevPage + 1), 1000
  ), [])

  useEffect(function() {
    // console.log(isNearScreen)
    if(isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return <>
    {loading
      ? <Spinner />
      : <>
        <h3 className='App-title'>
          {decodeURI(keyword)}
        </h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </>
    }
  </>
}

export default SearchResults;