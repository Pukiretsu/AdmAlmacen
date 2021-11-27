import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaswdchangeComponent } from './paswdchange.component';

describe('PaswdchangeComponent', () => {
  let component: PaswdchangeComponent;
  let fixture: ComponentFixture<PaswdchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaswdchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaswdchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
