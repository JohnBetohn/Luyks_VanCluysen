import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DogParkService {
        constructor(private _http: HttpClient) {}
        get Lijst() : Observable<IDogParkRoot[]> {
                return this._http.get<IDogParkRoot[]>("http://datasets.antwerpen.be/v4/gis/hondenloopzone.json");
        }
    }

export interface Paging {
    records: number;
    pages: number;
    pageCurrent: number;
    pageNext?: any;
    pagePrev?: any;
    pageSize: number;
}

export interface Datum {
    id: string;
    point_lat: string;
    point_lng: string;
    thema: string;
    type: string;
    subtype: string;
    naam: string;
    straatnaam: string;
    postcode: string;
    district: string;
    publiek_detail: string;
    bereik?: any;
    grond_opp: string;
    opp_ha: string;
    lgst_niv: string;
    hgst_niv: string;
    x_coord: string;
    y_coord: string;
    ligging: string;
    bezoekersaantal: string;
    algemeen_uitzicht: string;
    netheid: string;
    hoogte_afsluiting: string;
    materiaal_afsluiting: string;
    aantal_vuilnisbakken: string;
    aantal_zitbanken: string;
    verlichting: string;
    andere_objecten: string;
    type_ondergrond: string;
    quotering_algemeen: string;
    shape?: any;
    objectid: number;
}

export interface IDogParkRoot {
    paging: Paging;
    data: Datum[];
}
