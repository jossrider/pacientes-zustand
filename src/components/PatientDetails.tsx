import { Patient } from "../types"

type PatientDetailsProps = {
  patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
  return <div className='mx-5 my-10 px-5 py-10 bg-white'>{patient.name}</div>
}
