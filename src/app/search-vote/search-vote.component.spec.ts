import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVoteComponent } from './search-vote.component';

describe('SearchVoteComponent', () => {
  let component: SearchVoteComponent;
  let fixture: ComponentFixture<SearchVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
