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

## Création des dossiers components, section et style ainsi que les fichiers correspondant

Afin de créer le site, il me faut des composants contenant des blocs de code, ces composants seront utiliser pour créer donc l'application pour ce faire j'ai crée directement les dossiers et leurs fichier respectif manuellement tel que components, section(contient les composants de toutes les sections de l'application) et styles(contient tout les fichiers de style).

## Ajout de code dans les composants

Après avoir crée les différents dossier ainsi que les fichiers, j'ai coder les 4 composants des 4 sections de l'application.

IMPORTANT :

- La structure à respecter pour nos composants est la suivante :

```sh
const NomDuComposant = () => {
    return (
        code du composant
    );
};

export default NomDuComposant;
```

Après qu'on ai fini avec les composants et qu'on ai bien fait attention à l'export du composant, attardons-nous sur l'import de ces composants dans le fichier App.jsx :

```sh 
import NomDuComposant from "./section/NomDuComposant";

const app = () => {
    return (
        <>
            <NomDuComposant />
        </>
    );
};

export default App;
```

Ici, les points important est <NomDuComposant /> dans le fragment du composant app qui permet donc d'exécuter le code de NomDuComposant dans le composant app. 

Quand on a pu vérifier que les composants sont bien exporté et importé dans App.jsx depuis http://localhost:5173/ ,on a plus qu'a push : 

```sh 
git checkout dev
git add .
git commit -m "ajout du code dans les composants"
git push origin dev
```

## Stylisons l'application

Passons maintenant a la mise en place du style de notre application !

J'ai commencé par crée plusieurs fichier css pour chaque composant responsable des sections de l'application dans le dossier frontend/src/styles.

Puis j'ai importé chaque fichier css dans le bon composant en fessant attention au chemin ménant au fichier css en question avec :
```sh
import "chemin d'accès du fichier css";
```

On va commencer par le composant Header :



