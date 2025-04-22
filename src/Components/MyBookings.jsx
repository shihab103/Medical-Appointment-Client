import React, { useEffect, useState } from "react";
import { getAppointment, removeAppointment } from "../Utilities/Utilities";

const MyBookings = () => {
  const [displayDoctors, SetDisplayDoctors] = useState([]);
  useEffect(() => {
    const savedDoctor = getAppointment();
    SetDisplayDoctors(savedDoctor);
  }, []);

  const handleDelete = id => {
    removeAppointment(id)
    SetDisplayDoctors(getAppointment())
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-5 mb-2">
        My Today Appointments
      </h1>
      <p className="text-center text-gray-500">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      {/* card */}
      {displayDoctors.map((doc, id) => (
        <div key={id} className="bg-white px-5 py-10 mx-20 rounded-2xl mt-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-semibold mb-2 text-xl">
                {doc.name}
              </h1>
              <h1 className="text-gray-500">{doc.education}</h1>
            </div>
            <div>
              <p className="text-gray-500">Appointment Fee : {doc.consultationFee} Taka + Vat</p>
            </div>
          </div>
          <hr className="border-dashed my-3 border-gray-400" />
          <button onClick={()=>handleDelete(id)} className="btn hover:bg-red-500 hover:text-white text-red-500 btn-outline w-full rounded-full">
            Cancel Appointment
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
