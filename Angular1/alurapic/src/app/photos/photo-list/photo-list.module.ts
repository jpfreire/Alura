import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FiltrarPelaDescricao } from './filtrar-pela-descricao.pipe';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FiltrarPelaDescricao
    ],
    imports: [CommonModule, PhotoModule]
})
export class PhotoListModule { }
