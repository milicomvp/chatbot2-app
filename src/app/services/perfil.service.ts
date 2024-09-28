import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  // URL del backend en Node.js
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  // Método para obtener el perfil del usuario
  obtenerPerfil(): Observable<any> {
    return this.http.get(this.apiUrl + "getDataPerfil");
  }

  // Método para guardar el perfil del usuario
  guardarPerfil(perfilData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+ "storeDataPerfil", perfilData, { headers });
  }
}
