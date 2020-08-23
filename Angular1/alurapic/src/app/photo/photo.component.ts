import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl: './photo.component.html'
})
export class PhotoComponent {
    @Input() descricao = 'leão/leoa';
    @Input() url = 'https://source.unsplash.com/800x600/?lion';
}