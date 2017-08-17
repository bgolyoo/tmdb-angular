import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { HighlightModule } from '../../shared/directives/highlight/highlight.module';
import { TruncateModule } from '../../shared/pipes/truncate/truncate.module';
import { StarRatingModule } from '../../shared/components/star-rating/star-rating.module';
import { SearchMovieResultComponent } from './search-movie-result/search-movie-result.component';
import { SearchTvShowResultComponent } from './search-tv-show-result/search-tv-show-result.component';
import { SearchPeopleResultComponent } from './search-people-result/search-people-result.component';
import { SearchCompanyResultComponent } from './search-company-result/search-company-result.component';
import { SearchCollectionResultComponent } from './search-collection-result/search-collection-result.component';

@NgModule({
  imports: [
    CommonModule,
    HighlightModule,
    TruncateModule,
    StarRatingModule
  ],
  declarations: [
    SearchResultsComponent,
    SearchMovieResultComponent,
    SearchTvShowResultComponent,
    SearchPeopleResultComponent,
    SearchCompanyResultComponent,
    SearchCollectionResultComponent
  ],
  exports: [SearchResultsComponent]
})
export class SearchResultsModule { }
