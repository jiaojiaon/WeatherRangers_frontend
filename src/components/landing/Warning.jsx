import React from "react";

import "../../styles/Warning.css";

function Warning() {
    return (
        <div className="Warning">
            <h2> Location Not Found!!! </h2>
            <p>Try city/town and state/country</p>
            <p> Ex: Harare, Zimbabwe</p>
            <p> Ex: New York, NY  </p>
        </div>
    );
}

export default Warning;