import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  currentRoute;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  preBtn() {
    if (this.currentRoute > 1 && this.currentRoute) {
      const preVal = this.currentRoute - 1;
      this.router.navigate(['/item-list', preVal]);
    }
  }

  nexBtn() {
    if ( this.currentRoute) {
      const nextVal = this.currentRoute + 1;
      this.router.navigate(['/item-list', nextVal]);
    }
  }

  backBtn() {
    // this.router.navigate(['/item-list', {id : this.currentRoute}]);
    const selectedId = this.currentRoute ? this.currentRoute : null;
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  ngOnInit() {
    this.route.paramMap.subscribe((parms: ParamMap) => {
      this.currentRoute = parseInt(parms.get('id'));
    });
  }

}
