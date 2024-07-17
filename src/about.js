import React from "react";
import arma2 from "./images/a2script.jpg";

const AboutMe = () => {
    return (
        <div className="ui items">
            <div className="item">
            <img className="ui medium image" src={arma2} />
                <div className="middle aligned content">
                    <p>
                        Hello, My name is Matthew Szekeres. I am currently 34 and an Entry Level Web
                        Developer. For most of my adult life, I've had a love for computers and
                        technology. I've learned how to build them, interconnect them, and
                        troubleshoot.
                    </p>
                    <p>
                        When I was in my early 20s, as a personal project I played around with
                        starting a few game servers on my personal computer. I learned how to read
                        scripts and re-write them to produce my intended behavior.
                    </p>
                </div>
            </div>
            
            <div className="ui section divider"></div>

            <div className="item">
                <img className="ui medium image" src={arma2} />
                <p>
                    At the beginning of 2022, I decided to make a career change into software
                    development and chose to start with web development.
                </p>
                <p></p>
            </div>
        </div>
    );
};

export default AboutMe;
