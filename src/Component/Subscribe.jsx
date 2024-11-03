import React from "react";
import Container from "./Container";

const Subscribe = () => {
  return (
    <div className="pt-[100px]">
      <Container>
        <div className="bg-blue py-[100px] rounded-2xl flex-col flex items-center justify-center text-center">
          <h3 className="text-[40px] font-bold text-white font-NunitoSans max-w-[815px] leading-[60px]">
            Sign Up Now to see Newest Update about Real Estate from Entire the
            World
          </h3>
          <p className="font-Nunito font-normal text-base text-white opacity-[70%] max-w-[681px] pt-5">
            Just insert your email into the field below. You already can to know
            update about Real Estate from entire the world. What are you waiting
            for?
          </p>
          <div className="relative w-[380px] mt-7">
            <input
              type="text"
              placeholder="Your Emaill"
              className="pl-5 py-4 bg-white placeholder:text-base placeholder:text-thirdColor placeholder:font-Nunito placeholder:font-normal rounded-lg w-full"
            />
            <button className="absolute -translate-y-[50%] top-[50%] right-1 bg-blue text-base text-white font-bold font-Nunito rounded-lg py-3 px-4">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
