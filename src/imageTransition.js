import React from "react";
import bugs from "./images/bugsjoke.png";
import code from "./images/code.png";
import code2 from "./images/code2.jpg";

const Transition = (props) => {
    const { imgindex, setimgindex } = props;
    const images = [code, code2, bugs];

    setInterval(function changeImage() {
        if (imgindex === images.length - 1) {
            setimgindex(0);
        } else {
            setimgindex(imgindex + 1);
        }
    }, 5000);

    

    return (
        <div className="display">
            <img className="ui float image" src={images[imgindex]} />
        </div>
    );
};
export default Transition;
