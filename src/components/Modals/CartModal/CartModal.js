import { React, useReducer } from "react";
import ReactDOM from "react-dom";
import { NumberOfItems, ItemsInCart } from "../../Contexts";
import "../../styles/css/CartModal.css";

const CartModal = () => {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    return ReactDOM.createPortal(
                <div id="cart-wrapper-modal">
                    <h4 id="cart-heading">Cart</h4>
                      {ItemsInCart.items ?
                        <div>
                        <div id={"cart-modal-main-wrapper"}> 
                            <div id={"cart-modal-thumbnail-main"}>
                                <div id={"product-modal-thumbnail"}></div>
                                <div id={"main-info"}>
                                        <div id="product-name">{ItemsInCart.items[0].name}</div>
                                        <div id="cart-price">${ItemsInCart.items[0].price} x {NumberOfItems.number}<span id="total-price">${ItemsInCart.items[0].price * NumberOfItems.number}</span></div>
                                </div>
                            </div>
                            <svg onClick={() => {
                                delete ItemsInCart.items
                                forceUpdate();
                                NumberOfItems.number = 0
                            }} id="delete-button" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg"><defs><path id="a" d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 015.213 0h3.571a.75.75 0 01.672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 01-.375.375H.375A.376.376 0 010 2.625zm13 1.75V14.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 011 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375zM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7z"/></defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 015.213 0h3.571a.75.75 0 01.672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 01-.375.375H.375A.376.376 0 010 2.625zm13 1.75V14.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 011 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375zM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7z" fill="#C3CAD9"/></svg>
                        </div> 
                        <div id={"checkout-button"}>Checkout</div>
                    </div>
                    :
                    <div>
                        <div id="empty-cart-modal">
                            <h4>Your cart is empty.</h4>
                        </div>
                    </div>}
        </div>, document.querySelector("#portal")
    )
}

export default CartModal;