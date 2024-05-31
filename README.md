# Projet final - Assignments  (Frontend)

## Projet Description
Un projet Angular 17 qui sert pour la gestion d'assignement.

### Installation locale
1. Clonez le repertoire:
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

### Fonctionnalités
1. Connexion à l' application:

On a 2 types d'utilisateur:
  - STUDENT : qui  peut voir ses assignements et créer un nouveau.


  - TEACHER :  qui peut voir les assignements correspondant à sa matières et les modifier.

2. STUDENT

Etudiant existant qu'on peut utiliser
  - username : `acollinge7@qq.com`
  - password : `pwd123`

Liste d'assignement : 
  - On peut faire une recherche simple

Ajout d'assignement :
  - On donne un titre et la matière de l'assignement

Fiche d'assignement :
  - On voit les informations sur l'assignement
  - Un étudiant n'a pas accès aux `DELETE` et `EDIT`

3. TEACHER

Professeur existant qu'on peut utiliser
- username : `plinfoot1@newsvine.com`
- password : `pwd123`
- matière : Maths

Liste d'assignement :
- On peut faire une recherche simple.
- Un professeur ne peut pas créer un assignement car un assignement doit être associé à un étudiant.

Fiche d'assignement :
- On voit les informations sur l'assignement


- `EDIT`: 
  - pour éditer : le titre, la date d'envoi, la note du devoir, laisser une remarque et  confirmer le devoir.
  - si on confirme l'assignement, on ne peut plus le modifier à l’avenir


- `DELETE`: pour supprimer l'assignement

Modification d'assignement: c'est un autre moyen pour modifier les assignements
- on a 2 listes à scroll infini:
  - Assignements non confirmés 
  - Assignements confirmés


- On drag and drop l’ assignement de la liste des assignements non confirmés vers celle des assignements confirmés
  - on donne une note et on laisse une remarque
  - le devoir est automatiquement confirmé :  on ne peut pas modifier les assignments déjà confirmés.

---

Ce fichier README.md sert de guide pour installer, exécuter et comprendre le projet. Pour des informations plus détaillées, veuillez vous référer à la base de code et aux ressources supplémentaires fournies.

---

### Authors
- [Rasatarivony Andriamalala Sitraka](mailto:rasatasitraka2@gmail.com)
- [Rasatarivony Andriharimanga Felana](mailto:rasatadiamondra@gmail.com)

---

&copy; ITU - MBDS - 2023-2024
