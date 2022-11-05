import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RepeatDirective } from './repeat.directive';
import { BookRideComponent } from './book-ride/book-ride.component';
import { RidehoverDirective } from './ridehover.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RidefilterPipe } from './ridefilter.pipe';
import { CourselistComponent } from './courselist/courselist.component';
import { TimerComponent } from './timer/timer.component';
import { RidedetailsComponent } from './ridedetails/ridedetails.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { RideRegistrationComponent } from './ride-registration/ride-registration.component';
import { BookComponent } from './book/book.component';
import { ObservableComponent } from './observable/observable.component';
import { RoutingModule } from './routing/routing.module';
import { PathnotfoundComponent } from './pathnotfound/pathnotfound.component';
import { MyridesComponent } from './myrides/myrides.component';
import { MyRidesPipe } from './myrides/my-rides.pipe';
import { HistoryComponent } from './history/history.component';
import { SignupComponent } from './signup/signup.component';
import { HistoryFilterPipe } from './history/history-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RepeatDirective,
    BookRideComponent,
    RidehoverDirective,
    RidefilterPipe,
    CourselistComponent,
    TimerComponent,
    RidedetailsComponent,
    RegistrationformComponent,
    RideRegistrationComponent,
    BookComponent,
    ObservableComponent,
    PathnotfoundComponent,
    MyridesComponent,
    MyRidesPipe,
    HistoryComponent,
    SignupComponent,
    HistoryFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
