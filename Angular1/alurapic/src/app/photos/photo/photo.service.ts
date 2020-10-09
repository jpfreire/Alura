import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Photo } from './photo';
import { PhotoComments } from './photo-comments';

const API = environment.ApiURL;

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    constructor(private http: HttpClient) {

    }

    listFromUser(userName: string) {
        return this.http.get<Photo[]>(`${API}/${userName}/photos`);
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams().append('page', page.toString())
        return this.http.get<Photo[]>(`${API}/${userName}/photos`, {params});
    }

    upload(description: string, allowComments: boolean, file: File) {

        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', '' + allowComments);
        formData.append('imageFile', file);

        return this.http.post(
            API + '/photos/upload',
            formData,
            {
                observe: 'events',
                reportProgress: true
            }
        );
    }

    findById(photoId: number) {
        return this.http.get<Photo>(API + '/photos/' + photoId);
    }
    
    getComments(photoId: number) {
        return this.http.get<PhotoComments[]>(API + '/photos/' + photoId + '/comments')
    }

    addComments(photoId: number, commentText: string) {
        return this.http.post(
            API + '/photos/' + photoId + '/comments',
            { commentText }
        )
    }

    removePhoto(photoId: number){
        return this.http.delete(API + '/photos/' + photoId);
    }

    like(photoId: number) {
        const url = API + `/photos/${photoId}/like`;
        const body = {};

        return this.http.post(url, body, {observe: 'response'}).
        pipe(map(res => true)).
        pipe(catchError(
            err =>
            err.status === 304 ? of(false) : throwError(err)));
    }
}
