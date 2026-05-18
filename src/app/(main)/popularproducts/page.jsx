"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StarFill } from "@gravity-ui/icons";
import LoadingAnimation from "@/app/(main)/popularproducts/LoadingAnimation";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const productsFetch = async () => {
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const res = await fetch("https://server-suncart.onrender.com/products");
      const data = await res.json();

      setProducts(data.slice(0, 3));
    } catch (error) {
      console.error("Products fetch failed:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };
    productsFetch();
    
  }, []);

  return (
    <div className="container mx-auto m-20">
      <h2 className="text-5xl font-bold mb-20 text-center text-orange-500">
        Popular Products
      </h2>

      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center w-10/12 mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="card bg-base-100 w-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <figure>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-64"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">
                    {product.name}
                  </h2>

                  <p className="text-gray-500">{product.description}</p>

                  <div className="flex items-center justify-between my-2">
                    <p className="font-bold text-2xl">${product.price}</p>

                    <p className="text-yellow-500 font-semibold flex items-center justify-end gap-1">
                      <StarFill /> {product.rating}
                    </p>
                  </div>

                  <div className="card-actions justify-end">
                    <Link
                      href={`/products/${product.id}`}
                      className="btn text-orange-500 border-2 border-orange-500 hover:bg-orange-600 hover:text-white"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center my-10">
            <Link
              href="/products"
              className="btn text-lg text-white bg-orange-500 hover:bg-white hover:text-orange-500 p-6"
            >
              View All Products
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default PopularProducts;