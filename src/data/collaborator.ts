import type { Collaborator } from '@/types/collaborator';

export async function fetchCollaborators(
  apiUrl: string
): Promise<{ colaboradores: Collaborator[]; errorMessage: string }> {
  try {
    // Agregar headers para evitar cache
    const response = await fetch(apiUrl, {
      cache: 'no-store', // Deshabilita el cache completamente
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
    if (!response.ok)
      throw new Error('Error al obtener colaboradores desde la API principal.');

    const colaboradores: Collaborator[] = await response.json();

    const colaboradoresConDescripcion = await Promise.all(
      colaboradores.map(async (colaborador) => {
        try {
          // También aplicar no-cache a la API de GitHub
          const userResponse = await fetch(
            `https://api.github.com/users/${colaborador.login}`,
            {
              cache: 'no-store',
              headers: {
                'Cache-Control': 'no-cache',
              },
            }
          );
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
      })
    );

    return { colaboradores: colaboradoresConDescripcion, errorMessage: '' };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error
        ? `Error al cargar datos: ${error.message}`
        : 'Error desconocido al cargar datos.';
    return { colaboradores: [], errorMessage };
  }
}
