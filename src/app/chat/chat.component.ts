import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    message: any = [];
    messagetext = '';

    constructor(private chat: ChatService) {
      this.chat.newUserJoined().subscribe(data => {
        this.message.push(data);
      });
      this.chat.userLeftRoom().subscribe(data => {
        this.message.push(data);
      });
      this.chat.newMessageReceived().subscribe(data => {
        this.message.push(data);
      });
    }

    user: String;
    room: String;

    join() {
      this.chat.joinRoom({user: this.user, room: this.room });
    }

    leave() {
      console.log('leave');
      this.chat.leaveRoom({user: this.user, room: this.room });
    }

    sendMessage() {
      this.chat.sendMessage({user: this.user, room: this.room, message: this.messagetext});
    }

    ngOnInit() {
    }


  }
