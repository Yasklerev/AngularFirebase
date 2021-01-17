import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';

import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LoadImgService {
  private folderImg = 'img';

  constructor(
    private angularFirestore: AngularFirestore,
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  loadImgFirebase(imgs: FileItem[]): void {
    for (const item of imgs) {
      item.loading = true;
      if (item.progress >= 100) {
        continue;
      }
      const file = item.archive;
      const filePath = `${this.folderImg}/${item.nameArchive}`;
      const fileRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, file);

      uploadTask
        .percentageChanges()
        .subscribe((resp) => (item.progress = resp));
      uploadTask
        .snapshotChanges()
        .pipe(
          finalize(() =>
            fileRef.getDownloadURL().subscribe((url) => {
              console.log('Archivos cargados satisfactoriamente');
              item.url = url;
              item.loading = false;
              this.saveImg({
                name: item.nameArchive,
                url: item.url,
              });
            })
          )
        )
        .subscribe();
    }
  }

  private saveImg(image: { name: string; url: string }): void {
    this.angularFirestore.collection(`/${this.folderImg}`).add(image);
  }
}
