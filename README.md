## Talent Competition Code Repository

This project I did as part of MVP Studio internship to understand how ReactJs, C# Web Api, MongoDb is used in Talent Code Architecture. Tasks below give more details on the feature completed as part of this project.

## Competition task

* Task 1 : Employer profile page
  * Add last name to the primary contact details
  * Allow users to edit company contact details by clicking on the edit button
  * Display the user's full name on primary contact details (for read only display)

* Task 2 : Employer Manage Job page
  * Display jobs as a list of cards
  * Update a job, Close a job

## Deployment Details
https://talentappwebapp20250102164245.azurewebsites.net/
* Login to the portal with Employer creds.
* Explore the Employer profile and Manage 
## Guides to get started

### React tutorials/resources
* https://reactjs.org/docs/hello-world.html
* MVP Studio React Training.pdf can be found here
ReactExamples.zip can be found [here](https://drive.google.com/file/d/1dXZeb3hmMsYbE1hmGEkb4_hyOkNiAbPa/view?usp=sharing)

React coding examples in ReactExamples.zip:
*ReactHelloWorld.html: Printing hello world using React
*ReactTimeline.css: CSS File for Timeline example
*ReactTimeline.html: React components and container example
*ReactTimelinePassObject.html: Passing a prop as an attribute and javascript object example
*ReactTimelinePassArray.html : Passing an array of javascript objects example

**Note : Make sure that you have Visual Studio 2017 installed in your computer.
Visual Studio 2015 does not work with ReactJS**

### Install react, babel, webpack, js tokens and react tags:
* Find the folder that contains webpack.config.js in the solution explorer
* Right click on the folder and select 'Open Folder in File Explorer'
* Open command prompt (windows + R, type cmd) and go to the folder that contains webpack.config.js (E.g: cd C:\Talent\Talent\Talent.WebApp\Scripts\react)
Install npm util packages:
`npm install`
* Check webpack version (make sure it's 4.5.0):
`webpack -version`

### Launch Talent project
* Get the latest source via Source Control Explorer
* Run webpack:
`cd C:\Talent\Talent\App\Talent.App.WebApp\wwwroot\js\react`
`npm run build`
* Launch Talent.WebApp project in Visual Studio. Register an account using your email address and log in.

### Project Structure  
 - Web Application:
    - `Talent.WebApp` : All frontend files are located here
 - Microservices:
    - `Talent.Services.Identity` : backend functions related to Login/Logout
    - `Talent.Services.Profile` : backend functions related to Profile
    - `Talent.Services.Talent` : backend functions related to Talent Matching, Jobs

### React tips
* Common coding mistakes using jsx
* Class names: class (html) => className (jsx), tabindex (html) => tabIndex (jsx)
* Require closing parent element or fragments: https://reactjs.org/docs/fragments.html
* Jsx Closing tags differ from html tags, you must have a closing tag for images and inputs: `<img></img>, <input</input>`
* Forgetting to turn on webpack : `npm run build`
* Forgetting to clear the cache


