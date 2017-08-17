import { Component, Input } from '@angular/core';
import { CompanyResult } from '../../../shared/classes/company-result';
import { TmdbService } from '../../../shared/services/tmdb/tmdb.service';

@Component({
  selector: 'app-search-company-result',
  templateUrl: './search-company-result.component.html',
  styleUrls: ['./search-company-result.component.scss']
})
export class SearchCompanyResultComponent {

  @Input() query: string;
  @Input() result: CompanyResult;

  constructor(private tmdb: TmdbService) { }

  public getImage(path): string {
    return this.tmdb.images('w154', path);
  }

}
