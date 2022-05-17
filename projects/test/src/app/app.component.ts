import { Component } from '@angular/core';
import { AuthService } from 'projects/auth-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  constructor(private auth: AuthService) {
  }
}
