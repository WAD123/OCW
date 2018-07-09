import { AdminAngularSrcPage } from './app.po';

describe('admin-angular-src App', () => {
  let page: AdminAngularSrcPage;

  beforeEach(() => {
    page = new AdminAngularSrcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
