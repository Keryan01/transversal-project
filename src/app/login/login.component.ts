import { idModel } from './../idModel';
import { assertPlatform, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId!:idModel[];
  email: string = 'm.heyden97@gmail.com';
  password: string = '123';
  connected=false;
  connectedUser!:any;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  getId(): Observable<idModel[]> {
    //this.router.navigate(['/']);
    return this.http.get<idModel[]>("http://localhost:3000/login/"+this.email+"/"+this.password);






    /*
      if (this.userId=="empty"){
        this.connected=false;
      }
      else{
        this.connected=true;

        this.connectedUser=this.http.get<any>("http://localhost:3000/allUsers/"+this.userId.id);
        alert(this.connectedUser.length)
      }


    if (this.connected){
      alert(this.connectedUser+" vous êtes connecté!");
    }
    else{
      alert("Vous avez entré des identifiants invalides");

    }
    */
  }
  submitForm(){
    this.getId().subscribe(data =>this.userId=data);
    alert(this.userId[0].id);
  }

}
