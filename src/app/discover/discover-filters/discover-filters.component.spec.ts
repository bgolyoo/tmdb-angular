import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverFiltersComponent } from './discover-filters.component';

describe('DiscoverFiltersComponent', () => {
  let component: DiscoverFiltersComponent;
  let fixture: ComponentFixture<DiscoverFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
