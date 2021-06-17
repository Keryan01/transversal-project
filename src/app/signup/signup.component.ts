import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  url: string = "http://localhost:3000";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.router.navigate(['/']);
    return this.http.post<any>(this.url + "/addUser", { "firstname": this.firstName, "lastname": this.lastName, "email": this.email, "password": this.password }).subscribe();
  }

}
