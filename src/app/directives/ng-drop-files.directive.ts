import {
  Directive,
  EventEmitter,
  ElementRef,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { FileItem } from '../models/file-item';

// EventEmiter para hablar con el padre.

@Directive({
  selector: '[appNgDropFiles]',
})
export class NgDropFilesDirective {
  @Input() archives: FileItem[] = [];
  @Output() OverMouse: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any): void {
    this.OverMouse.emit(true);
    this._preventDefault(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any): void {
    this.OverMouse.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any): void {
    this.OverMouse.emit(false);

    const transfer = this._getTransfer(event);

    if (!transfer) {
      return;
    }

    this._extractFiles(transfer.files);
    this._preventDefault(event);
    this.OverMouse.emit(false);
  }

  private _getTransfer(event: any): any {
    return event.dataTransfer
      ? event.dataTransfer
      : event.originalEvent.dataTransfer;
  }

  private _extractFiles(archivesList: FileList): void {
    // tslint:disable-next-line: forin
    for (const property in Object.getOwnPropertyNames(archivesList)) {
      const archiveTemp = archivesList[property];
      if (this._theFileCanBeUploaded(archiveTemp)) {
        const newArchive = new FileItem(archiveTemp);
        this.archives.push(newArchive);
      }
    }
    console.log(this.archives);
  }

  // Validaciones

  private _theFileCanBeUploaded(archive: File): boolean {
    if (!this._archiveDropp(archive.name) && this._isImage(archive.type)) {
      return true;
    } else {
      return false;
    }
  }

  private _preventDefault(event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private _archiveDropp(nameArchive: string): boolean {
    for (const archive of this.archives) {
      if (archive.nameArchive === nameArchive) {
        console.log('El archivos: ' + nameArchive + ' ya está agregado.');
        return true;
      }
    }
    return false;
  }

  private _isImage(typeArchive: string): boolean {
    return typeArchive === '' || typeArchive === undefined
      ? false
      : typeArchive.startsWith('image');
  }
}
