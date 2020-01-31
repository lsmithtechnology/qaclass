import basePage from "./basepage";


class loginPage extends basePage {

    constructor() {
        super()
    }

    get username() { return $('//*[@id="username"]'); }

    get password() { return $('//*[@id="password"]'); }

    get loginButton() { return $('//*[@id="login"]/button'); }

    get logoutButton() { return $('//*[@id="content"]/div/a'); }

    get youLoggedInBanner() { return $('//*[@id="flash"]'); }


    login(username, password) {
        browser.url('/login')

        this.username.waitForDisplayed()
        this.username.setValue(username)
        this.password.waitForDisplayed()
        this.password.setValue(password)
        this.loginButton.waitForDisplayed()
        this.loginButton.click()
    }

}


export default new loginPage()