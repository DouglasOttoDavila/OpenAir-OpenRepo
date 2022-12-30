import Login from  '../pageobjects/login.page';
import Home from '../pageobjects/home.page';
import { user } from '../data/user';

//Configuration for project option (row inside timesheet view)
const projectOpt = 1;
const uniqueDescription = false;

describe('OpenAir Automation', () => {
    it('Select current timesheet, fill it out and save (do not send)', async () => {
        await Login.open();
        await Login.login();
        await Home.openTimesheets(1);
        if (uniqueDescription == true) {
            await Home.fillTimesheet(
                user.user_data[`projectOption${projectOpt}`].projectOption, 
                user.user_data[`projectOption${projectOpt}`].projectTitle, 
                user.user_data[`projectOption${projectOpt}`].taskTitle, 
                user.user_data[`projectOption${projectOpt}`].dailyHours, 
                user.user_data[`projectOption${projectOpt}`].dailyHoursDescription
            );
        } else {
            await Home.fillTimesheetDiff(
                user.user_data[`projectOption${projectOpt}`].projectOption, 
                user.user_data[`projectOption${projectOpt}`].projectTitle, 
                user.user_data[`projectOption${projectOpt}`].taskTitle, 
            );
        }
        await Home.saveTimesheet();
    });
});


