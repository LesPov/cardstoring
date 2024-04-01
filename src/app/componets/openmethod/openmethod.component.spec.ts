import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenmethodComponent } from './openmethod.component';

describe('OpenmethodComponent', () => {
  let component: OpenmethodComponent;
  let fixture: ComponentFixture<OpenmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenmethodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
