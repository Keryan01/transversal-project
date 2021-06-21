import { filter } from 'rxjs/operators';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  users = this.userService.getUsers();

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

}
