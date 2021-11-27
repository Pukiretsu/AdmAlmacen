import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaUpdateComponent } from './salida-update.component';

describe('SalidaUpdateComponent', () => {
  let component: SalidaUpdateComponent;
  let fixture: ComponentFixture<SalidaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
