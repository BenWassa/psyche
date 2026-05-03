# Firebase & PWA Deployment Checklist

Use this checklist before deploying to production.

## Pre-Deployment (One-Time Setup)

- [ ] Install Firebase CLI: `npm install -g firebase-tools`
- [ ] Authenticate: `firebase login`
- [ ] Run setup script: `bash scripts/setup-firebase.sh`
- [ ] Generate PWA icons and place in `public/`
  - [ ] `favicon.ico` (16×16, 32×32, 48×48)
  - [ ] `apple-touch-icon.png` (180×180)
  - [ ] `icon-192x192.png` (192×192)
  - [ ] `icon-512x512.png` (512×512)
  - [ ] `icon-192x192-maskable.png` (192×192)
  - [ ] `icon-512x512-maskable.png` (512×512)
- [ ] Create `.env.local` with Firebase config (copy from `.env.example`)
- [ ] Verify `.firebaserc` is populated with project ID
- [ ] Update `firebase.json` if using custom domain

## Code Quality

- [ ] Run linter: `npm run lint`
- [ ] Check TypeScript errors: `npm run lint`
- [ ] Review manifest.json for accuracy
  - [ ] App name matches
  - [ ] Description is current
  - [ ] Icons are correct
  - [ ] Theme color matches design
- [ ] Test PWA install prompt works
- [ ] Test update notification works
- [ ] Test offline functionality

## Testing (Local)

- [ ] Build production: `npm run build`
- [ ] Preview locally: `npm run preview`
- [ ] Test in browser:
  - [ ] Service Worker registered (DevTools → Application)
  - [ ] Manifest loads correctly
  - [ ] Install prompt appears
  - [ ] Icons display properly
- [ ] Test on real device (if possible)
  - [ ] iOS: Add to Home Screen works
  - [ ] Android: Install prompt appears
- [ ] Test offline:
  - [ ] Turn off network
  - [ ] App loads from cache
  - [ ] Navigation works
  - [ ] Content displays correctly
- [ ] Lighthouse audit:
  - [ ] Performance > 90
  - [ ] PWA score = 100
  - [ ] Fix any red flags

## Performance

- [ ] Bundle size reasonable: `npm run build`
  - [ ] Check console output for warnings
  - [ ] JS/CSS minified
  - [ ] No unused dependencies
- [ ] Cache busting working (check dist/ file hashes)
- [ ] Font loading optimized (Google Fonts cached)
- [ ] Images optimized

## Deployment

- [ ] Commit all changes: `git add . && git commit -m "feat: add PWA setup"`
- [ ] Push to remote: `git push`
- [ ] Deploy: `npm run firebase:deploy`
  - [ ] Build succeeds
  - [ ] Deployment succeeds
  - [ ] Check Firebase Console → Hosting

## Post-Deployment

- [ ] Verify site loads: Visit Firebase hosting URL
- [ ] Check Service Worker status (DevTools → Application)
- [ ] Test install:
  - [ ] Desktop: Try install prompt
  - [ ] Mobile: Try "Add to Home Screen"
- [ ] Test offline (turn off network)
- [ ] Check performance metrics (Firebase Console)
- [ ] Monitor for errors (check browser console)

## Monitoring (Ongoing)

- [ ] Weekly: Check Firebase Console for errors
- [ ] Monthly: Run Lighthouse audit
- [ ] Monthly: Check analytics / user engagement
- [ ] As needed: Deploy updates via `npm run firebase:deploy`

## Troubleshooting During Deployment

**Service Worker not registering:**
```bash
npm run clean
npm run build
firebase deploy
```

**Icons not showing:**
- Verify files exist in `public/`
- Check manifest.json paths
- Clear browser cache

**Install prompt not appearing:**
- Verify HTTPS (Firebase provides this)
- Run Lighthouse audit to check PWA criteria
- Check manifest.json validity

**Offline not working:**
- Check DevTools → Application → Cache Storage
- Verify service worker is active
- Check NetworkFirst cache rules

---

**Questions?** See [PWA_SETUP.md](../PWA_SETUP.md) for detailed instructions.
