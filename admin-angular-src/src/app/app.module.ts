import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './app.component';
import { CreateuserComponent } from './components/admin/createuser/createuser.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {AuthService} from './services/auth.service';
import {ValidateService} from './services/validate.service';
import {AuthGuard} from './guards/auth.guard';
import { ManagebookingsComponent } from './components/admin/managebookings/managebookings.component';
import { BookRoomComponent } from './components/bookroom/bookroom.component';
// import { BookRoomComponent } from './components/admin/createbookings/createbookings.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { InventoryComponent } from './components/admin/inventory/inventory.component';
import { EditusersComponent } from './components/admin/editusers/editusers.component';
import { ReportsComponent } from './components/admin/reports/reports.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CustomersComponent } from './components/admin/customers/customers.component';
import { AdminComponent } from './components/admin/admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BookspaceComponent } from './components/bookspace/bookspace.component';

const appRoutes: Routes =  [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'reports',
        pathMatch: 'full'
      },
      {
        path: 'reports',
        component: ReportsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'createuser',
        component: CreateuserComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'managebookings',
        component: ManagebookingsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'createbookings',
        component: BookRoomComponent,
        canActivate: [AuthGuard]
        
      },
      {
        path: 'inventory',
        component: InventoryComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edituser',
        component: EditusersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'customers',
        component: CustomersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'bookSpace',
        component: BookspaceComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {path:'', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent },
  // {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  // {path:'createuser', component: CreateuserComponent, canActivate:[AuthGuard]},
  // {path:'managebookings', component: ManagebookingsComponent, canActivate:[AuthGuard]},
  // {path:'inventory', component: InventoryComponent, canActivate:[AuthGuard]},
  // {path:'edituser', component: EditusersComponent, canActivate:[AuthGuard]},
  // {path:'reports', component: ReportsComponent, canActivate:[AuthGuard]},
  // {path:'customers', component: CustomersComponent, canActivate:[AuthGuard]}
  ]

@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    ManagebookingsComponent,
    BookRoomComponent,
    InventoryComponent,
    EditusersComponent,
    ReportsComponent,
    LoaderComponent,
    CustomersComponent,
    AdminComponent,
    SidebarComponent,
    BookspaceComponent
  ],
  imports: [  BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpModule,
    NouisliderModule,
    
    BsDatepickerModule.forRoot(),
    
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [AuthService, ValidateService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
