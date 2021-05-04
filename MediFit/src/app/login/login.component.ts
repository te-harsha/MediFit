import { Component, OnInit } from '@angular/core';


import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

import { GoogleLoginProvider } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  user: SocialUser;
  loggedIn: boolean;
  constructor(private authService: SocialAuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  // signInWithInsta(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  signOut(): void {
    this.authService.signOut();
  }
  
  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
