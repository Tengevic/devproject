import { Injectable } from "@angular/core";
import { Encouters } from "./encounters.model";

@Injectable({providedIn:'root'})
export class EncounterService{
  encounterList: Encouters[] = [
    new Encouters(1, 1, 1, '3-1-2022', 'postive', 100,'3-1-2022'),
    new Encouters(2, 1, 1, '3-2-2022', 'postive', 170,'3-3-2022'),
    new Encouters(3, 1, 1, '3-3-2022', 'postive', 160,'3-3-2022'),
    new Encouters(4, 2, 1, '3-1-2022', 'postive', 100,'3-1-2022'),
    new Encouters(5, 3, 1, '3-3-2022', 'postive', 160,'3-3-2022'),
  ];

  getEncounter(id: number){
    let encounter: Encouters[] =[] ;
    for (let index = 0; index < this.encounterList.length; index++) {
      if(this.encounterList[index].patientId == id){
      encounter.push(this.encounterList[index])
      }

    }
    return encounter;
  }
}
