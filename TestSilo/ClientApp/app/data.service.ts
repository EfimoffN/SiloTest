import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Silo } from './silo';
 
@Injectable()
export class DataService {
 
    private url = "/api/silos";
 
    constructor(private http: HttpClient) {
    }
 
    getSilos() {
        return this.http.get(this.url);
    }
 
    createSilos(silo: Silo) {
        return this.http.post(this.url, silo);
    }
    updateSilos(silo: Silo) {  
        return this.http.put(this.url + '/' + silo.id, silo);
    }
    deleteSilos(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}