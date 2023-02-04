import React from 'react'
import "./Section_3.css"
import img1 from "../images/7.jpeg"
import $ from "jquery"
import img2 from "../images/9.jpeg"
import img3 from "../images/3.jpeg"
import img4 from "../images/2019-Audi-A8-L-52.avif"
import Section3Card from './Section3Card'


export default function Section_3() {
        
    const data = [
        {
            id: "1",
            img: img2,
            p1: "Audi A8 Exterior lighting",
            p2: "As leaders in the illumination arts, our designs are hard to ignore.",
            a: "#"
        },
        {
            id: "2",
            img: img3,
            p1: "LED taillights with dynamic turn signals",
            p2: "Standard LED taillights are shaped to appear three-dimensional. When the turn signal is activated.",
            a: "#"
        },
        {
            id: "3",
            img: img4,
            p1: "HD Matrix-design LED headlights",
            p2: "The available HD Matrix-design LED headlights include daytime running lights.",
            a: "#"
        }
    ]

    return (
    <section className='section3'>
        <div className="section3Container">
           <div>
                <p>Audi A8 Exterior lighting</p>
                <p>As leaders in the illumination arts, our designs are hard to ignore.</p>
                <p>In the all-new Audi A8, the sculptural shapes of the headlights and taillights elicit a closer look.</p>
                <button>READ MORE</button>
            </div>
            <div> 
                <img src={img1} alt="" />
            </div>
        </div>
        <div className='section3CardsContainer'>
            {data.map((item)=>{
              return(  <Section3Card key={item.id} img={item.img}  p1={item.p1} p2={item.p2} a={item.a}/>
              )
            })}
        </div>
    </section>
  )
}
