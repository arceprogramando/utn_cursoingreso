export default function getMotivationalPhrase(progress: number): string {
  if (progress <= 0) return 'Cuando empieces a marcar materias, vas a ver tu progreso 😊';
  if (progress < 10) return '¡Vamos! Apenas estamos comenzando, ¡a por más!';
  if (progress < 20) return '¡Sigue así! Ya estás avanzando paso a paso.';
  if (progress < 30) return '¡Muy bien! Vas por buen camino, no pares.';
  if (progress < 40) return '¡Buen trabajo! Cada día es un paso más hacia el objetivo.';
  if (progress < 50) return '¡Sigue adelante! Ya has recorrido un buen tramo.';
  if (progress < 60) return '¡Gran esfuerzo! Ya pasaste la mitad del camino.';
  if (progress < 70) return '¡Excelente! Estás haciendo un gran trabajo, sigue así.';
  if (progress < 80) return '¡Más de la mitad! No te detengas ahora, sigue así.';
  if (progress < 90) return '¡Increíble! Estás muy cerca de la meta.';
  if (progress < 100) return '¡Ya casi! ¡No te rindas, estás a punto de lograrlo!';
  return '¡Felicidades! ¡Lo lograste, eres técnico universitario en programación!';
}
