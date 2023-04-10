#!/bin/bash

MAC_WORKSPACE=/Users/erickneves/Documents/Dev/snowee-front/local/typescript-app/dist/frontend
JENKINS_WORKSPACE=/var/jenkins_home/workspace/Frontend/local/typescript-app/dist/frontend

echo "Finding resources..."

cd $JENKINS_WORKSPACE

echo "Compressing production assets..."

rm -rf deploy.zip

zip -r deploy.zip .

echo "Compressing DONE!"