import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchSerietvComponent } from './search-serietv/search-serietv.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemSerietvComponent } from './item-serietv/item-serietv.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchSerietvComponent,
    ItemSerietvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
