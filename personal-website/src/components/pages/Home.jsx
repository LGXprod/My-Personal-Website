import React from 'react';
import ReactDOM from 'react-dom';
import Panel from "../panels/Panel";
import Navbar from "./menu/Navbar";
import SlideShow from "../panels/SlideShow";

// import $ from 'jquery';

var skillPanels = [];

var markupPanel = { key: 0, skillGroup: "Markup Languages", assetType: "image", skills: [["HTML 5", require("../images/skills/markup/html5.png")], 
    ["CSS 3", require("../images/skills/markup/css3.png")], ["Bootstrap 4", require("../images/skills/markup/bootstrap.png")], ["FXML", 
    require("../images/skills/markup/fxml.png")]]};
skillPanels.push(markupPanel);

var programmingPanel = { key: 1, skillGroup: "Programming Languages", assetType: "image", skills: [["Javascript", require("../images/skills/programming/js.png")],
    ["Java", require("../images/skills/programming/java.png")], ["Python", require("../images/skills/programming/python.png")],
    ["MySQL", require("../images/skills/programming/sql.png")]] };
skillPanels.push(programmingPanel);

var jsTech = { key: 2, skillGroup: "Js Frameworks and Technologies", assetType: "image", skills: [["Node", require("../images/skills/js-tech/node.png")], ["", require("../images/skills/js-tech/express.png")],
    ["", require("../images/skills/js-tech/ejs.png")], ["React", require("../images/skills/js-tech/react.png")], ["Jquery", require("../images/skills/js-tech/jquery.png")]]};
skillPanels.push(jsTech);

var other = { key: 3, skillGroup: "Other", assetType: "image", skills: [["Unix commands", require("../images/skills/other/unix.png")], ["Git", require("../images/skills/other/git.png")]] };
skillPanels.push(other);

console.log(skillPanels);

function Home() {
    return (
        <div>
            <Navbar pagesActive={[true, false, false]} />
            <div style={{"position": "relative"}}>
                <SlideShow>
                    <Panel color="dark-blue" infoPanel={true} heading="Q Software" ytLink="https://www.youtube.com/embed/r6LxiygaTeI"
                        desc={["Formerly known as Ordinate, Q is a queuing tool for organisations with waiting rooms. The core feature of Q is that enables organisations to display the position of a customer in a list anonymously.", "This combined with an accurate, dynamic ETAs, which is generated from an algorithm using previous Q data, increases customer satisfaction and organisation efficency in a multitude of ways:", 
                        ["Patients are far less likely to get angry or stressed about the time they have waited as ETAs will eventually become more accurate than a receptionist's ETA. As well as the fact that they can see the position in the queue so they don't need to question whether a doctor has skipped them or if a receptionist has done something wrong.", 
                        "Patients can make a decision as to whether they have enough time to see a doctor with out speaking to a receptionist."],
                        "Furthermore, this web application works for organisations with pre-existing software solutions (e.g. BP for medical centres) but also for organisations with no queuing system already in place (through the use of our powerful adminstrative tools).", 
                        "Q uses some of the latest technologies on the back-end such as Node JS, Express, Bcrypt, AES in combination with a reliable and accessible MySQL DataBase. On the front-end we are using many modern tools including HTML 5, CSS 3, JS, JQuery and EJS."]}
                        // repoLink="https://github.com/LGXprod/Ordinate" repoName="Q Software Repository" 
                        addHr={false} setHeight="75vh"
                    />
                    <img className="slide-img" alt="Me playing footy" src={require("../images/slideshow/footy.JPG")} />
                </SlideShow>
                <hr />
                {/* <img className="prev" alt="Left arrow" src={require("../images/slideshow/leftArrow.png")} />
                <img className="next" alt="Right arrow" src={require("../images/slideshow/rightArrow.png")} /> */}
            </div>
            <Panel color="dark-green" heading="My Skill Set" skillPanels={skillPanels} />
        </div>
    );
}

export default Home;