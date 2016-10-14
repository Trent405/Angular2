import { LippyChickPage } from './app.po';

describe('lippy-chick App', function() {
  let page: LippyChickPage;

  beforeEach(() => {
    page = new LippyChickPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('lc works!');
  });
});
