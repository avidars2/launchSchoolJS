#!/bin/bash

num=5

until [[ num -gt 10 ]]
do
 ((num++))
 echo $num
done
