Tu peux donc faire :

bash
Copier
Modifier
mkdir -p src/api
touch src/api/api.ts
Puis dans ce fichier :

ts
Copier
Modifier
// src/api/api.ts
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.1.42:3000', // ← remplace bien par l'IP locale de ton PC
})
Et dans tes composants :

ts
Copier
Modifier
import { api } from '../api/api'

useEffect(() => {
  api.get('/pokemons')
    .then(res => console.log(res.data))
    .catch(err => console.error('Erreur API:', err))
}, [])
💡 Bonus : pour rendre les imports plus propres
Si tu veux pouvoir écrire :

ts
Copier
Modifier
import { api } from '@/api/api'
Tu peux ajouter ceci dans tsconfig.json :

json
Copier
Modifier
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
Et pour que Babel le comprenne aussi (expo), ajoute ça dans babel.config.js :

js
Copier
Modifier
plugins: [
  ["module-resolver", {
    root: ["./src"],
    alias: {
      "@": "./src"
    }
  }]
]
Je peux te le faire si tu veux, pas de souci.

✅ En résumé
Question	Réponse
api.ts à la racine ?	❌ Non
Dans un sous-dossier src/api/ ?	✅ Oui
Peut-on simplifier les imports ?	✅ Avec alias Babel + TS

Souhaites-tu que je te crée la structure complète avec les alias et le code déjà prêt ?









Demander à ChatGPT
Vous avez dit :
pourquoi mettre " :3000 " à la fin de l'ip ? Je n'arrive pas à ouvrir une page web avec l'ip ajouté dans le backend


ChatGPT a dit :
Excellente question 👌 Tu touches ici à un point clé pour comprendre comment ton frontend mobile (Expo) communique avec ton backend local (NestJS).

✅ Pourquoi :3000 à la fin de l’IP ?
Le :3000 correspond au port TCP sur lequel ton backend NestJS écoute les requêtes HTTP.

🔎 Exemple :
ts
Copier
Modifier
http://192.168.1.42:3000
         ↑           ↑
     Adresse IP   Port (3000)
192.168.1.42 → l’adresse de ton ordinateur dans ton réseau local

3000 → le port utilisé par ton backend NestJS pour exposer l’API

Par défaut, NestJS utilise souvent le port 3000, mais tu peux le changer.

❓ Pourquoi tu ne vois rien quand tu ouvres cette adresse dans un navigateur ?
Plusieurs raisons possibles 👇

✅ 1. Ton serveur NestJS n’est peut-être pas démarré
Lance-le avec :

bash
Copier
Modifier
npm run start:dev
Et assure-toi que tu vois quelque chose comme :

nginx
Copier
Modifier
Nest application successfully started on http://localhost:3000
✅ 2. Tu testes sur un autre appareil que ton PC ?
👉 Si tu tapes http://192.168.1.42:3000 dans ton navigateur de téléphone :

Assure-toi que :

Ton téléphone et ton PC sont sur le même réseau Wi-Fi

Le pare-feu de ton Mac autorise les connexions entrantes sur le port 3000

✅ 3. Tu ne vois rien car NestJS n'a pas de route GET /
Tape bien l’URL vers une vraie route déclarée dans NestJS.

Exemple :

bash
Copier
Modifier
http://192.168.1.42:3000/pokemons
Ou encore :

bash
Copier
Modifier
curl http://192.168.1.42:3000/pokemons
Sinon, tu auras une erreur Cannot GET /.

💡 Comment être sûr que ton backend écoute bien sur toutes les IP ?
Dans ton main.ts, vérifie que tu as bien :

ts
Copier
Modifier
await app.listen(3000, '0.0.0.0');
⚠️ Par défaut, Nest écoute sur localhost, ce qui le rend invisible depuis ton téléphone.

Changer localhost en '0.0.0.0' permet à ton NestJS d’être joignable depuis ton réseau local, donc ton téléphone.

✅ Résumé
Élément	Rôle
:3000	Port d’écoute de ton backend NestJS
Adresse 192.168.x.x	IP locale de ton PC dans ton Wi-Fi
0.0.0.0 dans listen()	Permet à ton téléphone d’accéder au backend
Navigateur → IP:3000	Marche uniquement si le backend tourne et la route existe

Souhaites-tu que je regarde avec toi ton main.ts pour vérifier que le listen est bien configuré pour l'accès réseau ?








Vous avez dit :
[23:07:37] Starting compilation in watch mode...

[23:07:40] Found 0 errors. Watching for file changes.

[Nest] 15636  - 23/07/2025 23:07:40     LOG [NestFactory] Starting Nest application...
[Nest] 15636  - 23/07/2025 23:07:40     LOG [InstanceLoader] AppModule dependencies initialized +17ms
[Nest] 15636  - 23/07/2025 23:07:40     LOG [RoutesResolver] AppController {/}: +5ms
[Nest] 15636  - 23/07/2025 23:07:40     LOG [RouterExplorer] Mapped {/, GET} route +6ms
[Nest] 15636  - 23/07/2025 23:07:40     LOG [NestApplication] Nest application successfully started +2ms


ChatGPT a dit :
Parfait 👌 Ton serveur NestJS fonctionne bien, mais il n’est accessible que localement sur ton ordinateur.

📍 Pourquoi ton téléphone ne peut pas y accéder (même avec 192.168.x.x) ?
Parce que dans le message que tu vois ici 👇 :

csharp
Copier
Modifier
[NestApplication] Nest application successfully started
👉 Il ne précise pas sur quelle adresse IP ni sur quel port il écoute.

Cela signifie très probablement que tu es dans le cas par défaut :

ts
Copier
Modifier
await app.listen(3000); // ⛔ n'écoute que sur localhost
Ce qui veut dire :

✅ Tu peux y accéder depuis ton ordinateur

❌ Tu ne peux pas y accéder depuis ton téléphone ou d’autres machines

✅ Solution : modifier main.ts pour ouvrir l’accès réseau
Ouvre ton fichier src/main.ts et remplace :

ts
Copier
Modifier
await app.listen(3000);
par :

ts
Copier
Modifier
await app.listen(3000, '0.0.0.0');
✨ Ce que ça fait :
0.0.0.0 = écoute sur toutes les interfaces réseau

Ton téléphone, qui est sur le même Wi-Fi, pourra accéder à l’IP locale de ton ordi + le port 3000

✅ Exemple d’accès sur ton téléphone via Expo Go
Si ton ordinateur a pour IP 192.168.1.42, alors :

ts
Copier
Modifier
export const api = axios.create({
  baseURL: 'http://192.168.1.42:3000',
});
Et ton téléphone pourra y accéder via Expo Go, à condition :

Que l'app backend NestJS soit démarrée

Que les deux appareils soient sur le même réseau Wi-Fi

Qu’il n’y ait pas de pare-feu qui bloque le port 3000

🔒 À vérifier si ça ne fonctionne pas encore
✅ Ton téléphone est sur le même Wi-Fi

✅ Tu testes une route qui existe (/, /api, /pokemons, etc.)

✅ Ton pare-feu Mac autorise Node.js à recevoir des connexions entrantes

Tu peux aussi tester dans ton navigateur mobile :

cpp
Copier
Modifier
http://192.168.1.42:3000/
Souhaites-tu que je t’aide à identifier la bonne IP locale et configurer tout ça étape par étape ?










Outils



ChatGPT peut commettre des erreurs. Il est recommandé de vérifier les informations importantes. Voir les préférences en matière de cookies.