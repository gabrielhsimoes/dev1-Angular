import { NgModule } from "@angular/core";

import { PhotoService } from "./photo/photo.service";
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
  declarations: [],
  imports: [
    PhotoModule,
    PhotoListModule,
    PhotoFormModule,

  ],
  providers: [
    PhotoService
  ],
  exports: [
  ]
})
export class PhotosModule {}
