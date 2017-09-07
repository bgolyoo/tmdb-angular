import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { DiscoverFiltersModule } from './discover-filters/discover-filters.module';
import { DiscoverResultsModule } from './discover-result/discover-result.module';
import { ApiKeyService } from '../shared/services/api-key/api-key.service';
import { TmdbService } from '../shared/services/tmdb/tmdb.service';
import { SearchService } from '../shared/services/tmdb/search/search.service';
import { DiscoverComponent } from './discover.component';

describe('DiscoverComponent', () => {
  let component: DiscoverComponent;
  let fixture: ComponentFixture<DiscoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        DiscoverFiltersModule,
        DiscoverResultsModule
      ],
      declarations: [DiscoverComponent],
      providers: [
        TmdbService,
        ApiKeyService,
        SearchService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
