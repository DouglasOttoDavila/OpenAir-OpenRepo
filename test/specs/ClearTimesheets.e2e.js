import Login from  '../pageobjects/login.page';
import Home from '../pageobjects/home.page';

describe('OpenAir Automation', () => {
    it('Select current timesheet, clear it and save (do not send)', async () => {
        const timesheetLine = 1;
        const projectLine = 1;
        
        await Login.open();
        await Login.login();
        await Home.openTimesheets(timesheetLine);
        await Home.clearTimesheet(projectLine);
        await Home.saveTimesheet();
    });
});


