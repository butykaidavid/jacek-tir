# 🚀 Vercel Deployment Útmutató - Jacek TIR Parking

## Gyors Deployment (5 perc)

### Módszer 1: Vercel Dashboard (Legegyszerűbb) ⭐

1. **Regisztráció/Bejelentkezés**
   - Menj a [vercel.com](https://vercel.com) oldalra
   - Jelentkezz be GitHub/GitLab/Bitbucket fiókkal

2. **Projekt létrehozása**
   - Kattints az "Add New" gombra
   - Válaszd az "Project" opciót
   - Importáld a repository-t a Git platformodról

3. **Konfiguráció**
   - **Project Name**: `jacek-tir-parking`
   - **Framework Preset**: Válaszd az "Other" vagy hagyj üresen
   - **Root Directory**: `./` (alapértelmezett)
   - **Build Command**: Üresen hagyható (statikus oldal)
   - **Output Directory**: `./` (alapértelmezett)

4. **Deploy**
   - Kattints a "Deploy" gombra
   - ⏳ Várj 30-60 másodpercet
   - ✅ Kész! Megkapod az élő URL-t: `https://jacek-tir-parking.vercel.app`

---

### Módszer 2: Vercel CLI (Fejlesztőknek)

1. **Telepítés**
   ```bash
   npm i -g vercel
   ```

2. **Bejelentkezés**
   ```bash
   vercel login
   ```

3. **Első Deployment (Preview)**
   ```bash
   vercel
   ```
   - Kövesd a promptokat
   - Megkapod a preview URL-t

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

---

### Módszer 3: GitHub Integration (Ajánlott CI/CD-hez) 🔄

1. **Repository létrehozása GitHub-on**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Jacek TIR Parking website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/jacek-tir-parking.git
   git push -u origin main
   ```

2. **Vercel és GitHub összekötése**
   - Menj a [vercel.com/new](https://vercel.com/new) oldalra
   - Válaszd ki a GitHub repository-t
   - Hagyd jóvá a Vercel hozzáférését

3. **Automatikus Deployment**
   - ✅ Minden `git push` automatikusan deploy-ol
   - ✅ Preview URL minden branch-hez
   - ✅ Production csak a `main` vagy `master` branch-re

---

## 🔧 Vercel Konfiguráció

A `vercel.json` fájl beállításai:

```json
{
  "version": 2,
  "name": "jacek-tir-parking",
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "headers": [...]
}
```

### Mit tartalmaz?
- ✅ Statikus fájl hosting optimalizáció
- ✅ Cache control (1 év CSS/JS/képek számára)
- ✅ Biztonsági headerek (XSS, Clickjacking védelem)
- ✅ SEO optimalizáció

---

## 🌐 Custom Domain Beállítása

### 1. Domain hozzáadása Vercel-ben

1. Menj a Vercel Dashboard → Project → Settings → Domains
2. Add hozzá a domain-t: `jacektirparking.hu` és `www.jacektirparking.hu`
3. Vercel megadja a DNS beállításokat

### 2. DNS Beállítások (Domain szolgáltatónál)

**A Record** (apex domain):
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record** (www subdomain):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. SSL/HTTPS
- ✅ Automatikus SSL tanúsítvány (Let's Encrypt)
- ✅ Automatikus HTTPS redirect
- ✅ Nincs további beállítás szükséges

---

## 📊 Deployment után ellenőrzés

### Performance Check
```bash
# Lighthouse audit
npx lighthouse https://jacek-tir-parking.vercel.app --view

# PageSpeed Insights
# https://pagespeed.web.dev/
```

### Célok:
- 🎯 Performance: 95+ pontérték
- 🎯 Accessibility: 100
- 🎯 Best Practices: 100
- 🎯 SEO: 100

---

## 🔄 Frissítések Deploy-olása

### Git + Vercel Integration használatával:
```bash
git add .
git commit -m "Frissítés: új funkció hozzáadva"
git push origin main
# ✅ Automatikusan deploy-ol
```

### Vercel CLI használatával:
```bash
vercel --prod
```

---

## 🐛 Hibaelhárítás

### Problem: Build Failed

**Megoldás**:
```bash
# Ellenőrizd a fájlokat lokálisan
ls -la

# Győződj meg róla, hogy az index.html a root könyvtárban van
```

### Problem: 404 Error

**Megoldás**:
- Ellenőrizd a `vercel.json` routes beállítását
- Győződj meg róla, hogy az `index.html` létezik

### Problem: CSS/JS nem töltődik be

**Megoldás**:
```json
// vercel.json - ellenőrizd a headers beállítást
{
  "headers": [
    {
      "source": "/(.*).(css|js)",
      "headers": [
        {
          "key": "Content-Type",
          "value": "text/css; charset=utf-8"
        }
      ]
    }
  ]
}
```

---

## 📈 Analitika Beállítása (Opcionális)

### Vercel Analytics
```bash
# Package.json-hez add hozzá (opcionális)
npm i @vercel/analytics
```

```javascript
// script.js végére
import { inject } from '@vercel/analytics';
inject();
```

### Google Analytics
```html
<!-- index.html <head> szekcióba -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🎉 Sikeresen Deploy-oltad!

Az oldal most élőben elérhető:
- 🌐 Production: `https://jacek-tir-parking.vercel.app`
- 🌐 Custom domain: `https://jacektirparking.hu` (domain beállítás után)

### Következő lépések:
1. ✅ Teszteld az oldalt minden eszközön
2. ✅ Állítsd be a custom domain-t
3. ✅ Add hozzá a Google Analytics-et
4. ✅ Konfiguráld az email form backend-et
5. ✅ Cseréld ki a placeholder képeket valódi fotókra
6. ✅ Frissítsd a kapcsolati információkat (telefon, email)

---

**Support**: Ha bármilyen kérdésed van, írj a [Vercel Support](https://vercel.com/support)-nak vagy nézd meg a [dokumentációt](https://vercel.com/docs).
