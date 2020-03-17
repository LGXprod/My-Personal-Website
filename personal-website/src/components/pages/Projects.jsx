import React from "react";
import ReactDom from "react-dom";
import Panel from "../panels/Panel";
import Navbar from "./menu/Navbar";

function Projects() {
    return (
        <div>
            <Navbar pagesActive={[false, false, true]} />
            <hr />
            <Panel color="dark-blue" infoPanel={true} heading="Q Software"
                desc={["Formerly known as Ordinate, Q is a queuing tool for organisations with waiting rooms. The core feature of Q is that enables organisations to display the position of a customer in a list anonymously.", "This combined with an accurate, dynamic ETAs, which is generated from an algorithm using previous Q data, increases customer satisfaction and organisation efficency in a multitude of ways:", 
                ["Patients are far less likely to get angry or stressed about the time they have waited as ETAs will eventually become more accurate than a receptionist's ETA. As well as the fact that they can see the position in the queue so they don't need to question whether a doctor has skipped them or if a receptionist has done something wrong.", 
                "Patients can make a decision as to whether they have enough time to see a doctor with out speaking to a receptionist."],
                "Furthermore, this web application works for organisations with pre-existing software solutions (e.g. BP for medical centres) but also for organisations with no queuing system already in place (through the use of our powerful adminstrative tools).", 
                "Q uses some of the latest technologies on the back-end such as Node JS, Express, Bcrypt, AES in combination with a reliable and accessible MySQL DataBase. On the front-end we are using many modern tools including HTML 5, CSS 3, JS, JQuery and EJS."]}
                repoLink="https://github.com/LGXprod/Ordinate" repoName="Q Software Repository"
                ytLink="https://www.youtube.com/embed/r6LxiygaTeI"
            />
            <hr />
            <Panel infoPanel={true} color="dark-green" heading="PC Store Application" 
                img={require("../images/projects/pc-store/overview.png")}
                desc={["This PC store application was an assignment given to me at university. Below is part of the specification given for part 1 of the assignment:",
                "The system should keep a catalogue of available parts, which can be displayed to the user, updated and filtered by type or price (or both). The system should also allow the user to build a computer (more accurately a parts list) from parts in the catalogue, add and remove parts from the build, clear the build, and see the build (including the total cost). The interface for the prototype will be a simple text interface, where parts are identified by their position in the catalogue/build. As an advanced feature, your friend would like the user to be able to add several parts in one go. Your friend has provided you with a nicely typed out text demonstration of how the system should work, along with some tests (... yet did not just code it...) to help.",
                "To summarise it was a tool built for computer parts businesses designed to enable a salesperson to sell, restock, add new products, remove old products and search for items by name, type and price.",
                "The language used to develop this application was Java and the GUI was created used a standard library (JavaFx) and FXML. Moveover, this was the first time I had used the MVC architecture as it was required for part 2 of the assignment.",
                "Overall I achieved 98% for the assignment and the 2% I lost was from not properly binding data from the controller to the view."]}
                repoName="PC Store App Repository" repoLink="https://github.com/LGXprod/PC-Store-App"
            />
            <hr />
            <Panel infoPanel={true} color="dark-blue" heading="My Personal Website" ytLink="http://localhost:3000" 
                desc={["This was my first attempt at designing and coding a purely front-end website. I started by opening up photoshop and creating a prototype of the front page of the website. I did this by simply using the rectangle tool (to simulate divs) and rulers for alignment and padding. I did add text but wasn't to concerned with font choices as I was going to let bootstrap handle that.",
                "Once the prototype of the front page was completed I jumped straight into coding it. At the time I was learning the React framework and so I decided I would use it as I foresore me using combinations of different elements repeatedly (Panels, SkillPanels, GitElements). And as a consequence my website would become a SPA.",
                "There was a bit of a learning curve at times as there a few major differences between pure HTML5/CSS3/JS websites and react. For example, linking between pages requires a react module called 'React Router' and event handling requires managing 'state' (in older versions binding) as opposed to using dom/jQuery event handlers. In my opinion these set backs are worth it in favour for what I mentioned previously and its nothing reading docs and googling a problem can't fix.",
                "In hindsight this was a very good decision because despite React being overkill for this project at some points, I know understand how to use it and will be considering it for many future web projects."]}
                repoName="This Website's Repository" repoLink="https://github.com/LGXprod/My-Personal-Website"
            />
            <hr />
            <Panel color="dark-green" infoPanel={true} img={require("../images/projects/node-cleaner.png")}
                desc={["NodeJS code can often become messy and not compliant with the many, widely accepted standards. Especially in fast pace work environments as developing features is the first priority Node-cleaner is a python program that runs inside a terminal which allows node developers to quickly format all their code in several different ways.", " Furthermore, this allows some developers to ditch using/learning large IDEs or installing plugin after plugin into their text editor/IDE. At this time, the main formatting features included in Node Cleaner are the following:",
                ["Adding semicolons to the end of lines that should have them", "Adding line breaks at the end of lines where appropriate", 
                "Adding a space between () and braces where necessary (e.g. if statements, functions, loops)"],
                "The reason I am developing this program is because I was very busy learning full-stack web development and coding my own projects. I would spend hours per day doing this and didn't want to waste time finding and learning IDE specific plugins to format my code. Instead I thought I would create a CLI program that would do this formatting in the exact way I would want it to.",
                "Node Cleaner is a purely python written program and utilises a functional and modular approach."]}
                alt="Image of Node cleaner project" heading="Node Cleaner"
                repoLink="https://github.com/LGXprod/Node-cleaner" repoName="Node Cleaner Repository"
            />
        </div>
    );
}

export default Projects;