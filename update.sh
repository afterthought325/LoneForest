#!/bin/sh

git pull
echo "Setting the permissions..."
chmod -Rc --preserve-root --verbose u+rwX,go+rX,go-w *
echo "The files have been updated from the github repo!"
