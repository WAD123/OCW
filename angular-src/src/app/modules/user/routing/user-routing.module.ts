import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './../components/layout/layout.component';
import { RegisterComponent } from './../components/register/register.component';
import { LoginComponent } from './../components/login/login.component';
import { ProfileComponent } from './../components/profile/profile.component';
import { BookRoomComponent } from './../components/book-room/book-room.component';
import { BookSpaceComponent } from './../components/book-space/book-space.component';
import { MyBookingsComponent } from './../components/my-bookings/my-bookings.component';
import { FeedsComponent } from './../components/feeds/feeds.component';
import { AccountSettingsComponent } from './../components/account-settings/account-settings.component';

import { PageNotFoundComponent } from './../../../shared/components/page-not-found/page-not-found.component';
import {AuthGuard} from '../guards/auth.guard';

const userRoutes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'dashboard', component: LayoutComponent },
  {
    path: 'user',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProfileComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'bookRoom', component: BookRoomComponent },
      { path: 'bookSpace', component: BookSpaceComponent },
      { path: 'myBookings', component: MyBookingsComponent },
      { path: 'feeds', component: FeedsComponent },
      { path: 'accountSettings', component: AccountSettingsComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class UserRoutingModule { }
