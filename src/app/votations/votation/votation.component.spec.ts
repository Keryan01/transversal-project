import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotationComponent } from './votation.component';

describe('VotationComponent', () => {
  let component: VotationComponent;
  let fixture: ComponentFixture<VotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
