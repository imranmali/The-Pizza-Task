# Pizza Task backend
REST API for The Pizza Task with Spring Boot and MySQL

### Prerequisites
* [MySQL] (https://dev.mysql.com/doc/mysql-getting-started/en/) - MySQL Local setup
* [Maven] (http://maven.apache.org/guides/getting-started/maven-in-five-minutes.html) - Maven local setup

## Deployment
* Clone this repository on your system.
* Import this in your favorite IDE (In intellij - Import > Existing Maven Projects) - Maven will automatically download all the dependencies.

* Change `application.properties` file with your MySQL.
* Build the project by going to the project folder on command line and executing following command:
```
mvn clean install
```
* Run the project with following command:
```
mvn spring-boot:run
```
* To see the documentation of entire API, and try them out, type following url in the browser: 
```
http://localhost:8099/swagger-ui.html
```