import { AppPage } from './app.po';
import { browser, ExpectedConditions } from 'protractor'

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('app-root h1')).toEqual('Welcome to conFusion!');
  });

  it('should navigate to about us page by clicking on the link', () => { 
    page.navigateTo('/'); 

    let navlink = page.getAllElements('a').get(1); 
    navlink.click(); 
    expect(page.getParagraphText('h3')).toBe('About Us'); 
  });

  it('should enter a new comment for the first dish', () => {
    page.navigateTo('/dishdetail/0'); 

    let newAuthor = page.getElement('input[type=text]'); 
    browser.wait(ExpectedConditions.visibilityOf(newAuthor), 5000); 
    newAuthor.sendKeys('Test Author'); 

    let newComment = page.getElement('textarea'); 
    browser.wait(ExpectedConditions.visibilityOf(newComment), 5000);
    newComment.sendKeys('Test Comment'); 

    let newSubmitButton = page.getElement('button[type=submit]'); 
    browser.wait(ExpectedConditions.visibilityOf(newSubmitButton), 5000); 
    newSubmitButton.click(); 

    browser.pause();
  });
});
