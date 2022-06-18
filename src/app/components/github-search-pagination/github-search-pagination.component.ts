import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-github-search-pagination',
  templateUrl: './github-search-pagination.component.html',
  styleUrls: ['./github-search-pagination.component.css']
})
export class GithubSearchPaginationComponent implements OnInit, OnChanges {

  @Input() pages!: Array<number>;
  @Input() currentPage!: number;

  nextPage = 0;
  previousPage = 0;

  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.pages.length >= 2) {
      this.nextPage = this.currentPage !== this.pages.length ? this.currentPage + 1 : 0;
      this.previousPage = this.currentPage !== 1 ? this.currentPage - 1 : 0;
    }
  }
}
