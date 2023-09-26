#!/bin/bash

echo "Initializing extraction connecting..."

sshpass -p 'AdcOP1997!' ssh jenkins@191.96.251.3 ./var/lib/jenkins/scripts/extract_assets.sh

echo "Deploy finished"