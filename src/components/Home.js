import React, { Component } from 'react'
import Navbar from './Navbar'
import Header from './Header'

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar /> 
          <div className="container-g">
             <Header />

          </div>
      </div>
    )
  }
}

export default Home
