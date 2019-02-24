import React, { Component } from 'react'
import CategorieItem from './CategorieItem'
export class Categories extends Component {
    state={
        categories:[
            "asdas",
            "asdas",
            "asdas",
            "asdas",
            "asdas",
            "asdas",
            "asdas",
            "asdas",
        ]
    }
  render() {
    return (
      <div className="categories-g">
          <div className="categories-c">
             <h2>Categories</h2> 
            <CategorieItem categories={this.state.categories}/>
          </div>
    
      </div>
    )
  }
}

export default Categories
