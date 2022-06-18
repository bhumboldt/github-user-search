import { GitHubUser } from './../../models/GitHubUser';
import { GithubSearchService } from './../../services/github-search/github-search.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CONSTANTS } from '../../constants/Constants';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit, OnDestroy {
  lastSearchedInput = '';
  currentSearchInput = '';

  setNextPage = 0;

  currentPage = 0;
  totalSearchResults = 0;
  currentResults: Array<GitHubUser> = [];
  searchResultsSubscription: Subscription | null = null;
  pages: Array<number> = [];

  constructor(private githubSearchService: GithubSearchService) {}

  ngOnInit(): void {
    this.searchResultsSubscription = this.githubSearchService.getSearchResults().subscribe(x => {
      if (x && x.items) {
        this.currentResults = x.items;
        this.totalSearchResults = x.total_count;
        this.pages = Array.from(Array(Math.ceil(x.total_count / CONSTANTS.PAGE_SIZE)).keys()); 
        if (this.setNextPage) {
          this.currentPage = this.setNextPage;
          this.setNextPage = 0;
        }
      }
    }, err => {});
  }

  getPageOfSearchResults(page = 1): void {
    const trimmedInput = this.currentSearchInput.trim();
    if (trimmedInput) {
      this.githubSearchService.searchForPageOfResults(trimmedInput, page);
      this.setNextPage = page;
    }
  }

  ngOnDestroy(): void {
    if (this.searchResultsSubscription) {
      this.searchResultsSubscription.unsubscribe();
    }
  }
}
