import React from 'react'
import Card from './Card'

const productArray = [{target:"MAN", name: "magnifiseur", price: "€70.02"}, {target:"MAN", name: "magnifiseur", price: "€70.02"}, {target:"MAN", name: "magnifiseur", price: "€70.02"}, {target:"MAN", name: "magnifiseur", price: "€70.02"}, {target:"MAN", name: "magnifiseur", price: "€70.02"}]

export default function ProductList() {
    return (
        <div className="productListContainer">
            {productArray.map(product=>(<Card target={product.target} name={product.name} price={product.price}/>))}
            
        </div>
    )
}
