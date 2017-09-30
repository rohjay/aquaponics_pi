#!/usr/bin/python

import time, requests, random

print '"Initializing GPIOs" -- teehee'

monitor_data = {'time':None,'temp':None,'humidity':None,'moisture':None}

while True:
    monitor_data['time'] = time.time()
    monitor_data['temp'] = random.randint(70, 76)
    monitor_data['humidity'] = random.randint(1, 100) / 100
    monitor_data['moisture'] = random.randint(0,1)

    r = requests.post('http://localhost:3000/update', json=monitor_data, headers = {"Content-Type": "application/json"})

    time.sleep(0.25)
