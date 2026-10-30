import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Tecnicatura Universitaria',
    description:
      'Web hecha para mejorar el acceso a la información de la Tecnicatura Universitaria en Programación.',
    image: '/AnimeLeyendo.avif',
    link: 'https://utn.arceprog.dev/',
    tags: ['Astro.js', 'TailwindCSS', 'TypeScript'],
    github: 'https://github.com/arceprogramando/utn_cursoingreso',
    date: '2024',
  },
  {
    title: 'Registro Profesores',
    description:
      'Aplicacion de escritorio en C# con WPF para registrar profesores y asignarlas a las materias que dictan.',
    image: '/ProyectoUniversidad1.png',
    tags: ['C#', 'WPF', 'XAML', '.NET'],
    github: 'https://github.com/r0minaflorencia/Registro-de-profesores',
    date: '2024',
  },
];
