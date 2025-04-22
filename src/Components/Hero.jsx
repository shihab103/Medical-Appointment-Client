import React from "react";

const Hero = () => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(180.00deg, rgba(255, 255, 255, 0),rgb(255, 255, 255) 100%)",
        }}
        className="mb-12 mt-5 lg:py-15 py-10 rounded-2xl border-2 border-white"
      >
        <div>
          <h1 className="lg:px-20 text-center text-5xl font-bold">
            Dependable Care, Backed by Trusted Professionals.
          </h1>
          <p className="text-gray-500 text-center mt-5 lg:px-18 px-5">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
          <div className="text-center py-4">
            <input
              className="py-2 mr-2 ps-3 border rounded-full pe-20"
              type="text"
              placeholder="Search any doctor..."
            />
            <input
              className="btn btn-primary rounded-full"
              type="submit"
              value="Search Now"
            />
          </div>
        </div>
        <div className="flex lg:w-[550px] w-[250px] mx-auto justify-center gap-3">
          <img src="banner-img-1.png" alt="" />
          <img src="banner-img-1.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
