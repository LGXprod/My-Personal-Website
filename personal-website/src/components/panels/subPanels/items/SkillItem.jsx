import React from "react";

function addAssets(props) {
    // console.log("Asset type = " + props.assetType)
    if (props.assetType === "image") {
        if (props.name === "") {
            return <img className="skill-img center" src={props.asset} alt="Skill Image" />;
        } else {
            return (
                <div>
                    <img className="skill-img" src={props.asset} alt="Skill Image" />
                    <h3 className="skill-text">{props.name}</h3>
                </div>
            );
        }
    } else if (props.assetType === "text") {
        return (
            <div>
                <h3 className="skill-text">{props.name}</h3>
            </div>
        );
    }
    
}

function SkillItem(props) {
    return <div className="skillItem">{addAssets(props)}</div>;
}

export default SkillItem;