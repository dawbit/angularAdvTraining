import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc'
import { environment } from 'apps/waskoadv/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  async init() {
    await this.oAuth.tryLoginImplicitFlow()

    console.log(this.getToken());
    // if (!this.getToken()) {
    //   this.login()
    // }
  }

  constructor(private oAuth: OAuthService) {
    oAuth.configure(environment.authConfig)
  }

  getToken() {
    return this.oAuth.getAccessToken()
  }

  async login() {
    await this.oAuth.initImplicitFlowInPopup()
  }

  logout() {
    this.oAuth.logOut()
  }
}
