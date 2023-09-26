#!/bin/bash

MAC_WORKSPACE=/Users/erickneves/Documents/Dev/snowee-front
JENKINS_WORKSPACE=/var/jenkins_home/workspace/Frontend

echo "Sending assets..."

#sshpass -p $PROD_PASS scp $MAC_WORKSPACE/local/typescript-app/dist/frontend/deploy.zip  root@191.96.251.3:/var/www/snoweegamecorp.com/html/
sshpass -p 'AdcOP1997!' scp $JENKINS_WORKSPACE/frontend/dist/frontend/deploy.zip  jenkins@191.96.251.3:/var/www/snoweegamecorp.com/html/

echo "Sending scripts..."

#sshpass -p $PROD_PASS scp $MAC_WORKSPACE/remote/scripts/deploy/extract_assets.sh  root@191.96.251.3:/root/
sshpass -p 'AdcOP1997!' scp $JENKINS_WORKSPACE/remote/scripts/deploy/extract_assets.sh  jenkins@191.96.251.3:/var/lib/jenkins/scripts/

echo "Sending scripts DONE!"