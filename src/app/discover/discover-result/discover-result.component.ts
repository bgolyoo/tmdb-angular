import { Component, Input } from '@angular/core';
import { DiscoverResponseResult } from '../../shared/classes/discover-response-result';
import { TmdbService } from '../../shared/services/tmdb/tmdb.service';
import { Genre } from '../../shared/classes/genre';

@Component({
  selector: 'app-discover-result',
  templateUrl: './discover-result.component.html',
  styleUrls: ['./discover-result.component.scss']
})
export class DiscoverResultComponent {

  @Input() result: DiscoverResponseResult;

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
    const genreLabels: Array<string> = [];
    this.tmdb.genres.subscribe(
      (genresEl: Array<Genre>) => {
        genres.forEach((genre: number) => {
          const foundGenre: Genre = genresEl.find((genreEl: Genre) => genreEl.id === genre);
          genreLabels.push(foundGenre.name);
        });
      }
    );
    return genreLabels;
  }

}
