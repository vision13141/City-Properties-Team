import React, { useContext, useState } from "react";
import img from "../assets/Image/1.png";
import locationIcon from "../assets/Image/location.png";
import bed from "../assets/Image/bed.png";
import ft from "../assets/Image/ft.png";
import bath from "../assets/Image/bath.png";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import userImg from "../assets/Image/user.png";
import { Link } from "react-router-dom";
import OrgContext from "../Context/OrgContext";
import { FaHeart } from "react-icons/fa";



const Card = ({ item, img }) => {

  const [show, setshow] = useState(false);

  const { id, image, title, description, price, name } = item

  const { AddToCart, shareClick, heart } = useContext(OrgContext)

  const HandleMore = () => {
    setshow(!show);
  };

  return (
    <div className="max-w-[370px] p-5 rounded-[10px] shadow-md">
      {/* img */}
      <div className="h-[200px] w-full rounded-[10px] overflow-hidden">
        <img src={image} className="w-full h-full" />
      </div>
      {/* content */}

      <div className="flex items-center gap-x-[10px] mt-5">
        <img src={locationIcon} alt="" />
        <span className="text-base font-Nunito text-thirdColor font-normal">
          {title}
        </span>
      </div>

      <h3 className="text-[21px] font-Nunito font-bold text-primaryColor py-2">
        {name}
      </h3>

      <h5 className="font-Nunito font-bold text-[18px] text-secondaryColor pb-3">
        ${price}
      </h5>

      <div className="relative">
        <p className={`font-Nunito font-normal text-base text-thirdColor absolute max-w-[370px] bg-white top-0 
          ${show ? "pb-[0.75vw]" : false}`}>
          {show ? description : description.slice(0, 50) + '...'}

          <span
            onClick={HandleMore}
            className="font-bold pl-2 text-blue text-secondaryColor max-w-[300px] cursor-pointer"
          >
            {show ? "Less" : "More"}
          </span>
        </p>


        {/* features */}
        <div className="pt-[3vw] pb-5 flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <img src={bed} alt="" />
            <span className="font-Nunito font-normal text-balance text-thirdColor">
              5
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <img src={ft} alt="" />
            <span className="font-Nunito font-normal text-balance text-thirdColor">
              3
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <img src={bath} alt="" />
            <span className="font-Nunito font-normal text-balance text-thirdColor">
              250.00 ft
            </span>
          </div>
          <button className="font-Nunito font-normal text-base text-white  bg-blue py-[2px] px-2 rounded-md">
            Details
          </button>
        </div>

        {/* user */}
        <div className="flex items-center justify-between pt-7 border-t-2">
          <div className="flex items-center gap-x-2">
            <img src={userImg} alt="" />
            <h5 className="font-Nunito font-bold text-base text-primaryColor">
              Maria Barlow
            </h5>
          </div>
          {/* share & wishlist */}
          <div className="flex items-center gap-x-5 text-2xl text-thirdColor">

            <span onClick={shareClick}>
              <IoShareSocialOutline />
            </span>



            <div className="">

              {
                heart.includes(id) ?
                  <button onClick={() => AddToCart(id)}>
                    <span>
                      <FaHeart className="text-red-600" />
                    </span>
                  </button>
                  :
                  <button onClick={() => AddToCart(id)}>
                    <span>
                      <CiHeart />
                    </span>
                  </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Card;
