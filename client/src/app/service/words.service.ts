import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../interface/word';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  constructor(private http: HttpClient) {}

  async getWords(): Promise<Observable<Word[]>> {
    return await this.http.get<Word[]>(`/api/articles`);
  }

  async getWord(): Promise<Observable<Word[]>> {
    return await this.http.get<Word[]>(`/api/article/dwdad243er4ased`);
  }
}
