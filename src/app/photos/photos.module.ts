import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';

@NgModule({
    declarations: [ 
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent, 
        PhotosComponent,
        FilterByDescription,
        LoadButtonComponent
     ], //these are the components that are part of this module
    //exports: [ PhotoComponent ],       //these are the components that are exported from this module
    imports: [ HttpClientModule, CommonModule ]
})
export class PhotosModule {}