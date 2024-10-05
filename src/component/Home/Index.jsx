import React from "react";
import Slider from "./Slider.jsx";
import Finance_ac from "./Finance_ac.jsx";
import About from "./About.jsx";
import Scheme from "./Scheme.jsx";
import Safe_Services from "./Safe_Services.jsx";
import Award_Sec from "./Award_Sec.jsx";
import Card from "./Card.jsx";

export default function Index(){
    return(
        <>        
            <Slider></Slider>            
            <Finance_ac></Finance_ac>            
            <About></About>            
            <Scheme></Scheme>            
            <Safe_Services></Safe_Services>            
            <Award_Sec></Award_Sec>            
            <Card></Card>            
        </>
    )
}