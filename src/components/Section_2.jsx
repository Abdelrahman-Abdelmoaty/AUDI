import React from 'react'
import "./Section_2.css"
import img2 from "../images/1.png"
import img1 from "../images/50.jpg"

export default function Section_2() {
  return (
    <section className='section2'>  
        <div className='content'>
           <div>
            <p>As leaders in the illumination arts, our designs are hard to ignore.</p>
            <p>We have a history of taking lighting to new dimensions. In the all-new Audi A8, the sculptural shapes of the headlights and taillights elicit a closer look.</p>
            </div>
            <button>READ MORE</button>
        </div>
        <div>
            <img src={img1} alt="" />
        </div>
    </section>
    )
}
