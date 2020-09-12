import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, FormGroup } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;

  constructor(private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file         : ['', Validators.required],
      description  : ['', Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  upload(){
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    console.log('uploading',this.file);
    this.photoService.upload(description, allowComments, this.file)
    .subscribe(() => {
      this.router.navigate(['']);
    }, (err) => {console.error(err); });
  }

}
