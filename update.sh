#!/bin/sh


cd ~./public_html/LoneForest/
git pull
echo "Setting the permissions..."
chmod -R u+rwX,go+rX,go-w .
echo "The files have been updated from the github repo!"

