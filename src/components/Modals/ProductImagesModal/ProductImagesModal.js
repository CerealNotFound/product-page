import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom"
import "../../styles/css/ProductImagesModal.css";

const ProductImagesModal = () => {

    const [selectedImage, setSelectedImage] = useState(1);

    useEffect(
        () => {
            if(document.querySelector(".modal-selected")) {
                document.querySelector(".modal-selected").classList.remove("modal-selected");
            }
            switch (selectedImage) {
                case 1:
                    document.querySelector("#product-modal-thumbnail-1").classList.add("modal-selected")
                    break;
                case 2:
                    document.querySelector("#product-modal-thumbnail-2").classList.add("modal-selected")
                    break;
                case 3:
                    document.querySelector("#product-modal-thumbnail-3").classList.add("modal-selected")
                    break;
                case 4:
                    document.querySelector("#product-modal-thumbnail-4").classList.add("modal-selected")
                    break;
                default:
                    break;
            }
        }, [selectedImage]
    )

    return ReactDOM.createPortal(
        <div id="product-image-modal">
            <div id="product-modal-images-wrapper">
                <div id="product-modal-image" className={`image-${selectedImage}`}></div>
                <div id="left-wrapper" onClick={() => {if(selectedImage !== 1) {setSelectedImage(selectedImage - 1)} else {setSelectedImage(4)}}}>
                    <svg id="left" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                </div>
                <div id="right-wrapper" onClick={() => {if(selectedImage !== 4) {setSelectedImage(selectedImage + 1)} else {setSelectedImage(1)}}}>
                    <svg id="right" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                </div>
                <div id="product-modal-thumbnail-wrapper">
                    <div id="product-modal-thumbnail-1" onClick={() => {
                        setSelectedImage(1); 
                    }}></div>
                    <div id="product-modal-thumbnail-2" onClick={() => {
                        setSelectedImage(2); 
                    }}></div>
                    <div id="product-modal-thumbnail-3" onClick={() => {
                        setSelectedImage(3); 
                    }}></div>
                    <div id="product-modal-thumbnail-4" onClick={() => {
                        setSelectedImage(4); 
                    }}></div>
                </div>
            </div>
        </div>, document.querySelector("#portal")
    )
}

export default ProductImagesModal;