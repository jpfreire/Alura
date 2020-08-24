import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import {Routes, RouterModule} from '@angular/router';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';

const routes: Routes = [
    {path: 'user/flavio', component: PhotoListComponent},
    {path: 'p/add', component: PhotoFormComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
