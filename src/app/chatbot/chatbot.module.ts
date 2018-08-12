import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChatbotComponent } from './chatbot.component';
import { ChatService } from '../services';
import { MessageListComponent, MessageFormComponent, MessageItemComponent } from '../components';

@NgModule({
    declarations: [
        ChatbotComponent,
        MessageListComponent,
        MessageFormComponent,
        MessageItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        ChatService
    ],
    exports: [
        ChatbotComponent
    ]
})
export class ChatbotModule {
    constructor() {}
 }
