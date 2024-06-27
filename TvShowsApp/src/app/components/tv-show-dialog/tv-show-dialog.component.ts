// src/app/components/tv-show-dialog/tv-show-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TvShow } from '../../models/tv-show/tv-show.module';


@Component({
  selector: 'app-tv-show-dialog',
  templateUrl: './tv-show-dialog.component.html',
  styleUrls: ['./tv-show-dialog.component.css']
})
export class TvShowDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TvShowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TvShow
  ) {}

  onNoClick(): void {



    this.dialogRef.close();
  }
}
