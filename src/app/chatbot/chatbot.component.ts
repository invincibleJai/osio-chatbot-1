import { Component } from '@angular/core';
import { Message } from '../models';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.less']
})
export class ChatbotComponent {
  public message: Message;
  public messages: Message[];

  constructor() {
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Welcome to chatbot universe', 'assets/images/openshiftLogoType.png', new Date())
    ];
  }
}
