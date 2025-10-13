# 📘 Cahier des charges — DevProof  
**Projet :** DevProof — “Apprends, code, prouve tes skills.”  
**Type :** Plateforme open source communautaire  
**Version :** 1.0  
**Auteur :** Hexweb  
**Date :** Octobre 2025  

---

## 📖 Sommaire
1. [🎯 Objectifs du projet](#-objectifs-du-projet)  
2. [🧱 Fonctionnalités (MVP)](#-fonctionnalités-mvp)  
3. [⚙️ Stack technique](#️-stack-technique)  
4. [🧩 Architecture du projet](#-architecture-du-projet)  
5. [👥 Rôles et utilisateurs](#-rôles-et-utilisateurs)  
6. [🚀 Déroulement du projet (phases)](#-déroulement-du-projet-phases)  
7. [📢 Communication & communauté](#-communication--communauté)  
8. [🧠 Exigences techniques](#-exigences-techniques)  
9. [🔒 Sécurité & confidentialité](#-sécurité--confidentialité)  
10. [📈 Évolutions futures (post-MVP)](#-évolutions-futures-post-mvp)  

---

## 🎯 Objectifs du projet

### Objectif principal
Créer une plateforme gamifiée permettant aux développeurs de :
- Apprendre le workflow open source (issues, branches, PRs).  
- Collaborer sur des mini-projets concrets.  
- Obtenir des **preuves publiques** de leurs compétences (PR, badges, score).  
- Valoriser leur profil professionnel avec un portfolio automatique.

### Objectifs secondaires
- Fédérer une communauté de développeurs autour de l’apprentissage pratique.  
- Proposer des défis tirés de vrais besoins open source.  
- Faciliter l’entrée dans le monde professionnel via des preuves concrètes.  

---

## 🧱 Fonctionnalités (MVP)

| Fonctionnalité | Description | Priorité |
|----------------|--------------|-----------|
| **Auth GitHub** | Connexion via OAuth GitHub | ⭐⭐⭐⭐ |
| **Dashboard défis** | Liste des défis avec filtres (niveau, langage, type) | ⭐⭐⭐ |
| **Participation via PR** | Soumission de code par Pull Request | ⭐⭐⭐⭐ |
| **Attribution de points** | Score automatique basé sur les contributions validées | ⭐⭐⭐⭐ |
| **Profil public** | Page utilisateur avec badges, score, contributions | ⭐⭐⭐ |
| **Admin panel** | CRUD des défis, validation manuelle, gestion des points | ⭐⭐ |
| **Notifications Discord/GitHub** | Envoi automatique d’annonces ou de validations | ⭐ |

---

## ⚙️ Stack technique

| Domaine | Technologie | Description |
|----------|--------------|-------------|
| **Frontend** | React + Vite | Interface rapide, modulaire, SPA |
| **UI/UX** | Tailwind CSS + shadcn/ui | Design moderne et cohérent |
| **State management** | Zustand | Gestion légère des états |
| **Backend** | Node.js + Express | API REST principale |
| **Base de données** | Prisma + PostgreSQL | ORM moderne et typé |
| **Auth** | GitHub OAuth + JWT | Authentification via GitHub |
| **CI/CD** | GitHub Actions | Lint, tests, build, déploiement |
| **DevOps** | Docker + Docker Compose | Environnement reproductible |
| **Hébergement** | Vercel (Frontend) + Railway / Render (Backend) | Déploiement cloud |
| **Docs API** | Swagger / Postman | Documentation claire |
| **Communication** | Discord | Coordination des contributeurs |

---

## 🧩 Architecture du projet

```bash
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
````
## 👥 Rôles et utilisateurs

| Rôle | Description | Accès / Actions principales |
|------|--------------|------------------------------|
| **Visiteur** | Non connecté | Consulte les défis publics |
| **Développeur** | Connecté via GitHub | Participe aux défis, soumet des PRs |
| **Admin** | Membre de l’équipe Hexweb | Crée / modifie des défis, valide les PRs |
| **Modérateur** | Contributeur confirmé | Gère les discussions, aide les nouveaux |
| **Mentor** *(à venir)* | Expert technique | Donne des feedbacks techniques sur le code |

---

## 🚀 Déroulement du projet (phases)

| Phase | Contenu | Statut |
|--------|----------|--------|
| **Phase 1 — MVP** | Auth GitHub, dashboard défis, PR, scoring | 🟢 En cours |
| **Phase 2 — Profil & badges** | Ajout du profil public et badges automatiques | ⚪ À venir |
| **Phase 3 — Gamification avancée** | Leaderboard, niveaux, missions | ⚪ À venir |
| **Phase 4 — API publique & intégrations** | API pour outils externes, statistiques globales | ⚪ À venir |

---

## 📢 Communication & communauté

- 💬 **Discord** : canal principal pour la coordination, les annonces et l’entraide.  
  👉 [Rejoindre le serveur Discord DevProof](https://discord.gg/ton-lien-invite)

- 🐛 **GitHub Issues** : pour signaler des bugs ou proposer des idées.  
- 💡 **GitHub Discussions** : pour débattre, partager des réussites et échanger avec la communauté.  
- 🎥 **Lives & articles** : présentations Hexweb, événements communautaires et blogs techniques.

---

## 🧠 Exigences techniques

- Code **documenté**, **typé** et **testé**.  
- Respect strict du fichier [`CONTRIBUTING.md`](./CONTRIBUTING.md).  
- CI/CD obligatoire : lint, tests, build avant merge.  
- Déploiement automatique sur branches principales.  
- Environnement unifié via **Docker Compose**.  
- Fichiers `.env` **jamais commités**.

---

## 🔒 Sécurité & confidentialité

- Stockage sécurisé des tokens **GitHub OAuth**.  
- Données utilisateurs protégées par **chiffrement JWT**.  
- Webhooks sécurisés pour la **validation automatique des PRs**.  
- Logs **anonymisés** pour l’analyse des contributions.

---

## 📈 Évolutions futures (post-MVP)

| Fonctionnalité | Description |
|----------------|-------------|
| **IA Mentor** | Analyse automatique du code et conseils personnalisés |
| **Challenges sponsorisés** | Entreprises qui créent leurs propres défis |
| **Export de profil** | Génération automatique d’un portfolio PDF |
| **Classements mensuels** | Système de saisons et top contributeurs |
| **Certifications Hexweb** | “DevProof Verified” pour les contributeurs réguliers |
