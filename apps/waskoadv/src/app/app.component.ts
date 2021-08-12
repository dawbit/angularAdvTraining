import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'wasko-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'waskoadv';

  login() {
    this.auth.login()
  }

  constructor(private auth: AuthService) {

  }
}
