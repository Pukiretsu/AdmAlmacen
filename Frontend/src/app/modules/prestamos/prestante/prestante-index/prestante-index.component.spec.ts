import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestanteIndexComponent } from './prestante-index.component';

describe('PrestanteIndexComponent', () => {
  let component: PrestanteIndexComponent;
  let fixture: ComponentFixture<PrestanteIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestanteIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestanteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
