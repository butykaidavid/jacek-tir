# 🚚 Kamion Parkoló Weboldal

Professzionális, modern és lenyűgöző weboldal kamion parkoló szolgáltatáshoz.

## ✨ Funkciók

### 🎨 Dizájn Elemek
- **Modern sötét témájú dizájn** kiváló vizuális hierarchiával
- **Gradiens színek és árnyékok** prémium megjelenésért
- **Glassmorphism effektek** a navigációs bárban
- **Animált elemek** smooth scroll-lal és fade-in effektekkel
- **Responsive dizájn** minden képernyőmérethez

### 📱 Responsive Layout
- **Mobil-barát**: Optimalizált okostelefonokhoz (< 480px)
- **Tablet méret**: Kiváló megjelenés tableteken (480px - 768px)
- **Desktop**: Teljes funkcionalitás nagyobb képernyőkön (> 768px)
- **Hamburger menü** mobilon egyszerű navigációért

### 🎯 Főbb Szekciók

#### 1. Hero Szekció
- Lenyűgöző bevezető rész animált címmel
- Gradiens szöveg effekt
- CTA gombok azonnali elérhetőséghez
- Scroll indikátor

#### 2. Funkciók (Features)
- 24/7 őrzés
- Elektromos csatlakozás
- Ingyenes WiFi
- Modern szociális helyiség

#### 3. Szolgáltatások
- Biztonságos parkolás részletei
- Kiegészítő szolgáltatások (mosás, javítás)
- Sofőr kényelem (pihenő, konyha, zuhanyzó)

#### 4. Árazás
- 3 árkategória (Napi, Heti, Havi)
- Vizuálisan kiemelve a legjobb ajánlat
- Részletes funkció lista minden csomaghoz

#### 5. Galéria
- Placeholder képek a létesítményről
- Hover effektekkel
- Lightbox ready (képek könnyedén hozzáadhatók)

#### 6. Statisztikák
- Animált számlálók
- Impozáns adatok (parkolóhelyek, ügyfelek, stb.)

#### 7. Kapcsolat
- Kapcsolati információk kártyákban
- Interaktív kapcsolati űrlap
- Modern form dizájn floating label-ekkel

#### 8. Footer
- Gyors linkek
- Social media gombok
- Hírlevél feliratkozás

### 🎭 Interaktív Funkciók (JavaScript)

- **Smooth Scrolling**: Simán görget a szekciókhoz
- **Sticky Navigation**: A navigációs sáv mindig látható
- **Active Link Highlighting**: Az aktuális szekció kiemelt a menüben
- **Hamburger Menu**: Mobilon működő menü
- **Animated Counters**: A statisztikák számok animálódnak
- **Scroll to Top**: Vissza az oldal tetejére gomb
- **Form Validation**: Űrlap ellenőrzés és visszajelzés
- **Card Hover Effects**: Interaktív 3D tilt effektek
- **Fade-in Animations**: Elemek fokozatos megjelenése scroll-ra

### 🎨 Vizuális Effektek

- **Gradients**: Modern színátmenetek
- **Shadows**: Többszintű árnyékok mélységért
- **Transforms**: Smooth hover animációk
- **Transitions**: Folyékony átmenetek minden interakción
- **Backdrop Blur**: Glassmorphism a navigációban

## 🚀 Használat

### Azonnal Használható
Egyszerűen nyissa meg az `index.html` fájlt bármely modern böngészőben:

```bash
# Ha van Python telepítve:
python -m http.server 8000

# Vagy Node.js-szel:
npx serve .

# Vagy csak nyissa meg közvetlenül:
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux
```

Majd nyissa meg a böngészőben: `http://localhost:8000`

## 📝 Testreszabás

### Kapcsolati Információk Módosítása

Szerkessze az `index.html` fájlt és keresse meg a `#kapcsolat` szekciót:

```html
<p>+36 XX XXX XXXX</p>  <!-- Cserélje ki a saját telefonszámára -->
<p>info@kamionparkolo.hu</p>  <!-- Email cím -->
<p>XXXX Város</p>  <!-- Cím -->
<p>Példa utca 123.</p>
```

### Színek Testreszabása

A `style.css` fájl elején található CSS változók:

```css
:root {
    --primary-color: #2563eb;    /* Fő szín */
    --secondary-color: #f59e0b;  /* Kiegészítő szín */
    --accent-color: #10b981;     /* Hangsúly szín */
}
```

### Képek Hozzáadása

A galéria szekció placeholdereit cserélje le valódi képekre:

```html
<!-- Helyettesítse ezt: -->
<div class="gallery-placeholder">
    <i class="fas fa-warehouse"></i>
    <p>Parkoló Terület</p>
</div>

<!-- Ezzel: -->
<img src="images/parking-area.jpg" alt="Parkoló Terület">
```

### Árak Módosítása

Az `index.html` fájlban keresse meg a `#arak` szekciót:

```html
<span class="amount">5,000</span>  <!-- Módosítsa az árat -->
```

## 🔧 Technológiák

- **HTML5**: Szemantikus és modern markup
- **CSS3**: 
  - Flexbox & Grid Layout
  - CSS Variables
  - Animations & Transitions
  - Media Queries (Responsive)
- **JavaScript (Vanilla)**: 
  - ES6+ Features
  - Intersection Observer API
  - DOM Manipulation
  - Event Listeners
- **Font Awesome 6**: Ikonok
- **Google Fonts**: Poppins betűtípus

## 📦 Fájl Struktúra

```
/workspace/
├── index.html      # Fő HTML fájl
├── style.css       # Stílusok és dizájn
├── script.js       # Interaktív funkciók
└── README.md       # Dokumentáció
```

## 🌟 Kiemelkedő Tulajdonságok

✅ **Nincs függőség**: Egyetlen külső library sem szükséges (csak CDN-ről betöltött fontok és ikonok)  
✅ **Gyors betöltés**: Optimalizált kód minimális fájlmérettel  
✅ **SEO-barát**: Szemantikus HTML, meta tagek, jó struktúra  
✅ **Akadálymentesített**: ARIA labels és szemantikus markup  
✅ **Cross-browser**: Működik minden modern böngészőben  
✅ **Könnyű testreszabás**: Jól strukturált és kommentált kód  

## 🎯 Következő Lépések

1. **Valódi tartalom hozzáadása**:
   - Cserélje a placeholder szövegeket valódi információkra
   - Adjon hozzá valódi képeket a galériához
   - Frissítse a kapcsolati információkat

2. **Backend integráció** (opcionális):
   - Kapcsolja be az űrlap küldést email szolgáltatáshoz
   - Adjon hozzá foglalási rendszert
   - Integrálja payment gateway-t

3. **SEO optimalizálás**:
   - Adjon hozzá Open Graph meta tageket
   - Készítsen XML sitemap-et
   - Implementáljon strukturált adatokat (Schema.org)

4. **Performance**:
   - Optimalizálja a képeket (WebP formátum)
   - Implementáljon lazy loading-ot
   - Használjon CDN-t a statikus fájlokhoz

## 📞 Támogatás

Ha bármilyen kérdése van a weboldallal kapcsolatban, vagy segítségre van szüksége a testreszabásban, keressen bizalommal!

---

**Fejlesztve modern webes technológiákkal** 🚀  
**© 2024 Kamion Parkoló - Minden jog fenntartva**
