import { CredentialsUserResponse } from '@models/credentials';
import { AuthService } from './services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'curricula';
  credentials: CredentialsUserResponse = null;
  private subs: Subscription;

  constructor(
    private readonly authService: AuthService,
  ) {}

  ngOnInit() {
    this.subs = this.authService.credentials.subscribe(credentials => {
      this.credentials = credentials ? credentials.user : null;
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
}
