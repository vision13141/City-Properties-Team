import React, { useState, useRef } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa6";
import { MdOutlineBed } from "react-icons/md";
import { CgCornerDoubleLeftDown } from "react-icons/cg";
import { Link } from "react-router-dom";

const PropertyCard = ({
  title,
  description,
  image,
  price,
  additionalText,
  location,
  to,
  btext,
  shtext,
  sqtext,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-[390px] h-[440px] bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative">
      <div>
        <img
          src={image}
          alt={`Image of ${title}`}
          className="w-full h-64 object-cover cursor-pointer transition-transform duration-300  rounded-t-lg"
        />
      </div>

      <h3 className="text-xl p-2 font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
        {title}
      </h3>

      <p className={`pl-2 pr-16 gap-x-2 absolute text-gray-500 bg-white transition-all duration-1000 overflow-hidden ${isOpen ? "max-h-40" : "max-h-12"}`}>
        {description}{isOpen ? " " : ""}
        {isOpen && additionalText}
        <span
          onClick={toggleAccordion}
          role="button"
          aria-expanded={isOpen}
          className="font-bold pl-2 text-blue bg-white cursor-pointer"
        >
          {isOpen ? "Less" : "More"}
        </span>
      </p>

      <div className="pl-2 pt-10">
        <div className="flex gap-x-2 pb-3 pt-4">
          <IoLocationOutline className="text-blue" />
          <Link to={to} className="font-Nunito text-sm text-gray-400">{location}</Link>
        </div>
        <div className="flex">
          <span className="text-lg font-semibold  text-[#798cf8]">
            ${price.toLocaleString()}
          </span>
          <div className="flex justify-end">
            <div className="flex pl-16">
              <MdOutlineBed className="mt-2 text-[#798cf8] text-[20px]" />
              <span className="pt-[8px] pl-1 font-Nunito font-semibold text-sm text-[#798cf8]">{btext}</span>
            </div>
            <div className="flex pl-5">
              <FaShower className="mt-2 text-[#798cf8] text-[20px]" />
              <span className="pt-[8px] pl-1 font-Nunito font-semibold text-sm text-[#798cf8]">{shtext}</span>
            </div>
            <div className="flex pl-4">
              <CgCornerDoubleLeftDown className="mt-2 text-[#798cf8] text-[20px]" />
              <span className="pt-[8px] pl-1 font-Nunito font-semibold text-sm text-[#798cf8]">{sqtext}</span>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default PropertyCard;