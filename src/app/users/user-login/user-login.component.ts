import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email!: string;
  password!: string;
  id!: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  onSubmit() {
    sessionStorage.setItem("id", String(this.userService.login(this.email, this.password).subscribe(res => this.id = res[0].id)));
  }

}
