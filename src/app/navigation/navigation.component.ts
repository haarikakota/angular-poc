import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  showFilter : boolean = false;
  hideFilter : boolean = false;
  status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleFilter(){
    this.status = !this.status;
  }
  hideFilterfun(){
    this.status = !this.status;
  }

}
