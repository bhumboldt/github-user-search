import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchPaginationComponent } from './github-search-pagination.component';

describe('GithubSearchPaginationComponent', () => {
  let component: GithubSearchPaginationComponent;
  let fixture: ComponentFixture<GithubSearchPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSearchPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubSearchPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
