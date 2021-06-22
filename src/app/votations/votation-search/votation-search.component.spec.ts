import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotationSearchComponent } from './votation-search.component';

describe('VotationSearchComponent', () => {
  let component: VotationSearchComponent;
  let fixture: ComponentFixture<VotationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotationSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
