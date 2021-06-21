import { filter } from 'rxjs/operators';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email!: string;
  password!: string;
  id!: number;

  users = this.userService.getUsers();

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  onSubmit() {
    this.userService.login(this.email, this.password).subscribe(res => this.id = res[0].id);
  }

}
