import React, { Component } from 'react'
import Categories from './Categories'
import './Header.css'    



export class Header extends Component {
  render() {
    return (
      <div>
         <header>
            <Categories />

         </header>
      </div>
    )
  }
}

export default Header
