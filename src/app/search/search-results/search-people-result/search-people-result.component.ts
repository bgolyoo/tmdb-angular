import { Component, Input } from '@angular/core';
import { PeopleResult } from '../../../shared/classes/people-result';
import { TmdbService } from '../../../shared/services/tmdb/tmdb.service';
import { Genre } from '../../../shared/classes/genre';

@Component({
  selector: 'app-search-people-result',
  templateUrl: './search-people-result.component.html',
  styleUrls: ['./search-people-result.component.scss']
})
export class SearchPeopleResultComponent {

  @Input() query: string;
  @Input() result: PeopleResult;
  public overviewWordLimit: number;
  public isOverviewOpen = false;
  public initialOverviewWordLimit = 10;

  constructor(private tmdb: TmdbService) { }

  public getImage(path): string {
    return this.tmdb.images('w154', path);
  }

}
