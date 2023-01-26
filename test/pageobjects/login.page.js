import Page from './page';
import { user } from '../data/user';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Login extends Page {

    /**
     * define selectors using getter methods
     */

     get inputCompanyId () {
        return $(`//input[@name="companyID"]`);
    }

    get inputUserId () {
        return $(`//input[@name="userID"]`);
    }

    get inputPassword () {
        return $(`//input[@name="password"]`);
    }

    get btnLogin () {
        return $(`//input[@value="Log in"]`);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login () {
        const userId = process.env.USERID;
        const password = process.env.PASSWORD;
        await this.inputCompanyId.setValue(user.user_data.credentials.companyId);
        await this.inputUserId.setValue(userId);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new Login();
