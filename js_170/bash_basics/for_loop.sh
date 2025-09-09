#!/bin/bash

e=e
array="a b c d $e"

for letter in $array
do
 echo $letter
done