import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieTVServiceService } from '../serie-tvservice.service';

@Component({
  selector: 'app-search-serietv',
  templateUrl: './search-serietv.component.html',
  styleUrls: ['./search-serietv.component.css']
})
export class SearchSerietvComponent {
  query: string;
  obsSerie: Observable<Object>;
  res: any

  constructor(public sTV : SerieTVServiceService) { }

  submit(query : HTMLInputElement) : void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsSerie = this.sTV.searchSerieTV(this.query);
    this.obsSerie.subscribe((data) => { this.res = data; console.log(this.res) });
  }

}
