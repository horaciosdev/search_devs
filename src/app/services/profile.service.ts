import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  getGitHubProfile(term: string): Observable<any> {
    const url = `https://api.github.com/users/${term}`;
    return this.httpClient.get<any>(url);
  }

  getGitHubRepos(term: string): Observable<any> {
    const url = `https://api.github.com/users/${term}/repos`;
    return this.httpClient.get<any>(url);
  }
}
