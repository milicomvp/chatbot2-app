import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HistorialComponent } from './historial/historial.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirigir a "Inicio"
  { path: 'inicio', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'historial', component: HistorialComponent },
  { path: '**', redirectTo: '/inicio' } // Redirigir cualquier ruta inválida a "Inicio"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
