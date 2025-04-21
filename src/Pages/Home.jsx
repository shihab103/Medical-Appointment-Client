import React from "react";
import Hero from "../Components/Hero";
import AllDoctors from "../Components/AllDoctors";

const DoctorPromise = fetch("DoctorData.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <div className="px-10">
        <Hero></Hero>
      </div>
      <div className="text-center">
        <AllDoctors DoctorPromise={DoctorPromise}></AllDoctors>
      </div>
    </div>
  );
};

export default Home;
