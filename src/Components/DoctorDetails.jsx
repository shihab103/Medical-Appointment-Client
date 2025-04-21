import React from "react";
// import { useLoaderData } from 'react-router';

const DoctorDetails = () => {
  // const data = useLoaderData();
  // console.log(data);
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
          <img src="doctor-sample.png" alt="" />
        </div>
        <div className="content-center">
          <h1 className="font-bold text-3xl mb-3">Dr. Cameron Williamson</h1>
          <p className="text-gray-500">MBBS,MD</p>
          <p className="text-gray-500 mb-4">General Medicine,DNB</p>

          <p className="text-gray-500 mb-2">Working at</p>
          <h1 className="font-semibold mb-2">
            TMMS Medical College & Rafatullah Community Hospital, Bogura
          </h1>
          <hr className="border-dashed border-gray-400" />

          <p className="text-gray-500 my-2">Reg NO: BD12341254</p>
          <hr className="border-dashed border-gray-400" />

          <h1 className="mt-2">
            <span className="font-bold">Availability: </span> sunday
          </h1>
          <h2>
            <span className="font-bold">consultation Fee:</span> Taka: 273
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
