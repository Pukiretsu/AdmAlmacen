import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaCreateComponent } from './salida-create.component';

describe('SalidaCreateComponent', () => {
  let component: SalidaCreateComponent;
  let fixture: ComponentFixture<SalidaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
