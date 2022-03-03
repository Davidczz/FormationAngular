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

  getAllAsObservable(): Observable<Selfie[]> {
    return this.httpClient.get<Selfie[]>(environment.apis.wookie.url);
  }

  ajouter(selfie: Selfie):Observable<Selfie> {
    return this.httpClient.post<Selfie>(environment.apis.wookiePost.url, selfie);
  }
}
