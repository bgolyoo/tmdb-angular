import { Component, Input } from '@angular/core';
import { CollectionResult } from '../../../shared/classes/collection-result';
import { TmdbService } from '../../../shared/services/tmdb/tmdb.service';

@Component({
  selector: 'app-search-collection-result',
  templateUrl: './search-collection-result.component.html',
  styleUrls: ['./search-collection-result.component.scss']
})
export class SearchCollectionResultComponent {

  @Input() query: string;
  @Input() result: CollectionResult;

  constructor(private tmdb: TmdbService) { }

  public getImage(path): string {
    return this.tmdb.images('w154', path);
  }

}
