import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {globals} from '../helpers/globals';

@Injectable()
export class AuthService {
    constructor(private http: Http) {
      }
    public getToken(): string {
        return localStorage.getItem('token');
    }
    public isAuthenticated(): boolean {
        const token = this.getToken();
        if(token)
            return true;
        else
            return false;
    }
    public login(data){
        return this.http.post(globals.baseUrl+'/users/login',data).map(res => res.text().length > 0 ? res.json() : null);
    }
    public register(data){
        return this.http.post(globals.baseUrl+'/users/register',data).map(res => res.text().length > 0 ? res.json() : null);
    }
}