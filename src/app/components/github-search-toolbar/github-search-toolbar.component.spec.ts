import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchToolbarComponent } from './github-search-toolbar.component';

describe('GithubSearchToolbarComponent', () => {
  let component: GithubSearchToolbarComponent;
  let fixture: ComponentFixture<GithubSearchToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSearchToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubSearchToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
