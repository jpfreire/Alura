import { Component, Input } from "@angular/core";

const CLOUD = 'http://localhost:3000/imgs/';

@Component({
    selector: 'ap-photo',
    templateUrl: './photo.component.html'
})
export class PhotoComponent {
    private _url = '';
    @Input() descricao = 'leão/leoa';
    @Input() set url (novaUrl: string) {
        this._url = novaUrl;
    }

    get url() {
        if(!this._url.startsWith('data:')){
            return CLOUD+this._url;
        }
        return this._url;
    }
}