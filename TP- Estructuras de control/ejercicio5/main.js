function play(userChoice) {
    const choices = ['piedra', 'papel', 'tijera'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (userChoice === computerChoice) {
        result = `Empate! Ambos eligieron ${userChoice}.`;
    } else if (
        (userChoice === 'piedra' && computerChoice === 'tijera') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijera' && computerChoice === 'papel')
    ) {
        result = `Ganaste! Elegiste ${userChoice} y la computadora eligió ${computerChoice}.`;
    } else {
        result = `Perdiste. Elegiste ${userChoice} y la computadora eligió ${computerChoice}.`;
    }

    document.getElementById('result').innerText = result;
}
