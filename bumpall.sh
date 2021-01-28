#!/bin/bash
branch=$1
version=$2

bump_repo () {
  cd ..
  cd $1/
  git checkout $branch || git checkout master || git checkout main
  git config pull.rebase false
  git pull
  dot-json package.json devDependencies.loql-marketplace "https://github.com/loql-io/marketplace.git#v$version"
  git commit -am "bumped marketplace dependency to v$version"
  git push
}

declare -a repos

repos=("hamlins" "berko-sports" "creative-collective" "loql-ly" "petals" "colton-footwear" "hh-dickman-and-son-chemist")

for repo in "${repos[@]}"; do
  bump_repo "$repo"
done
