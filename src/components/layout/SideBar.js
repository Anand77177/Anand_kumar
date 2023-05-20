import Link from "next/link";
import React from "react";
import { MdCategory } from 'react-icons/md';
import {   GoDash } from 'react-icons/go';
import useSwr from 'swr'
import { fetcher } from "@/utils/swrFetcher";
function SideBar(){
   //const Category =[1,2,3,4,5,6,7,8,9,10];

    const { data, error, isloading } = useSwr('https://dummyjson.com/products/categories',fetcher);
    if(error) return <div>Failed to load</div>
    if(isloading) return <div>Loading...</div>


    return(
      
        <div className="w-100">
        <ul className="list-group">
            <li className="list-group-item d-flex align-items-center navbar-top-bg">
                <h5 className=" text-white mt-2 text-uppercase">
                <MdCategory/>Category
                </h5>
            </li>
            {
                data && data.map((Category,i) => {
                    return (
                        <div>
                            <Link key={i} href={`/category/${Category}`} className="text-decoration-none">
                                <li className="list-group-item list-group-item-action d-flex align-items-center">
                                <GoDash size={24} className="m-2"/>
                              {Category}
                                </li>  
                            </Link>
                        </div>
                    )
                })

            }  
        </ul>
        </div> 
      
    )
}
export default SideBar;