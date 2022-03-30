import { React, useState } from "react";
import "../../styles/css/Navbar.css"
import NavbarModalMenu from "../Modals/NavbarModalMenu";
import CartModal from "../Modals/CartModal/CartModal";
const Navbar = () => {

    const [isActive, setIsAction] = useState(false);
    const [cartIsOpen, setCartIsOpen] = useState(false)

    return(
        <nav> 
            <ul id="nav-main-wrapper">
                <div id="logo-links__wrapper">
                    {isActive && <NavbarModalMenu />}
                    <div id={isActive ? "menu-wrapper" :  "menu-wrapper-hidden"}>
                        <div id="menu">
                            <svg id="cross" onClick={() => {setIsAction(!isActive)}} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/></svg>
                            <div><a href="this">Collections</a></div>
                            <div><a href="this">Men</a></div>
                            <div><a href="this">Women</a></div>
                            <div><a href="this">About</a></div>
                            <div><a href="this">Contact</a></div>
                        </div>
                    </div>
                    <svg onClick={() => {setIsAction(!isActive)}} id="hamburger" width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd"/></svg>
                    <li id="logo"></li>
                    <li className="nav__links"><a href="this">Collections</a></li>
                    <li className="nav__links"><a href="this">Men</a></li>
                    <li className="nav__links"><a href="this">Women</a></li>
                    <li className="nav__links"><a href="this">About</a></li>
                    <li className="nav__links"><a href="this">Contact</a></li>
                </div>
                <div id="cart-avatar__wrapper">
                    <li><svg onClick={() => {
                            setCartIsOpen(true)
                        }} width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/></svg></li>
                    <div id="placeholderdiv"></div>
                    <li><div id="avatar"></div></li>
                </div>
                {cartIsOpen && <div id="blackscreen" onClick={() => {
                    setCartIsOpen(false)
                }}></div>}
                {cartIsOpen && <CartModal />}
            </ul>
        </nav>
    )
}

export default Navbar;