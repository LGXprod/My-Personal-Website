import React from "react";
import SkillPanel from "./subPanels/presentation/SkillPanel";
import InfoPanel from "./subPanels/InfoPanel";
import GitItem from "./subPanels/items/GitItem";

function Panel(props) {

    if (props.infoPanel) {

        return (
            <div className={"panel " + props.color}>
                <InfoPanel heading={props.heading} img={props.img} desc={props.desc} repoLink={props.repoLink} 
                    repoName={props.repoName} ytLink={props.ytLink} slideItems={props.slideItems}
                    skillPanels={props.skillPanels} skillDesc={props.skillDesc} color={props.color}
                    border={props.border}
                />
                { props.repoLink != null && props.repoName != null ? <GitItem repoName={props.repoName} repoLink={props.repoLink} /> : null }
            </div>
        );

    } else if (props.img != null) {

        // console.log(props.img);
        return <div className="panel"><img className="background-img" alt="Me programming" src={props.img}></img></div>;

    } else if (props.skillPanels != null) {
        return (
            <div className={"panel " + props.color}>
                <h1 className="heading">{props.heading}</h1>
                {addSkillPanels(props)}
            </div>
        );
    } 

}

function addSkillPanels(props) {
    // console.log(":)))");
    var i = 0;
    var panel;
    var skillPanels = [];
    var numPanels = props.skillPanels.length;

    if (props.skillPanels != null) {
        for (panel of props.skillPanels) {
            skillPanels.push(<SkillPanel key={i++} numPanels={numPanels} assetType={panel.assetType} heading={panel.skillGroup} skills={panel.skills} />);
        }
    }

    return skillPanels;
}

export default Panel;
export { addSkillPanels };