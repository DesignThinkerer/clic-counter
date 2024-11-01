# Counter app

### Start project
To start the project, use the command `npm run start`

# Présentation de la Solution

Le projet est en ligne à cette adresse: https://designthinkerer.github.io/clic-counter/#/


Pour réaliser cet exercice, j'ai choisi d'utiliser **Visual Studio Code** pour plusieurs raisons :

## Visual Studio Code

- **Popularité et Intégration avec React** : Visual Studio Code est largement utilisé par la communauté React et prend en charge des extensions pour divers outils pratiques, comme **ESLint**, qui permet d'assurer le respect des normes de codage.
- **Débogage et Tests** : Visual Studio Code dispose également d'outils de débogage permettant de poser des points d'arrêt et d'inspecter l'état de l'application de manière efficace.

## Choix d'Implémentation

### 1. Composant Fonctionnel

J'ai opté pour un composant fonctionnel React afin de suivre les bonnes pratiques actuelles de développement. Les composants fonctionnels sont simples et lisibles :

```jsx
import React from 'react';

function Counter({ onIncrement, onDecrement, counter }) {
  return (
    <div>
      <button onClick={onIncrement} aria-label="Incrémenter le compteur">Incrémenter</button>
      <button onClick={onDecrement} disabled={counter === 0} aria-label="Décrémenter le compteur" aria-disabled={counter === 0}>Décrémenter</button>
      <p aria-live="polite">Vous avez cliqué {counter} fois</p>
    </div>
  );
}

export default Counter;
```

### 2. Gestion de l'État Externe

Dans cette implémentation, l'état du compteur est géré par le parent du composant (`Home.js`) et est passé en tant que prop :

```jsx
import React from 'react';
import Counter from '../../components/Counter';

function Home(props) {
  return (
    <div>
      <h1>Page d'accueil</h1>
      <Counter {...props} />
    </div>
  );
}

export default Home;
```

Ainsi, le composant `Counter` reste sans état (stateless), ce qui le rend plus flexible et réutilisable. J'ai choisi cette approche pour démontrer une séparation claire des responsabilités entre le composant parent (gestion de l'état) et le composant enfant (`Counter`).

### 3. Accessibilité

J'ai pris soin d'ajouter des **attributs ARIA** pour rendre le composant accessible aux utilisateurs utilisant des lecteurs d'écran. Par exemple, le bouton "Décrémenter" est désactivé lorsque le compteur est à 0, évitant ainsi des actions inutiles. De plus, des attributs comme `aria-label` ont été ajoutés aux boutons pour décrire clairement leur fonction, et `aria-live` a été utilisé pour que les lecteurs d'écran annoncent les changements de valeur du compteur.

### 4. Tests Unitaires avec Jest

Afin de respecter les dépendances indiquées, pour valider le bon fonctionnement du composant, j'ai écrit des **tests unitaires** en utilisant **Jest**. J'ai également utilisé des mocks pour vérifier que les fonctions de callback (`onIncrement` et `onDecrement`) étaient bien appelées lorsque l'utilisateur interagit avec les boutons. On pourrait également envisager d'utiliser la bibliothèque **React Testing Library** pour des projets utilisant une version plus récente de React.

### 5. Simplicité et Lisibilité

J'ai gardé le code aussi simple et lisible que possible. Chaque partie de l'implémentation est organisée de manière claire, avec des commentaires lorsque nécessaire, pour faciliter la lecture et la maintenance. J'ai également pris soin de faire en sorte que les descriptions des commits soient concises et claires.

### 6. Gestion des Cas Limites

Pour m'assurer que le composant était robuste, j'ai ajouté une **logique de protection** pour le bouton "Décrémenter", qui ne peut pas faire descendre la valeur du compteur en dessous de 0. Cela permet de garantir que le composant se comporte toujours de manière prévisible.

### 7. Publication du Projet

Le projet est hébergé sur **GitHub Pages**, via l'outil **gh-pages**, afin de le rendre facilement accessible. Pour que le projet reste fonctionnel, j'ai dû utiliser `HashRouter` au lieu de `BrowserRouter` car GitHub Pages ne prend pas en charge la gestion des routes côté serveur. Cela évite ainsi de rencontrer de problèmes de navigation.


## Conclusion

En conclusion, ce petit projet a été conçu pour être à la fois **simple** et **efficace**, en mettant l'accent sur les bonnes pratiques de développement en React et sur l'écriture de tests unitaires pour garantir un code fiable. Je reste disponible pour toute question ou clarification concernant l'implémentation.