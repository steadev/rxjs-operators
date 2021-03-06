import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceEqualComponent } from './sequence-equal.component';

describe('SequenceEqualComponent', () => {
  let component: SequenceEqualComponent;
  let fixture: ComponentFixture<SequenceEqualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequenceEqualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceEqualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
