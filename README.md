# Kamion Parkoló Weboldal

Egy modern, reszponzív weboldal kamion parkoló szolgáltatások bemutatására.

## Funkciók

- 🎨 Modern, letisztult design
- 📱 Teljes mértékben reszponzív (mobil, tablet, desktop)
- ⚡ Gyors betöltés és sima animációk
- 🎯 Interaktív navigáció és smooth scroll
- 📧 Kapcsolati űrlap
- 💳 Árazási információk
- ✨ Animált statisztikák
- 🌙 Modern UI/UX elemek

## Fájlok

- `index.html` - Fő HTML struktúra
- `styles.css` - CSS stílusok és reszponzív design
- `script.js` - JavaScript funkcionalitás

## Használat

Egyszerűen nyissa meg az `index.html` fájlt egy böngészőben. Nincs szükség telepítésre vagy build folyamatra.

### Lokális szerver futtatása (opcionális)

Ha szeretne egy lokális szervert futtatni:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
```

Ezután nyissa meg a böngészőben: `http://localhost:8000`

## Testreszabás

### Színek módosítása

A `styles.css` fájlban módosíthatja a CSS változókat:

```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --accent-color: #f59e0b;
    /* ... */
}
```

### Tartalom módosítása

A szövegeket közvetlenül az `index.html` fájlban módosíthatja.

### Kapcsolati űrlap

A kapcsolati űrlap jelenleg egy egyszerű alert üzenetet jelenít meg. Szerveroldali integrációhoz módosítsa a `script.js` fájlban a form submit kezelőt.

## Böngésző támogatás

- Chrome (legújabb)
- Firefox (legújabb)
- Safari (legújabb)
- Edge (legújabb)

## Licenc

Ez a projekt szabadon használható és módosítható.
