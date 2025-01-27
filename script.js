let currentInput = ''; // Variable pour stocker l'entrée actuelle de l'utilisateur
let history = []; // Tableau pour stocker l'historique des calculs réalisés

// Fonction pour ajouter un chiffre ou un opérateur à l'entrée actuelle
function appendValue(value) {
  currentInput += value; // Ajoute la valeur à l'entrée actuelle
  document.getElementById('result').value = currentInput; // Met à jour l'affichage avec l'entrée actuelle
}

// Fonction pour effacer l'affichage et réinitialiser l'entrée
function clearDisplay() {
  currentInput = ''; // Réinitialise l'entrée actuelle
  document.getElementById('result').value = ''; // Efface l'affichage
}

// Fonction pour effectuer le calcul en utilisant l'entrée actuelle
function calculate() {
  try {
    // Utilisation de `eval()` pour effectuer le calcul. Attention : `eval()` peut être dangereux si mal utilisé.
    let result = eval(currentInput); 
    if (result !== undefined) {
      // Ajouter le calcul dans l'historique si le résultat est valide
      addToHistory(currentInput + ' = ' + result);
      currentInput = result.toString(); // Met à jour l'entrée avec le résultat
      document.getElementById('result').value = currentInput; // Affiche le résultat
    }
  } catch (error) {
    // Si une erreur se produit (par exemple une expression invalide), affiche 'Erreur'
    document.getElementById('result').value = 'Erreur';
    currentInput = ''; // Réinitialise l'entrée en cas d'erreur
  }
}

// Fonction pour ajouter un calcul à l'historique
function addToHistory(entry) {
  history.push(entry); // Ajoute l'entrée dans l'historique
  if (history.length > 15) { // Limite l'historique à 15 éléments
    history.shift(); // Supprime le premier élément si l'historique dépasse la limite
  }
  updateHistory(); // Met à jour l'affichage de l'historique
}

// Fonction pour mettre à jour l'affichage de l'historique
function updateHistory() {
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = ''; // Efface l'affichage actuel de l'historique

  // Ajoute chaque élément de l'historique à la liste HTML
  history.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = entry; // Affiche chaque élément de l'historique
    historyList.appendChild(li); // Ajoute l'élément à la liste
  });
}

// Fonction pour écouter les touches du clavier et exécuter les actions associées
document.addEventListener('keydown', function(event) {
  const key = event.key; // Récupère la touche pressée

  // Vérifie si la touche pressée est un chiffre ou un opérateur
  if (key >= '0' && key <= '9' || key === '+' || key === '-' || key === '*' || key === '/') {
    appendValue(key); // Ajoute la touche à l'affichage
  }
  
  // Vérifie si la touche pressée est 'Enter' pour effectuer le calcul
  if (key === 'Enter') {
    calculate();
  }

  // Vérifie si la touche pressée est 'Escape' pour effacer l'affichage
  if (key === 'Escape') {
    clearDisplay();
  }
});
