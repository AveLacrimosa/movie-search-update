import { useState } from 'react'
import OneMovie from './OneMovie/OneMovie'
import SearchMovie from './SearchMovie';

const Main = () => {
    const [productsFromApi, setProductsFromApi] = useState([]);

    const setResults = (products) => {
        setProductsFromApi(products)
    }
    console.log(productsFromApi)
    return (
        <div>
            <SearchMovie setResults={setResults} /> 
            <OneMovie productsFromApi={productsFromApi} />
        </div>
    )
}

export default Main