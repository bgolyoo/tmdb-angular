import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTvShowResultComponent } from './search-tv-show-result.component';

describe('SearchTvShowResultComponent', () => {
  let component: SearchTvShowResultComponent;
  let fixture: ComponentFixture<SearchTvShowResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTvShowResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTvShowResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
