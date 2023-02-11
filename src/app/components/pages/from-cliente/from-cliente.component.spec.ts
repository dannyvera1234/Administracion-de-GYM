import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromCLienteComponent } from './from-cliente.component';

describe('FromCLienteComponent', () => {
  let component: FromCLienteComponent;
  let fixture: ComponentFixture<FromCLienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromCLienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromCLienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
