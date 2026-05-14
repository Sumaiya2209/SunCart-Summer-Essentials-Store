
import Image from "next/image";
import Link from "next/link";
import { StarFill } from '@gravity-ui/icons';

const productsFetch = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  return data;
};


const PopularProducts = async () => {

  const products = await productsFetch();
  const limitedProducts = products.slice(0, 3);

  return (
    <div className="container mx-auto m-25">
      <h2 className="text-6xl font-bold mb-20 text-center text-orange-500">Popular Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center w-10/12 mx-auto">
        {
          limitedProducts.map((product) => (
            <div key={product.id} className="card bg-base-100 w-full shadow-sm ">
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
                <h2 className="card-title text-2xl font-bold">{product.name}</h2>
                <p className="text-gray-500">{product.description}</p>

                <div className="flex items-center justify-between my-2 ">
                  <p className=" font-bold text-2xl">
                    ${product.price}
                  </p>

                  <p className="text-yellow-500 font-semibold flex items-center justify-end">
                    <StarFill /> {product.rating}
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <Link href={`/products/${product.id}`} className="btn text-orange-500 border-2 border-orange-500 hover:bg-orange-600 hover:text-white">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex items-center justify-center my-10">
        <Link href={`/products`} className="btn text-lg text-white bg-orange-500 hover:bg-white hover:text-orange-500 w-2/10 p-6">
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default PopularProducts;