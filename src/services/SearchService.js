const searchProduct = async (searchWord) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=9889249a&s=${searchWord}`);
    const products = await response.json();

    if(products == []){
        alert('ka tu cia darai')
    }

    return products;
}

export default searchProduct

// 
// https://www.omdbapi.com/?i=tt3896198&apikey=9889249a