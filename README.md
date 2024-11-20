# Mise en oeuvre d'un exemple de chat en websocket

Installez un serveur web.

Copiez index.html à la racine de votre site.

```bash
npm install
```

Démarrez votre serveur JS webSocket:
`node serveur/server`

Ce serveur écoutera en permanence sur le port 8080.

Lancez 2 navigateurs pointant vers la racine de votre site.

Chaque message envoyé depuis une fenêtre de chat sera répercutée via le serveur webSocket dans les autres fenêtres de chat du navigateur.


