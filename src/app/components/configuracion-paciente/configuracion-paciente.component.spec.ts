import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionPacienteComponent } from './configuracion-paciente.component';

describe('ConfiguracionPacienteComponent', () => {
  let component: ConfiguracionPacienteComponent;
  let fixture: ComponentFixture<ConfiguracionPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
