import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Votation, Tag } from './votation';

@Injectable({
  providedIn: 'root'
})
export class VotationService {

  constructor(private http: HttpClient) { }

  getVotations() {
    return this.http.get<Votation[]>("http://localhost:3000/getVotations");
  }

  getTags() {
    return this.http.get<Tag[]>("http://localhost:3000/getTags");
  }

  createVotation(user_id: number, tag_id: number, title: string, content: string, creation_date: Date, closing_date: Date) {
    return this.http.post<Votation>("http://localhost:3000/addVotation", { "user_id": user_id, "tag_id": tag_id, "title": title, "content": content, "creation_date": creation_date, "closing_date": closing_date }).subscribe();
  }
}
