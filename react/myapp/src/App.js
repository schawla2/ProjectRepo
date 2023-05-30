import logo from './logo.svg';
import './App.css';
import ProductChecker from './ProductChecker.js';

function App() {
  const productUrl = 'https://www.nike.com/t/sportswear-tech-fleece-mens-full-zip-hoodie-5ZtTtk/CU4489-491'; // Replace with the URL of the Nike product you want to monitor

  return (
    <div>
      <h1>Product Availability Checker</h1>
      <ProductChecker productUrl={productUrl} />
    </div>
  );
}

export default App;
