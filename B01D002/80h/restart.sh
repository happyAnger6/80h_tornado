#!/bin/sh
pid=`ps aux | grep main.py | grep "port=80" | grep -v grep | awk '{print $2}'`
kill $pid
nohup python ./main.py --port=80 --url=http://192.168.1.10 &

