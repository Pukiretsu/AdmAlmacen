import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestanteUpdateComponent } from './prestante-update.component';

describe('PrestanteUpdateComponent', () => {
  let component: PrestanteUpdateComponent;
  let fixture: ComponentFixture<PrestanteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestanteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestanteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
