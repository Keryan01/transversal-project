import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Votation } from '../votations/votation';

@Component({
  selector: 'app-add-vote',
  templateUrl: './add-vote.component.html',
  styleUrls: ['./add-vote.component.css']
})
export class AddVoteComponent implements OnInit {

  url = "http://localhost:3000";

  postForm: FormGroup = this.formBuilder.group({


    title: '',
    content: '',
    creation_date: Date,
    closing_date: Date,
    tag: '',




  });;

  addVotation(data: Votation) {

    this.http.post<Votation>(this.url + "/addVotation", { "title": data.title, "content": data.content, "creation_date": data.creation_date, "closing_date": data.closing_date }).subscribe();


  }
  onSubmit() {

    this.addVotation(this.postForm.value);
    this.postForm.reset();



  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

}
