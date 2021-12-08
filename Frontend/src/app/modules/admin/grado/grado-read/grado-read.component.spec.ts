import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoReadComponent } from './grado-read.component';

describe('GradoReadComponent', () => {
  let component: GradoReadComponent;
  let fixture: ComponentFixture<GradoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
