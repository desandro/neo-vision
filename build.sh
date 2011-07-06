#!/bin/bash

BUILD_DIR='neo-vision'
REMOVABLES=("build.sh" "prettify.js" "lang-css.js" "README.mdown")

# minifies prettify js
cat prettify.js lang-css.js | uglifyjs -nc > prettify.min.js

rm -rf $BUILD_DIR/
mkdir $BUILD_DIR
cp * $BUILD_DIR

for REMOVE in "${REMOVABLES[@]}"
do
	rm $BUILD_DIR/$REMOVE
done

zip -r neo-vision.zip $BUILD_DIR