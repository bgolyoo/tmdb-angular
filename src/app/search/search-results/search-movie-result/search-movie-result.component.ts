import { Component, OnInit, Input } from '@angular/core';
import { MovieResult } from '../../../shared/classes/movie-result';
import { TmdbService } from '../../../shared/services/tmdb/tmdb.service';
import { Genre } from '../../../shared/classes/genre';

@Component({
  selector: 'app-search-movie-result',
  templateUrl: './search-movie-result.component.html',
  styleUrls: ['./search-movie-result.component.scss']
})
export class SearchMovieResultComponent implements OnInit {

  @Input() query: string;
  @Input() result: MovieResult;
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
