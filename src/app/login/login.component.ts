import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public serverStatus: any = '';
  public emailId : any 
  public entPasswrd : any
  public errorMessage : any = '' // validation error handle
  public error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private authservice: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  login() {
    this.clearErrorMessage();
    this.authservice.login(this.emailId, this.entPasswrd)
      .then(() => {
        this.router.navigate(['/home'])
      })
      .catch(error => {
        this.serverStatus = "Password Invalid";
      })
  }

}
