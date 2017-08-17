import { Component, Input } from '@angular/core';
import { MovieResult } from '../../shared/classes/movie-result';
import { TmdbService } from '../../shared/services/tmdb/tmdb.service';
import { Genre } from '../../shared/classes/genre';

@Component({
  selector: 'app-discover-result',
  templateUrl: './discover-result.component.html',
  styleUrls: ['./discover-result.component.scss']
})
export class DiscoverResultComponent {

  @Input() result: MovieResult;

  constructor(private tmdb: TmdbService) { }

  public getPoster(posterPath): string {
    return this.tmdb.images('w500', posterPath);
  }

  public getIconForRating(rating: number): string {
    const scaledRating = rating * 10;
    if (scaledRating <= 33) {
      return 'fa fw fa-frown-o';
    } else if (scaledRating <= 66) {
      return 'fa fw fa-meh-o';
    } else {
      return 'fa fw fa-smile-o';
    }
  }

  public getGenres(genres: Array<number>): Array<string> {
    return this.tmdb.getGenreLabels(genres);
  }

}
