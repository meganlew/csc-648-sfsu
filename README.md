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

## Product Images
### Home Page
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/ec96cf62-04ef-4a46-b055-2b3397ed05f4" width="600" height="350">

### Login Page

<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/94c30941-4b1b-406c-8b9c-68c7ac047e23" width="600" height="350">


### Register
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/95b53439-8d4a-4cc1-9581-0afe53f62f7d" width="600" height="350">

### Restaurant Register
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/fdc52cd1-a905-4d15-b062-1b04ec3a399e" width="600" height="350">

### Restaurant Register ( continued )
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/d286f979-14d7-4325-a565-739e48f588e2" width="600" height="350">

### Driver Registration
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/20f639a1-e619-4da3-8994-927fff99e52d" width="600" height="350">

### Unregistered Driver
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/c7a40b15-a161-4df2-b1df-ac8ceda7042c" width="600" height="350">

### Driver Dashboard
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/86547348-6ffa-40fd-b18c-539cb7ae4bfd" width="600" height="350">

### Restaurant Dashboard
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/85a28a54-25ca-4597-a100-54d2023288b5" width="600" height="350">

### Restaurant Dashboard (continued )
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/64204b3f-7c56-41d9-833d-730b443ad243" width="600" height="350">

### Restaurant Orders
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/138ed2fc-f713-497a-abe0-cbc38b5e99ab" width="600" height="350">

### Menu Entry
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/8d8628ec-8a3f-4958-b66b-3cb9021c33e8" width="600" height="350">

### Restaurant Page
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/a623a9b4-7197-44b0-b6c8-75a0370baa5c" width="600" height="350">

### Empty Cart
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/9e09b41a-30ad-4467-9cbd-15a538131ec8" width="600" height="350">

### Cart with Order
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/5895ded3-2ea4-4593-8f71-ac27a0832949" width="600" height="350">

### Checkout Page
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/4b1382f8-f8ec-4d4a-9068-96d03993c973" width="600" height="350">

### Checkout Confirmation
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/6d32b97f-3ac7-4199-89c6-b6f18d501d1f" width="600" height="350">

### Search (all)
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/c24a7f8c-b33b-4d91-91e9-0f08afd14f47" width="600" height="350">

### Search (cuisine)
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/5e462553-401e-4053-be32-bda9c63fae46" width="600" height="350">

### Google Maps API
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/2696e8cd-e4e5-42ef-9079-3d49c62a0448" width="600" height="350">

### About Us
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/55cfb828-bdb5-4621-ac3d-3caba7ea2251" width="600" height="350">

## Database mySQL workbench
### Tables
Tables in our database. 

<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/51e8fa01-b2b2-40f3-980e-38ca6fe23383" width="300" height="350">

### Cuisines 
Each Cuisine is assigned an id. The id is used to assign a restaurant to a cuisine. 
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/e7e35fdb-ed27-43a7-81db-8c203e7e4a83" width="700" height="250">

### Food Orders
Restaurant_id assigns the order to the restaurant. If order_status is in progress it will show up under current orders in the restaurant manager dashboard or if order_status is ready for pickup it will show up under completed orders. Orders are populated on the driver page if order_accepted_by_driver is 0.


<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/80bc111c-7bff-4818-9acc-6c4e5967f1f4" width="700" height="250">

### Menu Items
These are menu items used to populate the restaurant page. 
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/0dc579c3-2bab-4d51-b8e4-4cd51875a72e" width="700" height="250">

### Order Itens
Orders placed by customers are stored in the database.
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/d4d2f405-fb6c-49a2-8aa2-73e0e00aa8d2" width="700" height="250">

### Restaurants
The restuarants in the homepage and images are stored here. The address is used to populate the google maps api. New restaurants approved by admin will show up here. 
Orders placed by customers are stored in the database.
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/f2592ba4-514c-4276-bffd-37f1beb5180b" width="700" height="250">

### User Favorites
Saves user favorites. 

<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/895e0f14-7268-4eda-a027-407ced977d6e" width="700" height="250">

### User 
Store login info for user. 1 determines if user is admin, driver, or restuarant owner. 0 means user is not. 
<img src="https://github.com/meganlew/csc-648-sfsu/assets/40639118/11808544-39f5-488e-bea5-89a57142a1e8" width="700" height="250">











