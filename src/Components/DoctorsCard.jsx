import React from "react";

const DoctorsCard = ({ doctor }) => {
  // console.log(doctor);
  // const [name] = doctor;
  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={doctor.image}
            alt="Shoes"
            className="rounded-xl w-full h-[220px] object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="flex gap-5">
            <h1>Available</h1>
            <h1>{doctor.experience}</h1>
          </div>
          <h2 className="card-title">{doctor.name}</h2>
          <h2>{doctor.education}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <p>{doctor.registrationNumber}</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsCard;
