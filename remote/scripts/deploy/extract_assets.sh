#!/bin/bash

SITE_WORKSPACE=/var/www/snoweegamecorp.com/html

echo "Cleaning older production assets..."

cd $SITE_WORKSPACE

rm -rf $SITE_WORKSPACE/*.js
rm -rf $SITE_WORKSPACE/*.png
rm -rf $SITE_WORKSPACE/*.txt
rm -rf $SITE_WORKSPACE/*.ico
rm -rf $SITE_WORKSPACE/*.html
rm -rf $SITE_WORKSPACE/*.svg
rm -rf $SITE_WORKSPACE/*.ttf
rm -rf $SITE_WORKSPACE/*.woff2
rm -rf $SITE_WORKSPACE/*.woff
rm -rf $SITE_WORKSPACE/*.eot
rm -rf $SITE_WORKSPACE/*.css
rm -rf $SITE_WORKSPACE/assets

echo "Extracting new production assets..."

unzip deploy.zip

rm -rf deploy.zip

echo "Extracting DONE!"