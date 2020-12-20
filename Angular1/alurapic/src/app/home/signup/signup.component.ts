import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { usernamePasswordValidator } from './username-password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private  formBuilder: FormBuilder,
    private userNotTaken: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService) {}

  ngOnInit() {
    const required    = Validators.required,
          email       = Validators.email,
          min_2       = Validators.minLength(2),
          min_8       = Validators.minLength(8),
          max_20      = Validators.maxLength(20),
          max_100     = Validators.maxLength(100),
          userPattern = lowerCaseValidator,
          userNotTaken = this.userNotTaken.checkUserNameTaken();

    this.signupForm = this.formBuilder.group({
      email   : ['', [required, email]],
      fullName: ['', [required, min_2, max_100]],
      userName: ['', [required, userPattern, min_2, max_20], userNotTaken],
      password: ['', [required, min_8, max_20]],
    }, {
      validator: usernamePasswordValidator
    });

    if (this.platformDetectorService.isPlatformBrowser()){
          this.emailInput.nativeElement.focus();  
        }

  }

  signup() {
    if (this.signupForm.valid && !this.signupForm.pending) {
      const user = this.signupForm.getRawValue() as NewUser;
      this.signUpService.signup(user).subscribe(
        () => this.router.navigate(['']),
        (err => console.log(err))
      );
    }

    
  }

}
