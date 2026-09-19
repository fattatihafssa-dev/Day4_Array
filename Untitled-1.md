# Jour 4 — Tableaux : catalogue complet des défis

**Thèmes :** création, indexation, modification, parcours, recherche, comptage et transformation manuelle de tableaux.  
**Règle :** utiliser JavaScript de base et des boucles. Lorsque c'est précisé, ne pas utiliser des méthodes comme `filter`, `splice` ou `Set`.

## Bases des tableaux

### 1. Créer et afficher un tableau — Facile
**Contexte :** Création d'un tableau avec des crochets.  
**Description :** Crée un tableau avec trois aliments préférés, puis affiche-le.  
**Exemple de sortie :**
["pizza", "sushi", "tacos"]
```

### 2. Accéder par index — Facile
**Contexte :** Les index commencent à `0`.  
**Description :** Avec `[10, 20, 30]`, affiche le deuxième élément.  
**Exemple de sortie :**
```text
20
```

### 3. Ajouter un élément avec `push` — Facile
**Contexte :** `.push()` ajoute une valeur à la fin d'un tableau.  
**Description :** Avec `[1, 2]`, ajoute `3` puis affiche le tableau.  
**Exemple de sortie :**
```text
[1, 2, 3]
```

### 4. Retirer le dernier élément avec `pop` — Facile
**Contexte :** `.pop()` retire et retourne le dernier élément.  
**Description :** Avec `[5, 6, 7]`, affiche la valeur retirée et le tableau restant.  
**Exemple de sortie :**
```text
7
[5, 6]
```

### 5. Modifier un élément par son index — Moyen
**Contexte :** Une case de tableau peut être remplacée grâce à son index.  
**Description :** Remplace `"green"` par `"yellow"` dans `["red", "green", "blue"]`.  
**Exemple de sortie :**
```text
["red", "yellow", "blue"]
```

### 6. Accéder au dernier élément de manière générique — Moyen
**Contexte :** Le dernier index valide est toujours `array.length - 1`.  
**Description :** Affiche le dernier élément sans connaître la taille exacte du tableau.  
**Exemple de sortie :**
```text
dernier élément
```

### 7. Modifier un tableau déclaré avec `const` — Moyen
**Contexte :** `const` bloque la réaffectation de la variable, pas la modification du contenu du tableau.  
**Description :** Explique pourquoi `const arr = [1, 2]; arr.push(3);` fonctionne et pourquoi `arr = [4, 5]` échoue.  
**Exemple de sortie :**
```text
[1, 2, 3]
```

### 8. Construire un tableau avec une boucle — Moyen
**Contexte :** Partir d'un tableau vide et ajouter une valeur à chaque tour.  
**Description :** Construis les carrés de 1 à 5 avec une boucle et `.push()`.  
**Exemple de sortie :**
```text
[1, 4, 9, 16, 25]
```

### 9. Échanger deux éléments — Difficile
**Contexte :** Une variable temporaire évite d'écraser une valeur pendant l'échange.  
**Description :** Échange le premier et le dernier élément de `[1, 2, 3, 4]`.  
**Exemple de sortie :**
```text
[4, 2, 3, 1]
```

### 10. Retirer une valeur — Difficile
**Contexte :** Construire un nouveau tableau en ignorant la valeur ciblée.  
**Description :** Retire `30` de `[10, 20, 30, 40]` sans `filter()` ni `splice()`.  
**Exemple de sortie :**
```text
[10, 20, 40]
```

### 11. Insérer à un index précis — Difficile
**Contexte :** Copier les valeurs dans un nouveau tableau et ajouter la nouvelle au bon moment.  
**Description :** Insère `3` entre `2` et `4` dans `[1, 2, 4, 5]`, sans `.splice()`.  
**Exemple de sortie :**
```text
[1, 2, 3, 4, 5]
```

### 12. Rotation manuelle — Extrême
**Contexte :** Sauvegarder le premier élément, copier les suivants, puis ajouter l'élément sauvegardé à la fin.  
**Description :** Transforme `[1, 2, 3, 4, 5]` en une rotation à gauche, sans `shift()`.  
**Exemple de sortie :**
```text
[2, 3, 4, 5, 1]
```

## Parcours de tableaux

### 13. Afficher chaque élément — Facile
**Contexte :** Parcourir les index de `0` à `arr.length - 1`.  
**Description :** Affiche chaque valeur de `[4, 8, 15]` sur une ligne.  
**Exemple de sortie :**
```text
4
8
15
```

### 14. Somme simple — Facile
**Contexte :** Utiliser un accumulateur qui commence à zéro.  
**Description :** Calcule la somme de `[2, 4, 6, 8]` avec une boucle.  
**Exemple de sortie :**
```text
20
```

### 15. Moyenne simple — Facile
**Contexte :** Calculer la somme puis la diviser par `arr.length`.  
**Description :** Calcule la moyenne de `[10, 20, 30]`.  
**Exemple de sortie :**
```text
20
```

### 16. Maximum simple — Facile
**Contexte :** Conserver le plus grand élément rencontré.  
**Description :** Trouve le maximum de `[3, 9, 1, 7]`.  
**Exemple de sortie :**
```text
9
```

### 17. Minimum simple — Moyen
**Contexte :** Même logique que le maximum, avec la comparaison inversée.  
**Description :** Trouve le minimum de `[3, 9, 1, 7]`.  
**Exemple de sortie :**
```text
1
```

### 18. Compter les nombres positifs — Moyen
**Contexte :** Combiner un compteur et une condition dans une boucle.  
**Description :** Compte les valeurs strictement positives dans `[-3, 5, -1, 8, 0]`.  
**Exemple de sortie :**
```text
2
```

### 19. Étendue d'un tableau — Moyen
**Contexte :** L'étendue est égale au maximum moins le minimum.  
**Description :** Écris `range(arr)` qui retourne la différence entre le maximum et le minimum.  
**Exemple de sortie :**
```text
8
```

### 20. Moyenne sans le maximum — Moyen
**Contexte :** Trouver le maximum, puis ne pas l'ajouter à la somme.  
**Description :** Calcule la moyenne d'un tableau sans sa plus grande valeur, supposée présente une seule fois.  
**Exemple de sortie :**
```text
5
```

### 21. Moyenne arrondie — Difficile
**Contexte :** Utiliser `Math.round(value * 100) / 100` pour garder deux décimales.  
**Description :** Calcule et affiche une moyenne arrondie à deux décimales.  
**Exemple de sortie :**
```text
4.67
```

### 22. Index du premier maximum — Difficile
**Contexte :** Mémoriser à la fois la valeur maximale et son index; ne rien changer en cas d'égalité.  
**Description :** Trouve le premier index du maximum dans `[4, 9, 2, 9, 1]`.  
**Exemple de sortie :**
```text
1
```

### 23. Somme des éléments aux index pairs — Difficile
**Contexte :** Un index pair est différent d'une valeur paire.  
**Description :** Additionne les valeurs aux index `0`, `2`, `4`, etc.  
**Exemple de sortie :**
```text
9
```

### 24. Statistiques en un seul parcours — Extrême
**Contexte :** Mettre à jour somme, minimum et maximum pendant une seule boucle.  
**Description :** Écris `stats(arr)` qui affiche somme, moyenne, minimum et maximum sans faire quatre boucles.  
**Exemple de sortie :**
```text
sum: 20
average: 5
min: 2
max: 8
```

## Défis sur les tableaux

### 25. Trouver un index — Facile
**Contexte :** Arrêter la recherche dès qu'une valeur correspond.  
**Description :** Trouve l'index de `2` dans `[5, 8, 2, 9]`.  
**Exemple de sortie :**
```text
2
```

### 26. Compter les nombres pairs — Facile
**Contexte :** Utiliser `% 2 === 0` avec un compteur.  
**Description :** Compte les valeurs paires dans `[1, 2, 3, 4, 5, 6]`.  
**Exemple de sortie :**
```text
3
```

### 27. Inverser un tableau — Facile
**Contexte :** Parcourir le tableau du dernier index au premier et ajouter les valeurs dans un nouveau tableau.  
**Description :** Inverse manuellement `[1, 2, 3]`.  
**Exemple de sortie :**
```text
[3, 2, 1]
```

### 28. Filtrer au-dessus d'une limite — Facile
**Contexte :** Construire un tableau résultat avec les valeurs qui respectent une condition.  
**Description :** Garde uniquement les valeurs supérieures à 10 dans `[4, 15, 8, 23, 1]`.  
**Exemple de sortie :**
```text
[15, 23]
```

### 29. Compter les occurrences — Moyen
**Contexte :** Ajouter un au compteur pour chaque valeur égale à la cible.  
**Description :** Compte les occurrences de `2` dans `[1, 2, 2, 3, 2, 4]`.  
**Exemple de sortie :**
```text
3
```

### 30. Vérifier qu'une valeur existe — Moyen
**Contexte :** Une recherche peut retourner un booléen plutôt qu'un index.  
**Description :** Écris `contains(arr, value)` qui retourne `true` ou `false`.  
**Exemple de sortie :**
```text
true
```

### 31. Trouver tous les index — Moyen
**Contexte :** Collecter toutes les correspondances au lieu de s'arrêter à la première.  
**Description :** Trouve tous les index de `3` dans `[3, 7, 3, 9, 3]`.  
**Exemple de sortie :**
```text
[0, 2, 4]
```

### 32. Retirer les doublons manuellement — Moyen
**Contexte :** Ajouter une valeur seulement si elle n'est pas déjà dans le résultat.  
**Description :** Retire les doublons de `[1, 2, 2, 3, 1, 4]` sans utiliser `Set`.  
**Exemple de sortie :**
```text
[1, 2, 3, 4]
```

### 33. Trouver la deuxième plus grande valeur distincte — Difficile
**Contexte :** Un maximum répété ne doit pas compter comme deuxième valeur.  
**Description :** Trouve la deuxième plus grande valeur distincte de `[4, 9, 2, 9, 7]`.  
**Exemple de sortie :**
```text
7
```

### 34. Fusionner deux tableaux sans doublons — Difficile
**Contexte :** Traiter les deux tableaux dans l'ordre tout en n'ajoutant chaque valeur qu'une seule fois.  
**Description :** Fusionne `[1, 2, 3]` et `[3, 4, 5]` dans un tableau unique.  
**Exemple de sortie :**
```text
[1, 2, 3, 4, 5]
```

### 35. Séparer pairs et impairs — Difficile
**Contexte :** Maintenir deux tableaux résultat et choisir où ajouter chaque valeur.  
**Description :** Sépare `[1, 2, 3, 4, 5, 6]` en un tableau de nombres pairs et un tableau de nombres impairs.  
**Exemple de sortie :**
```text
evens: [2, 4, 6]
odds: [1, 3, 5]
```

### 36. Plus longue suite de valeurs identiques — Extrême
**Contexte :** Suivre la longueur de la suite actuelle et la plus longue suite rencontrée.  
**Description :** Trouve la longueur de la plus longue suite de valeurs égales consécutives dans `[1, 1, 2, 2, 2, 3, 1, 1, 1, 1]`.  
**Exemple de sortie :**
```text
4
```
DAY4_TABLEAUX_ALL_CHALLENGES_FR.md
10 Ko