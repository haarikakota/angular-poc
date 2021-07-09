import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  signedout : boolean = false;

  constructor(public authservice: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.toastr.success('Login successfully');
  }

}

