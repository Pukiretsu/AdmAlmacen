import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoUpdateComponent } from './prestamo-update.component';

describe('PrestamoUpdateComponent', () => {
  let component: PrestamoUpdateComponent;
  let fixture: ComponentFixture<PrestamoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
