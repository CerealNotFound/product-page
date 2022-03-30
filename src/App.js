import { React } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ProductInfo from './components/ProductInfo/ProductInfo';
import ProductImages from "./components/ProductImages/ProductImages";
import { NumberOfItems, ItemsInCart } from './components/Contexts';

const App = () => {

  return (
    <div className="App">
      <NumberOfItems.Provider value={null}>
        <ItemsInCart.Provider value={null}>
          <Navbar />
          <div id="home-page-wrapper">
            <ProductImages />
            <ProductInfo />
          </div>
        </ItemsInCart.Provider>
      </NumberOfItems.Provider>
    </div>
  );
}

export default App;
