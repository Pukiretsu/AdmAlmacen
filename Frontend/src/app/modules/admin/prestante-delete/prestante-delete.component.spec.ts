import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestanteDeleteComponent } from './prestante-delete.component';

describe('PrestanteDeleteComponent', () => {
  let component: PrestanteDeleteComponent;
  let fixture: ComponentFixture<PrestanteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestanteDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestanteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
