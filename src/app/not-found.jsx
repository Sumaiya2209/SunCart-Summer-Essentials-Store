
import Link from "next/link";
import { FiSun } from "react-icons/fi";

export default function NotFound() {
  return (
<div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-yellow-100 via-orange-100 to-pink-100 px-6 text-center">
      
      <div className="mb-6 text-7xl"><FiSun/></div>
      <h1 className="text-6xl font-extrabold text-orange-500">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-800">
        Oops! Summer Lost Its Way
      </h2>

      <p className="mt-4 max-w-md text-lg text-gray-600">
        The page you’re looking for melted under the summer heat 
        Let’s get you back to shopping trendy summer essentials.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-orange-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}