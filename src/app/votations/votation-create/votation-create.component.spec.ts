import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotationCreateComponent } from './votation-create.component';

describe('VotationCreateComponent', () => {
  let component: VotationCreateComponent;
  let fixture: ComponentFixture<VotationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotationCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
