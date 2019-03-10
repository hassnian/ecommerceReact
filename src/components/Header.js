import React, { Component } from 'react'
import Categories from './Categories'
import Banners from './Banners'
import './Header.css'    



export class Header extends Component {
  render() {
    return (
      <div>
         <header>
            <Categories />
            <Banners />
         </header>
      </div>
    )
  }
}

export default Header
