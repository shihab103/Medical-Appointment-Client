import React from "react";
import Hero from "../Components/Hero";
import AllDoctors from "../Components/AllDoctors";
import CountUp from "react-countup";

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
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">We Provide Best Medical Services</h1>
        <p>
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.{" "}
        </p>
        <div className="grid gap-5  grid-cols-4 px-20">
          <div className="bg-pink-300 text-start rounded-2xl p-10">
            <img className="w-10" src="success-doctor.png" alt="" />
            <CountUp
              start={0}
              end={199}
              delay={0}
              duration={2}
              enableScrollSpy
              scrollSpyDelay={100}
            >
              {({ countUpRef }) => (
                <div className="flex my-2 text-3xl font-bold items-center">
                  <span className="text-3xl font-bold" ref={countUpRef} />
                  <h1>+</h1>
                </div>
              )}
            </CountUp>
            <h2 className="text-gray-500">Total Doctors</h2>
          </div>
          <div className="text-start rounded-2xl p-10">
            <img className="w-10" src="success-review.png" alt="" />
            <CountUp
              start={0}
              end={467}
              delay={0}
              duration={2}
              enableScrollSpy
              scrollSpyDelay={100}
            >
              {({ countUpRef }) => (
                <div className="flex my-2 text-3xl font-bold items-center">
                  <span className="text-3xl font-bold" ref={countUpRef} />
                  <h1>+</h1>
                </div>
              )}
            </CountUp>
            <h2 className="text-gray-500">Total Reviews</h2>
          </div>
          <div className="text-start rounded-2xl p-10">
            <img className="w-10" src="success-patients.png" alt="" />
            <CountUp
              start={0}
              end={1900}
              delay={0}
              duration={2}
              enableScrollSpy
              scrollSpyDelay={100}
            >
             {({ countUpRef }) => (
                <div className="flex my-2 text-3xl font-bold items-center">
                  <span className="text-3xl font-bold" ref={countUpRef} />
                  <h1>+</h1>
                </div>
              )}
            </CountUp>
            <h2 className="text-gray-500">Patients</h2>
          </div>
          <div className="text-start rounded-2xl p-10">
            <img className="w-10" src="success-staffs.png" alt="" />
            <CountUp
              start={0}
              end={300}
              delay={0}
              duration={2}
              enableScrollSpy
              scrollSpyDelay={100}
            >
              {({ countUpRef }) => (
                <div className="flex my-2 text-3xl font-bold items-center">
                  <span className="text-3xl font-bold" ref={countUpRef} />
                  <h1>+</h1>
                </div>
              )}
            </CountUp>
            <h2 className="text-gray-500">Total Stuffs</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
