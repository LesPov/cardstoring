import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosemethodComponent } from './closemethod.component';

describe('ClosemethodComponent', () => {
  let component: ClosemethodComponent;
  let fixture: ComponentFixture<ClosemethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosemethodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClosemethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
