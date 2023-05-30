import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductChecker(props) {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const checkAvailability = async () => {
      try {
        // Make an HTTP GET request to your proxy server
        const response = await axios.get('/api/product');

        // Check if the product is available
        const isProductAvailable = response.data.includes('Currently unavailable.');
        setIsAvailable(!isProductAvailable);
      } catch (error) {
        console.error('Error retrieving product information:', error);
      }
    };

    // Poll for availability every 5 seconds
    const interval = setInterval(checkAvailability, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {isAvailable ? (
        <p>The product is available!</p>
      ) : (
        <p>The product is currently unavailable.</p>
      )}
    </div>
  );
}

export default ProductChecker;