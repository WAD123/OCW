import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {globals} from '../helpers/globals';

@Injectable()
export class CommonService {

    // private _spacePackages: any = {
    //     "hotdesk" : [
    //         { "code":"_1DP", "value":"One Day" },
    //         { "code":"_4DP", "value":"Four Day"},
    //         { "code":"_10DP", "value":"Ten Day"}
    //     ],
    //     "permanent" : [
    //         {"code":"_18DP", "value":"Eighteen Day"},
    //         {"code":"_30DP", "value":"Thirty Day"}
    //     ]
    // };

    private _spacePackages: any = [
        { code:"_1DP", title:"1 Day", value:1, spaceType:"hotdesk" },
        { code:"_4DP", title:"4 Day", value:4, spaceType:"hotdesk" },
        { code:"_10DP", title:"10 Day", value:10, spaceType:"hotdesk" },
        { code:"_18DP", title:"18 Day", value:18, spaceType:"permanent" },
        { code:"_30DP", title:"30 Day", value:30, spaceType:"permanent" }
    ];

    private _locations: any = [
        {"id":1, "name":"Netaji Subhash Place"},
        {"id":2, "name":"Gurgaon"},
        {"id":3, "name":"Connaught Place"},
        {"id":4, "name":"Bengaluru"}
    ];

    private _plans: any = [
        {title:"Meeting Room",planType:'MTR'},
        {title:"Training Room",planType:'TR'},
        {title:"Private Room",planType:'PVTR'},
        {title:"Tailor-Made Room",planType:'TLRMR'}
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
        return this.http.post(globals.baseUrl+'/users/register',data).map(res => res.text().length > 0 ? res.json() : null);
    }
    public getLocationById(id){
        return this._locations.find(function (el, index){if(el.id == id){return el;}});
    }
    public getSpacePackages(){
        return this._spacePackages;
    }
}
