import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({name: 'filtrarPelaDescricao'})
export class FiltrarPelaDescricao implements PipeTransform{
    transform(fotos: Photo[], qryDescricao: string) {
        qryDescricao = qryDescricao.trim().toLowerCase();
        if ( qryDescricao ) {
            return fotos.filter(
                foto =>
                foto.description.toLowerCase().includes(qryDescricao));
        } else {
            return fotos;
        }
    }

}