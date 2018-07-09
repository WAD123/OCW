import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SharedModule } from './shared/shared.module';
// import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    // NgbModule.forRoot(),
    SharedModule,
    AppRoutingModule
  ],
  // exports:[PageNotFoundComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
