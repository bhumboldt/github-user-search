import { GitHubUser } from './../../models/GitHubUser';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-user-details',
  templateUrl: './github-user-details.component.html',
  styleUrls: ['./github-user-details.component.css']
})
export class GithubUserDetailsComponent implements OnInit {

  @Input()
  user!: GitHubUser;

  userInfo: any = null;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get(this.user!.url!).subscribe(x => {
    //   this.userInfo = x;
    //   console.log(x);
    // }, error => {
    //   console.error(error);
    // })
  }

  openGithubProfile() {
    window.open(this.user.html_url, '_blank');
  }

}
