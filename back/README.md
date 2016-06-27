## Prerequisites

* Java 1.8
* sbt

## Build

    sbt assembly

## Run (have port 8080 available)
    
    sh launch.sh

## Endpoints

* GET http://localhost:8080/1/events
* GET http://localhost:8080/1/events/:name
* POST http://localhost:8080/1/events
* PUT http://localhost:8080/1/events/:name
* DELETE http://localhost:8080/1/events/:name