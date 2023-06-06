# Software Engineering csc648 Repository


| Student Name     |       Student Email      | GitHub Username |
|      :---:       |           :---:          |      :---:      |
| Elahe Bashiri  (Team Lead)  |     Ebashiri@sfsu.edu    |     Elahe87     |              
| Alexander Diaz (Frontend Developer)  |  adiaz41@sfsu.edu        |    xanderbx    |
| Abbas Mahdavi  (Backend Lead)  |  amahdavi2@sfsu.edu      | AbbasMahdavi021 |
| Megan Lew   (Frontend Lead)     |  mlew1@mail.sfsu.edu     |    meganlew     |
| Jed Graves   (Backend Developer)    | jgraves4@mail.sfsu.edu   |   jgraves4      |
| Nathan Rennacker (Github Master) | nrennacker@mail.sfsu.edu |   nlrennacker    |

## Table of Contents
| [About](https://github.com/meganlew/csc-648-sfsu#about)    |       
|      :---:       |    
| [Installation Guide](https://github.com/meganlew/csc-648-sfsu#installation-guide)    |  
| [Product Images](https://github.com/meganlew/csc-648-sfsu#product-images)    | 
| [Database MySQL Workbench ](https://github.com/meganlew/csc-648-sfsu#database-mysql-workbench)    | 
| [Full Documentation](https://github.com/meganlew/csc-648-sfsu/blob/main/Milestones/M5/CSC%20648-848%20Spring%202023%20Milestone%205%2C%20Team%2001.pdf)    | 



## About 
For our software engineering class project, our task was to create a food delivery service web application. Our product SFSU FoodFeast is unique from other food delivery services because we are catering to the sfsu community. As a team, we practiced full sofware development cycle for our app. We had practiced agile methology with scrum practices ( weekly stand up meetings ) , code reviews, user personas, use cases, usability testing, UI/UX (wireframes/ figma protyping), and QA testing. Our team worked on a [full documentation](https://github.com/meganlew/csc-648-sfsu/blob/main/Milestones/M5/CSC%20648-848%20Spring%202023%20Milestone%205%2C%20Team%2001.pdf) on this project with details on every step we have accompolished and challenges we faced. It can be viewed in this repository under the Milestones folder > Milestone 5. 

Early Stages of Protyping I worked on in [Figma](https://www.figma.com/file/ztIeZcqOHaDeVbee9PbGMU/Untitled?type=design&node-id=0-1)

## Installation Guide 
For our development we used Visual Studio Code as IDE, Amazon Web Services (AWS) for the server, and database uses MYSQL/Workbench.
Server URL: http://ec2-35-160-127-228.us-west-2.compute.amazonaws.com --- IP: 35.160.127.228
```shell 
// open terminal and cd into application and then into client & server folder
// client folder
npm install
npm start
// server folder 
npm install
npm run dev
.env file with database info needs to be in server folder
```

## Tech Stack
```shell 
Frontend: React
Backend: Express, Node,js
Database: mySQL (Workbench)
Deployment: AWS Amazon Web Services ( EC2 Elastic Compute Cloud )
IDE: Visual Studio Code
```

## Product Images
### Home Page
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/992b0ea4-d20d-4881-b5d6-1bea35a2afa4" width="600" height="350">

### Login Page

<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/98d5c260-3a41-4b93-ba28-d13405f2b648" width="600" height="350">


### Register
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/9a3435ec-2df0-4a7d-a036-0685212fd242" width="600" height="350">

### Restaurant Register
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/c43fd641-faae-4145-b4fc-6a1dafb815ea" width="600" height="350">

### Restaurant Register ( continued )
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/081e72af-add6-433f-80fd-ab3f877fa9e6" width="600" height="350">

### Driver Registration
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/34f30ffc-289d-4548-a1d1-75859b09043a" width="600" height="350">

### Unregistered Driver
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/4cb5f4e3-2d03-400b-a51c-962cbd096a9e" width="600" height="350">

### Driver Dashboard
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/e99fc3ec-2485-4b8e-a440-1186597c7a29" width="600" height="350">

### Restaurant Dashboard
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/4d61a47b-5a92-40d7-9ae1-e57e05f4342d" width="600" height="350">

### Restaurant Dashboard (continued )
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/f36ec650-e011-45c3-850b-d7aac0b62bc2" width="600" height="350">

### Restaurant Orders
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/f4731dc9-8f9f-4b9c-8d5b-32dbef2d75cb" width="600" height="350">

### Menu Entry
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/880b98d9-2e18-4726-8072-b163844273f7" width="600" height="350">

### Restaurant Page
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/af13045f-aa08-4331-b48c-b30bed29c78b" width="600" height="350">

### Empty Cart
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/0a7cee4d-85a0-4e86-9b27-5444792a9996" width="600" height="350">

### Cart with Order
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/7c4583a9-07ae-45be-aae5-02590f5dd610" width="600" height="350">

### Checkout Page
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/5675a44a-8cd6-4c40-bb98-1738fce2c2dc" width="600" height="350">

### Checkout Confirmation
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/2baee52e-c387-4c6f-8536-308e7465763f" width="600" height="350">

### Search (all)
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/610f66c8-5d24-46a7-9baf-c0b0e78e37fb" width="600" height="350">

### Search (cuisine)
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/2a59684c-62c5-4b74-8165-04105e6c8680" width="600" height="350">

### Google Maps API
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/23319a1e-55d5-4e7f-8316-e6db6b66fdde" width="600" height="350">

### About Us
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/f926bae2-5d0d-4dd3-ab3d-1b4d3a86a6a0" width="600" height="350">



## Database mySQL workbench
### Tables
Tables in our database. 

<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/80a9824d-8d91-4764-9a41-537fd99fb3c8" width="300" height="350">

### Cuisines 
Each Cuisine is assigned an id. The id is used to assign a restaurant to a cuisine. 
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/6551aa90-3f2d-420c-8966-239e459e84db" width="700" height="250">

### Food Orders
Restaurant_id assigns the order to the restaurant. If order_status is in progress it will show up under current orders in the restaurant manager dashboard or if order_status is ready for pickup it will show up under completed orders. Orders are populated on the driver page if order_accepted_by_driver is 0.


<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/f1e097fd-cf9a-44d8-bb54-5d87ec539e95" width="700" height="250">

### Menu Items
These are menu items used to populate the restaurant page. 
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/ccda2490-15cd-494e-9eed-0e4afa1ca889" width="700" height="250">

### Order Itens
Orders placed by customers are stored in the database.
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/72726d59-0aec-4fbb-a554-6a19adeb8c32" width="700" height="250">

### Restaurants
The restuarants in the homepage and images are stored here. The address is used to populate the google maps api. New restaurants approved by admin will show up here. 
Orders placed by customers are stored in the database.

<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/382f7172-9536-4d87-b910-6c6d2d937ed7" width="700" height="250">

### User Favorites
Saves user favorites. 

<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/d0644982-8827-43f7-ba20-e497a36333cc" width="700" height="250">

### User 
Store login info for user. 1 determines if user is admin, driver, or restuarant owner. 0 means user is not. 
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/62c91bcd-ad1b-4678-88f5-aa803203666f" width="700" height="250">











