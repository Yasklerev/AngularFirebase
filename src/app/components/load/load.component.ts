import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss'],
})
export class LoadComponent implements OnInit {
  private folderImg = '';

  constructor(private angularFirestore: AngularFirestore) {}

  private saveImg(image: { name: string; url: string }): void {
    this.angularFirestore.collection(`/${this.folderImg}`).add(image);
  }

  ngOnInit(): void {}
}
