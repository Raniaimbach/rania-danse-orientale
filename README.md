# RANIA — Site professionnel de danse orientale

Site web trilingue (DE/FR/EN) pour cours de danse orientale à Lucerne.

## ✨ Fonctionnalités

- **Multilingue** : Allemand (principal), Français, Anglais avec hreflang SEO
- **Système de réservation** : Calendly intégré pour prises de rendez-vous
- **Tarifs détaillés** : Cours collectifs (CHF 25), cours privés (CHF 80), ateliers (CHF 45)
- **Témoignages clients** : Avis 5★ avec avatars et citations
- **FAQ interactive** : Section dépliable avec réponses aux questions courantes
- **Stats de crédibilité** : 8+ ans d'expérience, 150+ élèves, 20+ spectacles
- **Galerie multimédia** : Photos et vidéos de performances
- **SEO optimisé** : Meta descriptions, mots-clés locaux (Lucerne), structure sémantique
- **Footer professionnel** : Navigation, réseaux sociaux, copyright
- **Design moderne** : Palette Corail Sunset, animations fluides, responsive mobile

## 📁 Structure

```
mon-siteweb/
├── index.html          # Page d'accueil (DE)
├── index.fr.html       # Page d'accueil (FR)
├── index.en.html       # Page d'accueil (EN)
├── about.html          # À propos (FR)
├── classes.html        # Cours & tarifs (FR)
├── gallery.html        # Galerie photos/vidéos
├── contact.html        # Formulaire de contact
├── css/
│   └── styles.css      # Styles complets (pricing, FAQ, testimonials)
└── assets/
    ├── images/         # Photos, logo, favicon
    └── videos/         # Vidéo de démonstration
```

## 🚀 Lancer le site localement

1. Ouvrez un terminal dans le dossier du projet
2. Lancez un serveur HTTP simple :

```bash
python3 -m http.server 8000
```

3. Ouvrez http://localhost:8000 dans votre navigateur

## 🌐 Site en ligne

**URL** : https://raniaimbach.github.io/rania-danse-orientale/

Le site est automatiquement déployé sur GitHub Pages à chaque push.

## 🎨 Personnalisation

### Textes et contenu
- Modifiez directement les fichiers HTML pour adapter les textes
- Les témoignages sont dans les sections `.testimonials-section`
- Les tarifs sont dans `.pricing-cards` (classes.html)
- La FAQ est dans `.faq-section` avec balises `<details>`

### Images
- Placez vos photos dans `assets/images/`
- Le hero principal : `hero.jpg`
- Logo : `logo.svg` ou `logo.png`
- Favicon : `favicon.svg`, `favicon-32.png`, `favicon-96.png`

### Réservations Calendly
- Lien actuel : `https://calendly.com/rania_imbach/new-meeting`
- Pour changer : remplacez l'URL dans les widgets Calendly de chaque page

### Formulaire de contact
- Actuellement : `mailto:` simple
- Recommandé : Formspree.io (gratuit, sans backend)
  1. Créez un compte sur https://formspree.io
  2. Créez un formulaire et copiez l'endpoint
  3. Remplacez `action="mailto:..."` par `action="https://formspree.io/f/VOTRE_ID"`

### Réseaux sociaux
- Footer : remplacez `https://instagram.com/votre_compte` et `https://facebook.com/votre_page`
- Actuellement : liens placeholders à personnaliser

## 📊 Contenu professionnel ajouté

✅ **Tarifs détaillés** : 3 formules (Collectif CHF 25, Privé CHF 80, Ateliers CHF 45)  
✅ **Horaires** : Lun 18h, Mer 17h/19h, Ven 18h  
✅ **Témoignages** : 3 avis clients 5★ par page  
✅ **FAQ** : 5 questions fréquentes dépliables  
✅ **Stats** : 8+ ans expérience, 150+ élèves, 20+ spectacles  
✅ **SEO** : Meta descriptions optimisées (DE/FR/EN)  
✅ **Footer** : Navigation + réseaux sociaux  

## 🛠️ Technologies

- HTML5 sémantique
- CSS3 (Grid, Flexbox, animations)
- JavaScript vanilla (navigation mobile)
- Calendly (réservations)
- GitHub Pages (hébergement)

## 📝 Notes

- **Vidéo** : `assets/videos/video_bw.mp4` affichée sur homepage et galerie
- **Multilingue** : Pages traduites en DE/FR/EN avec hreflang
- **Favicon** : Disponible en SVG, PNG 32x32, PNG 96x96
- **Design** : Palette Corail Sunset (#ff6b6b), Cormorant Garamond + Montserrat

---

**Dernière mise à jour** : Novembre 2025  
**Développeur** : Site optimisé avec GitHub Copilot