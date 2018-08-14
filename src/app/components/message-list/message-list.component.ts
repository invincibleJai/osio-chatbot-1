import { Component, OnInit, Input, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Message } from '../../models';
import { MessageItemComponent } from '../message-item/message-item.component';

@Component({
  selector: 'app-message-list',
  styleUrls: ['./message-list.component.less'],
  templateUrl: './message-list.component.html'
})
export class MessageListComponent implements OnInit, AfterViewInit {

  @Input()
  messages: Message[];

  @ViewChild('chatlist', { read: ElementRef }) chatList: ElementRef;
  @ViewChildren(MessageItemComponent, { read: ElementRef }) chatItems: QueryList<MessageItemComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chatItems.changes.subscribe(elements => {
      // console.log('messsage list changed: ' + this.messages.length);
      this.scrollToBottom();
    });
  }

  private scrollToBottom(): void {
    try {
      this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
    } catch (err) {
      console.log('Could not find the "chatList" element.');
    }
  }

}
