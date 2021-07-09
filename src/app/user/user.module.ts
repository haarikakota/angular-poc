import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule { 
  constructor(
    public displayName: string, 
    public email: string,
    public emailVerified: string,
    public photoURL: string,
    public isAnonymous: boolean,
    public uid: string,
    public providerData: string) {}
}
