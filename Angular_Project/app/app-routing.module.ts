import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './DIR-Layout/driver/driver.component';

export const routes: Routes = [  
  {path:'driver',component:DriverComponent},
  { path: '', component: DriverComponent }, 
];
@NgModule({
  exports: [ RouterModule ] 
})

export class AppRoutingModule {

  
}