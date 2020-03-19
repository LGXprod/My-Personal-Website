import React from "react";

function Navbar(props) {

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark dark-green stuck">
                <a className="navbar-brand" href="/">MG</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <a className={ props.pagesActive[0] ? "nav-item nav-link active" : "nav-item nav-link" } href="/Personal-Website/#/">Home <span className="sr-only">(current)</span></a>
                        <a className={ props.pagesActive[1] ? "nav-item nav-link active" : "nav-item nav-link" } href="/Personal-Website/#/Education">Education</a>
                        <a className={ props.pagesActive[2] ? "nav-item nav-link active" : "nav-item nav-link" } href="/Personal-Website/#/Projects">Projects</a>
                    </div>
                </div>
            </nav>
            <hr />
        </div>
    );
    
}

export default Navbar;