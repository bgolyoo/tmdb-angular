import { TmdbAngularPage } from './app.po';

describe('tmdb-angular App', () => {
  let page: TmdbAngularPage;

  beforeEach(() => {
    page = new TmdbAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
