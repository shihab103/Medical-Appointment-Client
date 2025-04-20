import React from "react";
import Hero from "../Components/Hero";
import AllDoctors from "../Components/AllDoctors";

const DoctorPromise = fetch("DoctorData.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <div>
        <Hero></Hero>
      </div>
      <div>
        <AllDoctors DoctorPromise={DoctorPromise}></AllDoctors>
      </div>
    </div>
  );
};

export default Home;
