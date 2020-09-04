import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  constructor(
    private  formBuilder: FormBuilder,
    private userNotTaken: UserNotTakenValidatorService) {}

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
    });

    console.log(this.signupForm);
  }

}
