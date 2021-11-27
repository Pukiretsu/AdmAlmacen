import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoUpdateComponent } from './elemento-update.component';

describe('ElementoUpdateComponent', () => {
  let component: ElementoUpdateComponent;
  let fixture: ComponentFixture<ElementoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
