import { Component, OnInit, Input } from '@angular/core';
import { Votation } from '../votation';
import { VotationService } from '../votation.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-vote',
  templateUrl: './add-vote.component.html',
  styleUrls: ['./add-vote.component.css']
})
export class AddVoteComponent implements OnInit {



  postForm: FormGroup = this.formBuilder.group({

    id_client:28,
    title: '',
    content: '',
    creation_date:Date,
    closing_date:Date,
    tag:112,
    final_answer: 0.5



  });;
  onSubmit() {

    this.votationService.addVotation(this.postForm.value);


  }
  constructor(private formBuilder: FormBuilder,public votationService:VotationService) { }

  ngOnInit(): void {
  }

}
