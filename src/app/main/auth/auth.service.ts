import { Injectable, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as FirebaseAuth from '@angular/fire/auth';
import { Store } from '@ngxs/store';

import { SnackbarService } from '../common';
import { errorMessageByErrorCode } from './auth';
import { AppAction } from 'src/app/store';

@Injectable()
export class AuthService {
  
  loginForm: FormGroup;
  registerForm: FormGroup;

  #pending!: boolean;

  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
    private titleService: Title,
    private router: Router,
    private auth: FirebaseAuth.Auth,
    private snackbar: SnackbarService,
    private store: Store
  ) {
    this.loginForm = fb.group({
      'email': [ '' ],
      'password': [ '' ],
    });
    this.registerForm = fb.group({
      'fullname': [ '' ],
      'email': [ '' ],
      'password': [ '' ],
    });
  }

  updatePageTitle(pageTitle: string): void {
    this.titleService.setTitle(pageTitle + ' | Cuisine Connect');
  }
  
  async login(): Promise<void> {
    this.firebaseProcessing();
    const { email, password } = this.loginForm.value;
    try {
      await FirebaseAuth.signInWithEmailAndPassword(this.auth, email, password);
      this.authenticate();
    } catch (error) {
      this.errorHandlingResponse(error);
    }
  }

  async register(): Promise<void> {
    this.firebaseProcessing();
    const { fullname, email, password } = this.registerForm.value;
    try {
      await FirebaseAuth.createUserWithEmailAndPassword(this.auth, email, password);
      await FirebaseAuth.updateProfile(
        FirebaseAuth.getAuth().currentUser!,
        { displayName: fullname, photoURL: `https://dummyimage.com/50x50/42aaff/ffffff.png?text=${fullname[0]}` }
      )
      this.authenticate();
    } catch (error) {
      this.errorHandlingResponse(error);
    }
  }

  private authenticate(): void {
    this.firebaseComplete();
    this.store.dispatch(new AppAction.UpdateAuthenticationState({ authenticated: true }));
    this.router.navigate([ '/' ]);
  }

  private firebaseProcessing(): void {
    this.#pending = true;
    this.snackbar.open({ message: 'Please wait...', duration: Infinity });
  }

  private firebaseComplete(): void {
    this.#pending = false;
    this.snackbar.dismiss();
  }

  private errorHandlingResponse(response: any): Promise<never> {
    this.firebaseComplete();
    const message = errorMessageByErrorCode(response.code);
    if (message) this.snackbar.open({ message, duration: 5000 });
    return Promise.reject(`[${response.code}]: ${message}`);
  }

}
