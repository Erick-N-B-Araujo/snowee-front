#!/bin/bash

MAC_WORKSPACE=/Users/erickneves/Documents/Dev/snowee-front/local/typescript-app/
JENKINS_WORKSPACE=/home/jenkins/snoweegamecorp/jenkins_home/workspace/Frontend/local/typescript-app/

echo "Finding resources..."

cd $JENKINS_WORKSPACE

echo "Building production assets..."

ng build --configuration production

echo "Building DONE!"