import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';
@Injectable({
  providedIn: 'root',
})
export class LoadImgService {
  private folderImg = 'img';

  constructor(private angularFirestore: AngularFirestore) {}

  loadImgFirebase(imgs: FileItem[]) {
    console.log(imgs);
  }

  private saveImg(image: { name: string; url: string }): void {
    this.angularFirestore.collection(`/${this.folderImg}`).add(image);
  }
}
