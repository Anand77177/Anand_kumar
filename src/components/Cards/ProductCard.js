import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiRupee,BiCartAdd,BiStar} from 'react-icons/bi';
import { addToCart } from "@/utils/cartitems";
import { toast } from "react-hot-toast";
function ProductCard({ product }){
   // const star=[1,2,3,4];
    return (
        <div className="card">
            <Link href={`/products/${product?.id}`}>
                <div className="object-fit-cover">
                 <Image src={product?.thumbnail}  width={200} height={200} className="card-img-top" alt={product?.title} />  
                </div>
            </Link>
            <div className="card-body">
                <Link href={`/products/${product?.id}`} className="text-decoration-none">
                <h5 className="card-title text-black">{product?.title}</h5>
                </Link>
                <div className="d-flex justify-content-between align-items-center">
                <h6 className="card-title d-flex align-items-center">
                    <BiRupee  size={25}/>
                    {product?.price}
                </h6>
                <div>
                    <button className="btn btn-warning btn-sm mx-2" onClick={(e)=>{addToCart(product,1),toast.success('added in cart') }}><BiCartAdd size={21}/></button>
                    <button className="btn btn-success btn-sm ">Buy</button>
                </div>
                </div>
            </div>
        </div>
        
    )
}
export default ProductCard;