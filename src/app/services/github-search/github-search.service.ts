import { GitHubSearchResults } from './../../models/GitHubSearchResults';
import { environment } from './../../../environments/environment.prod';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private userSearchResults$: BehaviorSubject<GitHubSearchResults> = new BehaviorSubject({} as any);

  constructor(private httpService: HttpService) { }

  searchForPageOfResults(userSearchString: string, page = 1) {
    this.httpService.get(`${environment.githubSearchEndpoint}/search/users?q=${encodeURIComponent(userSearchString)}&page=${page}`).subscribe((x: any) => {
      this.userSearchResults$.next(x);
    }, err => {
      console.error(err);
    });
  }

  getSearchResults(): Observable<GitHubSearchResults> {
    return this.userSearchResults$.asObservable();
  }
}
