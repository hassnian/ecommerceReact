import React from 'react'
import {Link} from 'react-router-dom'
const CategorieItem=({categories})=> {
    const categorieList=categories.map(categorie=>{
        return(
            
            <p>{categorie}</p>
        )
    })
  return (
    <div>
      {categorieList}
    </div>
  )
}
export default CategorieItem
