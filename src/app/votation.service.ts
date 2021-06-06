import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Votation } from './votation';
import { Component, Output, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VotationService {
  private votes:Votation[]=[];
 /* url = "http://localhost:3000";

  constructor(private http: HttpClient) { }
  votation:Votation[]=[]
  addVotation(data: String) {
    return this.http.post<Votation>(this.url + "/addVotations", data).subscribe();
  }*/

  addVotation(data: Votation) {
    this.votes.push(data);

  }
  getVotation(){
    return this.votes;
  }
}


