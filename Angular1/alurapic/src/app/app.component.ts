import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  photos: Object[] = [];
  constructor(readonly http:HttpClient){
    http.get<Object[]>(`http://localhost:3000/flavio/photos`)
    .subscribe((photos)=>{
      console.log(photos);
      this.photos = photos;
    })
  }

}
