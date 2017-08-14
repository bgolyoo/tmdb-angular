import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utils } from '../shared/classes/utils';
import { SearchType } from '../shared/enums/search-type.enum';
import { CollectionResult } from '../shared/classes/collection-result';
import { CompanyResult } from '../shared/classes/company-result';
import { MovieResult } from '../shared/classes/movie-result';
import { PeopleResult } from '../shared/classes/people-result';
import { TvShowResult } from '../shared/classes/tv-show-result';
import { SearchCollectionResponse } from '../shared/classes/search/search-collection-response';
import { SearchCompanyResponse } from '../shared/classes/search/search-company-response';
import { SearchMovieResponse } from '../shared/classes/search/search-movie-response';
import { SearchPeopleResponse } from '../shared/classes/search/search-people-response';
import { SearchTvShowResponse } from '../shared/classes/search/search-tv-show-response';
import { TmdbService } from '../shared/services/tmdb/tmdb.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public results: Array<CollectionResult | CompanyResult | MovieResult | PeopleResult | TvShowResult> = [];
  public isResultsOpen: boolean;
  public totalPages: number;
  private placeholders: Array<{key: string, text: string}> = [
    { key: SearchType[SearchType.Multi], text: 'Search for movies, tv shows, people...' },
    { key: SearchType[SearchType.Movie], text: 'Search for movies...' },
    { key: SearchType[SearchType.TvShow], text: 'Search for tv shows...' },
    { key: SearchType[SearchType.People], text: 'Search for people...' },
    { key: SearchType[SearchType.Company], text: 'Search for companies...' },
    { key: SearchType[SearchType.Collection], text: 'Search for collections...' }
  ];
  private defaultPlaceholder = 'Search...';
  private _searchType: string;
  private searchForm: FormGroup;
  private subscriptions: Array<Subscription> = [];

  get searchType(): string {
    return this._searchType;
  }

  set searchType(value: string) {
    if (this._searchType) {
      this._searchType = value;
      this.onQueryChange();
    } else {
      this._searchType = value;
    }
  }

  constructor(private formBuilder: FormBuilder, private tmdb: TmdbService) { }

  ngOnInit(): void {
    this.initSearchType();
    this.initSearchForm();
  }

  public getSearchTypes(): Array<string> {
    return Utils.getEnumValues(SearchType);
  }

  public getPlaceholder(searchType: string) {
    const placeholder = this.placeholders.find((ph: {key: string, text: string}) => ph.key === searchType).text;
    return placeholder ? placeholder : this.defaultPlaceholder;
  }

  public loadMore(): void {
    this.searchForm.get('page').setValue(this.searchForm.get('page').value + 1);
    if (this.searchForm.invalid) {
      this.results = [];
      this.clearSearch();
      return;
    }
    this.tmdb['search' + this.searchType](this.searchForm.value).subscribe(
      (searchResponse:
        SearchCollectionResponse |
        SearchCompanyResponse |
        SearchMovieResponse |
        SearchPeopleResponse |
        SearchTvShowResponse) => {
        this.isResultsOpen = true;
        const results = this.results.slice();
        Array.prototype.push.apply(results, searchResponse.results);
        this.results = results.slice();
      },
      error => console.error(error)
    );
  }

  public toggleResults(): void {
    this.isResultsOpen = !this.isResultsOpen;
  }

  public clearSearch(): void {
    this.searchForm.reset({ query: '', page: 1 });
    this.results = [];
  }

  private initSearchType(): void {
    this.searchType = SearchType[SearchType.Multi];
  }

  private initSearchForm(): void {
    this.searchForm = this.formBuilder.group({
      query: ['', Validators.required],
      page: [1]
    });
    this.subscriptions.push(this.searchForm.get('query').valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(() => this.onQueryChange()));
  }

  private onQueryChange(): void {
    this.searchForm.get('page').reset(1);
    if (this.searchForm.invalid) {
      this.results = [];
      this.clearSearch();
      return;
    }
    this.tmdb['search' + this.searchType](this.searchForm.value).subscribe(
      (searchResponse:
        SearchCollectionResponse |
        SearchCompanyResponse |
        SearchMovieResponse |
        SearchPeopleResponse |
        SearchTvShowResponse) => {
        this.isResultsOpen = true;
        this.totalPages = searchResponse.total_pages;
        this.results = searchResponse.results;
      },
      error => console.error(error)
    );
  }

}
