# Gmail Chrono Archive

There are mails you want to receive, there are mails you don't, and then there are mails you want to receive but are ephemeral in nature. These emails are generally notifications, things you want to acknowledge but you know will not interest you in 5 days. Why spend the effort to manually archive these mails, when you can have "robots" do it for you? Welcome to the future.


# Making it work

1. Go to https://script.google.com/
2. In the column "Create script for" click on "Blank Project"
3. Copy the [contents of chronoarchive.js]() to the file
4. Customize the list of emails and their expiration days to your liking from the variable "addressesAndExpiration"
5. Click on "File" menu item and then "Save". The name can be "gmail-chrono-archive" or whatever you want.
6. Click on "Resources" menu item and then "Current project's triggers", a modal will show up. Click on "No triggers set up. Click here to add one now."
7. In "Run" choose "checkOldEphemeralMail", in "Events" choose "Time-driven", "Hour timer", "Every 12 hours". You can make it more frequent but it's unnecessary. Click "Save".
8. It will inform you that the App needs authorization. It will need to "View and manage your mail". [Read the code]() to make sure everything is safe and then click "Accept". Always make sure you know what you're allowing access to your email, don't be a dingus.
9. Brew some coffee and brag with your coworkers about how efficient you are, because this is officially done!


# I'd like to know what changes are being done to my inbox

Indeed you do. To get a notification email every time the script runs with a rundown of what emails were archived, follow the previous steps but instead of using chronoarchive.js use [chronoarchive-with-logs.js](). But be warned that these mails will eventually get annoying and actually go against the grain of what you want to achieve here (a less cluttered inbox).


# I want to make changes to the script

Go wild. I recommend reading these resources:

* [Gmail Service](https://developers.google.com/apps-script/reference/gmail/)
* [Mail Service](https://developers.google.com/apps-script/reference/mail/)
* [Class Logger](https://developers.google.com/apps-script/reference/base/logger)
* [Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
