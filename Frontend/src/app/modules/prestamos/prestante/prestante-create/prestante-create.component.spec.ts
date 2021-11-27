import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestanteCreateComponent } from './prestante-create.component';

describe('PrestanteCreateComponent', () => {
  let component: PrestanteCreateComponent;
  let fixture: ComponentFixture<PrestanteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestanteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestanteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
