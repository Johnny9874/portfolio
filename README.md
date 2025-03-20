# 🚀 Portfolio Personnel

## 🌟 Description
Mon portfolio dynamique et modulaire développé avec React, Vite et Framer Motion.

## 🛠️ Technologies utilisées
- React + Vite
- Framer Motion (animations)
- GitHub (gestion de version)
- Vercel (hébergement)

## Initialisation de Git et création de la branche dev
Création d'un nouveau repository appelé portfolio sur Github;
Création du dossier de l'application en local dans un dossier contenant tout les dossier projet réalisé;
Execution de git init à la racine du dossier; 
Création d'un fichier README.md à la racine du dossier;

Execution des commandes git à la racine du projet :

```sh
git add .
git commit -m "ajout de README.md"
git branch -M main
git remote add origin https://github.com/Johnny8974/portfolio.git
git push -u origin main 
```

Création de la branche dev : 

```sh
git checkout -b dev
git push -u origin dev
```

Lorsqu'on développe sur la branche dev :

```sh 
git checkout dev
git add
git commit -m "X"
git push origin dev
```

Pour fusionner dev à main quand tout est stable :

```sh
git checkout main
git merge dev
git push origin main
```

Penser à bien revenir sur la branche dev lorsqu'on commence à développer une nouvelle fontionnalité en fessant : 

```sh 
git checkout dev
```
## Création de l'application via React et Vite

Bien vérifier qu'on est sur la branche dev;
Puis exécuter : npm create vite@latest frontend
Choisir React et JavaScript;
Et exécuter :

```sh
cd frontend 
npm install
npm run dev
```

Notre site sera alors accessible sur http://localhost:5173/ 

Pensons à bien enregistrer le tout sur GitHub via :

```sh 
git add .
git commit -m "Initialisation du projet React avec Vite"
git push origin dev
```

