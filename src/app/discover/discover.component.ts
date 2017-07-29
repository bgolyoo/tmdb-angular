import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb/tmdb.service';
import { DiscoverResponse } from '../shared/classes/discover-response';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
    this.tmdbService.call().subscribe(
      (resp: DiscoverResponse) => console.log(resp),
      error => console.error(error)
    );
  }

}
