import { Component, OnInit } from '@angular/core';
import { Votation } from '../votation';
import { VotationService } from '../votation.service';
@Component({
  selector: 'app-display-vote',
  templateUrl: './display-vote.component.html',
  styleUrls: ['./display-vote.component.css']
})
export class DisplayVoteComponent implements OnInit {
  votes: Votation[]=[];
  constructor(public votationsImporte: VotationService) { }

  ngOnInit() {
    this.votes = this.votationsImporte.getVotation()


  }

}
