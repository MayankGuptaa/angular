import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    currentRoute;

    items = [
      {id: 1, title: 'Heading 1 Box'},
      {id: 2, title: 'Heading 2 Box'},
      {id: 3, title: 'Heading 3 Box'},
      {id: 4, title: 'Heading 4 Box'},
      {id: 5, title: 'Heading 5 Box'},
    ];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.paramMap.subscribe(parm => {
        this.currentRoute = parseInt(parm.get('id'));
      });
  }

}
