import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Message } from '../../models';

@Component({
  selector: 'app-message-item',
  styleUrls: ['./message-item.component.less'],
  templateUrl: './message-item.component.html'
})
export class MessageItemComponent implements OnInit {

  @Input() message: Message;

  constructor(public _DomSanitizer: DomSanitizer) {}

  ngOnInit() {
  }

}
