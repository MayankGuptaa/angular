import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  noti = 0;

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
      this.noti += 1;
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
    if ( this.messagetext !== '') {
    document.querySelector('ul').scrollTop = 9999999;
    this.chat.sendMessage({user: this.user, room: this.room, message: this.messagetext});
    this.messagetext = '';
    }
  }

  ngOnInit() {
  }


}
