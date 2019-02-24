import React, { Component } from 'react'
import Searchbar from './Searchbar'
import Cart from './Cart'
import './Navbar.css'



export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
            <div className="container">
              <div  className="navbar-center">
                <Searchbar />
                <Cart />

              </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
