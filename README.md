# Mise en oeuvre d'un exemple de chat en websocket

Installez un serveur web.

Copiez index.html à la racine de votre site.

Allez dans le sous-répertoire serveur puis installez librairies php requises:
`composer install`

Démarrez votre serveur PHP webSocket:
`php server.php`

Ce serveur écoutera en permanence sur le port 8080.

Lancez 2 navigateurs pointant vers la racine de votre site.

Chaque message envoyé depuis une fenêtre de chat sera répercutée via le serveur webSocket dans les autres fenêtres de chat du navigateur.


