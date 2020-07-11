# The-Pizza-Task
 ## Task description
Let’s imagine you want to start a new pizza delivery business. Please create a small web application for online pizza ordering. The idea is to make a non-existing service where assumed clients can choose a pizza, put it into a cart
and make an order.

#### Live Demo: [https://thepizzaspot.herokuapp.com/]


## Requirements
* The menu page should contain at least 8 pizzas ✅
* The menu page should contain at least 8 pizzas ✅
* Login is not required but could be available for checking the history of orders. (Orders can be directly view in readonly mode) 🔳
* Your clients should be able to choose pizzas directly from the menu ✅
* You can decide what else you want in the menu ✅
* Adding a description for each pizza would be a nice decision ✅
* Don’t proceed to the payment page. The last action from a client will be filling in the order form (address,
name, surname, etc.) to get a confirmation that the order has been received ✅
* A client should be able to put several pizzas into cart, and the quantity must be defined both while
outside the cart and in the cart ✅
* Total price of each order must be calculated and shown in euros and in dollars ✅
* Don’t forget to add delivery costs to the final bill ✅


## Technology Stacks

#### Backend

* Java 8
* Spring Boot 2
* Spring Data JPA
* MYSQL
* Maven
* Swagger

#### Frontend
* Angular 8
* Angular cli
* Angular Material UI

#### Database Schema

![Image of screenshot](https://raw.githubusercontent.com/imranmali/The-Pizza-Task/master/screenshots/db_schema.png)


#### Application screenshots

* Item List
![Image of screenshot](https://raw.githubusercontent.com/imranmali/The-Pizza-Task/master/screenshots/item_list.png)

* Item Detail
![Image of screenshot](https://raw.githubusercontent.com/imranmali/The-Pizza-Task/master/screenshots/item_detail.PNG)

* Cart
![Image of screenshot](https://raw.githubusercontent.com/imranmali/The-Pizza-Task/master/screenshots/cart.PNG)

* Customer Info
![Image of screenshot](https://raw.githubusercontent.com/imranmali/The-Pizza-Task/master/screenshots/customer_info.PNG)

* Order History
![Image of screenshot](https://raw.githubusercontent.com/imranmali/The-Pizza-Task/master/screenshots/order_history.PNG)
     


### Deployment to the production server

```
mvn clean install
```
