import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
    declarations: [ PhotoComponent, PhotoListComponent ], //these are the components that are part of this module
    //exports: [ PhotoComponent ],       //these are the components that are exported from this module
    imports: [ HttpClientModule, CommonModule ]
})
export class PhotosModule {}