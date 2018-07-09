import { Injectable } from '@angular/core';
import { HttpRequest,HttpResponse,HttpHandler,HttpEvent,  HttpInterceptor,HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

export class responseInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService,private router:Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
         if(!event.body){
            this.router.navigate(['/login']);
         }
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal
        }
      }
    });
  }
}