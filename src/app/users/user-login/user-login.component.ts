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
  id!: number;

  user!: User;

  temp!: string | null;

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  onSubmit() {
    this.userService.login(this.email, this.password).subscribe(res => this.id = res[0].id);
    if (this.id == 0) {
      alert("vos identifiants ne sont pas valides, ou vous n'êtes pas inscrits à notre plateforme")
    }
    else {
      this.userService.getUser(this.id).subscribe(res => this.user = res[0]);
      alert("Bienvenue " + this.user.firstname + "!")
    }

    sessionStorage.setItem("id", this.id.toString());
    sessionStorage.setItem("connected", "true");

    this.temp = sessionStorage.getItem("connected");

  }

}
