// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Asegúrate de importar MatCheckboxModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule y ReactiveFormsModule

import { AppComponent } from './app.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { TvShowDialogComponent } from './components/tv-show-dialog/tv-show-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowListComponent,
    TvShowDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule, // Asegúrate de importar MatCheckboxModule
    FormsModule, // Agrega FormsModule
    ReactiveFormsModule // Agrega ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
