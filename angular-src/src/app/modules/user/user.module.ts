import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NouisliderModule } from 'ng2-nouislider';
// import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/request.interceptor';

import { UserRoutingModule } from './routing/user-routing.module';

import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BookRoomComponent } from './components/book-room/book-room.component';
import { BookSpaceComponent } from './components/book-space/book-space.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import {KYCComponent} from './components/kyc/kyc.component';
// import { PageNotFoundComponent } from './../../shared/components/page-not-found/page-not-found.component';
import {SharedModule} from '../../shared/shared.module'
import { AuthService } from './services/auth.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NouisliderModule,
    // DlDateTimePickerDateModule,
    // NgbModule,
    UserRoutingModule,
    SharedModule
    
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },AuthService
  ],
  declarations: [RegisterComponent, LoginComponent, ProfileComponent, BookRoomComponent, BookSpaceComponent, LayoutComponent, MyBookingsComponent, FeedsComponent, AccountSettingsComponent,KYCComponent]
})
export class UserModule { }
