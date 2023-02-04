import React from "react";
import $ from "jquery";
import { useRef } from "react";
import "./Section_1.css"
import img1 from "../images/2.png"
const Section_1 = ()=>{
    const ref = useRef()
    if($(document).width() > 1200){
        window.addEventListener("scroll", ()=>{
            if(ref.current.getBoundingClientRect().top < 500 && ref.current.getBoundingClientRect().top > -150){
                $(".img").css("transform", "translateX(0)")
                $(".section1Container").css("transform", "translateX(50vw)")
    
            } 
            if(ref.current.getBoundingClientRect().top > 500 || ref.current.getBoundingClientRect().top < -500 ){
                $(".img").css("transform", "translateX(100vw)")
                $(".section1Container").css("transform", "translateX(100vw)")


            }  
        })
    }
    return (
        <section ref={ref} className="section1">
            <img className="img" src={img1}  alt="" />
            <div  className="section1Container">
                <h3>The all-new 2019 Audi A8</h3>
                <h2>Luxury found the vehicle it deserves.</h2>
                <p>Starting at $83,800</p>
            </div>
            </section>
        )
    }
export default Section_1;
