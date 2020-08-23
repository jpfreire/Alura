import { Component } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl: './photo.component.html'
})
export class PhotoComponent {
    descricao = 'leão/leoa';
    url = 'https://source.unsplash.com/800x600/?lion';
}