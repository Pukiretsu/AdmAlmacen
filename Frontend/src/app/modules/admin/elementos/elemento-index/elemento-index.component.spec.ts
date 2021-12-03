import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoIndexComponent } from './elemento-index.component';

describe('ElementoIndexComponent', () => {
  let component: ElementoIndexComponent;
  let fixture: ComponentFixture<ElementoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementoIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
