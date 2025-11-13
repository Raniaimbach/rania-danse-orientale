Projet : Site statique pour danseuse (danse orientale)

Contenu : pages statiques prêtes à personnaliser : `index.html`, `about.html`, `classes.html`, `gallery.html`, `contact.html`, CSS et dossier `assets`.

Aperçu local :
1. Ouvrez un terminal dans le dossier du projet.
2. Lancez un serveur HTTP simple (Python 3) :

```bash
python3 -m http.server 8000
```

3. Ouvrez dans un navigateur : http://localhost:8000

Personnalisation rapide :
- Remplacez les textes dans les fichiers HTML.
- Mettez vos images dans `assets/images/` et conservez/renommez `hero.jpg`.
- Pour un formulaire réel, utilisez Formspree, Netlify Forms ou ajoutez un backend.

Besoin d'aide ? Dites-moi quel style, quelles couleurs, ou envoyez des photos et je les intégrerai.

Remplacer le logo :
- J'ai placé un logo placeholder en `assets/images/logo.svg` (remplacé ensuite par `logo.png` si vous fournissez une image raster).
- Je ne peux pas télécharger directement depuis votre lien Google Drive. Pour remplacer le logo par votre image depuis `https://share.google/udG3BHNSTmM1deSv4` :
	1. Ouvrez votre lien Google Drive dans le navigateur et téléchargez l'image sur votre ordinateur.
	2. Copiez le fichier téléchargé dans `assets/images/` et renommez-le `logo.svg` (ou `logo.png`) pour remplacer l'actuel.
	3. Si vous utilisez `logo.png`, modifiez le `src` dans les fichiers HTML ou gardez le même nom `logo.svg` en remplaçant le contenu.

Si vous voulez, vous pouvez me donner le fichier image ici et je l'intégrerai pour vous.
 
Notes supplémentaires :
- J'ai ajouté une vidéo en noir et blanc : `assets/videos/video_bw.mp4`. Elle est affichée sur `index.html` et `gallery.html`.
- J'ai généré des pages en anglais et en allemand : utilisez `index.en.html` / `index.de.html` et les pages correspondantes (`about.en.html`, `about.de.html`, etc.).
- Le favicon existe en SVG et PNG 32x32 (`assets/images/favicon.svg`, `assets/images/favicon-32.png`). Vous avez demandé une favicon 3x plus grande : j'ai généré une 96x96 (`assets/images/favicon-96.png`) si vous le souhaitez je peux aussi ajouter un `favicon.ico` multi-résolution.