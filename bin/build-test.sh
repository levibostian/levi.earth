#!/bin/bash

set -e

npm run init
npm run gulp
npm install pug-cli -g
npm run build
npm run test-html