#!/bin/bash
echo '\n === checking status'
git status

echo '\n === add files'
git add ./

echo '\n === add commit remark'
git commit -m 'update'

echo '\n === git pull'
git pull

echo '\n === git push'
git push

echo '\n === done'
