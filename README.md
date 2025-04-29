# MonSite AniVerse

Une plateforme de découverte des dernières sorties d’anime, avec un feed d’actualité, une galerie d’affiches, et des mini-jeux interactifs.

## 🚀 Objectifs du projet
- Offrir un **feed dynamique** des nouveautés anime via une API (Jikan, AniList…).  
- Proposer une **Gallery responsive** (mode mosaïque/colonne) et un **carrousel publicitaire**.  
- Intégrer des **mini-jeux** (Memory, others) avec **localStorage** pour suivre les scores.  

## 🎯 Fonctionnalités principales
1. **Page d’accueil** :  
   - Feed d’anime paginé, bouton “Actualiser” pour recharger via `fetch`.  
   - Menu dropdown pour la navigation.  
   - Formulaire AJAX pour ajouter des posts sans rechargement.  
2. **Page Gallery** :  
   - Grille responsive, basculer entre affichage mosaïque/colonne.  
   - Ajout et suppression d’images dynamiques (localStorage).  
   - Carrousel auto-play pour la pub.  
3. **Page Jeux** :  
   - Intégration des jeux développés précédemment.  
   - Jeu Memory multi-niveaux (5/15/25 paires), logique de paires, comptage de tentatives, sauvegarde des stats en localStorage.  

## 🛠 Technologies & outils
- **Langages** : HTML5, CSS3, JavaScript (ES6+)  
- **API** :[AniList](https://anilist.gitbook.io/)  
- **Outils de dev** : VS Code, Git, (déploiement)  
- **Design & wireframes** : Excalidraw 
- **Kanban & suivi** : GitHub Projects (To do / In progress / Done) 


# Glossaire
Wireframe : Schéma ou maquette basse fidélité représentant l’organisation visuelle et fonctionnelle des pages d’un site avant la réalisation graphique.

Issue (Github) : Ticket ou tâche sur GitHub décrivant un travail à réaliser, un bug ou une discussion, identifié par un numéro unique.

Label (GitHub) : Étiquette colorée et personnalisable apposée sur une issue ou une pull request pour la classer (type, priorité, état…), faciliter son tri et son suivi dans le projet.

Milestone (GitHub)
-Regroupement d’issues et de pull requests autour d’un objectif ou d’une version, avec une date d’échéance. Permet de :
-Définir un objectif (release, sprint, tâche majeure)
-Suivre l’avancement global via le pourcentage d’issues fermées
-Organiser le travail en échéances, faciliter la planification et la vue d’ensemble.

Agile
Méthode de gestion de projet en petits cycles (sprints) qui permet de livrer rapidement, de s’adapter aux retours et de faire collaborer étroitement les équipes.