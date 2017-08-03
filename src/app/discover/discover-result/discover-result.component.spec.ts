import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverResultComponent } from './discover-result.component';

describe('DiscoverResultComponent', () => {
  let component: DiscoverResultComponent;
  let fixture: ComponentFixture<DiscoverResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
