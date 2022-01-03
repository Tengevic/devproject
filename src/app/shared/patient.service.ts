import { Injectable } from "@angular/core";
import { Patient } from "./patient.model";

@Injectable({providedIn:'root'})
export class PatientService{

  patientList: Patient[] = [
    new Patient( 1, 'patient1' ,'19-12-1998','male', 798076768, '19-11-2002' , ),
    new Patient( 2, 'patient2' ,'19-12-1997','Female', 798076768, '19-11-2002' , ),
    new Patient( 3, 'patient3' ,'19-12-1997','Female', 798076768, '19-11-2002' , ),
    new Patient( 4, 'patient3' ,'19-12-1997','Female', 798076768, '19-11-2002' , )
  ];


  getPatients(){
    return this.patientList.slice();
  }
  getPatient(name:string){
    let patient: Patient[] =[] ;
    for (let index = 0; index < this.patientList.length; index++) {
      if (this.patientList[index].name === name) {
        patient.push(this.patientList[index])
      }

    }
    return patient;
  }
  getPatientName(id:number){

    let patient  ;
    for (let index = 0; index < this.patientList.length; index++) {
      if (this.patientList[index].idpatient == id) {
        patient = this.patientList[index]

      }

    }
    return patient;

  }
}
