import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../shared/patient.model';
import { PatientService } from '../shared/patient.service';
import { EncounterService } from './encounter.service';
import { Encouters } from './encounters.model';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  patientId: any;
  patient: any;
  encounters : Encouters[] = [];
  constructor( private patientService : PatientService,
               private route: ActivatedRoute,
               private encounterService : EncounterService) { }

  ngOnInit(): void {
    //get patient id from route link
    this.patientId = this.route.snapshot.params['id'];

    //get patient details from patient service
      this.patient  = this.patientService.getPatientName(this.patientId);

     //get encounters from encounter service
     this.encounters = this.encounterService.getEncounter(this.patientId);


    }

}
