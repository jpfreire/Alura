import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  private photos: Photo[] = [];

  constructor(readonly photoService: PhotoService,
    readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params.userName;
    console.log(userName);
    this.photoService.listFromUser(userName)
    .subscribe(fotos => this.photos = fotos);
  }

}
