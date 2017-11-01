import { AngularBucketlistPage } from './app.po';

describe('angular-bucketlist App', () => {
  let page: AngularBucketlistPage;

  beforeEach(() => {
    page = new AngularBucketlistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
