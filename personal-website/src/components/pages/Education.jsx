import React from "react";
import Panel from "../panels/Panel";
import Navbar from "./menu/Navbar";

const skillPanels = [];

skillPanels.push({key: "1", skillGroup: "High Distinctions", assetType: "text", skills: [["Programming Fundamentals", "HD"], ["Applications Programming", "HD"]]});
skillPanels.push({key: "1", skillGroup: "Distinctions", assetType: "text", skills: [["Database Fundamentals", "D"], ["Mathematical Modelling 2", "D"], ["Engineering Communications", "D"]]});

function Education() {
    return (
        <div>
            <Navbar pagesActive={[false, true, false]} />
            <hr />
            <Panel infoPanel={true} heading="Bachelor of Engineering (Software) (Hons) and Bachelor of Business at UTS" color="dark-blue"
                skillPanels={skillPanels}
                desc={["This combined degree is offered jointly by the Faculty of Engineering and Information Technology and the UTS Business School. It allows students to complete the core and major components of both the engineering and business degrees, producing engineers with skills in commercialisation of technology innovation and business graduates with professional-level competency in technology use.", "I am currently in my second year of university and am undertaking the following subjects this year:", ["Semester 1:", "Data Structures and Algorithms", "Software Engineering Studio 1A", "Fundamentals of Business Finance", "Physical Modelling", "Engineering Practice Preparation 1"], ["Semester 2:", "Software Architecture", "Marketing Foundations", "Software Engineering Studo 1B", "Design and Innovation Fundamentals"], "Next year at university I am hoping to pick up the Data Analytics elective block as I am interested in how computation can be used to transform data into useful information. Moreover, it this elective block contains machine learning courses which I am interested in for the same reason mentioned previously."]}
                skillDesc="A high distinction is a mark that ranges between 85% and 100% (inclusive) and a distinction is a mark that ranges between 74% and 85% (exclusive)."
            />
            <hr />
            <Panel infoPanel={true} color="dark-green" ytLink="https://www.youtube.com/embed/gYVwah-Plmo" 
                heading="The Complete 2020 Web Development Bootcamp by Angela Yu"
                desc={["During my summer break (2019-2020) I decided that I wanted to learn full-stack web development as its a versatile set of technologies to learn. This is because it affords me the ability to create applications that are access through a browser over the internet but also to develop desktop applications (through the use of frameworks such as electron). I learned the MERN stack and so I am confident in developing full-stack web apps but am still learning dev-ops (not in terms of git but in terms of deploying and hosting). However, I learned other technologies, frameworks and their pre-requisites as well which include:", ["HTML 5", "CSS 3", "JS ES6"], ["jQuery", "EJS", "REST"], "I have learned and continue to learn a lot from this web development course and it has enabled me to build a project I am very passionate about (Q).", "Angela has taught me the importance of reading a technology's documentation which has increased my develop speed dramatically. Moreover, she links to an expensive list of resources from plugins for VS code to color theme websites to popular docs such as MDN."]}
            />
        </div>
    );
}

export default Education;