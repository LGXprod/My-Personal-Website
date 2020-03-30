import React, {useState} from "react";
import Panel from "./Panel";

const galleryDot = {
    backgroundColor: "#bbe1fa",
    width: "0.75vw",
    height: "0.75vw",
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: "0.25vw",
    marginRight: "0.25vw"
}

const galleryNav = {
    position: "absolute",
    left: "48vw",
    bottom: "15px",
    zIndex: "1"
}

const slideShow = {
    display: "block",
    width: "100vw",
    height: "75vh",
    textAlign: "center",
    position: "relative"
}

function addDots(numSlides) {
    var dots = [];

    for (var i = 0; i < numSlides; i++) {
        dots.push(<div id={"dot" + i} style={galleryDot}></div>)
    }

    return <div id="nav-controls" style={galleryNav}>{dots}</div>;
}

function SlideShow(props) {
    var gallery = [];

    for (var slideNum in props.children) {
        gallery.push(<div key={slideNum} id={"slide" + slideNum} style={{"height": "75vh"}}>{props.children[slideNum]}</div>)
    }

    

    return (
        <div style={{"position": "relative"}}>
            <div style={slideShow} id="slideshow">
                {gallery}
            </div>
            <div style={{"position": "absolute", "bottom": "37.5%", "height": "25%"}}>
                <img style={{"height": "100%"}} alt="Left arrow" className="leftArrow" src={require("../images/slideshow/leftArrow.png")} />
            </div>
            <div style={{"position": "absolute", "bottom": "37.5%", "right": "0", "height": "25%"}}>
                <img style={{"height": "100%", "right": "0"}} alt="Right arrow" className="rightArrow" src={require("../images/slideshow/rightArrow.png")} />
            </div>
        </div>
    );
}

export default SlideShow;   