#!/bin/bash

string='Hola'
integer=5

if [[ -n $string ]]
then
 echo 'Hello world!'
 echo $string
fi

if [[ -e ./test ]]
then
 echo 'File exists!'
fi

if [[ $integer -gt 4 ]]
then
 echo $integer is greater than 4
 if [[ $integer -lt 10 ]]
 then
  echo $integer is also less than 10
 fi
fi

if [[ 10 -gt 20 ]] || [[ 5 -gt 10 ]]
then
 echo "Something isn't adding up"
else
 echo "Math mathing"
fi
