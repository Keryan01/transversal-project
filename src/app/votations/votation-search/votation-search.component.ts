import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Votation } from '../votation';

@Component({
  selector: 'app-votation-search',
  templateUrl: './votation-search.component.html',
  styleUrls: ['./votation-search.component.css']
})
export class VotationSearchComponent implements OnInit {

  values: any;
  title!: string;
  content!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  displayAll() {
    this.values = this.http.get<Votation[]>("http://localhost:3000/displayvote");
  }

  getValuesTitle(title: string) {
    return this.http.get<any>("http://localhost:3000/searchTitle/" + title);
  }

  getValuesContent(content: string) {
    return this.http.get<any>("http://localhost:3000/searchContent/" + content);
  }

  onSubmitTitle() {
    this.values = this.getValuesTitle(this.title);
  }

  onSubmitContent() {
    this.values = this.getValuesContent(this.content);
  }
}
