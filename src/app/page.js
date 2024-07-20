import { Fragment } from "react";
import Projects from "./components/projects";
import Feature from "./components/feature";

export default function About () {
    return (
        <Fragment>
            <Feature/>
            <Projects/>
        </Fragment>
    )
}