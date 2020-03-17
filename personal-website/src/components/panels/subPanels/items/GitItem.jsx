import React from "react";

function GitItem(props) {
    return (
        <div className="gitItem">
            <img className="gitHubLogo" src="https://i.ya-webdesign.com/images/github-icon-png-7.png" alt="GitHub logo"/>
            <a className="gitLink" href={props.repoLink}>{props.repoName}</a>
        </div>
    );
}

export default GitItem;