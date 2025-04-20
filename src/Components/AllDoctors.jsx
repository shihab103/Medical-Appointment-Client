import React, { use } from 'react';
import DoctorsCard from './DoctorsCard';

const AllDoctors = ({DoctorPromise}) => {
    const doctorData = use(DoctorPromise);
    // console.log(doctorData);
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Our Best Doctors</h1>
            <p className='mt-4m text-gray-500 px-40 text-center mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 px-20">
                {
                    doctorData.map((doctor,index) => <DoctorsCard
                    key={index}
                    doctor={doctor}
                    ></DoctorsCard>
                    )
                }
            </div>
        </div>
    );
};

export default AllDoctors;