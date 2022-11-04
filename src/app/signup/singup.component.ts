import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { isIOS, Page, TextField } from '@nativescript/core';

@Component({
  selector: 'SignUp',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent implements OnInit {
  email: string = '';
  username: string = '';
  password: string = '';
  focusState = {
    email: false,
    username: false,
    password: false,
  }
  @ViewChild('emailTextField') emailTextField: ElementRef<TextField>;
  @ViewChild('usernameTextField') usernameTextField: ElementRef<TextField>;
  @ViewChild('passwordTextField') passwordTextField: ElementRef<TextField>;
  constructor(private page: Page) {
    // Use the component constructor to inject providers.
    page.actionBarHidden = true;
    if (isIOS) {
      UIApplication.sharedApplication.setStatusBarHiddenAnimated(
        false,
        true
      );
    }
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onBlur(key) {
    console.log(key);
    this.focusState[key] = true;
  }
  onSignUp() {
    this.setBlurAllKey();
    if (!this.validate()) return;
    console.log('onSignUp')
  }

  setBlurAllKey() {
    for (const key in this.focusState) {
      if (Object.prototype.hasOwnProperty.call(this.focusState, key)) {
        this.focusState[key] = true;
      }
    }
  }

  validate() {
    if (this.email && this.username && this.password) {
      return true;
    }
    return false;
  }

  showError(key) {
    return this.focusState[key] && !this[key];
  }
}
