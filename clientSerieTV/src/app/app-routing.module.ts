import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchSerietvComponent } from './search-serietv/search-serietv.component';
import { ItemSerietvComponent } from './item-serietv/item-serietv.component';

const routes: Routes = [
  {path: 'search', component: SearchSerietvComponent},
  {path: 'serie/:id', component: ItemSerietvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
