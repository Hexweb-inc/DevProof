# DevProof — « Apprends, code, prouve tes skills. »

**DevProof** est une plateforme open source pour aider les développeurs
juniors et autodidactes à prouver leurs compétences en contribuant à des
défis réels et en soumettant des PRs publiques.

## Objectif
Donner un environnement guidé et gamifié pour apprendre le workflow open
source, travailler en équipe, et exposer des preuves concrètes (PR, issues,
badges) sur un profil public.

## MVP
- Auth GitHub
- Dashboard listant les défis
- Participation via PR GitHub
- Points automatiques pour contributions validées
- Profil public avec score & badges
- Panel admin pour CRUD des défis


## Stack recommandée (MVP)
- Frontend : React + Vite, TailwindCSS, shadcn/ui
- Backend : Node.js + Express, Prisma, PostgreSQL
- Auth : GitHub OAuth, JWT
- CI/CD : GitHub Actions
- Dev : Docker, Docker Compose
## Structure du repo (résumé)
``` bash
/
├─ README.md
├─ CONTRIBUTING.md
├─ .github/
│  ├─ ISSUE_TEMPLATE/
│  ├─ PULL_REQUEST_TEMPLATE.md
│  ├─ workflows/ci.yml
├─ apps/
│  ├─ web/ → Frontend React + Vite
│  └─ api/ → Backend Node + Express
├─ infra/
│  ├─ docker/
│  └─ autres fichiers infra (compose, scripts)
├─ prisma/ → Modélisation base de données
└─ .env.example 
```

## Installation locale (dev)
Voir `infra/docker/README.md` pour la configuration Docker.

## Roadmap rapide
Phase 1 (MVP): Auth GitHub, dashboard, participation PR, scoring. (voir
[`ROADMAP.md`](ROADMAP.md))
## 📬 Contact

Pour toute question ou aide, vous pouvez :  

- Ouvrir une issue avec le label `question` sur GitHub.  
- Nous contacter via **GitHub Discussions**.  
- Rejoindre notre serveur **Discord** pour discuter en temps réel, poser vos questions, ou participer à la communauté :  
  [👉 Rejoindre le Discord Hexweb](https://discord.gg/AhqwpuGpDT)  

---

## 🤝 Comment contribuer

Pour participer au projet DevProof, suivez ces 4 étapes simples :

1. **Lire le guide**  
   Consultez le fichier [`CONTRIBUTING.md`](CONTRIBUTING.md) pour comprendre les règles et bonnes pratiques du projet.

2. **Forker le dépôt**  
   Créez votre propre copie du dépôt sur GitHub pour pouvoir travailler dessus.

3. **Coder votre fonctionnalité ou corriger un bug**  
   - Créez une branche dédiée :  
     ```bash
     git checkout -b feat/<votre-nom>-<tâche>
     ```
   - Développez votre fonctionnalité ou corrigez le problème.

4. **Ouvrir une Pull Request (PR)**  
   - Soumettez votre code via une PR en respectant le template fourni.  
   - Attendez la revue de vos pairs et apportez les corrections si nécessaire.

💡 Astuce : commencez par une issue **good first issue** pour vous familiariser avec le projet.


![License](https://img.shields.io/badge/license-DevProof--Business--License-blue)

## 💪 Contributeurs

Merci à toutes les personnes qui participent au projet 💜  

[![Contributors](https://img.shields.io/github/contributors/HexwebAgency/devproof?style=for-the-badge)](https://github.com/HexwebAgency/devproof/graphs/contributors)
