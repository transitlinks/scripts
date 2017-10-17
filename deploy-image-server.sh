#!/bin/bash
# docker pull quay.io/wantedly/nginx-image-server
docker run \
  -d \
  --name nginx-image-server \
  -p 80:80 \
  -p 8090:8090 \
  -v /root/images:/var/www/nginx/images \
  -e "SERVER_NAME=local.transitlinks.net" \
  quay.io/wantedly/nginx-image-server:latest
