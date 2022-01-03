import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../shared/patient.model';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  patientList: Patient[] = [ ];
  isNull = false // for invalid patient name

  constructor( private patientService : PatientService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSearch(form: NgForm){
    this.isNull = false;
   this.patientList = this.patientService.getPatient(form.value.patient);

   // checks if patient list is empty
    if(this.patientList.length == 0){
      this.isNull = true;
    }

  }

}

