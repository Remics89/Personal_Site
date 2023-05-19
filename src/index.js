import React, { Fragment, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Footer from "./footer";
import Transition from "./imageTransition";

import fittrk from "./images/FITTRK.png";
import retro from "./images/Retro.png";

const App = () => {

    const [imgindex, setimgindex] = useState(0);

    return (
        <Fragment>
            <div className="header">
                <div className="title">Matthew Szekeres</div>
                <div className="title2">Junior Web Developer</div>
            </div>
            <Transition imgindex={imgindex} setimgindex={setimgindex} />
            <div className="main">
                <h3 className="ui header">Section One</h3>
                <div className="ui section divider"></div>
                <h3 className="ui header">Section Two</h3>
            </div>
            <Footer />
        </Fragment>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
