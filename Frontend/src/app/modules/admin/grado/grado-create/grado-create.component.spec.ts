import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoCreateComponent } from './grado-create.component';

describe('GradoCreateComponent', () => {
  let component: GradoCreateComponent;
  let fixture: ComponentFixture<GradoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
