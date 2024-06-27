import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TvShowService } from '../../services/tv-show.service';
import { TvShow } from '../../models/tv-show/tv-show.module';
import { TvShowDialogComponent } from '../tv-show-dialog/tv-show-dialog.component';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'favorite', 'actions'];
  tvShows: TvShow[] = [];

  constructor(private tvShowService: TvShowService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadTvShows();
  }

  loadTvShows(): void {
    this.tvShowService.getAll().subscribe(data => {
      this.tvShows = data;
    }, error => {
      console.error('Error loading TV shows:', error);
    });
  }

  openDialog(tvShow?: TvShow): void {
    const dialogRef = this.dialog.open(TvShowDialogComponent, {
      width: '250px',
      data: tvShow ? { ...tvShow } : { id: 0, name: '', favorite: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result); // Verificar los datos enviados
      if (result) {
        if (result.id) {
          this.tvShowService.update(result.id, result).subscribe(() => this.loadTvShows(), error => {
            console.error('Error updating TV show:', error);
          });
        } else {
          this.tvShowService.create(result).subscribe(() => this.loadTvShows(), error => {
            console.error('Error creating TV show:', error);
          });
        }
      }
    });
  }

  deleteTvShow(id: number): void {
    this.tvShowService.delete(id).subscribe(() => this.loadTvShows(), error => {
      console.error('Error deleting TV show:', error);
    });
  }
}
``
