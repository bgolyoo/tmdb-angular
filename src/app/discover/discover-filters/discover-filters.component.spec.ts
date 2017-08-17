import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiKeyService } from '../../shared/services/api-key/api-key.service';
import { TmdbService } from '../../shared/services/tmdb/tmdb.service';
import { SearchService } from '../../shared/services/tmdb/search/search.service';
import { DiscoverFiltersComponent } from './discover-filters.component';

describe('DiscoverFiltersComponent', () => {
  let component: DiscoverFiltersComponent;
  let fixture: ComponentFixture<DiscoverFiltersComponent>;
  let mockbackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [DiscoverFiltersComponent],
      providers: [
        ApiKeyService,
        TmdbService,
        SearchService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([XHRBackend], (_mockbackend) => {
    mockbackend = _mockbackend;
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
