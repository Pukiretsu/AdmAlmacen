import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenciaUpdateComponent } from './dependencia-update.component';

describe('DependenciaUpdateComponent', () => {
  let component: DependenciaUpdateComponent;
  let fixture: ComponentFixture<DependenciaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependenciaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependenciaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
