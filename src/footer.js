import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <div className="footer">
            <Link className="footlink" to={"https://github.com/Remics89"} target="_blank" ><i className="github icon"/></Link>
            <Link className="footlink" to={"mailto:Remics89@gmail.com"} target="_blank" ><i className="envelope icon"/></Link>
        </div>
    );
};

export default Footer;
