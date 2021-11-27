import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoDeleteComponent } from './prestamo-delete.component';

describe('PrestamoDeleteComponent', () => {
  let component: PrestamoDeleteComponent;
  let fixture: ComponentFixture<PrestamoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
