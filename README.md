# Projet final - Assignments (Interface utilisateur)

## Projet Description
Un projet Angular 17 qui sert pour la gestion des `assignements`.

### Installation locale
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/FelanaRasata/AngularFrontMBDS.git
   ```
2. Naviguez vers le dossier du projet :
   ```bash 
   cd AngularFrontMBDS
   ```
3. Installez les dépendances:
   ```bash
   npm run start:setup
   ```


### Usage
Pour lancer l' application localement, suivez ces étapes:
1. Connectez - vous à Internet car il est connecté à un `Backend` en ligne.
- Backend source : https://github.com/FelanaRasata/AngularBackMBDS

2. Lancez l'application:
   ```bash
   npm run start:dev
   ```
3. Accédez à l' application sur `http://localhost:<API_PORT>`

---

### [Lien sur Render](https://angularfrontmbds.onrender.com)

---

### **Fonctionnalités**

1. **Connexion à l'application**

   Nous avons deux types d'utilisateurs :
  - **STUDENT** (Étudiant) : Peut voir ses assignements et créer de nouveaux assignements.
  - **TEACHER** (Professeur) : Peut voir les assignements correspondant à sa matière et les modifier.

2. **STUDENT**

   **Étudiant existant que vous pouvez utiliser :**
  - Nom d'utilisateur : `acollinge7@qq.com`
  - Mot de passe : `pwd123`

   **Liste d'assignements :**
  - Possibilité de faire une recherche simple

   **Ajout d'assignement :**
  - Fournir un titre et la matière de l'assignement

   **Fiche d'assignement :**
  - Voir les informations sur l'assignement
  - Un étudiant n'a pas accès aux actions `DELETE` (supprimer) et `EDIT` (modifier)

3. **TEACHER**

   **Professeur existant que vous pouvez utiliser :**
  - Nom d'utilisateur : `plinfoot1@newsvine.com`
  - Mot de passe : `pwd123`
  - Matière : Maths

   **Liste d'assignements :**
  - Possibilité de faire une recherche simple
  - Un professeur ne peut pas créer d'assignement, car un assignement doit être associé à un étudiant.

   **Fiche d'assignement :**
  - Voir les informations sur l'assignement

  - **EDIT (Modifier)** :
    - Pour éditer : le titre, la date d'envoi, la note du devoir, laisser une remarque et confirmer le devoir.
    - Une fois l'assignement confirmé, il ne peut plus être modifié.

  - **DELETE (Supprimer)** : Pour supprimer l'assignement

   **Modification d'assignement :** Une autre méthode pour modifier les assignements :
  - Deux listes avec défilement infini :
    - Assignements non confirmés
    - Assignements confirmés

  - **Drag and drop** (glisser-déposer) de l’assignement de la liste des assignements non confirmés vers celle des assignements confirmés :
    - Donner une note et laisser une remarque
    - Le devoir est automatiquement confirmé : Les assignements confirmés ne peuvent plus être modifiés.

---

Ce fichier README.md sert de guide pour installer, exécuter et comprendre le projet. Pour des informations plus détaillées, veuillez vous référer à la base de code et aux ressources supplémentaires fournies.

---

### Authors
- [Rasatarivony Andriamalala Sitraka](mailto:rasatasitraka2@gmail.com)
- [Rasatarivony Andriharimanga Felana](mailto:rasatadiamondra@gmail.com)

---

&copy; ITU - MBDS - 2023-2024
