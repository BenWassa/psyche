# PWA Features & Architecture

## What is a PWA?

A Progressive Web App (PWA) is a web application that uses modern web capabilities to deliver an app-like experience to users. It combines the best features of web and mobile apps.

## Psyche Map PWA Features

### ✅ Installed & Enabled

1. **Installable**
   - Users can install on any device (iOS, Android, Windows, macOS)
   - One-tap installation from browser menu
   - Appears in app drawer alongside native apps
   - Custom app icon and splash screen

2. **Offline-First**
   - Works completely offline after first visit
   - Intelligent caching with Workbox
   - Automatic background sync (when connectivity restored)

3. **App-like Experience**
   - Standalone display mode (full screen, no browser chrome)
   - Custom color scheme (dark Star Atlas v2 theme)
   - Touch-friendly interface optimized for mobile
   - Fast startup (service worker + app shell)

4. **Auto-Update**
   - Checks for updates every minute
   - Notifies user when update available
   - One-click install new version
   - No manual app store downloads needed

5. **Fast Performance**
   - Service worker enables instant load
   - HTTP/2 push via Firebase CDN
   - Optimized caching (CSS/JS cached for app lifetime, content 1hr)
   - Lazy loading of resources

### 🔧 Technical Implementation

#### Service Worker (Auto-generated)
- Handled by `vite-plugin-pwa` + Workbox
- No manual service worker coding needed
- Auto-updates on build
- Intelligently caches by resource type

#### Caching Strategy
```
Google Fonts (CSS & Assets)     → CacheFirst (1 year)
Images                          → CacheFirst (30 days)
App Bundle (JS/CSS)             → Generated hash-versioned
HTML                            → Network-first (1 hour TTL)
```

#### Manifest
- Located at `public/manifest.json`
- Defines app metadata, icons, shortcuts
- Enables installation across platforms

#### Icons & Branding
- App icon (192×192, 512×512)
- Splash screen generated from icon
- Theme color matches design system
- Maskable icons for adaptive launchers (Android 8+)

### 📱 Device Support

| Platform | Installation | Offline | Notes |
|----------|-------------|---------|-------|
| iOS (Web) | Add to Home Screen | ✅ | Native-like experience |
| Android | Install prompt | ✅ | Full app installation |
| Windows | Install button | ✅ | Windows app wrapper |
| macOS | Install button | ✅ | Mac app launcher |
| Linux | Install button | ✅ | Linux app launcher |
| ChromeOS | Install prompt | ✅ | Full app integration |

### 🎯 User Experience Flows

#### Installation Flow
```
1. User visits site
2. Browser detects PWA criteria met
3. Install banner/button appears
4. User clicks "Install"
5. App added to home screen/app drawer
6. User can open as standalone app
```

#### Update Flow
```
1. New version deployed to Firebase
2. Service worker checks for update (~60s)
3. New version downloads in background
4. "Update Available" notification shown
5. User clicks "Update"
6. Page reloads with new version
```

#### Offline Flow
```
1. User loses network connectivity
2. Service worker intercepts requests
3. Cached resources returned
4. App continues functioning
5. When network restored, updates available
```

### 🔐 Security

- **HTTPS only**: Firebase hosting provides automatic SSL
- **Secure headers**: Set via `firebase.json`
- **Content Security Policy**: Can be configured in headers
- **Subresource Integrity**: Workbox handles integrity verification

### 📊 Analytics & Monitoring

Track via Firebase Console:
- **Hosting Analytics**: Real-time visitors, geography, traffic
- **Performance**: Cumulative Layout Shift, First Input Delay
- **Network**: Bandwidth usage, request count
- **Cache**: Service worker effectiveness

### 🚀 Performance Benefits

- **Faster First Paint**: Service worker + app shell
- **Reduced Bandwidth**: Intelligent caching prevents redundant downloads
- **Lower Server Load**: More requests served from cache
- **Offline Capability**: Users don't need network to access cached content
- **Better SEO**: PWA apps are crawlable and fast

### 🔄 Update Strategy

Current approach: **Auto-update with notification**
- Service worker checks for updates every 60 seconds
- If new version found, shows notification
- User can choose to update immediately or later
- Updates don't interrupt user experience

Alternative strategies available:
- **Silent update**: Update automatically in background
- **Periodic update**: Check less frequently (e.g., hourly)
- **Manual only**: Require user to check manually

