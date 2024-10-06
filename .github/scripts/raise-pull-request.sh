#!/usr/bin/env bash

GITHUB_SCHEMA_REPO=$(jq --raw-output .repository.name "$GITHUB_EVENT_PATH")

cd sdks
          
git config user.email "$USER_EMAIL"
git config user.name "$USER"

pr_number=$(jq --raw-output .pull_request.number "$GITHUB_EVENT_PATH")
branch_name="feat/sdks/$GITHUB_SCHEMA_REPO-pr-$pr_number"
remote_branch_check=$(git ls-remote --heads origin $branch_name)

if [ -z "$remote_branch_check" ]
then
  echo "Branch($branch_name) does not exist."

  git checkout -b $branch_name

  export SCHEMA=${PWD}/../$GITHUB_SCHEMA_REPO/$SCHEMA_DIRECTORY
  docker compose -f docker-compose.generate.yml up

  git status

  if [[ -n $(git status --porcelain) ]]; then
    echo "There are changes"
    git add -A .
    git commit -m "feat($GITHUB_SCHEMA_REPO-sdks): Auto-commit from PR #$pr_number of $GITHUB_SCHEMA_REPO"
    echo "Committed local changes"
    git push origin $branch_name
    echo "Pushed all the changes to the remote location"
  else
    echo "No changes to commit." 
  fi
  export GITHUB_USER=$USER
  export GITHUB_TOKEN=$USER_API_KEY
  hub pull-request -m "feat($GITHUB_SCHEMA_REPO-sdks): Updating SDKs for the changes in $GITHUB_SCHEMA_REPO #$pr_number PR" -h $branch_name

else
  echo "Branch($branch_name) exists. Updating it with new changes."

  git checkout $branch_name
  git pull

  export SCHEMA=${PWD}/../$GITHUB_SCHEMA_REPO/$SCHEMA_DIRECTORY
  docker compose -f docker-compose.generate.yml up

  git status
  if [[ -n $(git status --porcelain) ]]; then
    echo "There are changes"
    git add -A .
    git commit -m "feat($GITHUB_SCHEMA_REPO-sdks): Auto-commit from PR #$pr_number of $GITHUB_SCHEMA_REPO"
    echo "Committed local changes"
    git push origin $branch_name
    echo "Pushed all the changes to the remote location"
  else
    echo "No changes to commit." 
  fi
fi
