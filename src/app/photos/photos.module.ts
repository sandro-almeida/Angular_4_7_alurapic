import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
    declarations: [ PhotoComponent ], //these are the components that are part of this module
    exports: [ PhotoComponent ]       //these are the components that are exported from this module
})
export class PhotosModule {}