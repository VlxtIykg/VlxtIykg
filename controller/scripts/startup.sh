#!/bin/bash
cd ../../ && node index.js
git add .
git commit -m "style: 💄 Update README.md"
git push
echo "Commands ran"