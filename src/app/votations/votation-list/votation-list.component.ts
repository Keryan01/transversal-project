import { HttpClient } from '@angular/common/http';
import { VotationService } from './../votation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votation-list',
  templateUrl: './votation-list.component.html',
  styleUrls: ['./votation-list.component.css']
})
export class VotationListComponent implements OnInit {

  votations = this.votationService.getVotations();

  constructor(private votationService: VotationService) { }

  ngOnInit(): void { }
}
