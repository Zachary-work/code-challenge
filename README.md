# FindDoc Code Challenge

## Get Started
Run the following command to start the service

    docker-compose up

Goto: [http://localhost/#/exchange_rate](http://localhost/#/exchange_rate)
Have fun :)  

## Naming Convention

For variable and filename, I use under_score.
For function and class name, I use CamelCase.

## Overall Design
![enter image description here](https://lh3.googleusercontent.com/06QJQQUYeoDSjAyKBZlnzn86S-Bf2nRfPwt-OsztaxlpCQmpQsVvQqQlKxvLNp6oDARReMvEtENg "System Design")  

The main components of this sytem including:

 1. exchange-rate-service
 2. background-cron-service
 3. Reactjs Client
 4. Redis
 5. MySQL

### exchange-rate-service
This component responsible for communicating with Reactjs Client, using RESTful API and WebSocket. It will connect to MySQL database and using Redis as a cache. Also, it will subscribe to Redis channel so once the exchange rate is updated, the service will know and push notification to the ReactJS Client.

### background-cron-service
This component responsible for grabbing data from Cryto API. Once received a new exchange rate update, it will update Redis cache and MySQL database. Then, publishing a notification to Redis channel, so that exchange rate service will know there is an update.

The reason to seperate this script from exchange rate service is that this service shouldn't be scale with the exchange rate service.

### ReactJS Client
It is a ReactJS Client to connect to the exchange rate service. It will subscribe to exchange rate service websocket. Therefore, it will be able to update the exchange rate information in real time.

### Redis
Using Redis in this system for the following reasons:

 1. Caching
 2. Using Pub/Sub system to connect exchange rate service and background cron service
 3. Using as a socket index table, for websocket scaling. For details: [socket.io-redis](https://github.com/socketio/socket.io-redis)

### MySQL
There are 3 tables for database

1. exchange_rates - for storing the ticker data from crypto API
2. exchange_rate_job - for storing the scheduled job to grab dat from crypto API
3. currencies - storing the code and the corrdsponding currency name, including crypto currency and physical currency
