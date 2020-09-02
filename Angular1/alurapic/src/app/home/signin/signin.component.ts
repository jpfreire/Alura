import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  loginFG: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.loginFG = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    const userName = this.loginFG.get('userName').value;
    const password = this.loginFG.get('password').value;

    this.authService.authenticate(userName, password).
    subscribe(
      () => this.router.navigate(['user', userName]),
      err => {
        this.userNameInput.nativeElement.focus();
        this.loginFG.reset();
      }
      );

  }

}
