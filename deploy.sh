#!/bin/bash
echo -e '\n=== checking status'
git status

echo -e '\n=== add files'
git add ./

echo -e '  === add commit remark'
git commit -m 'update'

echo -e '  === git pull'
git pull

echo -e '  === git push'
git push

echo -e '  === done'
