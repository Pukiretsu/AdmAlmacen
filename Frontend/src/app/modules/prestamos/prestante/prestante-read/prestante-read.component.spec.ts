import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestanteReadComponent } from './prestante-read.component';

describe('PrestanteReadComponent', () => {
  let component: PrestanteReadComponent;
  let fixture: ComponentFixture<PrestanteReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestanteReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestanteReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
