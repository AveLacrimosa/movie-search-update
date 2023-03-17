import { useState, useEffect, useRef } from 'react'
import style from './SearchMovie.module.css'
import searchProduct from '../services/SearchService'

//Search bar

const SearchMovie = ({ setResults }) => {
  const [searchWord, setSearchWord] = useState('')
  //1.Uzsettinti paieskos zodi i state
  const handleChange = (searchWord) => {
    setSearchWord(searchWord)
  }
  //
  const inputRef = useRef(null)
  const handleClick = () => {
    setSearchWord(inputRef.current.value)
    
  }

  //2. Reikes funkcijos, kuri kreipiasi i API
  const getProducts = (searchWord) => {
    searchProduct(searchWord).then((res) => {
      setResults(res)
    })
  }
  //3. useEffect'as, kuris stebi, kada kreiptis i API
  useEffect(() => {
    getProducts(searchWord)
  }, [searchWord])


  
  return (
    <div className={style.searchBar}>
      <input
        className={style.searchBarInput}
        type="text"
        value={searchWord}
        onChange={(e) => handleChange(e.target.value)}
        // onChange={handleChange}
        ref={inputRef}
      />
      <button
        onClick={() => {
          handleClick()
        }}
      >
        Search
      </button>
    </div>
  )
}

export default SearchMovie
