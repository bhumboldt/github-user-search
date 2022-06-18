import { GitHubSearchResults } from './../../models/GitHubSearchResults';
import { environment } from './../../../environments/environment.prod';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/app/constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private userSearchResults$: BehaviorSubject<GitHubSearchResults> = new BehaviorSubject({} as any);

  constructor(private httpService: HttpService) { }

  searchForPageOfResults(userSearchString: string, page = 1) {
    this.httpService.get(`${environment.githubSearchEndpoint}/search/users?q=${encodeURIComponent(userSearchString)}&page=${page}&per_page=${CONSTANTS.PAGE_SIZE}`).subscribe((x: any) => {
      this.userSearchResults$.next(x);
    }, err => {
      if (err.error) {
        alert(`Search failed: ${err.error.message}`);
      }
    });
  }

  getSearchResults(): Observable<GitHubSearchResults> {
    return this.userSearchResults$.asObservable();
  }
}
