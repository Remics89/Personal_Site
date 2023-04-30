import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Footer from "./footer";

const App = () => {
    return (
        <Fragment>
            <div className="header">
                <div className="title">Matthew Szekeres</div>
                <div className="title2">Junior Web Developer</div>
            </div>
            <div className="display">
                <img className="ui fluid image" src="/images/wireframe/image.png" />
            </div>
            <div className="main">
                <h3 class="ui header">Section One</h3>
                <div class="ui section divider"></div>
                <h3 class="ui header">Section Two</h3>
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
