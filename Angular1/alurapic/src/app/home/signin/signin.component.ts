import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  loginFG: FormGroup;

  fromUrl: string

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platDetService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe( params =>{
      this.fromUrl = params.fromUrl;
    });
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
      () => {
        if (this.fromUrl){
          this.router.navigateByUrl(this.fromUrl);
        } else this.router.navigate(['user', userName]);
      },
      err => {
        if (this.platDetService.isPlatformBrowser()) {
          this.userNameInput.nativeElement.focus();
        }
        this.loginFG.reset();
      }
      );

  }

}
