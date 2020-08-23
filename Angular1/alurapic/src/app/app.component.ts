import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  photos = [
    {
      url: 'https://source.unsplash.com/800x600/?lion',
      descricao: 'Leão'
    },
    {
      url: 'https://source.unsplash.com/800x600/?nature',
      descricao: 'Natureza'
    }
  ];

}
