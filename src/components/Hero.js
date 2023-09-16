import React from "react";
import "./Hero.css"
// import photo1 from "./../assests/photo1.png"

const Hero = ({imageSrc}) => {
    return <div className = "hero">
        <img src={imageSrc} alt="Travel" className="hero_image"/>
        <h1 className="hero_title"> Parking made simple. </h1>
    </div>;
    
};

export default Hero