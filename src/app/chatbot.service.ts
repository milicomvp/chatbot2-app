import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = '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'; // Reemplaza con tu clave API de OpenAI

  constructor(private http: HttpClient) { }

  // Método para obtener la respuesta del chatbot llamando a OpenAI API
  getResponse(userInput: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}` // Autorización con clave API
    });

    const body = {
      model: 'gpt-4', // Especificamos que queremos usar el modelo GPT-4
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' }, // Contexto inicial
        { role: 'user', content: userInput } // El mensaje del usuario
      ],
      max_tokens: 200, // Limitar la respuesta para evitar respuestas muy largas
      temperature: 0.7 // Control de creatividad de la respuesta
    };

    // Enviar la solicitud POST a OpenAI
    return this.http.post(this.apiUrl, body, { headers });
  }
}
