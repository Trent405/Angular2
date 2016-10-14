import { browser, element, by } from 'protractor';

export class LippyChickPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lc-root h1')).getText();
  }
}
