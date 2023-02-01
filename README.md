# **Gestion de tâches - COOPALIM**

## **Présentation**

L'objectif est de réaliser en deux parties, un système de gestion de tâches pour administrer les inscriptions aux différentes tâches qui rythment l'activité de [Coopalim](https://www.coopalimstrasbourg.com/ "site de Coopalim"). 

A défaut d'avoir un outil de gestion plus efficace, les coordinateurs de la structure gèrent actuellement sur un fichier tableur partagé l'ensemble des inscriptions de leurs membres à chaque *créneau de tâche*, tel que :

* Préparation vente 1h30
* Vente 3h
* Livraisons 1h30
* Aide vente-livraison 3h
* ...

Ils ont donc *besoin* d'un outil leur permettant de :
1. Pouvoir administrer simplement les tâches et les membres (CRUD)
2. Pouvoir inscrire ou désinscrire les membres
3. Pouvoir suivre facilement les différents créneaux

Pour cela ils *souhaiteraient* :
1. Une même plateforme pour l'administration et l'utilisation de la plateforme
2. Une version facilement maintenable et améliorable de la plateforme
3. Une version accessible sur mobile (surtout pour les membres, lors de l'inscription libre)
4. Interdire la possibilité aux membres de se créer un compte sur la plateforme
5. Interdire la possibilité aux membres de se désinscrire d'un créneau (ces derniers doivent passer par eux pour la désinscription d'un créneau)

---
## **Proposition**

Afin de répondre à l'ensemble des besoins, et en lien avec le référent numérique de la structure, j'ai développé :
1. Un backend sans dashbord, `API` type `REST`, développée en `JS Node` 
2. Une base de données `MongoDB` dont l'API gère la connexion
3. Un `site front React` avec une `partie administration` complète pour les coordinateurs (CRUD complet users / task / rule / attributions) et une `partie membre` uniquement pour consulter et s'inscrire aux tâches.
4. Une `gestion de l'authentification` avec `Access Token, Refresh Token avec rotation` (comme conseiller sur le [site auth0](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/ "Access & Refresh Token Rotation"))

---
## Suite du projet
Le projet est dans sa première version mais nécessite encore des améliorations pour pouvoir être pleinement utiliser :
1. La conception du manifest pour transformer le site en PWA
2. L'ajout des autres fonctionnalités du user-story
3. Les tests

Ces parties seront réalisées par la suite par l'équipe numérique de la structure.

---
## **Le site client front React**
Le site a été réalisé avec un CRA React 18.2.0.  
J'ai organisé le travail autour de ces choix techniques :

* L'architecture des répertoires est inspirée de l'`Atomic Design`
    * `Atoms` pour les plus petits composants
    * `Molecules` pour les composants assemblés de bas niveau
    * `Organisms` pour les composants regroupant des molecules
    * `Pages` pour l'affichage des grands éléments.
    * `App.js` pour la définition des Routes et le placement du Header
    * `index.js` pour l'intégration des Providers
    * Il y a en plus le répertoire `assets` qui contient :
        * Les `images`
        * Les patterns, `schemas de validation`
        * et les éléments de style system, `fonts` et `colors`
    * Et le répertoire global qui contient :
        * les outils API pour la `connexion`
        * les `fonctions généralistes` de dates, de récupération de valeurs CSS, de connexion
        * les fichiers de définitions des `Atoms Recoil Provider`
        * les hooks génériques - `Loader` et `MediaQuery`
* La gestion des styles se fait avec les `styled-components`
* J'ai utilisé la librairie de component `Mantine` mais, la structure en Atomic Design permet un changement éventuel de librairie graphique facilement
* Les formulaires sont gérés avec `React Hook Form` et des `schemas de validation avec Yup`
* Afin d'utiliser un Provider dimensionné au site, j'ai choisi `React Recoil` au lieu de Redux (trop lourd et peu adapté au petit projet)
* Je n'ai pas utilisé de librairie de fetching (type axios), non nécéssaire. J'ai créé une fonction `fetcher` qui gère et normalise mes appels fetch.
* J'ai intégré `React SWR` pour simplifier les appels fetch.
* L'ensemble des composants sont séparé avec une structure simple :
    * Rendu via le composant lui même
    * Custom hook, consommé par le composant pour regrouper la logique
    * Un fichier regroupant les définitions des styled-components.
* Les informations de l'état du responsive sont gérées avec `React-Responsive` puis distribuées aux composants. 
---
## **Dépendances**
Voici la liste des dépendances de l'API :
* mantine: 5.10.0,
* tabler/icons: 1.119.0,
* cors: 2.8.5,
* dayjs: 1.11.7,
* react: 18.2.0,
* react-dotenv: 0.1.3,
* react-hook-form: 7.41.2,
* react-modal: 3.16.1,
* react-responsive: 9.0.2,
* react-router-dom: 6.6.1,
* recoil: 0.7.6,
* swr: 2.0.0,
* yup: 0.32.11