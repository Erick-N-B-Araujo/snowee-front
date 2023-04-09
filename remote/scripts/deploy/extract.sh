#!/bin/bash

echo "Initializing extraction connecting..."

sshpass -p $PROD_PASS ssh root@191.96.251.3 ./extract_assets.sh

echo "Deploy finished"