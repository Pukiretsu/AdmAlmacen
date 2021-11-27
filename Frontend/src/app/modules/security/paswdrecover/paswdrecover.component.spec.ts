import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaswdrecoverComponent } from './paswdrecover.component';

describe('PaswdrecoverComponent', () => {
  let component: PaswdrecoverComponent;
  let fixture: ComponentFixture<PaswdrecoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaswdrecoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaswdrecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
