import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../user-auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(public autService:UserAuthService) { }

  ngOnInit(): void { }
}
