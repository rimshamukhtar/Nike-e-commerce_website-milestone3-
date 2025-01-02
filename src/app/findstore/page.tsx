


import Link from "next/link";
import Image from "next/image";

const FindStore = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 bg-white p-6">
        <h1 className="text-2xl font-bold mb-4">Find a Nike Store</h1>

        {/* Search Input */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search Location"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black text-sm"
          />
          <Image
            src="/Search-icon.png"
            alt="Search Icon"
            width={20}
            height={20}
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
          />
        </div>

        <p className="text-sm mb-4 text-gray-600">15 Stores Near You</p>

        {/* Store List */}
        <ul>
          <li className="pb-4">
            <div className="flex flex-col">
              <h2 className="font-bold">Nike NYC - House of Innovation 000</h2>
              <p className="text-sm">650 5th Ave.</p>
              <p className="text-sm">New York, NY, 10019, US</p>
              <p className="text-sm text-red-500">Closed • Opens at 11:00 am</p>
            </div>
            <div className="border-b border-gray-300 mt-4"></div>
          </li>

          <li className="pb-4">
            <div className="flex flex-col">
              <h2 className="font-bold">Nike By Upper East Side</h2>
              <p className="text-sm">1131 3rd Ave.</p>
              <p className="text-sm">New York, NY, 10065, US</p>
              <p className="text-sm text-red-500">Closed • Opens at 11:00 am</p>
            </div>
            <div className="border-b border-gray-300 mt-4"></div>
          </li>

          <li className="pb-4">
            <div className="flex flex-col">
              <h2 className="font-bold">Nike By Flatiron</h2>
              <p className="text-sm">156 Fifth Ave.</p>
              <p className="text-sm">New York, NY, 10010, US</p>
              <p className="text-sm text-red-500">Closed • Opens at 11:00 am</p>
            </div>
            <div className="border-b border-gray-300 mt-4"></div>
          </li>
        </ul>

        {/* View All Stores Link */}
        <Link
          href="/all-stores"
          className="text-sm font-bold underline text-black mt-6 block hover:text-gray-700"
        >
          View All Stores
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-2/3">
        <Image
          src="/map.jpeg"
          alt="Map"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FindStore;
