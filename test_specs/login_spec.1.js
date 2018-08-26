describe('Login Functionality', () => {
    
    it('User should be able to login into eds_university.eleks.com', async () => {
        await browser.get('http://eds_university.eleks.com/login');

        await element(by.css('.login-button')).click();
        await element(by.id('email')).sendKeys("Bozhena.Bodnar+scorer@eleks.com");
        await element(by.id('userPassword')).sendKeys("cc&1FYFyHau");
        await element(by.css('.iframe-wrap .login-button')).click();

        let name = await element(by.css(".user-name")).getText();
        expect(name).toEqual('Bozhena Bodnar');
        console.log("User Name - " + name );
    });
});