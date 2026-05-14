import Image from "next/image";
import { FaStar } from "react-icons/fa";


const productsFetch = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  return data;
};

const productCart = async ({ id }) => {

  const products = await productsFetch();
  const product = products.find((p) => p.id === id);
  const { name, description, image, stock, price, rating, brand } = product;

  return (
    <div className="w-11/12 max-w-6xl mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

        <div className="bg-gray-100 flex items-center justify-center p-8">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="object-contain rounded-3xl w-200 h-150" />
        </div>

        <div className="p-8 flex flex-col justify-center">
          <p className="text-orange-500 font-semibold uppercase tracking-wider mb-2">
            {brand} </p>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {name}</h1>
          <div className="flex items-center gap-2 mb-5">
            <FaStar className="text-yellow-400" />
            <span className="font-medium text-gray-700">{rating} Rating</span>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6"> {description}</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-orange-500"> ${price}</span>
          </div>
          <div className="mb-8">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">In Stock ({stock} Available)</span>
          </div>
          <div className="flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-md">Add to Cart</button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition duration-300">Buy Now </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productCart;