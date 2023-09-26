#!/bin/bash

SITE_WORKSPACE=/var/www/snoweegamecorp.com/html
PACKAGE_LOCATION=/var/lib/jenkins/packages

echo "Moving package..."

cd $PACKAGE_LOCATION
mv deploy.zip $SITE_WORKSPACE/

echo "Cleaning older production assets..."

cd $SITE_WORKSPACE
rm -rf *.js
rm -rf *.png
rm -rf *.txt
rm -rf *.ico
rm -rf *.html
rm -rf *.svg
rm -rf *.ttf
rm -rf *.woff2
rm -rf *.woff
rm -rf *.eot
rm -rf *.css
rm -rf assets

echo "Extracting new production assets..."

unzip deploy.zip

rm -rf deploy.zip

echo "Extracting DONE!"