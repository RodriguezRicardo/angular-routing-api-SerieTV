import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSerietvComponent } from './item-serietv.component';

describe('ItemSerietvComponent', () => {
  let component: ItemSerietvComponent;
  let fixture: ComponentFixture<ItemSerietvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSerietvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSerietvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
