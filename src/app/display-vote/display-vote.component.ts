import { Component, OnInit } from '@angular/core';
import { Votation } from '../votation';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-vote',
  templateUrl: './display-vote.component.html',
})
export class DisplayVoteComponent implements OnInit {
  url = 'http://localhost:3000';

  votes = this.getVotation();

  constructor(

    private http: HttpClient
  ) { }

  ngOnInit() { }

  getVotation() {
    return this.http.get<Votation[]>(this.url + '/displayvote');
  }
}
