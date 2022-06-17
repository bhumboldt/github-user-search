import { GitHubUser } from './../../models/GitHubUser';
import { GithubSearchService } from './../../services/github-search/github-search.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit, OnDestroy {
  currentSearchInput = '';

  currentPage = 0;
  totalSearchResults = 0;
  currentResults: Array<GitHubUser> = [];
  searchResultsSubscription: Subscription | null = null;

  constructor(private githubSearchService: GithubSearchService) {}

  ngOnInit(): void {
    this.searchResultsSubscription = this.githubSearchService.getSearchResults().subscribe(x => {
      this.currentResults = x.items;
      this.totalSearchResults = x.total_count;
    }, err => {});
  }

  search(): void {
    const trimmedInput = this.currentSearchInput.trim();
    if (trimmedInput) {
      this.githubSearchService.searchForPageOfResults(trimmedInput, 1);
    }
  }

  getNextPageOfResults(): void {

  }

  getPreviousPageOfResults(): void {

  }

  ngOnDestroy(): void {
    if (this.searchResultsSubscription) {
      this.searchResultsSubscription.unsubscribe();
    }
  }
}
