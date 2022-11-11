import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RideRegistrationComponent } from '../ride-registration/ride-registration.component';
import { BookRideComponent } from '../book-ride/book-ride.component';
import { PathnotfoundComponent } from '../pathnotfound/pathnotfound.component';
import { MyridesComponent } from '../myrides/myrides.component';
import { HistoryComponent } from '../history/history.component';
import { SignupComponent } from '../signup/signup.component';
import { AdminComponent } from '../admin/admin.component';
import { LogsComponent } from '../logs/logs.component';

const appRoutes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'logs',component:LogsComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'ride-register',component:RideRegistrationComponent},
  {path:'bookride',component:BookRideComponent},
  {path:'myrides',component:MyridesComponent},
  {path:'history',component:HistoryComponent},
  {path:'offerride',component:RideRegistrationComponent},
  {path:'bookride/:user',component:BookRideComponent},
  {path:'**',component:PathnotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
