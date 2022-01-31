import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public currentResults: ReplaySubject<any> = new ReplaySubject(1);

  constructor(private httpClient: HttpClient) { }

  public getSearchResults(login: String) {
    this.httpClient.get(`https://api.github.com/search/users?q=${login} in:login`).subscribe(res => this.currentResults.next(res));
    return this.currentResults;
  }
}
