export class Encouters{
  public encounterId: any;
  public  patientId: number;
  public location_id: number;
  public encounter_datetime: any;
  public hiv_status: string;
  public vl: number;
  public date_created: any;

  constructor(encounterId: any, patientId: number, location_id: number, encounter_datetime: any , hiv_status: string, vl:number, date_created: any){
    this.encounterId = encounterId;
    this.patientId = patientId;
    this.location_id = location_id;
    this.encounter_datetime= encounter_datetime
    this.hiv_status = hiv_status;
    this.vl = vl;
    this.date_created = date_created;
  }
}
