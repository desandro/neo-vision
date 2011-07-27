#!/bin/bash

BUILD_DIR='neo-vision'
ZIP='neo-vision.zip'
REMOVABLES=("build.sh" "prettify.js" "lang-css.js" "README.mdown" $ZIP)

rm -rf $BUILD_DIR/
mkdir $BUILD_DIR
cp *.* $BUILD_DIR

# minifies prettify js
cat prettify.js lang-css.js | uglifyjs -nc > $BUILD_DIR/prettify.min.js

for REMOVE in "${REMOVABLES[@]}"
do
	rm $BUILD_DIR/$REMOVE
done

zip -r -u $ZIP $BUILD_DIR