import React from 'react'
import {Carousel} from 'react-bootstrap'
import ImageA from './../images/productImage1500x500.jpeg'
import ImageB from './../images/productImage2500x500.jpeg'
import ImageC from './../images/productimage3.jpg'



export default function Carrousell() {
    return (
        <Carousel>
        <Carousel.Item>
            <img
            className="w-100"
            src={ImageA}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="w-100"
            src={ImageB}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="w-100"
            src={ImageC}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}
