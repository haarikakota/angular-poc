import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { User } from 'firebase';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {
  user?: User;
  constructor(public afAuth: AngularFireAuth, public router: Router, private toastr: ToastrService) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', '');
      }
    })
  }

  ngOnInit(): void {
  }

  async login(email: string, password: string) {
    var result = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
    this.router.navigate(['/home']);
  }

  singout(): void
  {
    // this.afAuth.signOut();
    this.router.navigate(['/login']);
    this.toastr.error('Logout successfully');
  }

}
