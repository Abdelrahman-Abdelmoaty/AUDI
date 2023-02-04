import React from 'react'
import "./Section_4.css"
import img1 from "../images/2019_audi_a8_sedan_l-30-tfsi-quattro_rq_oem_1_1600x1067.avif"

export default function Section_4() {
  return (
    <section className='section4'>
        <div>
            <img className='section4Img' src={img1} alt="" />
        </div>
        <div>
            <p>Audi A8 Interior design</p>
            <p>Because your presence lights up the room.</p>
            <p>The Audi A8 can save up to 400 different settings for up to seven different profiles on one Audi advanced key. This level of personalization helps make every drive a memorable one.</p>
        </div>
       
    </section>
  )
}
