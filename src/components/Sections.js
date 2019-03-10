import React, { Component } from 'react'
import Section from './Section'
export class Sections extends Component {
  state={
    sections:[
      {
        title:"Featured products",
      },
      {
        title:"Trending products",
      }
    ]
  }
  render() {
    return (
      <div>
        <Section sections={this.state.sections}/>
      </div>
    )
  }
}

export default Sections
