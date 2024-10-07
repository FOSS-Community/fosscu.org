#!/bin/bash

# Exit script if any command fails
set -e

# Navigate to the parent directory
echo "Navigating to the parent directory..."
cd .. || { echo "Failed to change directory! Exiting..."; exit 1; }

# Display the current directory
echo "Current directory:"
pwd || { echo "Failed to get current directory! Exiting..."; exit 1; }

# Install dependencies (if necessary) and build the project
echo "Running build..."
if yarn build; then
    echo "Build succeeded."
else
    echo "Build failed! Exiting..."
    exit 1
fi

# Deploy the project to Netlify (production environment)
echo "Deploying to Netlify..."
if netlify deploy --prod; then
    echo "Deployment to Netlify succeeded."
else
    echo "Deployment to Netlify failed! Exiting..."
    exit 1
fi

echo "Deployment completed successfully."
