import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { TvShowFormComponent } from './components/tv-show-form/tv-show-form.component';

const routes: Routes = [
  { path: '', component: TvShowListComponent },
  { path: 'create', component: TvShowFormComponent },
  { path: 'edit/:id', component: TvShowFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
