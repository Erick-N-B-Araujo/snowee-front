#!/bin/bash

echo "Initializing extraction connecting..."

sshpass -p 'AdcOP1997!' ssh root@191.96.251.3 ./scripts/extract_assets.sh

echo "Deploy finished"