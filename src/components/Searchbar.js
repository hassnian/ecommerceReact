import React, { Component } from 'react'
import icon from '../img/icon.png'
export class Searchbar extends Component {
  render() {
    return (
      <div>
        <input type="text" name="" id="" className="search-bar-bar"/>
        <img src={icon} alt="" className="search-logo"/>
        
      </div>
    )
  }
}

export default Searchbar
