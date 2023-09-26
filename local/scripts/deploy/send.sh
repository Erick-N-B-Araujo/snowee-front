#!/bin/bash

MAC_WORKSPACE=/Users/erickneves/Documents/Dev/snowee-front
JENKINS_WORKSPACE=/var/jenkins_home/workspace/Frontend

echo "Sending assets..."

cd $JENKINS_WORKSPACE/frontend/dist/frontend
sshpass -p 'AdcOP1997!' scp deploy.zip  jenkins@191.96.251.3:/var/lib/jenkins/packages/

echo "Sending scripts..."

cd $JENKINS_WORKSPACE/remote/scripts/deploy
sshpass -p 'AdcOP1997!' scp extract_assets.sh  jenkins@191.96.251.3:/var/lib/jenkins/scripts/

echo "Sending scripts DONE!"