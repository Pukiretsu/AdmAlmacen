import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenciaReadComponent } from './dependencia-read.component';

describe('DependenciaReadComponent', () => {
  let component: DependenciaReadComponent;
  let fixture: ComponentFixture<DependenciaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependenciaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependenciaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
