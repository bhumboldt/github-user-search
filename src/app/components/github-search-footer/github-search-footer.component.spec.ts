import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchFooterComponent } from './github-search-footer.component';

describe('GithubSearchFooterComponent', () => {
  let component: GithubSearchFooterComponent;
  let fixture: ComponentFixture<GithubSearchFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSearchFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubSearchFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
