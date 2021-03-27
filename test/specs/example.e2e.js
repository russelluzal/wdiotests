import LoginPage from  '../pageobjects/login.page';
import ProfilePage from  '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('pacuk-man@yandex.com');
        LoginPage.setPassword('arizap21');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});


