import { ClientService } from './client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });;

  constructor(private formBuilder: FormBuilder, private clientService: ClientService) {  }

  clients = this.clientService.getClients();
  
  ngOnInit(): void {
  }

  onSubmit() {
    return this.clientService.addClient(this.form.getRawValue());
  }
}
