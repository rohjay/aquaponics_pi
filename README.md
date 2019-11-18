# DEPRECATED

Please do not use this code as there are many potential security issues with packages included via Yarn (within the frontend folder) in this project. I'm leaving this public strictly for the python and nodejs code we wrote to read and render data from the sensors in an almost realtime fashion.

In other words: Please enjoy this project for educational purposes only =]

# Aquaponics+Raspberry Pi

A WP Engine Culture Club Project 2017

The noobs group is putting together an aquaponic farm, and using a Raspberry Pi to monitor and automate basic functions of the system.

## Requirements
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

## How to start

```
sh build-and-run.sh
```

## Software's Role

We are going to build 2 components for this project:

1. a node webapp to allow monitoring and maybe some basic administration for the system
2. a python app to interface with the GPIO's and carry out the actions. The python app will also update the node webapp with data.

### Automation SLC

Functionality wise, this app could control:
- Start/stop actions for flow of water to the plant bed
- Feed the fish?
- 5 gallon reservoir refill to counteract water loss

### Monitoring SLC

This app could allow a user to monitor from the front end:
- Water temperature
- Water PH
- Moisture levels of the soil
- Graph data over time
- Historicals?

### Other goals

We could also set up a live stream from the raspberry cam to watch the fishies in the tank!
