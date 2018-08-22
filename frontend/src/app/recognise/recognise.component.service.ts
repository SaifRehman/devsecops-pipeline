import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { error } from 'util';
import 'rxjs/Rx';

@Injectable()
export class RecogniseService {
 
    public parameters: any;
    public params: any;
    public temp:any;

    public constructor(public http: Http) {

    }

    public recognise(image,data): Observable<any> {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'app_id':'7259d3e6',
                'app_key':'697862bb5fc4b3d0ac790297c15f1e88',
                "cache-control": "no-cache"
            })
        });
        const link = "https://api.kairos.com/recognize"
        const bodyObject = {
            image:image,
            gallery_name : data
        }
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}