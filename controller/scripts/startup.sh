#!/bin/bash
cd ../../ && node index.js
git add .
git commit -m "style: 💄 Update README.md"
git push
echo "Ran file, git add, git commit, git pushed"