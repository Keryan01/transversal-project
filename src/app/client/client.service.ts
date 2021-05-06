import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<Client[]>(this.url + "/allClients");
  }
}
