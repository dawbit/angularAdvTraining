// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthConfig } from "angular-oauth2-oidc";

export const environment = {
  production: false,
  // api_url: 'http://localhost/'
  api_url: 'https://api.spotify.com/v1',

  authConfig: {
    // Url of the Identity Provider
    // issuer: 'https://idsvr4.azurewebsites.net',
    oidc: false,

    customQueryParams: {
      show_dialog: 'true'
    },

    loginUrl: 'https://accounts.spotify.com/authorize',

    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/index.html',

    // https://manfredsteyer.github.io/angular-oauth2-oidc/docs/additional-documentation/silent-refresh.html
    silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',

    // The SPA's id. The SPA is registerd with this id at the auth-server
    // clientId: 'server.code',
    clientId: '34a013ce6a014998b86f88a7bb22b73a',

    // Just needed if your auth server demands a secret. In general, this
    // is a sign that the auth server is not configured with SPAs in mind
    // and it might not enforce further best practices vital for security
    // such applications.
    // dummyClientSecret: 'secret',

    // responseType: 'code',
    responseType: 'token', // implicit grant

    // set the scope for the permissions the client should request
    // The first four are defined by OIDC.
    // Important: Request offline_access to get a refresh token
    // The api scope is a usecase specific one
    scope: '',

    showDebugInformation: true,
  } as AuthConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
