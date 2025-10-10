# CONTRIBUTING to DevProof
Merci de contribuer ! Ce document explique pas-à-pas comment démarrer, depuis
la configuration locale jusqu'à la PR.
## 1) Choisir une issue
- Filtrez par labels `good first issue` ou `help wanted`.
- Si vous êtes débutant : cherchez `onboarding`.
## 2) Fork & clonage
1. Fork du repo
2. `git clone git@github.com:<votre-login>/devproof.git`
2
3. `git remote add upstream git@github.com:hexweb/devproof.git`
## 3) Branching
- Branche : `feat/<prenom>-<court-descriptif>` ou `fix/<prenom>-<ticket>`
- Respectez le format de commit : `type(scope): courte description` (ex:
`feat(api): add challenge endpoints`)
## 4) Développement local
- Utilisez Docker Compose (voir `infra/docker/docker-compose.dev.yml`)
- Variables d'environnement dans `.env` (ne jamais committer `.env`)
## 5) Tests
- Lancer tests unitaires et lint avant PR : `npm run test && npm run lint`
## 6) Ouvrir une Pull Request
- Base : `main`
- Titre clair + référencer l'issue `Closes #123`
- Remplir le template PR
## 7) Recevoir du feedback
- Répondez aux commentaires, poussez des commits de correction
- Tests CI seront exécutés automatiquement
## 8) Après merge
- Supprimez votre branche locale et distante
- Récupérez les derniers changements : `git fetch upstream && git rebase
upstream/main`
## Conseils pour reviewers (mentors)
- Soyez pédagogiques : expliquez pourquoi vous demandez un changement
- Proposez des liens vers la doc et de courts exemples
## Liens utiles
- Code style, eslint, prettier
- Guide Git pour débutants
