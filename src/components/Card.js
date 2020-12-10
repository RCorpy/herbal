import React from 'react'
import ImageA from './../images/productImage1500x500.jpeg'


export default function Card({target, name, price}) {
    return (
        <div className="cardContainer">
            <img
            className="w-100"
            src={ImageA}
            alt="First slide"
            ></img>
            <div className="targetCard">{target}</div>
            <div className="nameCard">{name}</div>
            <div className="priceCard">{price}</div>
        </div>
    )
}
