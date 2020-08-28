import { Component, OnInit, OnDestroy } from '@angular/core';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  private photos: Photo[] = [];

  filtro = '';

  debounce = new Subject<string>();

  constructor(readonly photoService: PhotoService,
    readonly activatedRoute: ActivatedRoute) {}


  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce.pipe(debounceTime(500)).subscribe(filtro => this.filtro = filtro);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
