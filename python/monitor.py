# Placeholder for GPIO monitoring app

# temp sensor pin 7
# light sensor pin 17
# camera /dev/vchiq

# import os,sys, math, time
# from PIL import Image, ImageDraw, ImageFile, ImageFont
from settings import SECRET_KEY
from subprocess import call
#print SECRET_KEY
livestream_cmd = 'raspivid -o - -t 0 -vf -hf -fps 30 -b 6000000 | avconv -re -ar 44100 -ac 2 -acodec pcm_s16le -f s16le -ac 2 -i /dev/zero -f h264 -i - -vcodec copy -acodec aac -ab 128k -g 50 -strict experimental -f flv rtmp://a.rtmp.youtube.com/live2/' + SECRET_KEY
call(livestream_cmd)