### 💾 Storage & Limits

- **Cache Storage**: ~50MB typical (platform dependent)
- **IndexedDB**: ~50MB-100MB (optional, if configured)
- **Local Storage**: ~5-10MB (not recommended)

Current usage:
- Google Fonts cache: ~1-2MB
- Images cache: ~10-20MB (configurable)
- App bundle: ~2-5MB (varies by domain count)

### 🎨 Theming Integration

PWA theme automatically uses:
- **Dark theme**: Star Atlas v2 (`#0a0f1e` surface)
- **Accent**: Gold primary color (`#c49a3c`)
- **Typography**: Fraunces (display) + Newsreader (body)
- **Status bar**: Black translucent (iOS) / surface color (Android)

### 📱 Responsive & Touch-Optimized

- **Touch targets**: 48×48px minimum (large buttons)
- **Viewport**: Full-screen standalone display
- **Safe area**: iOS notch + Android gesture bar safe areas
- **Breakpoints**: Mobile-first, optimized for all sizes

### ♿ Accessibility

PWA maintains all accessibility features:
- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigation support
- High contrast dark theme (WCAG AA+)
- Screen reader compatible

---

## Configuration Files

### Main Files
- `vite.config.ts`: PWA plugin configuration
- `public/manifest.json`: App metadata & icons
- `firebase.json`: Firebase hosting rules & caching
- `.env.example`: Environment configuration template

### Auto-Generated Files
- `dist/sw.js`: Service worker (built by Workbox)
- `dist/workbox-*.js`: Workbox runtime libraries

### Key Directories
- `public/`: Static assets, icons, manifest
- `src/hooks/`: PWA hooks (install prompt, SW management)
- `src/components/`: PWA UI (install banner, update notification)

---

## Development Workflow

### Local Testing
```bash
# With hot reload (no SW)
npm run dev

# With service worker (cold reload)
SW_DEV=true npm run dev

# Production preview
npm run build && npm run preview
```

### Testing Checklist
- [ ] Service worker registers (DevTools → Application)
- [ ] Manifest valid (DevTools → Application → Manifest)
- [ ] Icons display (check manifest preview)
- [ ] Install prompt appears (after ~30 sec, Chrome only)
- [ ] Offline functionality works
- [ ] Cache populated (DevTools → Application → Cache Storage)

---

## Troubleshooting Reference

### Issue: Service Worker Not Registering
**Solution**: Clear cache and rebuild
```bash
npm run clean && npm run build && npm run preview
```

### Issue: Install Prompt Never Shows
**Solution**: Ensure HTTPS (Firebase provides) and check criteria
- Must be served over HTTPS ✅
- Must have manifest.json ✅
- Must have minimum icons ✅
- Must meet PWA criteria (run Lighthouse audit)

### Issue: Offline Mode Not Working
**Solution**: Check cache storage and SW status
```javascript
// In browser console
navigator.serviceWorker.getRegistrations().then(regs => {
  regs.forEach(r => console.log(r.scope, r.active?.state));
});

caches.keys().then(names => {
  names.forEach(name => {
    caches.open(name).then(c => c.keys().then(keys => {
      console.log(name, keys.length, 'items');
    }));
  });
});
```

---

## Future Enhancements

Potential PWA features to add:
- [ ] **Push Notifications**: Firebase Cloud Messaging
- [ ] **Background Sync**: Sync when online restored
- [ ] **Share Target**: Share to app from other apps
- [ ] **Web Share API**: Better sharing options
- [ ] **File Handling**: Open content files
- [ ] **URL Handling**: App as URL handler
- [ ] **Shortcuts**: Quick access to common sections
- [ ] **Periodic Sync**: Regular background updates

---

## Resources

- [MDN PWA Documentation](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [web.dev PWA Guides](https://web.dev/progressive-web-apps/)
- [Vite PWA Plugin Docs](https://vite-pwa-org.netlify.app/)
- [Workbox Documentation](https://developers.google.com/web/tools/workbox)
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)

---

## Support

For detailed setup and deployment instructions, see:
- 📖 [PWA_SETUP.md](PWA_SETUP.md) - Complete setup guide
- ✅ [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) - Pre-flight checklist
- 🚀 [Firebase CLI Documentation](https://firebase.google.com/docs/cli)
