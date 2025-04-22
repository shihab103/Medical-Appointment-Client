import React, { use, useEffect, useState } from "react";
import DoctorsCard from "./DoctorsCard";

const AllDoctors = ({ DoctorPromise }) => {
  const doctorData = use(DoctorPromise);
  const [displayDoctors, SetDisplayDoctors] = useState([]);

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      SetDisplayDoctors(doctorData);
    } else {
      SetDisplayDoctors(doctorData.slice(0, 6));
    }
  }, [doctorData, showAll]);

  // console.log(doctorData);
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">Our Best Doctors</h1>
      <p className="mt-4 text-gray-500 lg:px-40 px-10 text-center mb-8">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 px-5 lg:px-20">
        {displayDoctors.map((doctor, index) => (
          <DoctorsCard key={index} doctor={doctor}></DoctorsCard>
        ))}
      </div>
      <button
        onClick={() => {
            setShowAll((prv => !prv))
            if(showAll){window.scrollTo(0,820)}
        }}
        className="btn mt-8 rounded-full btn-primary"
      >
        {showAll ? 'Show Less' : 'Show All'}
      </button>
    </div>
  );
};

export default AllDoctors;
