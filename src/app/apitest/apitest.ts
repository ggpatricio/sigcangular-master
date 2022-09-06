
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Equipments, EquipmentsCall } from './equipments';

@Injectable()
export class apitest
{
    constructor(private httpclient: HttpClient) {}

    // getApiInfo() : Observable<any>{
    //     return this.httpclient.get("https://localhost:44341/SigcAdm/ApiInfo")
    // } 


    public getEquipments(call: EquipmentsCall): Observable<Equipments> {
        const url = 'https://localhost:44341/SigcAdm/Equipments';

        return this.httpclient.post<Equipments>(url, call);
      }
}