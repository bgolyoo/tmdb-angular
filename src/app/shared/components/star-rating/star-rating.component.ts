import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() rating = 0;
  @Input() outOf = 10;
  @Input() stars = 5;
  public starModel: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
    this.initStarModel();
  }

  private initStarModel(): void {
    const rating = this.rating / this.outOf * 100;
    const model = Array.apply(null, Array(this.stars * 2))
      .map((x, i) => {
        if (rating >= ((i + 1) * (100 / (this.stars * 2)))) {
          return 1;
        } else {
          return 0;
        }
      });
    for (let i = 0; i < model.length; i += 2) {
      const value = model[i] + model[i + 1];
      if (value === 0) {
        this.starModel.push(0);
      } else if (value === 1) {
        this.starModel.push(0.5);
      } else if (value === 2) {
        this.starModel.push(1);
      } else {
        this.starModel.push(0);
      }
    }
  }

}
