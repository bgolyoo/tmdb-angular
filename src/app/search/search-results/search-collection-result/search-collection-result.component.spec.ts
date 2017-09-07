import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HighlightModule } from '../../../shared/directives/highlight/highlight.module';
import { ApiKeyService } from '../../../shared/services/api-key/api-key.service';
import { TmdbService } from '../../../shared/services/tmdb/tmdb.service';
import { SearchService } from '../../../shared/services/tmdb/search/search.service';
import { SearchCollectionResultComponent } from './search-collection-result.component';

describe('SearchCollectionResultComponent', () => {
  let component: SearchCollectionResultComponent;
  let fixture: ComponentFixture<SearchCollectionResultComponent>;
  let mockbackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        HighlightModule
      ],
      declarations: [SearchCollectionResultComponent],
      providers: [
        ApiKeyService,
        TmdbService,
        SearchService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCollectionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([XHRBackend], (_mockbackend) => {
    mockbackend = _mockbackend;
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should return image url path', inject([TmdbService], tmdb => {
    const path = 'urlPath';
    const value = spyOn(tmdb, 'images').and.returnValue(path);
    expect(value).toEqual(path);
  }));

});
