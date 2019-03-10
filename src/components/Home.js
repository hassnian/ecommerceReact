import React, { Component } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Main from './Main'

export class Home extends Component {
  render() {
    return (
      <div>
          <Navbar /> 
          <div className="container-g">
             <Header />  
          <Main />
          </div>
      </div>
    )
  }
}

export default Home
