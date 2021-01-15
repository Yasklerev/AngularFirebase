export class FileItem {
  public archive: File;
  public nameArchive: string;
  public url: string;
  public loading: boolean;
  public progress: number;

  constructor(archive: File) {
    this.archive = archive;
    this.nameArchive = archive.name;

    this.loading = false;
    this.progress = 0;
  }
}
