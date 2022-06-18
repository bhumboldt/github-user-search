import { Component, Input, OnInit } from '@angular/core';
import { GitHubUser } from '../../models/GitHubUser';

@Component({
  selector: 'app-github-search-results',
  templateUrl: './github-search-results.component.html',
  styleUrls: ['./github-search-results.component.css']
})
export class GithubSearchResultsComponent implements OnInit {

  @Input()
  users!: Array<GitHubUser>;

  @Input()
  totalUsers!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
