import { Ngbook2chapter1Page } from './app.po';

describe('ngbook2chapter1 App', function() {
  let page: Ngbook2chapter1Page;

  beforeEach(() => {
    page = new Ngbook2chapter1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
