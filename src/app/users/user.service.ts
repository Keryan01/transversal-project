import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    url: string = "http://localhost:3000";

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<any>(this.url + '/allUsers');
    }

    login() {
        let users = this.getUsers();
    }

}
