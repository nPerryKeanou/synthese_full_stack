#1 Qu'est ce qu'un bundle ?

Un bundle, c'est le fait de regrouper plusieurs fichiers sources (code, js, css,...) en un seul fichier ou un nombre de fichiers réduits.

Pourquoi ? 

* Pour réduire le nombre de fichier à charger quand tu ouvres une application web/mobile, ce qui accélère le temps de  chargement.
* Pour optimiser le code(minification, suppresion des parties inutiles, ect.).
* Pour que tout soit facile à déployer en production.

#2 Comment ça marche ?

Tu écris ton code dans plusieurs fichiers séparés. Un outil appelé bundler (comme webpack, metre, parcel) lit tous ces fichiers. Il combien tout en un fichier unique ( ou quelques fichiers). Ce fichier sera envoyé au navigateur ou à l'appareil mobile.

