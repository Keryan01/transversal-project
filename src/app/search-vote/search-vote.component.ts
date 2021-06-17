import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Votation } from '../votation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-search-vote',
  templateUrl: './search-vote.component.html',
  styleUrls: ['./search-vote.component.css']
})
export class SearchVoteComponent implements OnInit {
  url = "http://localhost:3000";
  votes = this.titleSubmit();
  title: string = '';

  titleSearch: FormGroup = this.formBuilder.group({


    title: '3'




  });;
  contentSearch: FormGroup = this.formBuilder.group({


    content: ''




  });;



  titleSubmit() {

    return this.http.get<Votation[]>(this.url + '/searchTitle/' + 3);




  }
  contentSubmit() {





  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

}
