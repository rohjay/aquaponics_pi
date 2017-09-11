# Aquaponics+Raspberry Pi

A WP Engine Culture Club Project 2017

The noobs group is putting together an aquaponic farm, and using a Raspberry Pi to monitor and automate basic functions of the system.

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

We would like to be able to monitor from the front end:
- Water temperature
- Water PH
- Moisture levels of the soil
