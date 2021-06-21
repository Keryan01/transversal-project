import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    url: string = "http://localhost:3000";

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<User[]>(this.url + '/allUsers');
    }

    login(email: string, password: string): Observable<User[]> {
        return this.http.get<User[]>("http://localhost:3000/login/" + email + "/" + password);
    }

    signup(firstname: string, lastname: string, email: string, password: string) {
        return this.http.post<User[]>(this.url + "/addUser", { "firstname": firstname, "lastname": lastname, "email": email, "password": password }).subscribe();
    }
}
