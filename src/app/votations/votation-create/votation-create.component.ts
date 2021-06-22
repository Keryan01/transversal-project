import { Router } from '@angular/router';
import { VotationService } from './../votation.service';
import { Component, OnInit } from '@angular/core';
import { Tag } from '../votation';

@Component({
  selector: 'app-votation-create',
  templateUrl: './votation-create.component.html',
  styleUrls: ['./votation-create.component.css']
})
export class VotationCreateComponent implements OnInit {

  user_id: number = Number(sessionStorage.getItem("id"));
  tag_id!: number;
  title!: string;
  content!: string;
  creation_date!: Date;
  closing_date!: Date;

  tags!: Tag[];

  constructor(private votationService: VotationService, private router: Router) { }

  ngOnInit(): void {
    this.votationService.getTags().subscribe(res => this.tags = res);
  }

  onSubmit() {
    this.votationService.createVotation(this.user_id, this.tag_id, this.title, this.content, this.creation_date, this.closing_date)
    this.router.navigate(['']);
  }

  chooseTag(id: number) {
    this.tag_id = id;
  }

}
