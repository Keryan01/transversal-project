import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email!: string;
  password!: string;
  id: number = 0;
  user!: User;
  validOrNot: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  validate(): void {
    this.userService.login(this.email, this.password).subscribe(res => this.id = res[0].id);

    setTimeout(() => {
      if (this.id != 0) {
        this.validOrNot = true;
      } else {
        alert("User is not valid")
      }
    }, 500);
  }

  submit(): void {
    sessionStorage.setItem("id", this.id.toString());
    sessionStorage.setItem("connected", "true");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
}
