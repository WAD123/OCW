import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { globals } from '../helpers/globals';

@Injectable()
export class KYCService {
    constructor(private http: Http) {
    }

    public uploadKYC(data) {
        return this.http.post(globals.baseUrl + '/users/KYC', data).map(res => res.text().length > 0 ? res.json() : null);
    }
    public getUserInfo(id){
        return this.http.get(globals.baseUrl + '/users/getUserInfo?id='+id).map(res => res.text().length > 0 ? res.json() : null);
    }
    
}