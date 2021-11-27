import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoCreateComponent } from './elemento-create.component';

describe('ElementoCreateComponent', () => {
  let component: ElementoCreateComponent;
  let fixture: ComponentFixture<ElementoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
