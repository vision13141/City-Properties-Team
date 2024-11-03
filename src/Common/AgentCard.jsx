import React from "react";
import agentImg from "../assets/Image/agent.png";
import { BiLogoGmail } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";
import gmailLogo from "../assets/Image/gmail.png";

const AgentCard = () => {
  return (
    <div className="w-[290px] shadow-md p-5 rounded-lg">
      {/* img */}
      <div className="w-full h-[245px] relative">
        <img src={agentImg} alt="" className="w-full h-full object-cover" />
        <div className="font-Nunito font-normal text-xs text-blue absolute bottom-1 left-0 bg-[#ffffff73] backdrop-blur-lg p-[6px]">
          3 Years Experience
        </div>
      </div>
      {/* content */}
      <div className="pt-3">
        <h4 className="font-medium text-xl text-black font-Nunito pb-2">
          David Wing
        </h4>
        <p className="font-Nunito text-sm font-normal text-[#7C8893]">
          Eco Builders
        </p>
        <div className="flex items-center gap-x-1 pt-4">
          <BiSolidPhoneCall className="text-blue text-xl" />
          <span className="font-Nunito text-sm font-normal text-[#7C8893]">
            Call: +1 234 567 890
          </span>
        </div>
        <div className="flex items-center gap-x-2 pt-2">
          <img src={gmailLogo} alt="" className="size-4" />
          <span className="font-Nunito text-sm font-normal text-[#7C8893]">
            example@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
