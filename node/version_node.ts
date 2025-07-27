2. Tu utilises nvm, donc tu peux jongler entre les versions
Tu peux avoir plusieurs versions de Node installées sur ta machine et passer de l'une à l'autre selon le projet.

Exemple :

bash
Copier
Modifier
nvm install 22         # installer Node 22 (nouveau projet ?)
nvm install 20         # installer Node 20 (stable)
nvm use 20             # utiliser la 20 pour ce projet
nvm use 22             # repasser à la 22 ailleurs