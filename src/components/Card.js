import React from 'react'
import ImageA from './../images/productImage1500x500.jpeg'


export default function Card() {
    return (
        <div className="cardContainer">
            <img
            className="w-100"
            src={ImageA}
            alt="First slide"
            ></img>
            
        </div>
    )
}
