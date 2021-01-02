import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchSerietvComponent } from './search-serietv/search-serietv.component';

const routes: Routes = [
  {path: 'search', component: SearchSerietvComponent},
  /*{path: 'serie'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
