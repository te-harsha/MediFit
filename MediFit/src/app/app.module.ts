import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { SocialAuthService } from 'angularx-social-login';
// import { SocialUser } from 'angularx-social-login';

import { GoogleLoginProvider } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';


import { SocialLoginModule } from 'angularx-social-login';
import { SocialAuthServiceConfig } from 'angularx-social-login';

// import { GoogleLoginProvider } from './../../projects/lib/src/providers/google-login-provider';
// import { FacebookLoginProvider } from './../../projects/lib/src/providers/facebook-login-provider';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '122486914942-v8hg1mbvt0peovarv85fvnsgcpis6vn9.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('150773286996002')
        }
      ]
    } as SocialAuthServiceConfig,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
