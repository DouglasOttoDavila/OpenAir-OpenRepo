import Page from './page';
import { dailyTasks } from '../data/dailyTasks.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Home extends Page {
    /**
     * define selectors using getter methods
     */
    get timesheetsBtn () {
        return $(`(//a[@data-label="Timesheets"])[1]`);
    }

    get openTimeSheetsBtn () {
        return $(`(//a[@data-label="Open"])[1]`);
    }

    get notesField () {
        return $(`//textarea[@id="tm_notes"]`);
    } 

    get notesOkBtn () {
        return $(`//button[@class="btn-oa dialogOkButton"]`);
    } 

    get timesheetSaveBtn () {
        return $(`//input[@id="timesheet_savebutton"]`);
    }

    get startDateDiv () {
        return $(`(//div[@class="list-head-cell-content-label"])[2]`);
    }
    
    get orderByStartDateAsc () {
        return $(`//span[@class="svg ascendPrimarySmall"]`);
    }

    async openTimesheets (option) { //option == the row where the open timesheet is located at
        await this.timesheetsBtn.click();
        await this.openTimeSheetsBtn.click();
        const selectTimeSheet = $(`(//a[@class="rc-link"])[${option}]`);
        await selectTimeSheet.click();
    }

    async fillTimesheet (projectOpt, projectTitle, taskTitle, dailyHours, dailyHoursDescription) {
        const projectField = $(`//select[@shadowid="customer_project_${projectOpt}"]`);
        await projectField.selectByVisibleText(projectTitle);
        const projectTask = $(`//select[@shadowid="project_task_${projectOpt}"]`);
        await projectTask.selectByVisibleText(taskTitle);
        for (let i = 5; i <= 9; i++) {
            let inputHour = $(`//input[@id="ts_c${i}_r${projectOpt}"]`); //from monday to friday - line ${projectOpt}
            await inputHour.click();
            await inputHour.setValue(dailyHours);
            const inputHourDetails = $(`//a[@id="ts_notes_c${i}_r${projectOpt}"]`);
            await inputHourDetails.click();
            await this.notesField.setValue(dailyHoursDescription);
            await this.notesOkBtn.click();
        }
    }

    async fillTimesheetDiff (projectOpt, projectTitle, taskTitle) {
        const projectField = $(`//select[@shadowid="customer_project_${projectOpt}"]`);
        await projectField.selectByVisibleText(projectTitle);
        const projectTask = $(`//select[@shadowid="project_task_${projectOpt}"]`);
        await projectTask.selectByVisibleText(taskTitle);

        let hour;
        let task;
    
        for (let i = 5; i <= 9; i++) {

            let inputHour = $(`//input[@id="ts_c${i}_r${projectOpt}"]`); //from monday to friday - line ${projectOpt}
            await inputHour.click();
            
            switch (i) {
                case 5:
                    hour = dailyTasks[0][0];
                    task = dailyTasks[0][1];
                    break;
                case 6:
                    hour = dailyTasks[1][0];
                    task = dailyTasks[1][1];
                    break;
                case 7:
                    hour = dailyTasks[2][0];
                    task = dailyTasks[2][1];
                    break;
                case 8:
                    hour = dailyTasks[3][0];
                    task = dailyTasks[3][1];
                    break;
                case 9:
                    hour = dailyTasks[4][0];
                    task = dailyTasks[4][1];
                    break;  
                default:
                    break;
            }

            await inputHour.setValue(hour);
            const inputHourDetails = $(`//a[@id="ts_notes_c${i}_r${projectOpt}"]`);
            await inputHourDetails.click();
            await this.notesField.setValue(task);
            await this.notesOkBtn.click();
        }
    }

    async clearTimesheet (projectOpt) {
        for (let i = 5; i <= 9; i++) {
            let inputHour = $(`//input[@id="ts_c${i}_r${projectOpt}"]`); //from monday to friday - line ${projectOpt}
            await inputHour.click();
            await inputHour.clearValue();
            const inputHourDetails = $(`//a[@id="ts_notes_c${i}_r${projectOpt}"]`);
            await inputHourDetails.click();
            await this.notesField.clearValue();
            await this.notesOkBtn.click();
        }
    }

    async saveTimesheet() {
        await this.timesheetSaveBtn.click();
    }
}

export default new Home();
 