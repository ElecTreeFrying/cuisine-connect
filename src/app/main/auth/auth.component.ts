import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { imports, viewProviders } from './auth.config';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true, imports, viewProviders
})
export class AuthComponent implements OnInit {

  authState!: boolean;

  constructor(
    public service: AuthService
  ) { }

  ngOnInit(): void {
    this.service.updatePageTitle('Login');
  }

  updateState(state: boolean): void {
    this.authState = state;
    this.service.updatePageTitle(state ? 'Register' : 'Login');
  }

}
