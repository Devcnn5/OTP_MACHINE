# OTP_MACHINE
It uses nodejs server, mysql database, expressjs middleware and ejs templates.
Lets you add contacts and send them auto-generated 6 digit OTP.Displays the List of contacts and the messages sent to them ordered by GMT timestamp.

# How does it work
The add contact button adds the contact to the databse.The Contacts appear on the same page in a table.Each First name is a link to another page which stores the phone number and the button to open up a modal window.The window contains auto generated OTP. On clicking the send button, the message is sent through twilio api to the contact.A page with all the sent messages appears after that.

# Twilio API
You need to register on twilio for a trial account. You will be alloted account sid and authentication token. Now you need to rent a number from which you can send messages. Next register the numbers you want to send the messages to in the test numbers. You can not send messages to numbers which have not been registered in your test numbers (in trial mode).

# Make it work
1. Just clone the files and run npm install.That will install all the required node modules.
2. Edit the env.js file to change the credentials.
3. Run npm start or node server.js
