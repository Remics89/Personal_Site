import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

const App = () => {


    return (
        <div className="main">Personal Site</div>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)