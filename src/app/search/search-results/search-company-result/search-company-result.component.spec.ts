import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCompanyResultComponent } from './search-company-result.component';

describe('SearchCompanyResultComponent', () => {
  let component: SearchCompanyResultComponent;
  let fixture: ComponentFixture<SearchCompanyResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCompanyResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCompanyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
