import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoDeleteComponent } from './elemento-delete.component';

describe('ElementoDeleteComponent', () => {
  let component: ElementoDeleteComponent;
  let fixture: ComponentFixture<ElementoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
