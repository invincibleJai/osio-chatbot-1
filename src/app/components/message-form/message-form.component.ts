import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models';
import { ChatService } from '../../services';

@Component({
  selector: 'app-message-form',
  styleUrls: ['./message-form.component.less'],
  templateUrl: './message-form.component.html'
})
export class MessageFormComponent implements OnInit {

  @Input()
  message: Message;

  @Input()
  messages: Message[];

  @Input()
  imgAvatarUrl: string;

  osioAvatarUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NS41IDUwLjk4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2EyMWQyMTt9LmNscy0ye2ZpbGw6I2NiMjAyNjt9LmNscy0ze2ZpbGw6IzgxMTUxNzt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPm9wZW5zaGlmdC1pby1mYXZpY29uPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE2LjEsMjIuOTFsLTguOSwzLjJhMzAuNjcsMzAuNjcsMCwwLDAsLjcsNC4ybDguNS0zLjFhMTUuNiwxNS42LDAsMCwxLS4zLTQuMyIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU1LjUsMTNhMjAsMjAsMCwwLDAtMi4yLTMuN2wtOC45LDMuM2EyMS4xNCwyMS4xNCwwLDAsMSwyLjYsMy41WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTM1LjksMTAuNTFhMTUuNDEsMTUuNDEsMCwwLDEsNC44LDMuNGw4LjktMy4yYTI0LjczLDI0LjczLDAsMCwwLTEwLTguM0EyNS40LDI1LjQsMCwwLDAsNS44LDE0LjcxYTI1Ljg0LDI1Ljg0LDAsMCwwLTIuMywxMi43bDguOS0zLjJhMTQuNjQsMTQuNjQsMCwwLDEsMS41LTUuNywxNi41MiwxNi41MiwwLDAsMSwyMi04Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNOC41LDMwLjExLDAsMzMuMjFhMjUsMjUsMCwwLDAsNCw4LjZsOC45LTMuMmExNi4yNCwxNi4yNCwwLDAsMS00LjQtOC41Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDUuNCwyNi44MWExNC42NCwxNC42NCwwLDAsMS0xLjUsNS43LDE2LjUyLDE2LjUyLDAsMCwxLTIyLDgsMTUuNDEsMTUuNDEsMCwwLDEtNC44LTMuNGwtOC45LDMuMmEyNS4xLDI1LjEsMCwwLDAsOS45LDguM0EyNS42MywyNS42MywwLDAsMCw1MiwzNi4zMWEyNS44NCwyNS44NCwwLDAsMCwyLjMtMTIuN1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00Ny42LDE1LjkxLDM5LjEsMTlhMTYuNzgsMTYuNzgsMCwwLDEsMi4xLDkuM2w4LjktMy4yYTI0LjIzLDI0LjIzLDAsMCwwLTIuNS05LjIiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNi4xLDI0LjYxdi0xLjhMNy4yLDI2YTkuODUsOS44NSwwLDAsMCwuMiwxLjdaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNTQuMiwxMC42MWExNC42MywxNC42MywwLDAsMC0uOS0xLjNsLTguOSwzLjNhNi44OSw2Ljg5LDAsMCwxLDEuMSwxLjNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOC4yLDQwLjMxYTIwLjExLDIwLjExLDAsMCwwLDIuMywyLjhsOS43LTMuNWExNC43OSwxNC43OSwwLDAsMS0zLjEtMi41Wm00Ni4xLTE2LjgtOC45LDMuM2ExMi4yOCwxMi4yOCwwLDAsMS0uOCwzLjhsOS43LTMuNWEyMS42NCwyMS42NCwwLDAsMCwwLTMuNiIvPjwvZz48L2c+PC9zdmc+';

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.message.avatar = this.imgAvatarUrl;
    this.messages.push(this.message);
    this.chatService.getResponse(this.message.content)
      .subscribe(res => {
        let timeStamp = parseInt(res.Timestamp, 10);
        this.messages.push(
          new Message(res.response, this.osioAvatarUrl, new Date())
        );
      });
    this.message = new Message('', this.imgAvatarUrl);
  }

}
