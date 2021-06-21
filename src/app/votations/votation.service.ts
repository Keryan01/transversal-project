import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Votation } from './votation';

@Injectable({
  providedIn: 'root'
})
export class VotationService {

  constructor(private http: HttpClient) { }

  getVotations() {
    return this.http.get<Votation[]>("http://localhost:3000/getVotations");
  }
}
