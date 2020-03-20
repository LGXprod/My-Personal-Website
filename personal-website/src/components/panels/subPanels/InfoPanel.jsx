import React from "react";
import SlideShow from "../SlideShow";
import {addSkillPanels} from "../Panel";
import GitItem from "./items/GitItem";

function InfoPanel(props) {
    return (
        <div className="infoPanel">
            {addVisual(props)}
            <div className="info-text">
                <h1 className="heading">{props.heading}</h1>
                {addParagraphs(props.desc)}
                <ul>{addFeatures(props.features)}</ul>
                {/* {hasRepo(props.repoName, props.repoLink)} */}
            </div>
        </div>
    );
}

function addFeatures(features) {

    if (features != null) {

        var feature;
        var y = 0;
        var dotPoint = [];
        // console.log(features);

        for (feature of features) {
            dotPoint.push(<li key={y}>{feature}</li>);
            y++;
        }

        return dotPoint;

    } else {

        return null;

    }
    
}

function addVisual(props) {
    if (props.img != null) {
        const image = <img className="info-img" alt={props.alt} src={props.img} />;
        if (props.border != null) {
            return <img className="info-img gray-border" alt={props.alt} src={props.img} />;
        } else {
            return image;
        }
    } else if (props.ytLink != null) {
        var color;
        if (props.color === "dark-green") {
            color = "blue-border";
        } else if (props.color === "dark-blue") {
            color = "gray-border";
        }
        return <iframe className={"iFrame " + color} src={props.ytLink} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
    } else if (props.slideItems != null) {
        return <SlideShow slideItems={props.slideItems} />
    } else if (props.skillPanels != null) {
        return (
            <div className="skill-section">
                {addSkillPanels(props)}
                <h3 className="skill-text">{props.skillDesc}</h3>
            </div>
        );
    }
}

function hasRepo(repoName, repoLink) {
    if (repoName != null && repoLink != null) {
        return <GitItem repoName={repoName} repoLink={repoLink} />;
    } else {
        return null;
    }
}

function addParagraphs(paragraphs) {
    
    if (paragraphs != null) {
        var paragraph;
        var pTags = [];
        var y = 1;

        for (paragraph of paragraphs) {
            if (typeof paragraph === "object") {
                pTags.push(<div className="adjacent"><ul key={y}>{addFeatures(paragraph)}</ul></div>);
            } else {
                pTags.push(<div><p key={y} className="info-paragraph">{paragraph}</p></div>);
            }
            y++;
        }

        return pTags;
    } else {
        return null;
    }
}

export default InfoPanel;