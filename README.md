# Fabrizio Milestone Project 2
#### [Link to GitHub Pages]()
## Introduction
[amIresponsive link]()
## UX
### Strategy Plane
When approaching the main strategy and the initial phase of this project I thought about something that would be able to help the user get useful information in a very brief span of time. The main idea to create a quote generator for home renovation projects came to me because of my father who has been in this specific business his whole life. 
### Scope Plane
As a specific scope the website aims to provide a range of options to choose from and to establish the quantity needed. The final output is then given back to the user based on the information that they provided. The general goals were to create a platform easy to use and that would elicit a positive response from the user.
### Structure Plane
The decisions on the general structure of the project where taken considering a layout that would have allowed to implement future features and mostly a user interface that was easy to maintain and access. With responsiveness is mind the information is layered on a series of interfaces with matching structure as to maintain a sense of familiarity while interacting with the different sections of the website.

[Wireframe for the project](https://www.figma.com/file/PK4amgo3inn1CzON5Gqw3m/Portfolio-Project-2?node-id=0%3A1&t=u7ggEBSEry66l6lV-1) 
### Skeleton Plane
Various blocks of the project have been designed to accomodate inputs from the user. In addition to that, below the interactive part of the website I have also included a section that provides information about the current possible interactions of the projects. The website develops mainly in a vertical fashion to allow better responsiveness for mobile.
### Surface Plane
Planning for the surface plane was relatively easy as I didn't want to create an interface with as many interactive features as possible but rather a structure that would have served the purpose it was designed for. The layout is very similar for the different screen sizes and the style of the various sections makes the content easy to access and provides a recognizable platform that is intuitive to follow and use.
#### Fonts, Colors and Style Choices
Starting from the font used, the idea was to utilize a style that would make the user feel that "old school" appereance. Any full cursive type of font would have the defeated the purpose of immediate access to the information. Knowing that the first few seconds on a website are crucial I took the decision to go with Nanum Myeongjo because it was on of the few that hit the right spot between style and functionality.

The background chosen was decided to recall the general purpose of the website but also to provide a simple image that allowed the user to scroll through the content without distractions. 

Following this paragraph you'll find the color palette used for the project. Given the fact that the website displays information about different materials for home renovation projects, the colors I used mainly hint at the same colors that can be found among typical materials for contruction.

[Color Palette Used](/docs/images/PP2-color-palette.png)
## Project Goals
The main goal of this project is to provide an accessible quote generator through an interactive single webpage. The website would provide an easy-to-use interface through which the clients have the possibility of calculating the total cost of the materials they need to complete a home diy renovation project or for a contractor to know the amount of capital to invest in a specific job. Due to the infinite amount of variables to include in the time needed for the project it would have been unwise of me to try an estimate that on the project. 
### Target Audience
Home renovation is a very complex topic and the decision about which type of clientele to target was a difficult one. After careful consideration came to the conclusion that the 2 major targets for this project are: 
* New home buyers
* 60+ citizens

The reason behind this seemingly odd choice was dictated by the fact that in both cases there are plenty of circumstances in which the subjects would start a renovation journey. In the first case, for first time home owners it is typical for them to close a mortgage on a house with plenty of restyling already in mind and given the young age, a large group of them is inclined to carry the burden of a DIY project. 

For the second type of possible audience for this website, the reasoning behind was that once retirement is near or already the present condition is not unusual to start contacting companies to work on house that has seen many years of use and tear. In this case the senior citizen could definitely make the most out of a simple and immediate platform to estimate the cost and scope of the renovation.
## User Story
The user story for this project is a brief list of the actions that the user might decide to take after landing on the first page of the website. Obviously these choices are restricted by the type of interactivity that was implemented in the different sections. 
As a user I want to:
* Land on a page that is easy to understand and provides simple instruction for the website
* Interact with the first features of the website (fill in the user's informations)
* Click on the next button to navigate to the next page 
* Have a simple interface which allows me to input the type and quantity of materials that I need
* Read the descriptions for the materials and their costs and proceed to the next section through a button
* Interact with a simple panel which allows me to pick from different brick types and their quantities
* Access a short descriptive section of the type of bricks to get a quick insight on their specific use
* Proceed to a page where I can input the amount of time needed or estimated for the renovation
* Read a paragraph about the variable to consider when planning the amount of time required for the project
* Submit all my inputs and go to the next page with just one button
* Have access to my final quote for the project which includes the price, hours of work required and the type and amount of materials used

## Interactions and Features
For this part of the project I thought about different ways to keep the website easy to use. The main interactive features are click events and the acquisition of data input that the user provided. In order to progress easily through the different interactions I used a simple click event that allows the user to navigate the possible choices present.
### Feautures Used
On this section I would like to walk through the features that I implemented in the project to make it intuitive and interactive.

![Main background](/docs/images/main-bg.png)

As a feature for the main background I have decided to apply an image that would convey a general idea about what the website is about at first glance. I went with a classic brick wall because not only serves as a neutral tone background perfectly for this project but also because is also a common background in many cities around the world. 

![Title and information icon](/docs/images/title-and-info-icon.png)

As the first thing that the user sees when they land on the initial page is obviously a recognizable title. As stated in the fonts section I have used a font with "old school" features. This is because although home renovation has evolved with time the main techniques and materials used are still the same. The icon is the first interactive features of the website and when clicked displays a box with the instructions on how to use the website. The icon is reoccurent through the various sections of the project. In this way the user can always refer to it if the need arises.

![User informations form](/docs/images/user's-info.png)

Displayed in the first page to the user, this section was designed to allow the user to input the information needed in order to receive the final quote on their email and to create an account on the website (both future features to add). The layout of the form input fields is minimal and not too invasive. This helps the user to move on to the next section rapidily without having to type too much on the first page.

![Alert message](/docs/images/alert-message.png)

As the user clicks the submit button in the previous form an alert message appears on top of the page. This message is a confirmation the the information that the user provided are valid. If the user would input data that is typed in the wrong format, the self-checking input fields would alert with the browser message directly on the input.

![First interactive section](/docs/images/interactive-section.png)

Finally we land on the main interactive section of the website. Here we are presented with a box that shows the user a variety of options to choose from. Every option is paired with a number input which allows the user to pick the type and quantity at the same time. This feature eliminates the need for an additional checkbox which would have not served a practical purpose. On the bottom of the section we see two buttons. The one called "next", when clicked, allows the user to move forward in the website and brings him to the next section. The one called "back" brings the user back to the user input section where they can change the information submitted in case they realize they typed wrongly.
In order to utilize redundancy as a familiarity tool, the interactive box of the next section is styled the same as the first one. This way the user will be immediatly able to continue with the selection of other materials and not having to figure out how to approach a completely different layout.

![Descriptive section](/docs/images/descriptive-section.png)

Just below the interactive section the user can read more about the materials and prices in the description boxes. The information in the boxes is a short paragraph that lists some of the characteristics of the possible choices and is accompanied by a visible title which also includes the price per kilo of the material. This section serves the user when they are not sure what to pick and might use some guidance along the way. 

![Hours of Work](/docs/images/hours-of-work-input.png)

Advancing from the interactive sections regarding the materials we find the section dedicated to the hours of work. In this section of the website the first unique feature we find is the title and number input for the amount of hours required in order to complete the renovation project. This particular feature allows the user to add the hours of work estimated in order to have complete list as the end result. 

![Description of the hours of work](/docs/images/hours-of-work-description.png)

Below the hours of work input the user can explore the topic further by focusing on the description below the number input. In this description the user will be able to find additional information about what to keep in mind when planning the timing of the renovation project. Obviously it would have been impossible to describe all the possible factors that can influence the time required for even the smallest renovation. This is why I decided to onlu included the most inportant ones in the paragraph. On the bottom of the section we find the "submit" and "back" buttons. While we have encoutered the back button before the "submit" one on this section has a different function than the first one seen on the user's information section. This submit button not only will submit all the user's choices made in the previous sections but also will allow us to move directly on the final section of the website to finally visualize the quote for our project.

![Final list section](/docs/images/final-list-and-cost.png)

As a final section we land on the list and cost page. This interface includes the user's choices and the total cost for the materials. In addition to that we also get the hours of work the user has input in the previous section. The cost for the project is displayed above the list because it is one of the most influencing factors when it comes to making a decision about a home renovation project. With the final "back" button the user can navigate back to the earlier section without having to refresh the page and start the process all over again.

![Footer](/docs/images/footer.png)

The footer bottom bar, just like the main background, main title and information icon, is present on every page and serves the initial purpose of crediting the creator of the website. Some additional features for this part are described in the "Future Features" section of this README file.


### Future Features
This project is meant to be able to evolve overtime and implement a wide range of options to generate a much complete quote of all the materials required to complete a renovation. One of the many features that could be added overtime is surely an improved list of materials. Obviously related to materials we have prices. The most useful upgrade that I think could be added is an average price for the materials updated daily from the catalogues of sector-leading companies. This would assure that the user would obtain a result which matches a true price that they could find in a regular supply store.

As a specific future feature for the footer I think it would be wise to consider social media links once the page has a decent amount of content to share and perhaps some links for related articles and tutorials (like a blog or a discussion forum) specifically addressedd to home renovation projects.
## Testing and Technologies
### Tech Used
The main technologies used for this project are:
* HTML
* CSS 
* JavaScript
### Bugs
Among the various bugs I have encoutered the first was a mistake in targeting an html collection on JS instead of a single element. I used a "getElementsByClassName" with its appropriate index to get the result I needed.
### HTML, CSS and JavaScript Validation 
## Lighthouse Report
## Deployment and Updates
### Deployment steps
## Development
### Website Maintenance and Updates
## Credit
The icons in this website have been taken from [Font Awesome](https://fontawesome.com/)

The pictures have been taken from [FreePix](https://www.freepik.com/)

 and the gradient have been created with [CSS Gradient](https://cssgradient.io/)
