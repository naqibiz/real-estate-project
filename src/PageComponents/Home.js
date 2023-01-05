import React, { useEffect, useState } from "react";
import Header from "../Componants/Header";
import homebanner from "../assets/image/homebanner.jpg";
import { useNavigate } from "react-router-dom";
import backgroundVideo from "../assets/image/backgroundvideo.mp4";
import { MdApartment } from "react-icons/md";
import { GiHouse } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
// -------------
import backimg1 from "../assets/image/flatonedetail_1.jpg";
import backimg2 from "../assets/image/flatonedetail_2.jpg";
import backimg3 from "../assets/image/flatonedetail_3.jpg";
import backimg4 from "../assets/image/flatonedetail_4.jpg";
import backimg5 from "../assets/image/flatonedetail_5.jpg";
// -------------
import bannerimg1 from "../assets/image/banner_image_1.jpeg";
import bannerimg2 from "../assets/image/banner_image_2.jpeg";
import bannerimg3 from "../assets/image/banner_image_3.jpeg";

const Home = () => {
  const navigate = useNavigate();

  const bannerData = [
    {
      id: 1,
      title: "Gulshan-e-Iqbal Town",
      discription:
        "Shaz Residency is a project by Sami Builders and developers in Karachi. The developer’s mission is to provide affordable living for a larger number of people in Gulshan-e-Iqbal. As there is an increasing demand for apartments, this project provides the perfect mix of premium living in a prime location. Approved by the SBCA makes this investment safe for investors and home buyers, and adds greatly to its appeal.",
      price: 80.56,
      type: "Flats",
      city: "Karachi",
      backgroundImage: [backimg1, backimg2, backimg3, backimg4, backimg5],
      facilities: [
        "24- hour CCTV surveillance & monitoring",
        "Firefighting system",
        "Emergency power backup",
        "Earthquake-proof structure",
        "Covered car parking for residents",
        "High-speed lifts",
        "Already operational mosque",
      ],
    },
    {
      id: 2,
      title: "Bahria Town",
      discription:
        "ON BOOKING All your dreams can come true with this Flat, which is well-constructed and centrally-located. If you are looking for properties for sale, we have just the right property option for you. Your search for properties sized 998 Square Feet is now over! Go through this listing. At such amazing rate of Rs. 7,900,000, such a deal doesn't remain open for long. Investing in a Flat in Bahria Town Karachi is a wise decision as it is quite sought-after. Buy your Flat with desired amenities in a highly facilitated area of Bahria Town Karachi. ",
      price: 79,
      type: "Flats",
      city: "Karachi",
      backgroundImage: [bannerimg1, bannerimg2, bannerimg3],
      facilities: [
        "24- hour CCTV surveillance & monitoring",
        "Firefighting system",
        "Emergency power backup",
        "Earthquake-proof structure",
        "Covered car parking for residents",
        "High-speed lifts",
        "Already operational mosque",
      ],
    },
  ];

  const property = [
    {
      id: 1,
      icon: <MdApartment size={30} />,
      name: "APARTMENTS",
      discription:
        "We went down the lane, by the body of the man in black, sodden now from the overnight hail, and broke into the woods at the foot of the hill.",
    },
    {
      id: 2,
      icon: <GiHouse size={30} />,
      name: "HOUSES",
      discription:
        "We went down the lane, by the body of the man in black, sodden now from the overnight hail, and broke into the woods at the foot of the hill.",
    },
    {
      id: 3,
      icon: <ImOffice size={30} />,
      name: "OFFICES",
      discription:
        "We went down the lane, by the body of the man in black, sodden now from the overnight hail, and broke into the woods at the foot of the hill.",
    },
  ];

  return (
    <>
      <Header />
      <div className="home_banner_section">
        <div
          className="banner_section_inner"
          // style={{ backgroundImage: `url(${homebanner})` }}
        >
          <video autoPlay loop muted id="video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="banner_section_content">
            <h2>
              With Residential Solutions Real Estate, you can book your home at
              the best and most affordable price.
            </h2>
            <button className="banner_btn">Book Now</button>
          </div>
        </div>
      </div>
      <div className="section_two_detail">
        <div className="section_two_detail_inner">
          <h2>overview</h2>
          <div className="overview_main">
            <div className="overview_inner">
              {bannerData.map((box) => (
                <>
                  {console.log(box, "box--box")}
                  <div
                    className="overview_box"
                    style={{
                      backgroundImage: `url(${box?.backgroundImage[0]})`,
                    }}
                  >
                    <div className="overview_box_content">
                      <h3>{box?.title}</h3>
                      <p>{box?.discription}</p>
                      <p className="localtion">
                        <span>Location: {box?.city}</span>
                      </p>
                      <p className="price">PKR {box?.price} Lakh</p>

                      <button
                        className="view_more banner_btn"
                        // onClick={() =>
                        //   navigate("/banner-box-detail", {
                        //     state: bannerData,
                        //   })
                        // }
                      >
                        View Detail
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="looking_for_residency">
        <div className="looking_for_inner">
          <h2>WHAT ARE YOU LOOKING FOR?</h2>
          <div className="residency_property">
            {property.map((item) => (
              <div className="looking_residency_property">
                {item?.icon}
                <div className="residency_property_inner">
                  <h3>{item?.name}</h3>
                  <p>{item?.discription}</p>
                </div>
                <button className="view_all">View All</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
