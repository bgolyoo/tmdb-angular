import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderModule } from './header/header.module';
import { SearchModule } from './search/search.module';
import { TmdbService } from './shared/services/tmdb/tmdb.service';
import { ApiKeyService } from './shared/services/api-key/api-key.service';
import { SearchService } from './shared/services/tmdb/search/search.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule,
        HeaderModule,
        SearchModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        TmdbService,
        ApiKeyService,
        SearchService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
