#!/bin/bash

MAC_WORKSPACE=/Users/erickneves/Documents/Dev/snowee-front/frontend/
JENKINS_WORKSPACE=/var/jenkins_home/workspace/Frontend/frontend/

echo "Finding resources..."

cd $JENKINS_WORKSPACE

echo "Building production assets..."

ng build --configuration production

echo "Building DONE!"