#!/bin/bash

function server () {

  while true
    do
      read method path version
      if [[ $method = "GET" ]]
      then
        if [[ -e "./www/$path" ]] && [[ -n $path ]]
        then
         echo -ne "HTTP/1.1 200 OK\n\n"; cat "./www/$path"; echo ""
         
        else
          echo "HTTP/1.1 400 Bad Request"
        fi
      fi
    done
}

coproc SERVER_PROCESS { server; }

netcat -lv 2345 <&${SERVER_PROCESS[0]} >&${SERVER_PROCESS[1]}
