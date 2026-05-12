#!/bin/bash

# Function to increment version
increment_version() {
  local version=$1
  local delimiter="."
  local array=(${version//$delimiter/ })
  local last_index=$((${#array[@]} - 1))
  array[$last_index]=$((array[$last_index] + 1))
  local new_version=$(IFS=$delimiter; echo "${array[*]}")
  echo "$new_version"
}

# Get current version from package.json
CURRENT_VERSION=$(node -p "require('./package.json').version")
NEW_VERSION=$(increment_version $CURRENT_VERSION)

echo "Deploying version $NEW_VERSION..."

# Update version in package.json
sed -i '' "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/" package.json

# Build project
npm run build

if [ $? -eq 0 ]; then
  echo "Build successful. Committing and pushing..."
  
  # Git operations
  git add package.json
  git commit -m "chore: bump version to $NEW_VERSION and deploy"
  git push origin main
  
  echo "Deploy triggered on Vercel for version $NEW_VERSION"
else
  echo "Build failed. Deployment aborted."
  exit 1
fi
