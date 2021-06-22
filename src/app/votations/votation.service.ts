import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Votation, Result } from './votation';

@Injectable({
  providedIn: 'root'
})
export class VotationService {

  constructor(private http: HttpClient) { }

  getVotations() {
    return this.http.get<Votation[]>("http://localhost:3000/getVotations");
  }
  getResult(id:number){

    return this.http.get<Result[]>("http://localhost:3000/getVotationResult/" + id);
  }

  vote(user_id:number, votation_id:number, value:number){

    this.http.post<any>("http://localhost:3000/addAnswer", { "user_id":user_id, "votation_id":votation_id, "value":value}).subscribe();

  }

  checkAnswer(user_id:number,votation_id:number){


      return this.http.get<Result[]>("http://localhost:3000/checkAnswer/" + user_id + "/" + votation_id);

  }
}
