import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'wasko-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'waskoadv';

  async login() {
    try{
      await this.auth.login()
      this.showMessage('Logged in')

    }catch(error){
      this.showMessage(error.params?.error || 'Cancelled')
    }
  }

  constructor(private auth: AuthService,
    private _snackBar: MatSnackBar) {

  }


  showMessage(message: string, action: string = '') {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
}
