import { TopTrendPage } from './app.po';

describe('top-trend App', () => {
  let page: TopTrendPage;

  beforeEach(() => {
    page = new TopTrendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
