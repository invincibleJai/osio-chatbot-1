import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models';
import { ChatService } from '../../services';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.less']
})
export class MessageFormComponent implements OnInit {

  @Input()
  message: Message;

  @Input()
  messages: Message[];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.chatService.getResponse(this.message.content)
      .subscribe(res => {
        let timeStamp = parseInt(res.Timestamp, 10);
        this.messages.push(
          new Message(res.response, 'assets/images/openshiftLogoType.png', new Date())
        );
      });

    this.message = new Message('', 'assets/images/user.png');
  }

}
