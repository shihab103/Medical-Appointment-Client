import React from "react";
import { useLoaderData, useParams } from 'react-router';

const DoctorDetails = () => {
  const data = useLoaderData();
  // console.log(data);
  const {id} = useParams();
  // console.log(id);
  const singleDoctor = data.find(doctor => doctor.id === parseInt(id));
  // console.log(singleDoctor);



  return (
    <div className="px-20">
      <div className="bg-white mb-10 text-center py-18 rounded-2xl">
        <h1 className="text-4xl mb-3 font-bold">Doctor's Profile Details</h1>
        <p className="px-20 text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      {/* card */}
      <div className="flex bg-white p-7 rounded-2xl">
        <div className="w-[230px] mr-5">
          <img src={singleDoctor.image} alt="" />
        </div>
        <div className="content-center">
          <h1 className="font-bold text-3xl mb-3">{singleDoctor.name}</h1>
          <p className="text-gray-500">{singleDoctor.education}</p>
          <p className="text-gray-500 mb-4">{singleDoctor.speciality}</p>

          <p className="text-gray-500 mb-2">Working at</p>
          <h1 className="font-semibold mb-2">
            {singleDoctor.workingAt}
          </h1>
          <hr className="border-dashed border-gray-400" />

          <p className="text-gray-500 my-2">Reg NO: {singleDoctor.registrationNumber}</p>
          <hr className="border-dashed border-gray-400" />

          <h1 className="mt-2">
            <span className="font-bold">Availability: </span> sunday
          </h1>
          <h2>
            <span className="font-bold">consultation Fee:</span> Taka: {singleDoctor.consultationFee}
          </h2>
        </div>
      </div>

      <div className="bg-white py-10 mt-10 rounded-2xl px-5">
        <h1 className="font-bold text-2xl text-center mb-5">Book an Appointment</h1>
        <hr className="border-dashed border-gray-400" />

        <div className="flex items-center py-2 justify-between">
          <h1 className="font-semibold">Availability</h1>
          <h1 className="btn btn-outline rounded-full bg-[#e6f4ea] btn-success">
            Doctor Available Today
          </h1>
        </div>
        <hr className="border-dashed border-gray-400" />

        <p className="text-yellow-400 ps-3 py-2 my-2 bg-[#fff5e5] rounded-full">
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </p>
        <button className="btn w-full rounded-full text-white bg-[#176ae5]">Book Appointment Now</button>
      </div>
    </div>
  );
};

export default DoctorDetails;
