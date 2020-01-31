import loginPage from "../pages/loginPage";

let bannerText;

describe('login test', () => {
   
    
    it('when I login', () => {
        loginPage.login('tomsmith','SuperSecretPassword!')
        
        
    });

    it('then I should be logged in', () => {
        loginPage.logoutButton.waitForDisplayed()

        bannerText = loginPage.youLoggedInBanner.getText()

        bannerText.should.include('You logged into')
    });
});