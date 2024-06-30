import React from "react";

import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="flex items-center space-x-8 bg-gradient-to-br from-violet-400 to-blue-300 p-5 rounded-full">
        <div className="flex items-center space-x-5">
          <FaLocationDot />
          <select className="bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-indigo-600">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="RO">Romania</option>
            <option value="FR">France</option>
            <option value="IT">Italy</option>
            <option value="G">Germany</option>
          </select>
        </div>
        <div>
          <select className="bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-green-600">
            <option value="">Make</option>
            <option value="US">BMW</option>
            <option value="CA">Mercedes-Benz</option>
            <option value="GB">Porsche</option>
            <option value="GB">Lamborghini</option>
            <option value="GB">Ferrari</option>
            <option value="GB">Tesla</option>
          </select>
        </div>
        <div>
          <select className="bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-red-600">
            <option value="">Model</option>
            <option value="US">E class</option>
            <option value="CA">5 Series</option>
            <option value="CA">4 Series</option>
            <option value="CA">Urus</option>
            <option value="CA">911GT3RS</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
