import React from 'react';
function Loader({fullPageLoader}) {
    return (
        <div className={"loader-container position-fixed full-width flex " + ((fullPageLoader && "fullPageLoader") || "")}>
            <div className="loader"></div>
        </div>
    )
}

export default Loader
