import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaUpdateComponent } from './entrada-update.component';

describe('EntradaUpdateComponent', () => {
  let component: EntradaUpdateComponent;
  let fixture: ComponentFixture<EntradaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
