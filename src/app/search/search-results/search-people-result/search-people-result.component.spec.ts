import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPeopleResultComponent } from './search-people-result.component';

describe('SearchPeopleResultComponent', () => {
  let component: SearchPeopleResultComponent;
  let fixture: ComponentFixture<SearchPeopleResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPeopleResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPeopleResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
