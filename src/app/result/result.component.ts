import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit {

    values = this.getValues();

    constructor(private http: HttpClient) { }

    ngOnInit(): void { }

    getValues() {
        //return this.http.get<{ id: number, user_id: number, votation_id: number, value: number }[]>("http://localhost:3000/getAnswers/" + 2);
        return this.http.get<any>("http://localhost:3000/getAnswers/")
    }

}
