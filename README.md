# Jacek TIR Parking - Prémium Kamion Parkoló Weboldal

## 🚚 Áttekintés

Modern, díjnyertes dizájnú weboldal a Jacek TIR Parking kamion parkoló számára, amely Hajlamjonban található, Borsod-Abaúj-Zemplén megyében.

## ✨ Tulajdonságok

### Dizájn
- **Prémium megjelenés**: Luxus színpaletta arany (#c59d5f) és fekete (#1a1a1a) árnyalatokkal
- **Modern tipográfia**: Playfair Display és Montserrat betűcsaládok kombinációja
- **Smooth animációk**: Elegáns fade-in és hover effektusok
- **Reszponzív**: Tökéletesen működik minden eszközön (mobil, tablet, desktop)

### Szekciók

1. **Hero Section**
   - Nagy, látványos főoldal
   - Call-to-action gombok
   - Scroll indikátor
   - Parallax effekt

2. **Features**
   - 4 kiemelkedő szolgáltatás kártya
   - Ikonok SVG grafikai elemekkel
   - Hover animációk

3. **Services**
   - Részletes szolgáltatás leírások
   - 4 fő kategória:
     - Biztonságos parkolás
     - Kényelmi szolgáltatások
     - Étkezési lehetőségek
     - Technikai támogatás

4. **About**
   - Bemutatkozás
   - Statisztikák
   - Vizuális elemek

5. **Location**
   - Kapcsolati információk
   - Cím, telefon, email
   - Nyitvatartás
   - Térkép placeholder

6. **Contact**
   - Működő kapcsolati űrlap
   - Validáció
   - Modern input mezők

7. **Footer**
   - Linkek
   - Kapcsolati adatok
   - Copyright

### Technológiák

- **HTML5**: Szemantikus, tiszta kód
- **CSS3**: Modern layoutok, Grid és Flexbox
- **Vanilla JavaScript**: Nincs függőség, gyors betöltés
- **Google Fonts**: Professzionális betűtípusok

### Animációk & Interakciók

- Scroll-based animációk (Intersection Observer API)
- Sticky navigation scroll effekttel
- Mobile hamburger menu
- Smooth scrolling
- Hover effektusok minden interaktív elemen
- Counter animációk a statisztikáknál
- Form validáció és feedback

## 🚀 Használat

1. **Böngészőben való megnyitás**:
   ```bash
   # Nyisd meg az index.html fájlt bármelyik modern böngészőben
   open index.html
   ```

2. **Local Server (opcionális)**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (ha van telepítve http-server)
   npx http-server
   ```

3. **Live Server** (VS Code kiterjesztés):
   - Telepítsd a Live Server kiterjesztést
   - Jobb klikk az index.html-re
   - "Open with Live Server"

## 📱 Reszponzív Breakpointok

- **Desktop**: 1200px és felette
- **Laptop**: 968px - 1199px
- **Tablet**: 768px - 967px
- **Mobile**: 767px és alatta

## 🎨 Szín Paletta

- **Elsődleges arany**: `#c59d5f`
- **Sötét arany**: `#a37f43`
- **Fekete**: `#1a1a1a`
- **Szürke**: `#2d2d2d`
- **Világos háttér**: `#f8f8f8`
- **Szöveg szürke**: `#666666`

## 📧 Kapcsolati Adatok (Placeholder)

- **Cím**: Hajlamjon, Borsod-Abaúj-Zemplén megye, Magyarország
- **Telefon**: +36 XX XXX XXXX
- **Email**: info@jacektirparking.hu
- **Nyitvatartás**: 0-24 óra, minden nap

## 🔧 Testreszabás

### Képek hozzáadása

1. Cseréld ki a `.image-placeholder` div-eket valódi képekkel:
```html
<img src="path/to/your/image.jpg" alt="Description">
```

2. Optimalizáld a képeket web használatra (WebP formátum javasolt)

### Színek módosítása

Változtasd meg a CSS változókat a `styles.css` fájl tetején:
```css
:root {
    --primary-color: #c59d5f;  /* Arany szín */
    --secondary-color: #1a1a1a; /* Fekete */
    /* ... */
}
```

### Form backend csatlakoztatása

A `script.js` fájlban find the form handler és add hozzá a saját API endpointod:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formObject),
})
```

## 📈 Performance

- **Lighthouse Score célok**:
  - Performance: 95+
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

- **Optimalizációk**:
  - Minify CSS és JS production-ben
  - Képek lazy loading
  - Font preloading
  - CSS critical path optimization

## 🌐 Böngésző Támogatás

- Chrome (utolsó 2 verzió)
- Firefox (utolsó 2 verzió)
- Safari (utolsó 2 verzió)
- Edge (utolsó 2 verzió)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Licensz

Ez a projekt a Jacek TIR Parking számára készült.

## 🤝 Fejlesztés

További fejlesztési lehetőségek:
- [ ] Többnyelvűség (EN, DE, PL)
- [ ] Online foglalási rendszer
- [ ] Árak megjelenítése
- [ ] Képgaléria
- [ ] Vélemények/Reviews szekció
- [ ] Blog/Hírek
- [ ] Google Maps integráció
- [ ] Valódi képek hozzáadása

---

**Készült 2025-ben** | Modern, prémium weboldal a Jacek TIR Parking számára
