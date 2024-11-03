import React, { useState } from "react";
import Container from "../Component/Container";
import AgentCard from "../Common/AgentCard";
import { GoChevronRight } from "react-icons/go";
import { IoChevronDown } from "react-icons/io5";

const Agents = () => {
  const [more, setmore] = useState(false);

  const HandleMore = () => {
    setmore(!more);
  };
  return (
    <>
      <div className="py-[100px]">
        <Container>
          <div className="font-Nunito pb-10">
            <h1 className="text-[18px] font-normal text-blue">
              EXPERTISE IS HERE
            </h1>
            <p className="text-[42px] font-semibold text-black">
              Our Growing Agents
            </p>
            <h5 className="max-w-[550px] font-Nunito font-normal text-sm text-[#7C8893]">
              We pride myself on my deep market knowledge, strong negotiation
              skills, and commitment to exceptional client support throughout
              the buying and selling process.
            </h5>
          </div>
          {/* agent */}
          <div className="flex items-center justify-between flex-wrap gap-y-5">
            <AgentCard />
            <AgentCard />
            <AgentCard />
          </div>
          {more ? (
            <div className="flex pt-10 items-center justify-between flex-wrap gap-y-5">
              <AgentCard />
              <AgentCard />
              <AgentCard />
            </div>
          ) : (
            ""
          )}
          {/* see more */}
          <div className="flex items-center justify-center pt-10">
            {more ? (
              <button
                onClick={HandleMore}
                className="bg-[#425cec] group flex items-center gap-x-2 text-white font-Nunito font-medium text-base py-2 px-3 rounded-lg transition-all hover:bg-[#3a50ca]"
              >
                See less{" "}
                <span className="text-xl group-hover:-translate-y-1 rotate-180 transition-transform">
                  <IoChevronDown />
                </span>
              </button>
            ) : (
              <button
                onClick={HandleMore}
                className="bg-[#425cec] group flex items-center gap-x-2 text-white font-Nunito font-medium text-base py-2 px-3 rounded-lg transition-all hover:bg-[#3a50ca]"
              >
                See more{" "}
                <span className="text-xl transition-transform group-hover:translate-y-1 ">
                  <IoChevronDown />
                </span>
              </button>
            )}
          </div>
        </Container>
        {/* join */}
        <div className="bg-[#425cec33] py-12 px-14 mt-[100px]">
          <Container>
            <div className="flex items-center justify-between">
              <div
                className="flex items-center gap-x-6
            "
              >
                <div>
                  <h4 className="font-Nunito font-medium text-[38px] text-black">
                    Become an Agent
                  </h4>
                  <p className="font-Nunito font-normal text-2xl text-[#7C8893]">
                    Agent hen an unknown printer took a galley scramble
                  </p>
                </div>
              </div>
              <div>
                <button className="rounded-md flex items-center gap-x-2 font-Nunito font-normal active:scale-95 transition-all text-[18px] text-white bg-blue py-4 px-5">
                  Register Now{" "}
                  <span className="text-xl">
                    <GoChevronRight />
                  </span>
                </button>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="flex items-center justify-between mt-12">
            <div className="bg-[#425cec2d] p-[60px] text-white rounded-md font-Nunito">
              <h3 className="text-[26px] font-medium text-black font-Nunito">
                Looking for the new home?
              </h3>
              <p className="font-normal max-w-[400px] text-base text-[#414141]">
                10 new offers every day. 350 offers on site, trusted by a
                community of thousands of users.
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-blue flex items-center gap-x-2 text-white rounded-md font-Nunito text-base py-2 px-3">
                  Get Started{" "}
                  <span>
                    <GoChevronRight />
                  </span>
                </button>
                <svg
                  className="size-[100px]"
                  viewBox="0 0 24.00 24.00"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#3e33e1"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <defs>
                      <style>.cls-1</style>
                    </defs>
                    <polyline
                      className="cls-1"
                      points="20.59 8.18 20.59 22.5 3.41 22.5 3.41 8.18"
                    ></polyline>
                    <line
                      className="cls-1"
                      x1="0.55"
                      y1="22.5"
                      x2="23.45"
                      y2="22.5"
                    ></line>
                    <polyline
                      className="cls-1"
                      points="0.55 11.04 12 1.5 23.45 11.04"
                    ></polyline>
                    <rect
                      className="cls-1"
                      x="9.14"
                      y="14.86"
                      width="5.73"
                      height="7.64"
                    ></rect>
                    <circle className="cls-1" cx="12" cy="9.14" r="1.91"></circle>
                    <polyline
                      className="cls-1"
                      points="16.77 5.48 16.77 1.5 20.59 1.5 20.59 8.66"
                    ></polyline>
                  </g>
                </svg>
              </div>
            </div>
            <div className="bg-[#425cec2d] p-[60px] text-white rounded-md font-Nunito">
              <h3 className="text-[26px] font-medium text-black font-Nunito">
                Want to sell your home?
              </h3>
              <p className="font-normal max-w-[400px] text-base text-[#414141]">
                10 new offers every day. 350 offers on site, trusted by a
                community of thousands of users.
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-blue flex items-center gap-x-2 text-white rounded-md font-Nunito text-base py-2 px-3">
                  Get Started
                  <span>
                    <GoChevronRight />
                  </span>
                </button>
                <svg
                  className="size-[100px]"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 490.034 490.034"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  enableBackground="new 0 0 490.034 490.034"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g fill="#425CEC">
                        {" "}
                        <path d="m490.034,234.487c0-3.1 0-6.2-2.1-8.3l-168.9-222c-3.1-4.1-8.3-5.2-12.5-3.1l-129.286,62.014c-2.367,0.459-4.596,1.683-6.214,3.687l-168.9,222c-2,3.1-3.1,7.3-1,10.4 2.1,4.2 5.2,6.3 9.4,6.3h38.6v174c0,6.2 4.1,10.4 10.4,10.4h45.9c6.2,0 10.4-4.1 10.4-10.4v-160.5h127.1v160.6c0,6.2 4.1,10.4 10.4,10.4h45.9c2.83,0 5.623-1.518 7.604-3.703l128.996-60.997c4.2-2.1 6.3-5.2 6.3-9.4v-152.2l39.338-20.176 2.755-1.31-.039-.082 .646-.331c2.1-2.102 4.2-4.202 5.2-7.302zm-190.8,50.1c-6.2,0-10.4,4.1-10.4,10.4v174.1h-25-1.2v-160.5c0-6.2-4.1-10.4-10.4-10.4h-148c-6.2,0-10.4,4.1-10.4,10.4v160.5h-25v-174.1c0-6.2-4.1-10.4-10.4-10.4h-27.1l148-193.9 147,193.9h-27.1zm122,125l-111.6,52.666v-156.766h38.6c1.48,0 2.821-0.403 4.033-1.054l.212,.446 68.755-32.71v137.418zm32.473-175.9l-102.055,48.553-155.778-204.754 111.76-53.499 156.3,204.3-10.227,5.4z"></path>{" "}
                        <rect
                          width="26.1"
                          x="137.734"
                          y="351.287"
                          height="20.8"
                        ></rect>{" "}
                        <rect
                          width="26.1"
                          x="137.734"
                          y="407.587"
                          height="20.8"
                        ></rect>{" "}
                        <rect
                          width="26.1"
                          x="137.734"
                          y="462.887"
                          height="20.8"
                        ></rect>{" "}
                        <rect
                          width="26.1"
                          x="187.734"
                          y="351.287"
                          height="20.8"
                        ></rect>{" "}
                        <rect
                          width="26.1"
                          x="187.734"
                          y="407.587"
                          height="20.8"
                        ></rect>{" "}
                        <rect
                          width="26.1"
                          x="187.734"
                          y="462.887"
                          height="20.8"
                        ></rect>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Agents;
