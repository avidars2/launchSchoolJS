#!/bin/bash

num=5
while [[ num -gt 0 ]] && [[ -e ./test.js ]]
do
 node ./test.js
 ((num--))
done