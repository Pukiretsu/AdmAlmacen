import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenciaCreateComponent } from './dependencia-create.component';

describe('DependenciaCreateComponent', () => {
  let component: DependenciaCreateComponent;
  let fixture: ComponentFixture<DependenciaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependenciaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependenciaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
