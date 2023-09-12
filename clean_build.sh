#!/bin/bash
mv ./build/_app ./build/app
sed -i 's/_app/app/g' ./build/index.html
echo "Cleaned build"