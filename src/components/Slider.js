import React from "react";
import "./Slider.css"

const Slider = ({imageSrc,title,subtitle,flipped}) => {
    const renderContent =  () => {

        if(!flipped)
        {
            return (
            <>
            <img src= {imageSrc} alt="Travel" className="slider_image"/>
            <div className="slider_content">
                <h1 className="slider_title">{title}</h1>
                <p>{subtitle}</p>
            </div>  
            </>
            );
        } else {
            return (
            <>
            <div className="slider_content">
                <h1 className="slider_title">{title}</h1>
                <p>{subtitle}</p>
            </div>
            <img src= {imageSrc} alt="Travel" className="slider_image"/>
            
            </>
            );
        } 
    };

    return <div className="Slider"> {renderContent()} </div>;
};

export default Slider;