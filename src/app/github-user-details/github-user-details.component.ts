import { GitHubUser } from './../models/GitHubUser';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-user-details',
  templateUrl: './github-user-details.component.html',
  styleUrls: ['./github-user-details.component.css']
})
export class GithubUserDetailsComponent implements OnInit {

  @Input()
  user!: GitHubUser;
  
  constructor() { }

  ngOnInit(): void {
  }

}
