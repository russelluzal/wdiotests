import LoginPage from  '../pageobjects/login.page';
import ProfilePage from  '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
        // browser.deleteAllCookies();
        // browser.clearLocalStorage();
        browser.execute('window.localStorage.clear()');
        browser.refresh();
    });

    it ('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('pacuk-man@yandex.com');
        LoginPage.setPassword('arizap21');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent',() => {
        LoginPage.submitButtonIsDisabled();
    });

    it('fails if invalid dat provided', () => {
        LoginPage.setLogin('pacuk-man@yandex.com');
        LoginPage.setPassword('arizap21');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });
});


