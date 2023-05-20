import Link from "next/link";
import { React, useEffect } from "react";
import Image from "next/image";
import { BiCartAlt } from 'react-icons/bi';
import { useState } from "react";
import { getCartItems } from "@/utils/cartitems";
function Header(){
  const [cart,setCart]=useState(0);
  useEffect(()=> {
    setInterval(()=>{
      const cartItems=getCartItems();
      setCart(cartItems.length)
    },[])

  })
    return(
        <>
          <nav className="navbar navbar-top-bg text-white d-none d-md-block">
          <div className="container-md">
            <i className="nav-item navbar-nav">Get Up to 70% Discount Everyday</i>
            <div className="dropdown p-2">
              <span className="dropdown-toggle" type="button" data-bs-toggle ="dropdown" aria-expanded="false" >MyAccount</span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item"  href={'/Register'}>Register</Link></li>
                <li><Link className="dropdown-item"  href={'/Login'}>Login</Link></li>
              </ul>
            </div>
           
          </div>
          </nav>

          <nav className="navbar navbar-bg text-white d-none d-md-block">
          <div className="container-md">
           <Link  href="/"  className="navbar-brand">
            <Image src="/Images/logo.jpg" width={100} height={50} alt= "nwg logo" />
           </Link>
           <Link  href="/cart"  className="nav-item nav-link d-flex gap-1 align-items-center text-white">
              <span className="p-1 rounded-circle bg-primary">
                <BiCartAlt size={21} className="pb-1"/> 
              </span>
              {cart} items
              </Link>
          </div>
          </nav>

      <nav className="navbar navbar-expand-lg shadow-sm mb-2 rounded container px-2">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav">
      <Link href="/" className="nav-item nav-link active">Store</Link>
      <Link href={'/About_us'} className="nav-item nav-link active">About Us</Link>
      <Link href={'/Support'}className="nav-item nav-link active">Support</Link>
      </div>
    </div>
</nav>
   </>
 )
}
export  default Header;
