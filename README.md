

# Team One React Decal Final Project #

#### We were inspired by the google sheet check-in in previous class, and we are looking for a insteresing way to visualize the Google sheet by rendering a website. Our project provides a easy way to allow users to serve up any data from Google sheet into a real React app. ####

#### Open App.js and inspect the main component that creates your browser view. Any saved changes made to App.js will automatically be reflected in your browser. ####

#### Pacakge: ####
- tabletop: allows us to take our Google Sheet data and export it as a JSON object. 

#### API: ####
- Google Sheet API


#### Our working process: ####
- Setting up create-react-app
- Publishing a Google Sheet to the web
- Using Tabletop.js to send a JSON object to our react application
- Rendering the Google Sheet data in react
- Handling real-time updates made in Google Sheets

Our Demo sheet link: 
[a link](https://docs.google.com/spreadsheets/d/1fO0fmOyoXHGfJgvhVLxNlyCdKvkYVS4R8zzEDIBXH9w/edit#gid=0)

First of all, We have to pre-set the google sheet to published (File -> Publish to web ->Towards the bottom select Start publishing). 

Then we can get the api key of the google sheet. and key will be the entire string after /spreadsheets/d/KEY/edit#gid=0.

![ScreenShot](https://github.com/xxxuduo/react_final_project/blob/master/ScreenShot/screenshotpublish.jpeg)

#### The tabletop package allows us to access every row in the spreadsheet as an object, and we can access every column by column name, for example, obj.*team_name* ####


you can edit the team imformation in the Google sheet. As the image shown below, I have added 3 team with team name, team members, team image and team git repository link.

![ScreenShot](https://github.com/xxxuduo/react_final_project/blob/master/ScreenShot/ScreenShot1.png)

To update our local state we setup with the new data we get from Tabletop. In the callback function we will update the simple console.log to set our state with the new Tabletop data.
Also, if we open up the browser and my console, we can see the new array logged out to the console. the array is an JSON object includes every attribute value.
now we have the our data stored on local state, we can write up some simple JSX to display the imfomation per row.
Once you input the data, you can see all the imformation represent on website after refreshing the web page.

![ScreenShot](https://github.com/xxxuduo/react_final_project/blob/master/ScreenShot/ScreenShot2.png)

Moreover, you can edit your google form anytime, anywhere. For example, we change the team name of *team_one* to *TEAM_ONE_CHANGE*

![ScreenShot](https://github.com/xxxuduo/react_final_project/blob/master/ScreenShot/ScreenShot3.png)

You can see the changed imformation of team one after refreshing the website.

![ScreenShot](https://github.com/xxxuduo/react_final_project/blob/master/ScreenShot/ScreenShot4.png)






