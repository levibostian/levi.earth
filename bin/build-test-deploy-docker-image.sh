#!/bin/bash

set -e

npm run init
npm run gulp
npm run build
npm run test-html

# Build docker image for site.
docker build -f Dockerfile -t curiosityio/levibostian.com:latest .
docker tag curiosityio/levibostian.com:latest 697751412711.dkr.ecr.us-east-1.amazonaws.com/curiosityio/levibostian.com:latest

# Test the newly built image
docker-compose -f docker-compose.test.yml up -d; sleep 5
curl --retry 10 --retry-delay 5 -v localhost:8080/

# Push newly built image to AWS.
eval $(docker run -i -v $HOME/.aws:/home/aws/.aws jdrago999/aws-cli aws ecr get-login --no-include-email --region us-east-1|tr -d '\r')
docker push 697751412711.dkr.ecr.us-east-1.amazonaws.com/curiosityio/levibostian.com:latest
