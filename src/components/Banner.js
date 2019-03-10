import React from 'react'

export default function Banner(props) {
    const grid={
        display:"grid",
    gridTemplateColumn:"200px 200px",
    gridTemplateRows:"300px 200px",
    gridColumn:"2/3",
    gridRow:"1/2",
    }
    const bannersList=props.banners.map(banner=>{
        const style={
            height:banner.height,
            width:banner.width,
            background:`url("${banner.img}")`,
            gridColumn:banner.column,
            gridRow:banner.row,
            backgroundSize:"contain",
            
        }
        return(
            <div style={style}></div>
        )
    })
    
  return (
    <div style={grid}>
        {bannersList}
    </div>
  )
}
