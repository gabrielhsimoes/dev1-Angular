import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';
import { PhotoService } from './photo/photo.service';

@NgModule({
  declarations: [PhotoComponent],
  providers: [PhotoService],
  exports: [PhotoComponent]
})
export class PhotosModule { }
