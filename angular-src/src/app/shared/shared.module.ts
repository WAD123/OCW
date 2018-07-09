import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PageNotFoundComponent,
    ErrorComponent
],
exports: [
    PageNotFoundComponent,
    ErrorComponent
]})
export class SharedModule { }
