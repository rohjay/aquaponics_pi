#!/usr/bin/python

import RPi.GPIO as GPIO
import dht11
import time, requests

print "Initializing GPIO's"

# initialize GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.cleanup()

temp_hum = dht11.DHT11(pin=4)

moisture = 0
def init_moisture():
    GPIO.setup(17, GPIO.IN)
    GPIO.add_event_detect(17, GPIO.BOTH, bouncetime=300)
    GPIO.add_event_callback(17, callback)

def callback(pin):
    if GPIO.input(pin):
        moisture = 0
    else:
        moisture = 1

init_moisture()

monitor_data = {'time':None,'temp':None,'humidity':None,'moisture':None}

while True:
    result_temp_hum = temp_hum.read()
    monitor_data['moisture'] = 0

    if result_temp_hum.is_valid():
        monitor_data['temp'] = result_temp_hum.temperature
        monitor_data['humidity'] = result_temp_hum.humidity
    
    if GPIO.input(17):
        monitor_data['moisture'] = 0
    else:
        monitor_data['moisture'] = 1

    monitor_data['time'] = time.time()


    print monitor_data
    r = requests.post('http://localhost:3000/update', json=monitor_data, headers = {"Content-Type": "application/json"})

    time.sleep(0.25)
