import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SerieTVServiceService } from '../serie-tvservice.service';

@Component({
  selector: 'app-item-serietv',
  templateUrl: './item-serietv.component.html',
  styleUrls: ['./item-serietv.component.css']
})
export class ItemSerietvComponent implements OnInit {
  oSerieTv : Observable<Object>;
  serieTV: any;
  serieServiceObs : Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    private service: SerieTVServiceService
  ) { }

  ngOnInit(): void {
    this.oSerieTv = this.route.paramMap;
    this.oSerieTv.subscribe(this.getRouterParam);
  }

  getRouterParam = (params : ParamMap) =>
  {
    let serieID = params.get('id');
    console.log(serieID);

    this.serieServiceObs = this.service.serieTV_ID(serieID);
    this.serieServiceObs.subscribe((data)=>this.serieTV = data);
  }
}
