import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ApiKeyService } from '../../shared/services/api-key/api-key.service';
import { TmdbService } from '../../shared/services/tmdb/tmdb.service';
import { SearchService } from '../../shared/services/tmdb/search/search.service';
import { DiscoverResultComponent } from './discover-result.component';

describe('DiscoverResultComponent', () => {
  let component: DiscoverResultComponent;
  let fixture: ComponentFixture<DiscoverResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      declarations: [ DiscoverResultComponent ],
      providers: [
        ApiKeyService,
        TmdbService,
        SearchService,
      ]
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
