import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaReadComponent } from './salida-read.component';

describe('SalidaReadComponent', () => {
  let component: SalidaReadComponent;
  let fixture: ComponentFixture<SalidaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
