import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

const routes: Routes = [

  {path: '', component: FirstPageComponent},
  {path: 'encouters/:id', component: PatientDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
