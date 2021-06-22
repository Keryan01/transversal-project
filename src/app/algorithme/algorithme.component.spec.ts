import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmeComponent } from './algorithme.component';

describe('AlgorithmeComponent', () => {
  let component: AlgorithmeComponent;
  let fixture: ComponentFixture<AlgorithmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgorithmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
