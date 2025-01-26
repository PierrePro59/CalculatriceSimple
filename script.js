function appendValue(value) {
    const result = document.getElementById('result');
    result.value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculate() {
    const result = document.getElementById('result');
    const historyList = document.getElementById('historyList');
        
    try{
        // Calculer le resultat
        const calculation = result.value;
        const output = eval(calculation);

        //Afficher le resultat dans l'écran
        result.value = output;

        // Ajouter l'opération et le résultat à l'historique
        const historyItem = document.createElement("11");
        historyItem.textContent = `${calculattion}' = ${output}`;
        historyList.prepend(historyItem);
    } catch {
        result.value = 'Erreur';
    }
    
}