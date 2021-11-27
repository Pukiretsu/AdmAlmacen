import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoReadComponent } from './elemento-read.component';

describe('ElementoReadComponent', () => {
  let component: ElementoReadComponent;
  let fixture: ComponentFixture<ElementoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
