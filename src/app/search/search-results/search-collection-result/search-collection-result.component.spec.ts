import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCollectionResultComponent } from './search-collection-result.component';

describe('SearchCollectionResultComponent', () => {
  let component: SearchCollectionResultComponent;
  let fixture: ComponentFixture<SearchCollectionResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCollectionResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCollectionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
