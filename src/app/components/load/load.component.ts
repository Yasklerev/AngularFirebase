import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { LoadImgService } from 'src/app/services/load-img.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss'],
})
export class LoadComponent implements OnInit {
  isOnTheElement = false;
  archives: FileItem[] = [];

  constructor(public loadImgService: LoadImgService) {}

  ngOnInit(): void {}

  loadImages(): void {
    this.loadImgService.loadImgFirebase(this.archives);
  }

  prueba(event): void {
    console.log(event);
  }
  clearFiles(): void {
    this.archives = [];
  }
}
