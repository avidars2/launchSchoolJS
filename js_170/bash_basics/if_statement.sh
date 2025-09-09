#!/bin/bash

var1=6
var2=5
var3=7

if [[ var1 -lt var2 ]]
then
 echo $var1 is less than $var2
elif [[ var3 -gt var1 ]]
then
 echo $var3 is the largest number here
else
 echo $var1 is the biggest number around
fi
