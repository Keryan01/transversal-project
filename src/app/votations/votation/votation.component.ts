import { VotationService } from './../votation.service';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-votation',
  templateUrl: './votation.component.html',
  styleUrls: ['./votation.component.css']
})
export class VotationComponent implements OnInit {

  userId: string | null = sessionStorage.getItem("id");
  values: any;
  votationId!:number;
  result:number=0;

  constructor(private http: HttpClient, private _Activatedroute: ActivatedRoute, private votationService:VotationService) { }


  ngOnInit(): void {
    this.values = this.getValues();
    this.votationService.getResult(this.votationId).subscribe(res => this.result=(res[0].result)*100)


  }


  getValues() {
    this.votationId = Number(this._Activatedroute.snapshot.paramMap.get("id"));
    return this.http.get<any>("http://localhost:3000/getVotation/" + this.votationId);
  }

  alreadyVoted(){
    var voted;
    this.votationService.checkAnswer(Number(this.userId), this.votationId).subscribe(res =>voted=res[0] );
  }

  voteYes(){

    this.votationService.vote(Number(this.userId), this.votationId,1)

    window.location.reload();

}
  voteNo(){
    this.votationService.vote(Number(this.userId), this.votationId,0)
    window.location.reload();
  }

}
