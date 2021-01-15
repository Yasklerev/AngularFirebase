import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { LoadImgService } from 'src/app/services/load-img.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss'],
})
export class LoadComponent implements OnInit {
  archives: FileItem[] = [];

  constructor(public loadImgService: LoadImgService) {}

  ngOnInit(): void {}

  loadImages() {
    this.loadImgService.loadImgFirebase(this.archives);
  }
}
