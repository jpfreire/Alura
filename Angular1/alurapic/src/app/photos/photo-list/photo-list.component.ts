import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  private photos: Photo[] = [];

  filtro = '';

  temMaisFotosListComponent = true;
  currentPage = 1;
  userName = '';

  constructor(readonly photoService: PhotoService,
    readonly activatedRoute: ActivatedRoute) {}


  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  load(): void {
    this.photoService.listFromUserPaginated(this.userName,  ++this.currentPage)
    .subscribe(fotos => {
      this.photos = this.photos.concat(fotos);

      this.temMaisFotosListComponent = fotos.length > 0;
    });
  }

}
