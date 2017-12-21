import { Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http/src/client';
import { Injectable } from '@angular/core';

@Injectable()
export class DogParkService {
    constructor(private _http: HttpClient) {}
        get List(): Observable<IPlayAreaRoot> {
            return this._http.get<IPlayAreaRoot>('http://datasets.antwerpen.be/v4/gis/speelterreinen.json');

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
        objectid: number;
        point_lat: string;
        point_lng: string;
        shape?: any;
        id: string;
        naam: string;
        straat: string;
        huisnummer: string;
        postcode: string;
        district: string;
        begindatum: string;
        toestellen: string;
        financiering: string;
        opmerking: string;
        x_coord: string;
        y_coord: string;
        gisid: string;
    }

    export interface IPlayAreaRoot {
        paging: Paging;
        data: Datum[];
    }