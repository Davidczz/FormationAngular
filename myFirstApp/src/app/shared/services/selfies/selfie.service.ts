import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Selfie } from 'src/app/model/selfie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SelfieService {

  constructor(private httpClient:HttpClient) { }

  getWookiesSelfies(): Selfie[] {
    const wookieList: Selfie[] = [];

    wookieList.push({ image: 'https://i.ytimg.com/vi/M1vQmU39uV8/maxresdefault.jpg', wookie: { name : 'David', selfies: []}, titre: 'Mon Beau selfie' })
    return wookieList;
  }

  getAllAsObservable(): Observable<Selfie[]> {
    return this.httpClient.get<Selfie[]>(environment.apis.wookie.url);
  }
}
