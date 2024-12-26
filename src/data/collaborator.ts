import type { Collaborator } from '../types/collaborator';

const apiUrl = 'https://apicollaborator.vercel.app/';

export async function fetchCollaborators() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Error al obtener colaboradores desde la API principal.');

    const colaboradores: Collaborator[] = await response.json();

    const colaboradoresConDescripcion = await Promise.all(
      colaboradores.map(async (colaborador) => {
        try {
          const userResponse = await fetch(`https://api.github.com/users/${colaborador.login}`);
          if (userResponse.ok) {
            const userData = await userResponse.json();
            colaborador.description = userData.bio || '';
          } else {
            colaborador.description = '';
          }
        } catch {
          colaborador.description = 'Error al obtener la descripción.';
        }
        return colaborador;
      }),
    );

    return { colaboradores: colaboradoresConDescripcion, errorMessage: '' };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? `Error al cargar datos: ${error.message}` : 'Error desconocido al cargar datos.';
    return { colaboradores: [], errorMessage };
  }
}
