import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: string | null = sessionStorage.getItem("id");
  firstname!: string;
  lastname!: string;
  email!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser(Number(this.id)).subscribe(res => {
      this.firstname = res[0].firstname;
      this.lastname = res[0].lastname;
      this.email = res[0].email;
    })
  }

}
