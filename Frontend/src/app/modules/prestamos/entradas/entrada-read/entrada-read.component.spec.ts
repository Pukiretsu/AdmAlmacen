import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaReadComponent } from './entrada-read.component';

describe('EntradaReadComponent', () => {
  let component: EntradaReadComponent;
  let fixture: ComponentFixture<EntradaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
