import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit {

    values: any;
    id!: number;

    constructor(private http: HttpClient) { }

    ngOnInit(): void { }

    getValues(id: number) {
        return this.http.get<any>("http://localhost:3000/getAnswers/" + id);
    }

    onSubmit() {
        this.values = this.getValues(this.id);
    }

}
