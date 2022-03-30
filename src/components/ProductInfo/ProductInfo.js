import { React, useState } from "react";
import "../../styles/css/ProductInfo.css";
import { NumberOfItems, ItemsInCart } from '../Contexts';
import CartModal from "../Modals/CartModal/CartModal";
const ProductInfo = () => {
    
    const [numberOfProducts, setNumberOfProducts] = useState(1);
    const [cartIsOpen, setCartIsOpen] = useState(false)

    const ProductInfo = [{
        name: "Fall Limited Edition Sneakers",
        price: 125.00
    }]

    return(
        <div id="product-info-wrapper">
            <div id="product-heading">
                <h5>SNEAKER COMPANY</h5>
                <h1 id="product-title">Fall Limited Edition Sneakers</h1>
            </div>
            <div id="product-info">
                <div id="info-paragraph">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</div>
                <div id="pricing">            
                    <span><h2>$</h2></span><h2 id="actual-price">125.00</h2>
                    <div id="discount">50%</div>
                </div>
                <div id="price">$250.00</div>
            </div>
            <div id="product-quantity-cart-wrapper">
                <div id="product-quantity">
                    <svg id="minus" onClick={() => {if (numberOfProducts !== 1) {setNumberOfProducts(numberOfProducts - 1)}}} viewBox="0 0 12 4" xmlns="http://www.w3.org/2000/svg"><defs><path id="a" d="M11.357 3.332A.641.641 0 0012 2.69V.643A.641.641 0 0011.357 0H.643A.641.641 0 000 .643v2.046c0 .357.287.643.643.643h10.714z"/></defs><path d="M11.357 3.332A.641.641 0 0012 2.69V.643A.641.641 0 0011.357 0H.643A.641.641 0 000 .643v2.046c0 .357.287.643.643.643h10.714z" fill="#FF7E1B"/></svg>
                    <div id="products-number">{numberOfProducts}</div>
                    <svg id="plus" onClick={() => {setNumberOfProducts(numberOfProducts + 1)}} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><defs><path id="a" d="M12 7.023V4.977a.641.641 0 00-.643-.643h-3.69V.643A.641.641 0 007.022 0H4.977a.641.641 0 00-.643.643v3.69H.643A.641.641 0 000 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 00.643-.643v-3.69h3.691A.641.641 0 0012 7.022z"/></defs><path d="M12 7.023V4.977a.641.641 0 00-.643-.643h-3.69V.643A.641.641 0 007.022 0H4.977a.641.641 0 00-.643.643v3.69H.643A.641.641 0 000 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 00.643-.643v-3.69h3.691A.641.641 0 0012 7.022z" fill="#FF7E1B"/></svg>
                </div>
                    <div id="cart-wrapper" onClick={() => {
                        if(!ItemsInCart.items) {
                            ItemsInCart.items = ProductInfo
                        }
                        if(!NumberOfItems.number) {
                            NumberOfItems.number = numberOfProducts
                        } else if(NumberOfItems.number) {
                            NumberOfItems.number += numberOfProducts
                        }
                        
                        setCartIsOpen(true)
                    }}>
                        <svg id="cart-icon" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 002.717 0H.897a.896.896 0 100 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 002.717-2.717 2.72 2.72 0 00-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 00.817-.677l1.821-7.283a.897.897 0 00-.87-1.114zM6.358 18.208a.926.926 0 010-1.85.926.926 0 010 1.85zm10.015 0a.926.926 0 010-1.85.926.926 0 010 1.85zm2.021-7.243l-13.8.81-.57-6.341h15.753l-1.383 5.53z" fill="#ffffff"/></svg>
                        <div id="cart-button">Add to cart</div>
                    </div>
                </div>
                {cartIsOpen && <CartModal />}
                {cartIsOpen && <div id="blackscreen" onClick={() => {
                    setCartIsOpen(false)
                }}></div>}
        </div>
    )
}

export default ProductInfo;