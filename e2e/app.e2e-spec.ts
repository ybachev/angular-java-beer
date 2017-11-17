import { AngularJavaBeerPage } from './app.po';

describe('angular-java-beer App', function() {
  let page: AngularJavaBeerPage;

  beforeEach(() => {
    page = new AngularJavaBeerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
