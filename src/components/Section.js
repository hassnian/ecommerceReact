import React from 'react'

export default function Section(props) {
  const sectionList=props.sections.map(section=>{
      return (
          <h1>{section.title}</h1>
      )
  })
  return (
    <div>
      {sectionList}
    </div>
  )
}
