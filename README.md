# OpenAir Automation - Open Repository

This WDIO automation project is intended to suppress the need to fill out your timesheets every week manually.
I was tired of manually filling out my timesheets weekly by repeatedly pressing `Ctrl+C` and `Ctrl+V` on multiple different OpenAir tasks, so I used WebdriverIO to make the code work for me. 

## Important
1. Remember to locally set up your OpenAir credentials inside the .env file located at the project's root. The .env file was already added to the .gitignore file.
2. Remember to change your project details (tasks, hours, descriptions, etc) on the files located in ../test/data folder. There are two files: dailyTasks.js is where you can set up individual spent hours and descriptions. And the user.js is where you can set up your project options like title, task, and also hours and descriptions if you have the same description for each weekday.
