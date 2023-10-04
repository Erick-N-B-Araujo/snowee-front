#!/bin/bash

MAC_WORKSPACE=/Users/erickneves/Documents/Dev/snowee-front
JENKINS_WORKSPACE=/var/jenkins_home/workspace/Frontend

echo "Sending deploy package..."
cd $JENKINS_WORKSPACE/frontend/dist/frontend
sshpass -p 'AdcOP1997!' scp deploy.zip  jenkins@191.96.251.3:/var/lib/jenkins/packages/

echo "Sending deploy package DONE!"