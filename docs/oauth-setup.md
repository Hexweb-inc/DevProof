# Configuration GitHub OAuth

## Vue d'ensemble

DevProof utilise GitHub OAuth pour l'authentification des utilisateurs. Ce guide explique comment configurer l'application OAuth GitHub pour le développement local.

---

## 1. Créer l'application OAuth sur GitHub

### Étapes

1. Accéder aux paramètres développeur GitHub :

   - Aller sur [GitHub Developer Settings](https://github.com/settings/apps)
   - Cliquer sur **"OAuth Apps"**
   - Cliquer sur **"New OAuth App"**

2. Remplir le formulaire :

   - **Application name** : `DevProof Local Dev` (par exemple)
   - **Homepage URL** : `http://localhost:3000`(pour l'utilisation en local, sinon URL en production de l'application (ex: https://devproof.com))
   - **Application description** : _(optionnel)_ Description de votre application (ex: Application avec dashboard affichant les contributions des développeurs à un projet open source)
   - **Authorization callback URL** : `http://localhost:3000/auth/github/callback` (en production, remplacer localhost par nom de domaine)

3. Cliquer sur **"Register application"**

4. Récupérer les credentials :

   - **Client ID** : Affiché directement sur la page
   - **Client Secret** : Cliquer sur **"Generate a new client secret"**

   ⚠️ **Important** : Copiez le Client Secret immédiatement, il ne sera plus affiché par la suite !

---

## 2. Configuration locale

### Créer le fichier d'environnement

À la racine du projet backend, créer un fichier `.env` à partir du template :

```bash
cp .env.example .env
```

**Ou manuellement :** dupliquer le fichier `.env.example` et le renommer en `.env`

### Remplir les variables d'environnement

Ouvrir le fichier `.env` et remplacer les valeurs placeholder par vos credentials GitHub :

**Avant (dans `.env.example`) :**

GITHUB_CLIENT_ID=your_client_id_here
GITHUB_CLIENT_SECRET=your_client_secret_here
GITHUB_CALLBACK_URL=http://localhost:3000/auth/github/callback

**Après (dans `.env`) :**
GITHUB_CLIENT_ID=Iv1.a629f31a79c4b3e2 (remplacer par votre propre client ID)
GITHUB_CLIENT_SECRET=9f8e7d6c5b4a3210fedcba9876543210abcdef01 (remplacer par votre propre secret)
GITHUB_CALLBACK_URL=http://localhost:3000/auth/github/callback

### Comprendre les deux fichiers

| `.env.example` | Template partagé | Noms des variables + valeurs d'exemple | ✅ À committer |
| `.env` | Configuration locale | Vos vraies credentials | ❌ Ne JAMAIS committer |

Le fichier `.env` est automatiquement chargé au démarrage de l'application et permet d'accéder aux variables via `process.env.GITHUB_CLIENT_ID` dans le code.

---

## 3. Sécurité

### ⚠️ Règles importantes

- ✅ **Committer uniquement** `.env.example`
- ❌ **Ne JAMAIS committer** `.env`
- 🔒 Partager les credentials via un gestionnaire de mots de passe sécurisé
- 🔄 Utiliser des credentials différents pour dev / staging / production

### Vérifier `.gitignore`

S'assurer que `.gitignore` contient :
.env
.env.local
\*.env

### Si un secret est compromis

1. Aller dans les settings de l'OAuth App sur GitHub
2. Révoquer l'ancien Client Secret
3. Générer un nouveau Client Secret
4. Mettre à jour le fichier `.env`

## 4. Troubleshooting

### L'authentification ne fonctionne pas

- Vérifier que le backend est démarré sur le port 3000
- Vérifier que les credentials dans `.env` sont corrects

### Erreur "redirect_uri_mismatch"

L'URL de callback ne correspond pas. Vérifier que :

- `GITHUB_CALLBACK_URL` dans `.env` est identique à celle configurée sur GitHub
- Il n'y a pas d'espace ou de `/` en trop
