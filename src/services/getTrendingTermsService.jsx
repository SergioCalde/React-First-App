import {API_KEY, API_URL} from './settings'
 
const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { title } = image;
      return title;
    })
    let gifsUnique = [...new Set(gifs)]
    return gifsUnique;
  }
  return [];
}

export default function getTrendingTerms() {
  const apiUrl = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=15`

  return fetch(apiUrl)
          .then(res => res.json())
          .then(fromApiResponseToGifs)
}