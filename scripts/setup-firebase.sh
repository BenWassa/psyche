#!/bin/bash
# PWA Firebase Quick Setup Script
# This script helps you quickly set up Firebase hosting for your PWA

set -e

echo "🚀 Psyche Map PWA - Firebase Setup"
echo "================================="
echo ""

# Check if firebase-tools is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Installing globally..."
    npm install -g firebase-tools
fi

# Check if logged in
echo "🔐 Checking Firebase login..."
if ! firebase list &>/dev/null 2>&1; then
    echo "📝 Please log in to Firebase..."
    firebase login
fi

# Initialize Firebase if not already done
if [ ! -f ".firebaserc" ] || ! grep -q "projects" ".firebaserc"; then
    echo ""
    echo "🔧 Initializing Firebase Hosting..."
    firebase init hosting
else
    echo "✅ Firebase already configured"
fi

# Setup environment variables
if [ ! -f ".env.local" ]; then
    echo ""
    echo "📋 Setting up environment variables..."
    cp .env.example .env.local
    echo "⚠️  Please edit .env.local with your Firebase configuration values"
    echo "📍 Get these from: Firebase Console > Project Settings > General"
else
    echo "✅ .env.local already exists"
fi

# Build the app
echo ""
echo "🔨 Building the app..."
npm run build

# Offer to test locally
echo ""
read -p "Do you want to test the app locally with Firebase? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🏃 Starting Firebase local emulator..."
    firebase serve
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📚 Next steps:"
echo "1. Edit .env.local with your Firebase config"
echo "2. Run: npm run build"
echo "3. Deploy with: npm run firebase:deploy"
echo ""
echo "📖 For detailed instructions, see: docs/pwa/PWA_SETUP.md"
