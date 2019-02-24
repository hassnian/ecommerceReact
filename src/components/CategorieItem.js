import React from 'react'
import {Link} from 'react-router-dom'
const CategorieItem=({categories})=> {
    const categorieList=categories.map(categorie=>{
        return(
            <div className="categorie-item">
                <a href="#">
                <div className="categorie-icon"></div>
                <span>{categorie}</span>
                </a>
            </div>
        )
    })
  return (
    <div>
      {categorieList}
    </div>
  )
}
export default CategorieItem
