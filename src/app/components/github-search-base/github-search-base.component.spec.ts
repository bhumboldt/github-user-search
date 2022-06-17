import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchBaseComponent } from './github-search-base.component';

describe('GithubSearchBaseComponent', () => {
  let component: GithubSearchBaseComponent;
  let fixture: ComponentFixture<GithubSearchBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSearchBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubSearchBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
