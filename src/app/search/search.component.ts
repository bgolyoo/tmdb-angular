import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utils } from '../shared/classes/utils';
import { SearchType } from '../shared/enums/search-type.enum';
import { CollectionResult } from '../shared/classes/collection-result';
import { CompanyResult } from '../shared/classes/company-result';
import { KeywordResult } from '../shared/classes/keyword-result';
import { MovieResult } from '../shared/classes/movie-result';
import { PeopleResult } from '../shared/classes/people-result';
import { TvShowResult } from '../shared/classes/tv-show-result';
import { SearchCollectionResponse } from '../shared/classes/search/search-collection-response';
import { SearchCompanyResponse } from '../shared/classes/search/search-company-response';
import { SearchKeywordResponse } from '../shared/classes/search/search-keyword-response';
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

  public searchType = SearchType[SearchType.Multi];
  public results: Array<CollectionResult | CompanyResult | KeywordResult | MovieResult | PeopleResult | TvShowResult> = [];
  public isResultsOpen: boolean;
  private searchForm: FormGroup;
  private subscriptions: Array<Subscription> = [];

  constructor(private formBuilder: FormBuilder, private tmdb: TmdbService) { }

  ngOnInit() {
    this.initSearchForm();
  }

  public getSearchTypes(): Array<string> {
    return Utils.getEnumValues(SearchType);
  }

  private initSearchForm(): void {
    this.searchForm = this.formBuilder.group({
      query: ['', Validators.required]
    });
    this.subscriptions.push(this.searchForm.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(() => this.onSearchChange()));
  }

  public onSearchChange(): void {
    if (this.searchForm.invalid) {
      this.results = [];
      return;
    }
    this.tmdb['search' + this.searchType](this.searchForm.value).subscribe(
      (searchResponse:
        SearchCollectionResponse |
        SearchCompanyResponse |
        SearchKeywordResponse |
        SearchMovieResponse |
        SearchPeopleResponse |
        SearchTvShowResponse) => {
          this.isResultsOpen = true;
          this.results = searchResponse.results;
      },
      error => console.error(error)
    );
  }

  public toggleResults(): void {
    this.isResultsOpen = !this.isResultsOpen;
  }

  public clearSearch(): void {
    this.searchForm.get('query').reset();
    console.log(this.searchForm.value);
    this.results = [];
  }

}
