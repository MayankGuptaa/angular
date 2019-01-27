import { Component, OnInit } from '@angular/core';

declare let google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  val = 1;
  constructor() { }
  map;
addNum() {
  this.val += 1;
}

minNum() {
  if (this.val > 1) {
    this.val -= 1;
  }
}

initMap() {
  this.map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

  ngOnInit() {

  }

}
