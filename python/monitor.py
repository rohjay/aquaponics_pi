#import PCF8591 as ADC
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

# GPIO pins 17, 27, 22
# Moisture, temp, light

def init():
    print "Initing the sensors"

    # Set our GPIO numbering to BCM
    GPIO.setmode(GPIO.BCM)

    # Init the different sensors
    init_pin(pin=17, callback="callback", msg="Init moisture sensor on GPIO pin 17")
    #init_pin(pin=27, callback="blah", msg="Init temp sensor on GPIO pin 27")
    #init_pin(pin=27, callback="blah", msg="Init light sensor on GPIO pin 22")

def init_pin(pin, callback, msg):
    print msg
    GPIO.setup(pin, GPIO.IN)
    GPIO.add_event_detect(pin, GPIO.BOTH, bouncetime=300)
    GPIO.add_event_callback(pin, callback)

def sendReport(data):
    print "Sending data NAO!"

# Still need to put this together...
def callback(pin):
    if GPIO.input(pin):
        print "dry"
    else:
        print "moist"


if __name__ == '__main__':
    init()

    DATA = {
        moisture: 'dry',
        temp: 78.4,
        light: 'blah'
    }

    while True:
        # Chill for a quarter second, poll to rebuild data array, post and report.
        time.sleep(0.25)

