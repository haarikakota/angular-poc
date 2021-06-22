import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  signedout : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  signout(){
    this.signedout = true;
    setTimeout(() => {
      this.signedout = false;
    }, 5000);
  }





}

