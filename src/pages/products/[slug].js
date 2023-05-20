import React, { useState } from "react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Head from "next/head";
import Image from "next/image";
import { BiRupee,BiStar } from "react-icons/bi";
import { addToCart } from "@/utils/cartitems";
import { toast } from "react-hot-toast";

function SingleProduct({ product }) {
    const [quantity,setQuantity]=useState(1);
  return (
    <>
      <Head>
        <title>Product Name </title>
      </Head>
      <main>
        <Breadcrumb title={"Product"} />
        <div className="row g-3">
          <div className="col-lg-6">
            <div className="p-2">
              <Image
                src={product?.thumbnail}
                alt={product?.title}
                width={350}
                height={300}
                className="border"
              ></Image>
            </div>
          </div>
          <div className="col-lg-6">
            <h2>{product?.title}</h2>
            <div>
              <button type="button" className="btn btn-sm btn-success g-4 ">
                {product?.rating}
                {<BiStar size={21} />}
              </button>
              1,108 Ratings & 121 Reviews
              {/* {product?.stock} */}
            </div>
            <h4 className="card-title d-flex align-items-center">
              <BiRupee size={21} />
              {product?.price}
            </h4>
            <h5 className="mt-2">Description</h5>
            <p>{product?.description}</p>
            <div className="d-flex gap-3">
              <b>Qty:</b>
              <div class="input-group input-group-sm w-25 mb-3">
                <button
                  class="input-group-text btn btn-sm btn-outline-dark"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  -
                </button>
                <input type="tel" class="form-control" value={quantity} />
                <button
                  class="input-group-text btn btn-sm btn-outline-dark"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="d-flex gap-4 mt-4">
              <button
                type="button"
                className="btn btn-sm btn-warning"
                onClick={(e) => {
                  addToCart(product, quantity), toast.success("Added to card");
                }}
              >
                Add To Card
              </button>
              <button type="button" className="btn btn-sm btn-success">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* extra chij */}
        <div className="row g-3">
          <div className="col-lg-6">
            {/* <div>
              <button type="button" className="btn btn-sm btn-success gap-2 ">
                <BiStar size={21} className="" />
                {product?.rating}
              </button>
            </div> */}
          </div>
          <div className="col-lg-6"></div>
        </div>
      </main>
    </>
  );
}
export default SingleProduct;

export async function getServerSideProps(context) {
  const productId = context.params.slug;
  let product = [];
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    product = await response.json();
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
  return {
    props: {
      product,
    }, // will be passed to the page component as props
  };
}
