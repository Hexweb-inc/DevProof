
# 📝 CONTRIBUTING to DevProof

Merci de contribuer à **DevProof** !  
Ce document explique pas-à-pas comment démarrer, depuis la configuration locale jusqu'à l'ouverture d'une PR et le feedback.

---

## 1️⃣ Choisir une issue

- Filtrez par labels `good first issue` ou `help wanted`.  
- Si vous êtes débutant : cherchez le label `onboarding`.  

---

## 2️⃣ Fork & clonage

1. Forkez le dépôt sur GitHub.  
2. Clonez votre fork en local :  
   ```bash
   git clone git@github.com:<votre-login>/devproof.git
   cd devproof
   ```
3. Ajoutez le remote upstream pour suivre le repo officiel :
    ```bash
    git remote add upstream git@github.com:hexweb/devproof.git
    ```

## 3️⃣ Branching

Créez une branche :
```bash
feat/<prenom>-<court-descriptif>
fix/<prenom>-<ticket>
```

Respectez le format de commit :
```bash
type(scope): courte description
```

Exemple :
```bash
feat(api): add challenge endpoints
```
## 4️⃣ Développement local

Utilisez Docker Compose :
```bash
docker-compose -f infra/docker/docker-compose.dev.yml up
```

Configurez vos variables d'environnement dans .env

⚠️ **Ne jamais committer `.env`**

## 5️⃣ Tests

Avant d’ouvrir votre PR :
```bash
npm run test && npm run lint
```
## 6️⃣ Ouvrir une Pull Request (PR)

- Base : main

- Titre clair et référencez l’issue correspondante : Closes #123

- Remplissez le template PR fourni

## 7️⃣ Recevoir du feedback

- Répondez aux commentaires et poussez des commits de correction si nécessaire.

- Les tests CI seront exécutés automatiquement.

## 8️⃣ Après merge

Supprimez votre branche locale et distante :
```bash
git branch -d <branch>
git push origin --delete <branch>
```

Récupérez les derniers changements :
```bash
git fetch upstream
git rebase upstream/main
```
## 🧑‍🏫 Conseils pour reviewers (mentors)

- Soyez pédagogiques : expliquez pourquoi vous demandez un changement.

- Proposez des liens vers la documentation et de courts exemples.

## 🔗 Liens utiles

- [Code style, ESLint, Prettier](#)  
- [Guide Git pour débutants](#)  

💡 Astuce : commencez par une issue **good first issue** pour vous familiariser avec le projet.


