import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoComments } from '../photo/photo-comments';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }

  remove() {
    this.photoService.removePhoto(this.photoId).
    subscribe(() => {
      this.alertService.success('Image removed', true);
      this.router.navigate(['/user', this.userService.getUserName()]);
    }, err => {
      this.alertService.erro('Error removing image', true);
      console.error(err);

    });
  }

}
