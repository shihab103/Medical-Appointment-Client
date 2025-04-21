import React from "react";
import { NavLink } from "react-router";

const DoctorsCard = ({ doctor }) => {
  // console.log(doctor);
  // const [name] = doctor;
  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-5 pt-5">
          <img
            src={doctor.image}
            alt="Shoes"
            className="rounded-xl w-full h-[220px] object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="flex w-full gap-2">
          <button className="btn btn-outline rounded-full bg-[#e6f4ea] btn-success">Available</button>
            <button className="btn btn-outline rounded-full bg-[#e7f0fc] btn-info">{doctor.experience}</button>
          </div>
          <div className="text-start w-full">
          <h2 className="card-title">{doctor.name}</h2>
          <h2 className="text-gray-500 mt-2">{doctor.education}</h2>
          <hr className="mt-3 border-dashed border-gray-400" />
          </div>
          <div className="flex flex-col w-full text-start">
            <p className="mb-2 text-gray-600">{doctor.registrationNumber}</p>
            <NavLink to={`/doctor-details/${doctor.id}`}><button className="btn btn-info rounded-full btn-outline">View Details</button></NavLink>
            {/* <NavLink to='/doctor-details'><button className="btn btn-info rounded-full btn-outline">View Details</button></NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsCard;
