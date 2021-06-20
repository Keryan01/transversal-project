import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Votation } from '../votation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-search-vote',
  templateUrl: './search-vote.component.html',
  styleUrls: ['./search-vote.component.css']
})
export class SearchVoteComponent implements OnInit {

  values: any;
  title!: string;
  content!: string;


  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }




  displayAll(){

    this.values= this.http.get<Votation[]>( "http://localhost:3000/displayvote");

  }


  getValuesTitle(title:string) {

      return this.http.get<any>("http://localhost:3000/searchTitle/"+title);
  }

  getValuesContent(content:string) {

    return this.http.get<any>("http://localhost:3000/searchContent/"+content);
}
  onSubmitTitle() {
      this.values = this.getValuesTitle(this.title);


  }
  onSubmitContent() {
    this.values = this.getValuesContent(this.content);


  }

}
