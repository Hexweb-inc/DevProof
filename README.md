# 💡 DevProof — Apprends, code, prouve tes skills

**DevProof** est **la plateforme open source ultime** pour les développeurs juniors et autodidactes qui veulent **montrer leurs compétences concrètement** : relever des défis réels, collaborer sur GitHub et créer un profil public qui prouve ce qu’ils savent faire.

---

## 🎯 Pourquoi DevProof ?

Vous avez des projets personnels mais vous ne savez pas comment les valoriser ?  
Vous voulez que vos compétences soient visibles par des recruteurs, mentors ou clients ?  

DevProof est conçu pour vous :  

- 🔹 **Relever des défis techniques réels** issus de vrais projets open source  
- 🔹 **Soumettre vos solutions via PR GitHub** et obtenir des validations  
- 🔹 **Gagner des points et badges** pour chaque contribution validée  
- 🔹 **Afficher vos compétences sur un profil public**, consultable par tous  
- 🔹 **Rejoindre une communauté de développeurs motivés** pour progresser ensemble

> DevProof transforme votre apprentissage en preuves concrètes et visibles.  

---

## 🧱 MVP — Fonctionnalités clés

- 🔑 Authentification via **GitHub OAuth**  
- 📋 **Dashboard** listant tous les défis disponibles  
- 💻 Participation aux défis via **Pull Requests GitHub**  
- ⭐ Attribution automatique de **points et badges** pour vos contributions  
- 🏅 **Profil public** avec score et badges  
- 🛠 **Panel admin** pour créer, modifier et gérer les défis  

---

## ⚙️ Stack technique recommandée

| Côté | Tech | Description |
|------|------|-------------|
| Frontend | React + Vite, TailwindCSS, shadcn/ui | Interface moderne et réactive |
| Backend | Node.js + Express, Prisma, PostgreSQL | API REST robuste et scalable |
| Auth | GitHub OAuth + JWT | Sécurisation des accès |
| DevOps | Docker, Docker Compose | Environnement unifié pour tous |
| CI/CD | GitHub Actions | Tests, lint et déploiement automatique |

---

## 🏗 Structure du projet

```bash
/
├─ README.md
├─ CONTRIBUTING.md
├─ .github/
│  ├─ ISSUE_TEMPLATE/
│  ├─ PULL_REQUEST_TEMPLATE.md
│  └─ workflows/ci.yml
├─ apps/
│  ├─ web/ → Frontend React + Vite
│  └─ api/ → Backend Node + Express
├─ infra/
│  ├─ docker/
│  └─ scripts et fichiers d`infra
├─ prisma/ → Modélisation base de données
└─ .env.example
```


## 🖥 Installation locale (dev)

Pour lancer **DevProof** en local :  

1. Cloner le dépôt et installer Docker  
2. Suivre le guide complet dans :  
   [`infra/docker/README.md`](infra/docker/README.md)  

> Tout est prêt pour que vous puissiez commencer à coder en quelques minutes !

---

## 🚀 Roadmap rapide

| Phase | Contenu | Statut |
|-------|---------|--------|
| Phase 1 — MVP | Auth GitHub, dashboard, PR, scoring | 🟢 En cours |
| Phase 2 — Profil & badges | Profil public + badges automatiques | ⚪ À venir |
| Phase 3 — Gamification avancée | Leaderboard, niveaux, missions | ⚪ À venir |
| Phase 4 — API & intégrations | API publique pour stats et outils externes | ⚪ À venir |

---

## 🤝 Comment contribuer

Pour participer au projet **DevProof**, suivez ces 4 étapes simples :  

1. **Lire le guide**  
   Consultez [`CONTRIBUTING.md`](CONTRIBUTING.md) pour comprendre les règles et bonnes pratiques.

2. **Forker le dépôt**  
   Créez votre copie personnelle du projet pour y travailler.

3. **Coder votre fonctionnalité ou corriger un bug**  
   ```bash
   git checkout -b feat/<votre-nom>-<tâche>

## 🔄 Ouvrir une Pull Request (PR)

Soumettez vos modifications en respectant le template fourni et attendez la revue de vos pairs.

💡 Astuce : commencez par une issue **good first issue** pour vous familiariser avec le projet.

---

## 📬 Contact

Pour toute question ou aide :  

- 🐛 Ouvrir une issue `question` sur GitHub  
- 💬 Participer aux **GitHub Discussions**  
- 🎧 Rejoindre notre serveur **Discord DevProof** pour discuter en direct et échanger avec la communauté :  
  [👉 Rejoindre le Discord Hexweb](https://discord.gg/AhqwpuGpDT)

---

## 💪 Contributeurs

Merci à toutes les personnes qui participent au projet 💜  

[![Contributors](https://img.shields.io/github/contributors/HexwebAgency/devproof?style=for-the-badge)](https://github.com/HexwebAgency/devproof/graphs/contributors)

---

## 🧠 Pourquoi contribuer ?

- Apprenez à travailler sur une **stack fullstack moderne**  
- Collaborez sur de **vrais projets open source**  
- Améliorez vos compétences **GitHub, PRs et workflow CI/CD**  
- Gagnez des **badges et preuves visibles** pour votre portfolio  

> DevProof, c’est plus qu’un projet, c’est **votre vitrine tech**.
