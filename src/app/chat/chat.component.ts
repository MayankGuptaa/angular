import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private http: HttpService) { }


  getChatData () {
    this.http.GET('', {}).subscribe( req => {
      console.log(req);
    });
  }

  ngOnInit() {
  }

}
