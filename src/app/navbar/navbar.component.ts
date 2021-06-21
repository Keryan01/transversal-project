import { UserService } from './../users/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  user_id: string | null = sessionStorage.getItem("id");
  user!: string;
  connected: boolean = Boolean(sessionStorage.getItem("connected"));

  constructor(private http: HttpClient, private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUser(Number(this.user_id)).subscribe(res => this.user = res[0].firstname + " " + res[0].lastname)
  }
}
