import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridmethodComponent } from './hybridmethod.component';

describe('HybridmethodComponent', () => {
  let component: HybridmethodComponent;
  let fixture: ComponentFixture<HybridmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HybridmethodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HybridmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
