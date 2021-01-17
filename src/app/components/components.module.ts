import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadComponent } from './load/load.component';

// Material Angular
import { AngularMaterialModule } from '../angular.material.module';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgDropFilesDirective } from '../directives/ng-drop-files.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PhotosComponent,
    LoadComponent,
    NgDropFilesDirective,
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),

    // Material Angular
    AngularMaterialModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class ComponentsModule {}
