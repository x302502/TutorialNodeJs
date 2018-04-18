import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../service/chat.service';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css'],
  providers: [ChatService]
})
export class Example2Component implements OnInit {

  user: String;
  room: String;
  messageText: String;
  messageArray: Array<{ user: String, message: String }> = [];
  isJoin = false;

  constructor(private chatService: ChatService) {
    this.room = 'Room1';
    this.chatService.newUserJoined()
      .subscribe(data => this.messageArray.push(data));
    this.chatService.userLeftRoom()
      .subscribe(data => this.messageArray.push(data));
    this.chatService.newMessageReceived()
      .subscribe(data => this.messageArray.push(data));
  }
  ngOnInit() {
  }
  join() {
    if (this.user === undefined) {
      alert('Create name have join room');
      return;
    }
    this.chatService.joinRoom({ user: this.user, room: this.room });
    this.isJoin = true;
    document.getElementById('inputSendMessage').focus();
  }

  leave() {
    this.chatService.leaveRoom({ user: this.user, room: this.room });
    this.isJoin = false;
  }

  sendMessage() {
    this.chatService.sendMessage({ user: this.user, room: this.room, message: this.messageText });
    this.messageText = '';
    document.getElementById('inputSendMessage').focus();
  }
}
