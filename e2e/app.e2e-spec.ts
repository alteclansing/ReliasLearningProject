import { ReliasProjectPage } from './app.po';

describe('relias-project App', () => {
  let page: ReliasProjectPage;

  beforeEach(() => {
    page = new ReliasProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
