#!/bin/sh

cross-env NODE_TYPE=dingmobile webpack --progress --colors --watch -d &

supervisor node bin/www
