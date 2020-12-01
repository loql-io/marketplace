#!/bin/bash

version=$1

bump_repo () {
  cd ..
  cd $1/
  dot-json package.json devDependencies.loql-marketplace "https://github.com/loql-io/marketplace.git#v$version"
  git commit -am "bumped marketplace dependency to v$version"
  git push
}

declare -a repos

repos=("hamlins" "berko-sports" "creative-collective" "loql-ly" "petals")

for repo in "${repos[@]}"; do
    bump_repo "$repo"
done
