import React from "react";
import logo from '../images/logo.png'
import ProfileButton from './ProfileButton'
import { BsSearch } from 'react-icons/bs'

export default function MyNavBar() {
  return (
    
      <div className="NavbarClass">
        <div className="logoClass">
          <img
            alt=""
            src={logo}
            className="d-inline-block align-top"
          />{" "}
        </div>
        <div className="leftNavPart">
            <div className="leftPartButton">HOME</div>
            <div className="leftPartButton">SHOP</div>
            <div className="leftPartButton">CART</div>
            <div className="leftPartButton">CHECKOUT</div>
        </div>
        <div className="rightNavPart"> 
            <ProfileButton />
            <div className="rightPartButton"><BsSearch size={30}/></div>
            <div className="rightPartButton">CART</div>
            <div className="rightPartButton">CHECKOUT</div>
        </div>
      </div>
    
  );
}
