import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSerietvComponent } from './search-serietv.component';

describe('SearchSerietvComponent', () => {
  let component: SearchSerietvComponent;
  let fixture: ComponentFixture<SearchSerietvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSerietvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSerietvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
