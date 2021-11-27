import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaCreateComponent } from './entrada-create.component';

describe('EntradaCreateComponent', () => {
  let component: EntradaCreateComponent;
  let fixture: ComponentFixture<EntradaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
