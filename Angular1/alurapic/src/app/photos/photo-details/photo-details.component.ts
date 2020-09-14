import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoComments } from '../photo/photo-comments';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  comments$: Observable<PhotoComments[]>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(id);
    this.comments$ = this.photoService.getComments(id);
  }

}
