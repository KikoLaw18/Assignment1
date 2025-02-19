import React from "react";
import whiteLogo from "./img/whitelogo.png";

function Footer() {
    return (
        <footer className="bg-amber-950 h-80 flex flex-col items-center justify-center">
            <img src={whiteLogo} className="w-20 content-center" alt="Logo" />
            <ul className="text-center">
                <li className="text-white"><b>Phone Number</b></li>
                <li>+1 236 778 9890</li>
                <br></br>
                <li><b>Location</b></li>
                <li>2554 seymour st, Vancouver, BC</li>
            </ul>
        </footer>
    );
}

export default Footer;