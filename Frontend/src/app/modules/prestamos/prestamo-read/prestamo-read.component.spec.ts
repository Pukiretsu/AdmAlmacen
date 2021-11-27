import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoReadComponent } from './prestamo-read.component';

describe('PrestamoReadComponent', () => {
  let component: PrestamoReadComponent;
  let fixture: ComponentFixture<PrestamoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
