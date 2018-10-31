import { AuthService } from './../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error = '';

  loginData = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  onSubmit() {
    if (this.loginData.valid) {
      this.authService.login(this.loginData.value).subscribe(
        () => this.router.navigate(['/']),
        err => this.error = err.error.err
      );
    }
  }

}
