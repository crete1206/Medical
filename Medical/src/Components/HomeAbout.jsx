import React from "react";
import image from "../assets/doctors-sidebyside.png";

const HomeAbout = () => {
  return (
    <div className="flex justify-center items-end bg-gray-200 pt-5 ">
      <section>
        <img src={image} alt="" width="100%" className="mx-auto" />
      </section>
      <section className="flex-1 p-20 ">
        <h6 className="uppercase font-semibold text-blue-500 text-sm mb-2">
          WELCOME TO OUR FRIEND HOSPITAL
        </h6>
        <h2 className="text-gray-600 mb-6 text-3xl md:text-4xl">
          Complete Medical Care You Can Trust
        </h2>
        <p className="text-gray-700 mb-4 ">
          At Our Friend Hospital, we provide comprehensive and compassionate
          healthcare services for individuals and families. Our experienced
          medical team combines advanced technology with personalized care to
          ensure accurate diagnosis, effective treatment, and a smooth recovery
          process. Your health, comfort, and well-being are always our top
          priorities.
        </p>
        <p className="">Dr. Isa Muhammed, Medical Director</p>
      </section>
    </div>
  );
};

export default HomeAbout;
