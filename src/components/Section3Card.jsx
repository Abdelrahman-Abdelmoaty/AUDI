import React from 'react'
import "./Section_3.css"

export default function Section3Card(props) {
  return (
    <div className="section3Card">
        <img src={props.img} alt="" />
        <div className='section3CardContent'>
          <p>{props.p1}</p>
          <p>{props.p2}</p>
          <a href={props.a}>READ MORE</a>
        </div>
    </div>
  )
}
