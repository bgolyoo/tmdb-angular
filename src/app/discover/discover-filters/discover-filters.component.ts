import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscoverQuery } from '../../shared/classes/discover-query';
import { ApiKeyService } from '../../shared/services/api-key/api-key.service';
import { TmdbService } from '../../shared/services/tmdb/tmdb.service';
import { SortBy } from '../../shared/enums/sort-by.enum';
import { Genre } from '../../shared/classes/genre';
import { Utils } from '../../shared/classes/utils';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-discover-filters',
  templateUrl: './discover-filters.component.html',
  styleUrls: ['./discover-filters.component.scss']
})
export class DiscoverFiltersComponent implements OnInit {

  @Output() filterChanged: EventEmitter<DiscoverQuery> = new EventEmitter();
  public filterForm: FormGroup;
  public genres: Array<Genre> = [];
  private subscriptions: Array<Subscription> = [];

  constructor(private formBuilder: FormBuilder, private as: ApiKeyService, private tmdb: TmdbService) { }

  ngOnInit() {
    this.getGenres();
    this.initFilterForm();
    this.emitFilerValue();
  }

  public getSortByValues(): Array<string> {
    return Utils.getEnumValues(SortBy);
  }

  public getGenres(): void {
    this.subscriptions.push(this.tmdb.genres.subscribe((genres: Array<Genre>) => {
      this.genres = genres;
    }));
  }

  private initFilterForm(): void {
    this.filterForm = this.formBuilder.group({
      api_key: [this.as.apiKey],
      sort_by: [this.getSortByValues()[0]],
      'vote_average.gte': ['0'],
      'vote_average.lte': ['10'],
      'release_date.gte': ['2016'],
      'release_date.lte': ['2016'],
      with_genres: ['']
    });
    this.subscriptions.push(this.filterForm.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(() => this.onFilterChange()));
  }

  private onFilterChange(): void {
    this.emitFilerValue();
  }

  private emitFilerValue(): void {
    this.filterChanged.emit(this.filterForm.value);
  }

}
