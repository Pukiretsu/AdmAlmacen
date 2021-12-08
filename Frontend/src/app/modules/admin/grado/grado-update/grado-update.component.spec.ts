import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoUpdateComponent } from './grado-update.component';

describe('GradoUpdateComponent', () => {
  let component: GradoUpdateComponent;
  let fixture: ComponentFixture<GradoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
