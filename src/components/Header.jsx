import React from "react";
import logo from "../images/logo.png"
import "./Header.css"
import video from "../images/2019-Audi-A8-s1-model-intro-01-vid-desktop-v2.mp4"


function Header(){
        return(
        <header className="header" >
            <video className="headerVideo" loop autoPlay muted> 
                <source  src={video}type="video/mp4"/>
            </video>
            
            <div className="headerContent" >
                <div className="logoContainer">
                    <a href="#" target={"_blank"}><img className="logo" src={logo} alt="" /></a>

                </div>
                
                <p className="headerP">AUDI A8 2019</p>
                <h1 className="headerH1">Meant to <br /> Cause a Seen.</h1>
            </div> 
                
        </header>
    )
}
export default Header;