#!/bin/bash

MAC_WORKSPACE=/Users/erickneves/Documents/Dev/snowee-front
JENKINS_WORKSPACE=/home/jenkins/snoweegamecorp/jenkins_home/workspace/Frontend

echo "Sending assets..."

sshpass -p $PROD_PASS scp $JENKINS_WORKSPACE/local/typescript-app/dist/frontend/deploy.zip  root@191.96.251.3:/var/www/snoweegamecorp.com/html/

echo "Sending scripts..."

sshpass -p $PROD_PASS scp $JENKINS_WORKSPACE/remote/scripts/deploy/extract_assets.sh  root@191.96.251.3:/root/

echo "Sending scripts DONE!"