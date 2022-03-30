import React from "react";
import ReactDOM from "react-dom";

const NavbarModalMenu = () => {
    return ReactDOM.createPortal(<div id="menu-background"></div>, document.querySelector("#portal"))
}

export default NavbarModalMenu;