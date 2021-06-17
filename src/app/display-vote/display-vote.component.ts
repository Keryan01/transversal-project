import { Component, OnInit } from '@angular/core';
import { Votation } from '../votation';
import { VotationService } from '../votation.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-display-vote',
  templateUrl: './display-vote.component.html',
  styleUrls: ['./display-vote.component.css']
})
export class DisplayVoteComponent implements OnInit {
  url = "http://localhost:3000";

  //votes: Votation[]=[];
  votes=this.getVotation();
  constructor(public votationsImporte: VotationService, private http: HttpClient) { }

  ngOnInit() {

    //this.http.get<Votation[]>(this.url);



    //this.votes = this.votationsImporte.getVotation()


  }
  getVotation(){
    return this.http.get<Votation[]>(this.url+'/displayvote' );

  }

}
