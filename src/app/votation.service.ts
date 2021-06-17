import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Votation } from './votation';
import { Component, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotationService {
  private votes:Votation[]=[];
  url = "http://localhost:3000";

  constructor(private http: HttpClient) { }
  
  addVotation(data: Votation) {
    ///this.votes.push(data);
    //this.http.post<Votation>(this.url + "/addTag", {"value":data.tag}).subscribe();
    this.http.post<Votation>(this.url + "/addVotation", {"title": data.title, "content": data.content, "creation_date":data.creation_date, "closing_date":data.closing_date}).subscribe();

    
  }


  getVotation():Observable<Votation[]>{
    return this.http.get<Votation[]>(this.url);
    
  }
}


