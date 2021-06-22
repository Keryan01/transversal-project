import { VotationService } from './../votation.service';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Votation, Result } from '../votation';

@Component({
  selector: 'app-votation',
  templateUrl: './votation.component.html',
  styleUrls: ['./votation.component.css']
})
export class VotationComponent implements OnInit {

  userId: number = Number(sessionStorage.getItem("id"));
  votation!: Votation[];
  votationId!: number;
  resultYes: number = 0;
  resultNo: number = 0;
  result: number = 0;
  connected: boolean = Boolean(sessionStorage.getItem("connected"));
  isVoted!: number;
  idautho!: number;


  constructor(private http: HttpClient, private _Activatedroute: ActivatedRoute, private votationService: VotationService) { }


  ngOnInit(): void {

    this.getValues().subscribe(res => this.votation = res);
    this.votationService.getResult(this.votationId).subscribe(res => this.result = (res[0].result) * 100);
    this.checkAnswer(Number(this.userId), this.votationId)

    setTimeout(() => {
      if (this.result != 0) {
        this.resultYes = this.result;
        this.resultNo = 100 - this.result;
      }

    }, 500);


  }
  getValues() {
    this.votationId = Number(this._Activatedroute.snapshot.paramMap.get("id"));
    return this.http.get<Votation[]>("http://localhost:3000/getVotation/" + this.votationId);
  }
  voteYes() {


    if (this.isVoted == 0) {
      this.votationService.vote(Number(this.userId), this.votationId, 1)

      window.location.reload();
    }

  }

  voteNo() {
    if (this.isVoted == 0) {
      this.votationService.vote(Number(this.userId), this.votationId, 0)

      window.location.reload();
    }

  }

  checkAnswer(user_id: number, votation_id: number) {
    this.http.get<Result[]>("http://localhost:3000/checkAnswer/" + user_id + "/" + votation_id).subscribe(res => this.isVoted = res[0].result);
  }




}
