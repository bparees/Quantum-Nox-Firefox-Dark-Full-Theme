#!/bin/sh
# $1 - firefox profile name

cp Multirow\ and\ other\ functions/Multirow\ tabs/MultiRowTabLiteforFx.uc.js ~/.mozilla/firefox/$1/chrome/MultiRowTabLiteforFx.uc.js
cp Multirow\ and\ other\ functions/JS\ Loader/utils/* ~/.mozilla/firefox/$1/chrome/utils/

sudo cp Multirow\ and\ other\ functions/JS\ Loader/root/config.js /usr/lib64/firefox/config.js 
sudo cp Multirow\ and\ other\ functions/JS\ Loader/root/defaults/pref/* /usr/lib64/firefox/defaults/pref/

