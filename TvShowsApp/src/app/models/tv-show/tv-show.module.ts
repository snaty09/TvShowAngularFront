import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TvShowModule { }


export interface TvShow {
  id: number;
  name: string;
  favorite: boolean;
}
