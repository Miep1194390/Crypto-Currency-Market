import React, { useState, useEffect } from "react";
import '../BitcoinPrice.css'

const BitcoinPrice = () => {
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("https://blockchain.info/ticker")
        .then((res) => res.json())
        .then((data) => {        
          setPrice(data.USD.last); 
          setLoading(false);       
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return (
      <div className="btc">
          <h1>Bitcoin</h1>
        <span className="btc-price">
          {loading ? "LOADING" : "$" + price}
        </span>      
      </div>
    );
  };



export default BitcoinPrice;