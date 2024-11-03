import { React, useContext, useState } from "react";
import Card from "../Common/Card";
import Container from "./Container";
import OrgContext from "../Context/OrgContext";

const Properties = () => {

  const { product, handelCategory } = useContext(OrgContext)


  const [active, setactive] = useState("Apartments")

  const activeAndCategory = (item) => {
    setactive(item)
    handelCategory(item)
  }

  return (
    <div className="py-[100px]">
      <Container>
        {/* heading */}
        <div>
          <h5 className="font-Nunito font-bold text-secondaryColor text-base uppercase">
            properties
          </h5>
          <h3 className="font-Nunito font-bold text-primaryColor text-[40px]">
            Our Latest Properties
          </h3>
          <p
            className="font-Nunito text-base font-normal
           text-thirdColor max-w-[529px]"
          >
            We are very proud of the service we provide. See what our guests
            have to say about us, our locations and services.
          </p>
        </div>
        {/* all tabs */}
        <div className="flex items-center justify-end">
          <ul className="flex items-center gap-x-10">
            {["Apartments", "Houses", "Rentals", "Sales"].map(
              (item, index) => (
                <li key={index} onClick={() => activeAndCategory(item)}
                  className={`font-Nunito font-bold text-xl text-primaryColor capitalize cursor-pointer ${active == item ? "text-blue" : "text-title"}`}>

                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        {/* all card */}
        <div className="pt-10 grid grid-cols-3 justify-between">
          {
            product.map((el) => {
              return (
                <Card item={el} key={el.id} />
              )
            })
          }
        </div>
      </Container>
    </div>
  );
};

export default Properties;
