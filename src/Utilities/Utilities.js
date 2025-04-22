export const getAppointment = ()=>{
    const appointment = localStorage.getItem('appointment');
    if(appointment){
        return JSON.parse(appointment);
    }
    else{
        return [];
    }
}

export const addAppointment = doctor => {
    // console.log(phone);
    const appointment = getAppointment();
    const isExist = appointment.find(d => d.id === doctor.id);
    if(isExist)return console.log('doctor add');

    appointment.push(doctor)
    localStorage.setItem('appointment',JSON.stringify(appointment))
}

export const removeAppointment=(id)=>{
    console.log(id);
    const appointment = getAppointment();
    const remainingFavorites = appointment.filter(doc => doc.id !== id);
    localStorage.setItem('appointment',JSON.stringify(remainingFavorites))

}