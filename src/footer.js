import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

const Footer = () => {
    const [value, setValue] = useState(0);

    return (
        <div className="ui three item menu">
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => setValue(newValue)}>
                <BottomNavigationAction label="Github" icon={<GitHubIcon />} />
                <BottomNavigationAction label="Email" icon={<EmailIcon />} />
            </BottomNavigation>
        </div>
    );
};

export default Footer;
