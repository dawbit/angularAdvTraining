import { ErrorHandler, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isSpotifyError } from '../model/Search';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private _snackBar: MatSnackBar,
    private errorHandler: ErrorHandler, // Sentry + Raven
  ) { }

  showMessage(message: string, action: string = '') {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // const headers = request.headers.set('Authorization',`Bearer ${this.auth.getToken()}`)
    // const authRequest = request.clone({ headers })

    // const authRequest = request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${this.auth.getToken()}`
    //   }
    // })

    return next.handle(request).pipe(
      catchError(error => {
        if (!(error instanceof HttpErrorResponse)) {
          if (!(error instanceof Error)) {
            this.errorHandler.handleError('Unsuported error type');;
            return throwError(new Error('Unsuported error type'))
          }

          this.showMessage(error.message, 'Dismiss');
          return throwError(new Error(error.message))

        }

        if (!(isSpotifyError(error.error))) {
          this.showMessage(error.message, 'Dismiss');
          return throwError(new Error(error.message))
        }

        this.showMessage(error.error.error.message, 'Dismiss')

        // return from([ [] ]) // next [], complte
        // return from([]) // complte
        // return [...this.initial] // next mocks, complete 
        // return []  // complete
        // return EMPTY // complete
        // return NEVER // no next, no complete
        return throwError(new Error(error.error.error.message))
      })
    )
  }
}

// A.handle(req)
// A.next = B
// B.next = C 
// C.next = HttpHandler