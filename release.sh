#!/bin/bash

npm run generate

git checkout master

cp -rf ./dist/* ./

git add .
git commit -m "new release"
git push -f origin master

git checkout dev