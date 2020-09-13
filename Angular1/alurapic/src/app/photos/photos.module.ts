import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoModule } from "./photo/photo.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
  imports: [
      PhotoModule,
      PhotoFormModule,
      PhotoListModule,
      CommonModule,
      PhotoDetailsModule
    ],
  declarations: [ ],
})
export class PhotosModule {}
