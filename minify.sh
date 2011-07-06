#!/bin/bash

# minifies prettify js
cat prettify.js lang-css.js | uglifyjs -nc > prettify.min.js