import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoIndexComponent } from './prestamo-index.component';

describe('PrestamoIndexComponent', () => {
  let component: PrestamoIndexComponent;
  let fixture: ComponentFixture<PrestamoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamoIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
