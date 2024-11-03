import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";

const LMP_Card = ({ lmpdata, loadName, title }) => {
  const [first, setfirst] = useState(false);

  const [cntName, setcntName] = useState(loadName);

  const liClick = (name) => {
    setcntName(name);
    setfirst(false);
  };

  return (
    <div className="">
      <div className="w-[210px] flex items-center justify-between">
        <div className="w-full pl-[30px]">
          <h3
            onClick={() => setfirst(!first)}
            className="text-title font-bold text-[20px] outline-none cursor-pointer flex items-center"
          >
            {title}{" "}
            {first ? (
              <RiArrowUpSLine className="ml-[1vh]" />
            ) : (
              <RiArrowDownSLine className="ml-[1vh]" />
            )}
          </h3>

          <h4 className="text-[#6A6A6A] font-Nunito text-base outline-none">
            {cntName}
          </h4>
        </div>
        <span className="h-[73px] w-[2px] bg-blue spanLine"></span>
      </div>

      {first ? (
        <div className="parent">
          <div className="clhid h-[15vw] w-[208px] overflow-auto overflow-x-hidden bg-white border-[1px] border-gray-400 rounded-md absolute top-[80px] inline-block shadow-xl py-[10px]">
            {lmpdata.map((item, idx) => {
              return (
                <li
                  key={idx}
                  onClick={() => liClick(item.name || item)}
                  className="py-[8px] font-Nunito pl-[30px] list-none border-b-[1px] border-gray-500 border-opacity-[40%] cursor-pointer hover:bg-gray-400"
                >
                  {item.name || item}
                </li>
              );
            })}
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default LMP_Card;
