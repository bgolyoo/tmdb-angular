import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscoverQuery } from '../../shared/classes/discover-query';
import { ApiKeyService } from '../../shared/services/api-key/api-key.service';
import { SortBy } from '../../shared/enums/sort-by.enum';
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
  private subscriptions: Array<Subscription> = [];

  constructor(private formBuilder: FormBuilder, private as: ApiKeyService) { }

  ngOnInit() {
    this.initFilterForm();
    this.emitFilerValue();
  }

  public getSortByValues(): Array<string> {
    const keys = Object.keys(SortBy);
    return keys.slice(keys.length / 2);
  }

  private initFilterForm(): void {
    this.filterForm = this.formBuilder.group({
      api_key: [this.as.apiKey],
      sort_by: [this.getSortByValues()[0]]
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
