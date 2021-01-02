import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerieTVServiceService {

  constructor(private http : HttpClient) { }

  /* metodo che viene richiamato nel search-serietv.component.ts per cercare una serie tv dando url
  'query' sarà la variabile che contiene la mia serie ricercata.
  ritorna poi observable(obsSerietv) che verra usato nel search.ts per la ricerca*/
  searchSerieTV(query: string) {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    const headers = new HttpHeaders("Content-Type");

    let obsSerietv = this.http.get(url, { headers });
    return obsSerietv;
  }

  //metodo per ottenere le inf. della serie tv tramite id(variabile id)
  serieTV_ID(id : string) {
    const url = `https://api.tvmaze.com/shows/${id}`;
    const headers = new HttpHeaders("Content-Type");

    let obsSerietv = this.http.get(url, { headers });
    return obsSerietv;
  }
}
