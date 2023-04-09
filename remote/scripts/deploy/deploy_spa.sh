#!/bin/bash

echo "Deploying assets..."

sshpass -p $PROD_PASS scp /home/jenkins/snowee-front/dist/frontend/*  snowe9412@191.96.251.3:/home/snoweegamecorp.com/public_html/