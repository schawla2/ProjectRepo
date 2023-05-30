import React, { useState, useEffect } from 'react';
import axios from 'axios'


function ProductChecker (props) {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make an HTTP GET request to the Nike product page
        const response = await axios.get('https://www.nike.com/t/sportswear-tech-fleece-mens-full-zip-hoodie-5ZtTtk/CU4489-491');

        // Create a new DOM element to parse the HTML content
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(response.data, 'text/html');

        // Extract the sizes and availability status
        const sizeElements = htmlDoc.querySelectorAll('.product-size-grid input[type="radio"]');
        const sizes = Array.from(sizeElements).map((element) => element.getAttribute('data-displayname'));

        const availabilityElement = htmlDoc.querySelector('.product-info .product-info-title');
        const availability = availabilityElement ? availabilityElement.textContent : '';

        // Check if the desired size is available
        const desiredSize = 'M'; // Replace with your desired size
        setIsAvailable(sizes.includes(desiredSize) && availability.toLowerCase().includes('available'));
      } catch (error) {
        console.error('Error retrieving product information:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isAvailable ? (
        <p>The desired size is available!</p>
      ) : (
        <p>The desired size is not available yet.</p>
      )}
    </div>
  );
}

export default ProductChecker;



