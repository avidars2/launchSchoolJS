#!/bin/bash

greeting () {
  echo Hello $1 $2
  echo "Watch me interpolate with double quotes $1 $2"
  node ./test.js
}

greeting 'Avi' 'D'