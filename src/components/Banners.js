import React, { Component } from 'react'
import Banner from './Banner'
export class Banners extends Component {
     style={
        backgroundColor:"red",
        
        marginTop:"20px"
    }
    state={
        banners:[
            {
            height:"300px",
            width:"500px",
            img:"https://www.creativegaga.com/wp-content/uploads/2017/05/Best-Offers-In-Ecommerce.jpg",
            column:"1/2",
            row:"1/2",
        },
            {
            height:"200px",
            width:"200px",
            img:"https://img.alicdn.com/tfs/TB1FH2UIMHqK1RjSZFgXXa7JXXa-300-320.png_.webp",
            column:"2/3",
            row:"1/3",
        },
            {
            height:"200px",
            width:"500px",
            img:"https://img.alicdn.com/tfs/TB1j001JkvoK1RjSZFwXXciCFXa-990-400.jpg_q80.jpg_.webp",
            column:"1/2",
            row:"2/3",
        },
        ]
        
    
}
        
  render() {
    return (
      <div style={this.style}>
        <Banner banners={this.state.banners}/>
      </div>
    )
  }
}

export default Banners
