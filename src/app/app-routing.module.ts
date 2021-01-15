import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoadComponent } from './components/load/load.component';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
  { path: 'photos', component: PhotosComponent },
  { path: 'load', component: LoadComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'photos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
