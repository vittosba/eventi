import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArtistsEvent } from '../../models/artistsEvent.model';

const baseUrl = 'http://localhost:8080/api/artistsEvent';

@Injectable({
  providedIn: 'root'
})
export class ArtistsEventService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ArtistsEvent[]> {
    return this.http.get<ArtistsEvent[]>(baseUrl);
  }

  get(id: any): Observable<ArtistsEvent> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}