#!/bin/bash
# Build script for Render deployment

echo "Installing dependencies..."
npm install

echo "Building the project..."
npm run build

echo "Build completed successfully!"
