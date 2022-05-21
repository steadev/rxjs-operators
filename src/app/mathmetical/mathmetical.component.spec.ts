import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MathmeticalComponent } from './mathmetical.component';


describe('MathmeticalComponent', () => {
  let component: MathmeticalComponent;
  let fixture: ComponentFixture<MathmeticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathmeticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathmeticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
