import React from 'react'
import styles from './OneMovie.module.css'

const OneMovie = (props) => {
    console.log(props.productsFromApi.Search)
    const items = props.productsFromApi.Search;
  return (
    <div className={styles.movieList}>
        {
            items && items.map(item => (
                <div key={item.id} className={styles.oneMovie}>
                <h2>{item.Title}</h2>
                <p>Year of release: {item.Year}</p>
                <div className={styles.movieImg}>
                <img  src={item.Poster} alt = ''></img>
                </div>
                <button className={styles.moreInfo}>Read more</button>
                </div>
            ))
        }
    </div>
  )
}

export default OneMovie