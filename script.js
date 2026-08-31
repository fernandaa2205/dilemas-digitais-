function responder(isCorreto) {
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block';
    
    if (isCorreto) {
        feedback.className = 'correto';
        feedback.innerHTML = '✅ Muito bem! Você evitou um golpe. Sempre confirme por ligação de voz no número antigo!';
    } else {
        feedback.className = 'incorreto';
        feedback.innerHTML = '❌ Cuidado! Isso é um golpe comum. Nunca envie dinheiro sem ouvir a voz da pessoa ligando para o número antigo dela.';
    }
}