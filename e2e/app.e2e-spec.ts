import { HtmlCssPrimerPage } from './app.po';

describe('html-css-primer App', () => {
  let page: HtmlCssPrimerPage;

  beforeEach(() => {
    page = new HtmlCssPrimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
