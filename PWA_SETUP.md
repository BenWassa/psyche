# PWA Setup Guide

## Overview

Your Psyche Map app is now configured as a full Progressive Web App (PWA) with Firebase hosting. This enables:

- **Installable**: Users can install the app on any device (mobile, tablet, desktop)
- **Offline Support**: Works fully offline with intelligent caching strategies
- **App-like Experience**: Standalone display mode with app shell architecture
- **Fast Loading**: Service worker enables instant app shell with lazy-loaded content
- **Updates**: Automatic background updates with user-friendly update notifications

---

## 1. Setup Prerequisites

### Install Dependencies
```bash
npm install
```

### Firebase Setup
First, install Firebase CLI globally (if not already installed):
```bash
npm install -g firebase-tools
```

Authenticate with Firebase:
```bash
firebase login
```

---

## 2. Configure Firebase Hosting

### Initialize Firebase (First Time Only)
```bash
npm run firebase:init
```

Follow the prompts:
1. Select "Hosting" from the features list
2. Choose an existing Firebase project or create a new one
3. Set the public directory to: `dist`
4. Configure as single-page app: `Yes`
5. Set up automatic builds/deploys: Choose based on your CI/CD setup

This will populate `.firebaserc` with your project ID.

### Configure Environment Variables
1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Get your Firebase config from [Firebase Console](https://console.firebase.google.com):
   - Go to Project Settings → General
   - Copy the config values and paste them into `.env.local`

3. Update the values:
```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 3. PWA Icons

### Generate Icons
You need to create PWA icons. The simplest way is to use a tool like:
- [PWA Icon Generator](https://www.pwa-icon-generator.com/)
- [Favicon Generator](https://realfavicongenerator.net/)

### Required Icon Files
Place these in the `public/` directory:

| File | Size | Purpose |
|------|------|---------|
| `favicon.ico` | 16×16, 32×32, 48×48 | Browser tab icon |
| `apple-touch-icon.png` | 180×180 | iOS app icon |
| `icon-192x192.png` | 192×192 | Android home screen |
| `icon-512x512.png` | 512×512 | App splash screen |
| `icon-192x192-maskable.png` | 192×192 | Adaptive icon (maskable) |
| `icon-512x512-maskable.png` | 512×512 | Adaptive icon (maskable) |
| `icon-96x96.png` | 96×96 | Shortcuts (optional) |

### Quick Icon Generation
Using ImageMagick (if installed):
```bash
# Generate a simple placeholder icon from a base image
convert base-icon.png -resize 192x192 public/icon-192x192.png
convert base-icon.png -resize 512x512 public/icon-512x512.png
```

Or use an online tool:
1. Go to [PWA Icon Generator](https://www.pwa-icon-generator.com/)
2. Upload your base image (1024×1024 minimum recommended)
3. Download all generated icons
4. Place them in `public/`

---

## 4. Development & Testing

### Local Development with PWA
```bash
npm run dev
```

The app will run at `http://localhost:3000` with hot module reloading.

#### Enable Service Worker in Development (Optional)
To test the service worker locally:
```bash
SW_DEV=true npm run dev
```

### Preview Production Build Locally
```bash
npm run build
npm run preview
```

Then test with service worker enabled.

### Test PWA Install Prompt
1. Build: `npm run build`
2. Preview: `npm run preview`
3. Open DevTools (F12)
4. Go to Application → Manifest
5. Click "Add to shelf" or use the browser's install menu

---

## 5. Service Worker & Caching

### Caching Strategies

The app implements intelligent caching:

| Resource | Strategy | Cache Duration |
|----------|----------|-----------------|
| Google Fonts CSS | CacheFirst | 1 year |
| Google Fonts Assets | CacheFirst | 1 year |
| Images | CacheFirst | 30 days |
| App Shell (JS/CSS) | Generated | Per version |
| HTML | Network-First | 1 hour |

### Service Worker Updates

The app automatically checks for updates:
- Checks for new service worker every minute
- Shows "Update Available" notification when found
- User can trigger update with one click
- App reloads with new version

### Manual Service Worker Cache Clearing

In browser DevTools:
```javascript
// In browser console
navigator.serviceWorker.getRegistrations().then(registrations => {
  registrations.forEach(registration => registration.unregister());
});

// Then clear cache
caches.keys().then(names => {
  names.forEach(name => caches.delete(name));
});
```

---

## 6. Deployment

### Deploy to Firebase Hosting

#### First Deployment
```bash
npm run build
npm run firebase:deploy
```

#### Regular Deployments
```bash
npm run firebase:deploy
```

Or use the shortcut:
```bash
npm run build && firebase deploy
```

#### Monitor Deployment
Check your Firebase Console:
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Go to Hosting
4. View deployment history and analytics

### Verify Deployment

After deploying:
1. Visit your Firebase hosting URL (e.g., `https://your-project.firebaseapp.com`)
2. Open DevTools
3. Application → Service Workers: Should show "Active and running"
4. Application → Manifest: Should load your manifest.json
5. Try installing the app from the browser menu

---

## 7. PWA Integration in App.tsx

The PWA components are already integrated into your App:

```tsx
import { InstallPrompt, UpdateNotification } from '@/components';
import { useServiceWorker } from '@/hooks';

// Inside your App component:
export function App() {
  useServiceWorker(); // Initialize SW listeners
  
  return (
    <>
      {/* Your existing app UI */}
      <InstallPrompt />           {/* Shows install banner */}
      <UpdateNotification />      {/* Shows update notification */}
    </>
  );
}
```

---

## 8. Best Practices

### Do ✅
- ✅ **Test on real devices** before going live (use `firebase serve`)
- ✅ **Monitor offline functionality** - verify app works without network
- ✅ **Check storage** - test that resources are cached properly
- ✅ **Update manifest** - keep app name, description, and icons current
- ✅ **Use HTTPS** - Firebase hosting provides this automatically
- ✅ **Monitor cache size** - limit entries to prevent storage bloat
- ✅ **Test update flow** - ensure users see update notifications

### Don't ❌
- ❌ **Don't cache HTML aggressively** - use 1-hour TTL maximum
- ❌ **Don't serve service worker from cache** - must-revalidate always
- ❌ **Don't force updates** - give users control when possible
- ❌ **Don't store sensitive data** - IndexedDB can be accessed by scripts
- ❌ **Don't use old cache API patterns** - rely on Workbox abstractions
- ❌ **Don't forget to minify/optimize assets** - reduces cache bloat

---

## 9. Troubleshooting

### Service Worker Not Registering
```bash
# Clear all service workers
navigator.serviceWorker.getRegistrations().then(regs => {
  regs.forEach(r => r.unregister());
});

# Rebuild and test
npm run build && npm run preview
```

### Install Prompt Not Showing
1. Check manifest.json is valid: DevTools → Application → Manifest
2. Verify app is served over HTTPS (Firebase does this automatically)
3. Ensure icons exist in public/ and are referenced in manifest
4. Check PWA criteria met: [Lighthouse PWA Audit](https://developers.google.com/web/tools/lighthouse)

### Cache Busting Issues
1. Workbox automatically handles versioning
2. Production builds use content hashing
3. If issues persist, manually clear cache:
   ```bash
   npm run clean
   npm run build
   firebase deploy
   ```

### Offline Testing
1. Build and preview: `npm run build && npm run preview`
2. DevTools → Network → Set throttling to Offline
3. Reload page - should show cached version
4. Try navigating between sections - should work

---

## 10. Monitoring & Analytics

### Firebase Console
- **Hosting → Analytics**: Real-time visitor stats
- **Hosting → Deployments**: Version history and rollback
- **Performance**: Monitor Cumulative Layout Shift, FID, etc.

### Google Lighthouse
```bash
npm run build && npm run preview
# Then run Lighthouse audit in Chrome DevTools
```

Target scores:
- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+
- **PWA**: 100 (all criteria met)

---

## 11. Advanced: Custom Firebase Configuration

### Update Hosting Security Headers
Edit `firebase.json` to add additional security headers:

```json
{
  "hosting": {
    "headers": [
      {
        "source": "**",
        "headers": [
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "SAMEORIGIN"
          },
          {
            "key": "X-XSS-Protection",
            "value": "1; mode=block"
          }
        ]
      }
    ]
  }
}
```

### Setup Custom Domain
1. Firebase Console → Hosting → Connect Domain
2. Follow domain verification steps
3. Configure DNS records (Firebase provides instructions)

---

## 12. Useful Commands Reference

```bash
# Development
npm run dev                    # Start dev server
npm run lint                   # Type check

# Build & Test
npm run build                  # Production build
npm run preview               # Preview production locally
npm run clean                 # Clean dist/

# Firebase
firebase login                # Authenticate
firebase init hosting         # Initialize project
firebase serve               # Test locally with Firebase
firebase deploy              # Deploy to Firebase hosting
npm run firebase:deploy      # Build and deploy (shortcut)

# Service Worker Dev
SW_DEV=true npm run dev      # Enable SW in dev

# Debugging
firebase functions:log       # View function logs (if using)
firebase hosting:disable     # Disable hosting temporarily
```

---

## 13. Next Steps

1. **Generate icons** using a tool mentioned above
2. **Configure Firebase** with `npm run firebase:init`
3. **Set environment variables** in `.env.local`
4. **Test locally** with `npm run preview`
5. **Deploy** with `npm run firebase:deploy`
6. **Monitor** in Firebase Console

Your PWA is now fully configured and ready for production! 🚀
