import { Component, OnInit, Input } from '@angular/core';
import { TvShowResult } from '../../../shared/classes/tv-show-result';
import { TmdbService } from '../../../shared/services/tmdb/tmdb.service';
import { Genre } from '../../../shared/classes/genre';

@Component({
  selector: 'app-search-tv-show-result',
  templateUrl: './search-tv-show-result.component.html',
  styleUrls: ['./search-tv-show-result.component.scss']
})
export class SearchTvShowResultComponent implements OnInit {

  @Input() query: string;
  @Input() result: TvShowResult;
  public overviewWordLimit: number;
  public isOverviewOpen = false;
  public initialOverviewWordLimit = 10;

  constructor(private tmdb: TmdbService) { }

  ngOnInit(): void {
    this.initOverviewWordLimit();
  }

  public getImage(path): string {
    return this.tmdb.images('w154', path);
  }

  public getGenres(genres: Array<number>): Array<string> {
    return this.tmdb.getGenreLabels(genres);
  }

  public toggleOverview(): void {
    this.isOverviewOpen = !this.isOverviewOpen;
    if (this.isOverviewOpen) {
      this.overviewWordLimit = this.result.overview.split(' ').length;
    } else {
      this.overviewWordLimit = this.initialOverviewWordLimit;
    }
  }

  private initOverviewWordLimit(): void {
    this.overviewWordLimit = this.initialOverviewWordLimit;
  }

}
