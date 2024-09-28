import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfilService } from '../services/perfil.service'; // Servicio que conecta con Firebase

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfilForm!: FormGroup;

  constructor(private fb: FormBuilder, private perfilService: PerfilService) { }

  ngOnInit(): void {
    // Inicializar el formulario con validaciones
    this.perfilForm = this.fb.group({
      nombre: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      sexo: ['', Validators.required],
      altura: ['', [Validators.required, Validators.min(50), Validators.max(250)]], // Validar entre 50 y 250 cm
      pecho: ['', [Validators.required, Validators.min(50), Validators.max(200)]],
      cintura: ['', [Validators.required, Validators.min(30), Validators.max(150)]],
      cadera: ['', [Validators.required, Validators.min(50), Validators.max(200)]],
      estilosPreferidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

     // Cargar el perfil cuando el componente se inicializa (si es necesario)
     this.perfilService.obtenerPerfil().subscribe(data => {
      if (data) {
        this.perfilForm.patchValue(data[0]);
      }
    });
  }

  // Método para guardar el perfil
  guardarPerfil() {
    if (this.perfilForm.valid) {
      const perfilData = this.perfilForm.value;
      this.perfilService.guardarPerfil(perfilData)
        .subscribe(() => {
          console.log('Perfil guardado exitosamente');
        }, error => {
          console.error('Error al guardar el perfil', error);
        });
    }
  }
}
