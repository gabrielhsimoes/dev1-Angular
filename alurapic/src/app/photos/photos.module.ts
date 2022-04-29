import { NgModule } from "@angular/core";

import { PhotoComponent } from "./photo/photo.component";
import { PhotoService } from "./photo/photo.service";
import { HttpClientModule } from "@angular/common/http";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from "@angular/common";
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    FilterByDescriptionPipe
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
