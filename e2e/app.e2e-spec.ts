import { IfPage } from './app.po';

describe('if App', () => {
  let page: IfPage;

  beforeEach(() => {
    page = new IfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
