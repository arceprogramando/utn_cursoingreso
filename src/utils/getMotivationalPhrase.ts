export default function getMotivationalPhrase(progress: number): string {
    let message = '';

    if (progress < 10) message = '¡Vamos! Apenas estamos comenzando, ¡a por más!';
    if (progress >= 10 && progress < 20) message = '¡Sigue así! Ya estás avanzando paso a paso.';
    if (progress >= 20 && progress < 30) message = '¡Muy bien! Vas por buen camino, no pares.';
    if (progress >= 30 && progress < 40) message = '¡Buen trabajo! Cada día es un paso más hacia el objetivo.';
    if (progress >= 40 && progress < 50) message = '¡Sigue adelante! Ya has recorrido un buen tramo.';
    if (progress >= 50 && progress < 60) message = '¡Gran esfuerzo! Ya pasaste la mitad del camino.';
    if (progress >= 60 && progress < 70) message = '¡Excelente! Estás haciendo un gran trabajo, sigue así.';
    if (progress >= 70 && progress < 80) message = '¡Más de la mitad! No te detengas ahora, sigue así.';
    if (progress >= 80 && progress < 90) message = '¡Increíble! Estás muy cerca de la meta.';
    if (progress >= 90 && progress < 100) message = '¡Ya casi! ¡No te rindas, estás a punto de lograrlo!';
    if (progress === 100) message = '¡Felicidades! ¡Lo lograste, eres técnico universitario en programación!';

    return message;
  }
