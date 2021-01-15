import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadComponent } from './load/load.component';

// Material Angular
import { AngularMaterialModule } from '../angular.material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PhotosComponent,
    LoadComponent,
  ],
  imports: [
    CommonModule,

    // Material Angular
    AngularMaterialModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class ComponentsModule {}
