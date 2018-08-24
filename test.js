describe('Protractor Demo App', function() {
  it('should add one and two', function() {
    tests.openSite('http://juliemr.github.io/protractor-demo/');   
    element(by.model('first')).sendKeys(browser.params.number1);
    element(by.model('second')).sendKeys(browser.params.number2);
    element(by.id('gobutton')).click();    
    expect(element(by.binding("latest")).getText()).toEqual('3');
  });
});