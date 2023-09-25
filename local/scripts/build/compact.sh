#!/bin/bash

MAC_WORKSPACE=/Users/erickneves/Documents/Dev/snowee-front/frontend/dist/frontend
JENKINS_WORKSPACE=/var/jenkins_home/workspace/Frontend/frontend/dist/frontend

echo "Finding resources..."

cd $JENKINS_WORKSPACE

echo "Compressing production assets..."

rm -rf deploy.zip

##zip -r deploy.zip .

echo $PWD

echo "Compressing DONE!"