import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchBaseComponent } from './components/github-search-base/github-search-base.component';
import { GithubSearchToolbarComponent } from './components/github-search-toolbar/github-search-toolbar.component';
import { GithubSearchFooterComponent } from './components/github-search-footer/github-search-footer.component';
import { GithubSearchComponent } from './components/github-search/github-search.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GithubSearchResultsComponent } from './github-search-results/github-search-results.component';
import { GithubUserDetailsComponent } from './github-user-details/github-user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchBaseComponent,
    GithubSearchToolbarComponent,
    GithubSearchFooterComponent,
    GithubSearchComponent,
    GithubSearchResultsComponent,
    GithubUserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
