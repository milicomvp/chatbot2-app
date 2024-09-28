// src/app/chatbot/chatbot.component.ts
import { Component } from '@angular/core';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  userInput: string = '';
  conversation: { message: string, sender: string }[] = [];

  constructor(private chatbotService: ChatbotService) {}

  // Método para enviar un mensaje al chatbot
  sendMessage() {
    if (this.userInput.trim()) {
      this.conversation.push({ message: this.userInput, sender: 'user' });

      // Obtener respuesta del servicio de chatbot
      this.chatbotService.getResponse(this.userInput).subscribe(response => {
        const botMessage = response.choices[0].message.content; // Extraer el mensaje de la respuesta
        this.conversation.push({ message: botMessage, sender: 'bot' });
      }, error => {
        console.error('Error al comunicarse con la API', error);
        this.conversation.push({ message: 'Error al obtener respuesta de la IA.', sender: 'bot' });
      });

      // Limpiar la entrada de usuario
      this.userInput = '';
    }
  }
}
