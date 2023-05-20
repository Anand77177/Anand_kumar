import Breadcrumb from '@/components/layout/Breadcrumb'
import { getCartItems, removeFromCart, updateCartItems} from '@/utils/cartitems'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Image from 'next/image'
import { BiRupee } from 'react-icons/bi'
import Cookies from 'js-cookie'


function Cart() {
    const [cart,setCart]=useState(getCartItems());

    const [yourCart, setYourCart] = useState({
        subtotal:0,
        gstAmount:0,
        grandTotal:0
    });

    const increamentQty=(product)=>{
        const newQty=product?.qty + 1;
        if(newQty <= 100){
            const productId=product?.id
            updateCartItems(productId,newQty);
            setCart(getCartItems())
        }
    }

    const decreamentQty=(product)=>{
        const newQty=product?.qty - 1;
        if(newQty > 0){
            const productId=product?.id
            updateCartItems(productId,newQty);
            setCart(getCartItems())
        }
    }


    const removeHandler=(productId)=>{
        removeFromCart(productId);
        setCart(getCartItems());
    }


    
    useEffect(()=>{
        let total = 0
        let gstAmount = 0
        cart.map((item)=>{
            total += item.price * item.qty
        })
        gstAmount = total * 18/100;
        setYourCart({...yourCart,subtotal:total,gstAmount:gstAmount,grandTotal: total + gstAmount});
    },[cart])

   
   
    const checkoutHandler = ()=>{

        Cookies.set('yourCart',JSON.stringify(yourCart));
        Router.push('/checkout')
    }



  return (
    <>
        <Head>
            <title>Your cart</title>
        </Head>
        <Breadcrumb title={'Your cart'}/>
        <div  className='table-responsive mt-4'>
            <table className='table table-borderless'>
                <thead>
                 <tr className='border-bottom'>
                    <th scope='col'>Item</th>
                    <th scope='col'>Price</th>
                    <th scope='col' className='float-end'>Quantity</th>
                    <th scope='col'>Total</th>
                 </tr>
                </thead>
                <tbody>
                  { (cart.length > 0) ? cart?.map((item)=>{
                     return ( <tr key={item.id} className='border-bottom'>
                        <td >
                        <div className='d-flex gap-3'>
                            <Image src={item?.image} className='rounded-circle ' width={40} height={40} alt={item?.title}/>
                            {item?.title}
                        </div>
                        </td>
                        <td className='text-center'>
                        <span className='d-flex align-items-center'>
                            <BiRupee size={21}/>{item?.price}
                        </span>

                        </td>
                        <td className='text-center'>
                        <div class="input-group input-group-sm w-25 mb-3 border float-end">
                        <button class="input-group-text btn btn-sm btn-outline-dark" onClick={()=>decreamentQty(item)}>-</button>
                        <input type="tel" class="form-control" value={item?.qty}/>
                        <button class="input-group-text btn btn-sm btn-outline-dark" onClick={()=>increamentQty((item))}>+</button>
                    </div>

                        </td>
                        <td className='text-center d-flex justify-content-between'>
                            <div className='d-flex align-items-center text-center'>
                                <BiRupee size={21}/>
                                {(item?.price * item?.qty).toFixed(2)}
                            </div>
                            <button className='btn btn-sm btn-danger' onClick={()=>removeHandler(item?.id)}>X</button>
                        </td>
                    </tr>)

                  }) : <td className='text-center text-danger' colSpan={4}>Empty Cart</td>}
                 {(cart.length > 0) && <>
                 <tr>
                    <td></td>
                    <th className='border-bottom' colSpan={2}> subtotal</th>
                    <th className='border-bottom'>
                        <div className='d-flex align-items-center text-center'>
                            <BiRupee size={18}/>{yourCart?.subtotal?.toFixed(2)}
                        </div>
                    </th>
                  </tr>
                  <tr>
                    <td></td>
                    <th className='border-bottom' colSpan={2}>18% gst</th>
                    <th className='border-bottom'>
                        <div className='d-flex align-items-center text-center'>
                            <BiRupee size={18}/>{yourCart?.gstAmount?.toFixed(2)}
                        </div>
                    </th>
                  </tr>
                  <tr>
                    <td></td>
                    <th className='border-bottom' colSpan={2}>Shipping Charge</th>
                    <th className='border-bottom'> Free   
                    </th>
                  </tr>
                  <tr>
                    <td></td>
                    <th className='border-bottom' colSpan={2}>Grand Total</th>
                    <th className='border-bottom'>
                        <div className='d-flex align-items-center text-center'>
                            <BiRupee size={18}/>{yourCart?.grandTotal?.toFixed(2)}
                        </div>
                    </th>
                  </tr>
                  <tr>
                    <td></td>
                    <th className='border-bottom' colSpan={3}>
                    <button className='btn btn-sm btn-primary float-end ' onClick={()=>checkoutHandler()}>Checkout</button>
                    </th>
                  </tr>
                 </>}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Cart;
