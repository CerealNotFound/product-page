import { React, useState, useEffect } from "react";
import ProductImagesModal from "../Modals/ProductImagesModal/ProductImagesModal";
import "../../styles/css/ProductImages.css";

const ProductImages = () => {

    const [selectedImage, setSelectedImage] = useState(1);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(
        () => {
            if(document.querySelector(".selected")) {
                document.querySelector(".selected").classList.remove("selected");
            }
            switch (selectedImage) {
                case 1:
                    document.querySelector("#product-thumbnail-1").classList.add("selected")
                    break;
                case 2:
                    document.querySelector("#product-thumbnail-2").classList.add("selected")
                    break;
                case 3:
                    document.querySelector("#product-thumbnail-3").classList.add("selected")
                    break;
                case 4:
                    document.querySelector("#product-thumbnail-4").classList.add("selected")
                    break;
                default:
                    break;
            }
        }, [selectedImage]
    )

    const width = window.innerWidth;

    return (
        <div id="product-images-wrapper">
            <div onClick={() => {setModalIsOpen(!modalIsOpen)}} id="product-image" className={`image-${selectedImage}`}></div>
            <div id={modalIsOpen ? "product-modal-image" : "none"}>
                <svg id="close" onClick={() => {setModalIsOpen(!modalIsOpen)}} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd"/></svg>
                {modalIsOpen && width > 768 && <ProductImagesModal />}
            </div>
            {width < 768 ?<>
                <div id="left-wrapper" onClick={() => {if(selectedImage !== 1) {setSelectedImage(selectedImage - 1)} else {setSelectedImage(4)}}}>
                    <svg id="left" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </div>
                <div id="right-wrapper" onClick={() => {if(selectedImage !== 4) {setSelectedImage(selectedImage + 1)} else {setSelectedImage(1)}}}>
                    <svg id="right" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                </div>
            </> : null}
            <div id="product-thumbnail-wrapper">
                <div id="product-thumbnail-1" onClick={() => {
                    setSelectedImage(1); 
                }}></div>
                <div id="product-thumbnail-2" onClick={() => {
                    setSelectedImage(2); 
                }}></div>
                <div id="product-thumbnail-3" onClick={() => {
                    setSelectedImage(3); 
                }}></div>
                <div id="product-thumbnail-4" style={{marginRight: 0}} onClick={() => {
                    setSelectedImage(4); 
                }}></div>
            </div>
        </div>
    )
}

export default ProductImages;