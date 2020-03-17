import React from "react";
import SkillItem from "../items/SkillItem";

function SkillPanel(props) {

    var skill;
    var x = 1;
    var elements = [<h2 key={0} className="heading">{props.heading}</h2>]

    for (skill of props.skills) {
        
        // console.log(skill);
        elements.push(<SkillItem key={x} assetType={props.assetType} asset={skill[1]} name={skill[0]} />);
        x++;

    }   

    return <div className={"skillPanel" + props.numPanels}>{elements}</div>;

}

export default SkillPanel;