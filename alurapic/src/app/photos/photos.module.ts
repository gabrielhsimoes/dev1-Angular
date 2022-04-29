import { NgModule } from "@angular/core";

import { PhotoComponent } from "./photo/photo.component";
import { PhotoService } from "./photo/photo.service";
import { HttpClientModule } from "@angular/common/http";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from "@angular/common";
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PhotoService
  ],
  exports: [
    PhotoListComponent
  ]
})
export class PhotosModule {}
