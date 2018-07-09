import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Baseurl} from '../helpers/global';

@Injectable()
export class CommonService {

    private _spacePackages: any = [
        { "code":"_1DP", "value":"One Day", "spaceType":"hotdesk" },
        { "code":"_4DP", "value":"Four Day", "spaceType":"hotdesk" },
        { "code":"_10DP", "value":"Ten Day", "spaceType":"hotdesk" },
        { "code":"_18DP", "value":"Eighteen Day", "spaceType":"permanent" },
        { "code":"_30DP", "value":"Thirty Day", "spaceType":"permanent" }
    ];

    private _locations: any = [
        {"id":1, "name":"Netaji Subhash Place"},
        {"id":2, "name":"Gurgaon"},
        {"id":3, "name":"Connaught Place"},
        {"id":4, "name":"Bengaluru"}
    ];

    constructor(private http: Http) {}

    public getAmentiesType(){
        return ["LCD","Projector","Others"];
    }
    public getLocations(data){
        return ["Netaji Subhash Place","Gurgaon","Connaught Place","Bengaluru"];
    }
    public getSpaceType(){
        return Object.keys(this._spacePackages);
    }
    public getHotDeskPackages(){
        return this._spacePackages["hotdesk"];
    }
    public getPermanentPackages(){
        return this._spacePackages["permanent"];
    }
    public getRoomPackages(){
        return [{title:"Meeting Room",planType:'MTR'},{title:"Training Room",planType:'TR'},{title:"Private Room",planType:'PVTR'},{title:"Tailor-Made Room",planType:'TLRMR'}];
    }
    public register(data){
        return this.http.post(Baseurl+'/users/register',data).map(res => res.text().length > 0 ? res.json() : null);
    }
    public getSpacePackages(){
        return this._spacePackages;
    }
}
