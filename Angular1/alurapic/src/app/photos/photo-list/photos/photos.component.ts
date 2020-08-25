import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges, OnInit {

  @Input() photos: Photo[] = [];
  rows: any[] = [];
  constructor() { }
  ngOnInit(): void {
    console.log('Inicializando app-photos');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos){
      this.rows = this.groupColumns(this.photos);
    }
  }
  groupColumns(photos: Photo[]): any[] {
    const newRows = [];
    for(let i = 0; i < photos.length; i += 3) {
      newRows.push(photos.slice(i, i + 3));
    }
    console.log(newRows);

    return newRows;
  }

}
