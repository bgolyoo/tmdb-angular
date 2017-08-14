import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CollectionResult } from '../../shared/classes/collection-result';
import { CompanyResult } from '../../shared/classes/company-result';
import { MovieResult } from '../../shared/classes/movie-result';
import { PeopleResult } from '../../shared/classes/people-result';
import { TvShowResult } from '../../shared/classes/tv-show-result';
import { SearchType } from '../../shared/enums/search-type.enum';
import { MediaType } from '../../shared/enums/media-type.enum';
import { TmdbService } from '../../shared/services/tmdb/tmdb.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnChanges {

  @Input() query: string;
  @Input() results: Array<CollectionResult | CompanyResult | MovieResult | PeopleResult | TvShowResult> = [];
  @Input() isResultsOpen: boolean;
  @Input() searchType: string;
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Output() loadMore: EventEmitter<any> = new EventEmitter();

  constructor(private tmdb: TmdbService) { }

  ngOnChanges(changes?: SimpleChanges): void {
    if (this.results.length) {
      this.results = this.results.map(result => this.initResultObject(result));
    }
  }

  public loadMoreResults(): void {
    this.loadMore.emit();
  }

  public isCollection(obj: CollectionResult | CompanyResult | MovieResult | PeopleResult | TvShowResult): boolean {
    return obj instanceof CollectionResult;
  }

  public isCompany(obj: CollectionResult | CompanyResult | MovieResult | PeopleResult | TvShowResult): boolean {
    return obj instanceof CompanyResult;
  }

  public isMovie(obj: CollectionResult | CompanyResult | MovieResult | PeopleResult | TvShowResult): boolean {
    return obj instanceof MovieResult;
  }

  public isPeople(obj: CollectionResult | CompanyResult | MovieResult | PeopleResult | TvShowResult): boolean {
    return obj instanceof PeopleResult;
  }

  public isTvShow(obj: CollectionResult | CompanyResult | MovieResult | PeopleResult | TvShowResult): boolean {
    return obj instanceof TvShowResult;
  }

  private initResultObject(obj: CollectionResult | CompanyResult | MovieResult | PeopleResult | TvShowResult):
    CollectionResult | CompanyResult | MovieResult | PeopleResult | TvShowResult {
    let result: CollectionResult | CompanyResult | MovieResult | PeopleResult | TvShowResult;
    switch (this.searchType) {
      case SearchType[SearchType.Collection]: {
        result = new CollectionResult(obj);
        break;
      }
      case SearchType[SearchType.Company]: {
        result = new CompanyResult(obj);
        break;
      }
      case SearchType[SearchType.Movie]: {
        result = new MovieResult(obj);
        break;
      }
      case SearchType[SearchType.People]: {
        result = new PeopleResult(obj);
        break;
      }
      case SearchType[SearchType.TvShow]: {
        result = new TvShowResult(obj);
        break;
      }
      case SearchType[SearchType.Multi]: {
        const multiResult: MovieResult | PeopleResult | TvShowResult = obj;
        if (multiResult.media_type === MediaType[MediaType.movie]) {
          result = new MovieResult(obj);
        } else if (multiResult.media_type === MediaType[MediaType.person]) {
          result = new PeopleResult(obj);
        } else if (multiResult.media_type === MediaType[MediaType.tv]) {
          result = new TvShowResult(obj);
        }
        break;
      }
      default: {
        result = obj;
        break;
      }
    }
    return result;
  }

}
