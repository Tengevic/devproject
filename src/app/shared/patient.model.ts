export class Patient{
  public idpatient: any;
  public name: string;
  public dob: string;
  public gender: string;
  public phone_number: number;
  public date_created: any;

  constructor(idpatient: number, name: string, dob: string, gender: string, phone_number: number, date_created:string){
    this.idpatient = idpatient;
    this.name = name;
    this.dob = dob;
    this.gender = gender;
    this.phone_number = phone_number;
    this.date_created = date_created;
  }



}
