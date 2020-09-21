import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PhotoComments } from '../../photo/photo-comments';
import { PhotoService } from '../../photo/photo.service';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number;
  commentForm: FormGroup;

  comments$: Observable<PhotoComments[]>;

  constructor(
      private photoService: PhotoService,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    });
  }

  save() {
    const comment = this.commentForm.get('comment').value as string;
    this.photoService.addComments(this.photoId, comment).
    subscribe(() => {
      this.commentForm.reset();
      console.log('comentario adicionado com suceso');
    });
  }

}
