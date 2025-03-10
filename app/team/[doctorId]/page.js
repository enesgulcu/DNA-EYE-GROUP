import DoctorDetails from '@/components/Team/DoctorDetails'
import React from 'react'
import {doctors} from "@/components/Team/data"

function page({params:{doctorId}}) {
  const doctor = doctors.find(doctor => doctor?.id.toString() === doctorId)
  return (
  <DoctorDetails doctor={doctor} />
  )
}

export default page