import React, { useState } from "react";

import Container from "./Container";
import PropertySearchBar from "./PropertySearchBar";
import Luxury1 from "../assets/Image/luxury1.jpg";
import M1 from "../assets/Image/m1.jpg";
import B1 from "../assets/Image/beach1.jpg";
import C1 from "../assets/Image/cottage1.jpg";
import P1 from "../assets/Image/penthouse1.jpg";
import C2 from "../assets/Image/cozy.jpg";
import T1 from "../assets/Image/penthouse2.jpg";
import S1 from "../assets/Image/villa2.jpg";
import H1 from "../assets/Image/house.jpg";
import PropertyCard from "../Common/PropertyCard";

const PropertyPage = () => {
  const [properties] = useState([
    {
      id: 1,
      title: "Luxury Villa in Los Angeles",
      description: "A villa in LA with a stunning big view of the city.",
      text: "More",
      image: Luxury1,
      location: "4750 Lincoln Blvd, Marina Del Rey, CA 90292",
      to: "https://maps.app.goo.gl/83rr3uVmKfjizUS26",
      price: 1500000,
      type: "Villa",
      additionalText: "This villa includes 5 bedrooms, 4 bathrooms, a private pool, and a rooftop terrace with city views.",
      btext: "3",
      shtext: "3",
      sqtext: "3500 Sq Ft"
    },
    {
      id: 2,
      title: "Modern Apartment in New York",
      description: "A stylish awesome apartment in the heart of NYC.",
      text: "More",
      image: M1,
      location: "303 E 83rd St, New York, NY 10028",
      to: "https://maps.app.goo.gl/SvSEBcbLvqkv1DyFA",
      price: 950000,
      type: "Apartment",
      additionalText: "This apartment features 2 bedrooms, 2 bathrooms, and modern smart home technology.",
      btext: "3",
      shtext: "2",
      sqtext: "2000 Sq Ft"
    },
    {
      id: 3,
      title: "Beach House in Miami",
      description: "Enjoy the ocean view from this lovly beach house.",
      text: "More",
      image: B1,
      location: "4385 Collins Ave, Miami Beach, FL 33140",
      to: 'https://maps.app.goo.gl/twwYvLZ1QFSzC7Yd9',
      price: 2300000,
      type: "House",
      additionalText: "This beach house offers direct access to the beach, 4 bedrooms, 3 bathrooms, and a spacious backyard.",
      btext: "4",
      shtext: "3",
      sqtext: "3700 Sq Ft"
    },
    {
      id: 4,
      title: "Cottage in the Countryside",
      description: "A quaint cottage surrounded by beautiful nature.",
      text: "More",
      image: C1,
      location: "South Suburbs, 2700 183rd St, Homewood, IL 60430",
      to: 'https://maps.app.goo.gl/j5rvYygmwc6XyxjX7',
      price: 650000,
      type: "Cottage",
      additionalText: "A quaint cottage surrounded by beautiful nature. 2 bedrooms, 1 bathroom,Large outdoor garden and a private pond.",
      btext: "2",
      shtext: "3",
      sqtext: "2000 Sq Ft"
    },
    {
      id: 5,
      title: "Penthouse Suite in Chicago",
      description: "A luxurious big penthouse with city skyline views.",
      text: "More",
      image: P1,
      location: "5107 S Blackstone Ave, Chicago, IL 60615",
      to: "https://maps.app.goo.gl/V8m3iU5VK4ciCp5V9",
      price: 3000000,
      type: "Apartment",
      additionalText: "A luxurious penthouse with stunning skyline views. 3 bedrooms, 3.5 bathrooms, expansive floor-to-ceiling windows offering city views.",
      btext: "4",
      shtext: "3",
      sqtext: "3800 Sq Ft"
    },
    {
      id: 6,
      title: "Cottage in San Francisco",
      description: "A compact studio in a vibrant neighborhood.",
      text: "More",
      image: C2,
      location: "San Francisco, CA 94115, USA",
      to: 'https://maps.app.goo.gl/78R6kTkqziuyXfF87',
      price: 700000,
      type: "Cottage",
      additionalText: "A quaint cottage surrounded by beautiful nature. 1 bedrooms, 1 bathroom and a small kitchen.",
      btext: "3",
      shtext: "2",
      sqtext: "2000 Sq Ft"
    },
    {
      id: 7,
      title: "Penthouse Suite in San Francisco",
      description: "A big luxurious penthouse with city skyline views.",
      text: "More",
      image: T1,
      location: "412 Broadway, San Francisco, CA 94133",
      to: 'https://maps.app.goo.gl/rr9tLYfNWEYV1Dci9',
      price: 1200000,
      type: "Apartment",
      additionalText: "A sophisticated penthouse with breathtaking city views. 2 bedrooms, 2 bathrooms. ",
      btext: "4",
      shtext: "3",
      sqtext: "3400 Sq Ft"
    },
    {
      id: 8,
      title: "Luxury Villa in Miami",
      description: "A villa in Miami with a stunning view of the city.",
      text: "More",
      image: S1,
      location: "710 NE 29th St, Miami, FL 33137",
      to: 'https://maps.app.goo.gl/8xT8deoBYMNSJCpf8',
      price: 1900000,
      type: "Villa",
      additionalText: "A villa in LA with a stunning view of the city. 5 bedrooms, 4 bathrooms, and an open-concept living space.",
      btext: "5",
      shtext: "4",
      sqtext: "4000 Sq Ft"
    },
    {
      id: 9,
      title: "House in Chicago",
      description: "Enjoy the beautiful view from this lovly house.",
      text: "More",
      image: H1,
      location: "2348 S Hoyne Ave, Chicago, IL 60608",
      to: 'https://maps.app.goo.gl/DykYt4QC4J5iwPMD6',
      price: 1300000,
      type: "House",
      additionalText: "Enjoy the beautiful view from this lovely house. 4 bedrooms, 3 bathrooms with a spacious open floor plan. ",
      btext: "3",
      shtext: "3",
      sqtext: "3000 Sq Ft"
    },
  ]);

  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleSearch = (searchCriteria) => {
    const { location, propertyType, maxPrice } = searchCriteria;

    const filtered = properties.filter((property) => {
      const matchesLocation = location
        ? property.title.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesType = propertyType ? property.type === propertyType : true;
      const matchesPrice = maxPrice
        ? property.price <= parseInt(maxPrice)
        : true;

      return matchesLocation && matchesType && matchesPrice;
    });

    setFilteredProperties(filtered);
  };

  return (
    <div>
      <Container>
        <h1 className="mt-[120px] text-[40px] font-Nunito font-bold text-center mb-3">
          Properties for Sale
        </h1>

        <p className="font-Nunito font-bold text-center text-[28px] text-gray-500 pt-4">
          Welcome To Best Propertise
        </p>
        <p className="font-Nunito font-bold text-center text-[18px] pb-8 text-gray-500">
          Best deal is Here!
        </p>

        <PropertySearchBar onSearch={handleSearch} className="mt-40" />

        <div className="grid grid-cols-3 gap-y-9 gap-x-6 ">
          {filteredProperties.map((property) => {
            return (
              <PropertyCard
                key={property.id}
                title={property.title}
                description={property.description}
                text={property.text}
                image={property.image}
                price={property.price}
                additionalText={property.additionalText}
                location={property.location}
                to={property.to}
                btext={property.btext}
                shtext={property.shtext}
                sqtext={property.sqtext}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default PropertyPage;