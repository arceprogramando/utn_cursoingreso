export interface PlanSubject {
  name: string;
  weekly: string;
  classHours: string;
  autonomous: string;
  total: string;
  credits: string;
}

export interface PlanSource {
  href: string;
  label: string;
  download?: string;
}

export const planSubjects: PlanSubject[] = [
  { name: 'Programación I', weekly: '8', classHours: '128', autonomous: '197', total: '325', credits: '13' },
  { name: 'Arquitectura y sistemas operativos', weekly: '4', classHours: '64', autonomous: '61', total: '125', credits: '5' },
  { name: 'Matemática', weekly: '4', classHours: '64', autonomous: '61', total: '125', credits: '5' },
  { name: 'Organización empresarial', weekly: '4', classHours: '64', autonomous: '61', total: '125', credits: '5' },
  { name: 'Programación II', weekly: '8', classHours: '128', autonomous: '197', total: '325', credits: '13' },
  { name: 'Probabilidad y estadística', weekly: '4', classHours: '64', autonomous: '61', total: '125', credits: '5' },
  { name: 'Base de datos I', weekly: '4', classHours: '64', autonomous: '61', total: '125', credits: '5' },
  { name: 'Inglés I', weekly: '4', classHours: '64', autonomous: '61', total: '125', credits: '5' },
  { name: 'Programación III', weekly: '8', classHours: '128', autonomous: '197', total: '325', credits: '13' },
  { name: 'Base de datos II', weekly: '4', classHours: '64', autonomous: '61', total: '125', credits: '5' },
  { name: 'Metodología de sistemas I', weekly: '4', classHours: '64', autonomous: '61', total: '125', credits: '5' },
  { name: 'Inglés II', weekly: '4', classHours: '64', autonomous: '61', total: '125', credits: '5' },
  { name: 'Programación IV', weekly: '8', classHours: '128', autonomous: '197', total: '325', credits: '13' },
  { name: 'Metodología de sistemas II', weekly: '4', classHours: '64', autonomous: '61', total: '125', credits: '5' },
  { name: 'Introducción al análisis de datos', weekly: '2', classHours: '32', autonomous: '18', total: '50', credits: '2' },
  { name: 'Legislación', weekly: '2', classHours: '32', autonomous: '18', total: '50', credits: '2' },
  { name: 'Gestión del desarrollo de software', weekly: '4', classHours: '64', autonomous: '61', total: '125', credits: '5' },
  { name: 'Trabajo final integrador', weekly: '—', classHours: '95', autonomous: '130', total: '225', credits: '9' },
];

export const planTotals = {
  weekly: '80',
  classHours: '1375',
  autonomous: '1625',
  total: '3000',
  credits: '120',
};

export const planSources: PlanSource[] = [
  {
    href: 'http://csu.rec.utn.edu.ar/CSU/ORD/2018.pdf',
    label: 'Ordenanza 2018, diseño curricular',
  },
  {
    href: 'https://www.frrq.utn.edu.ar/wp-content/uploads/2026/08/CSU-ORD-2115-Modificacion-Punto-8-Diseno-Curricular-TUP.pdf',
    label: 'Ordenanza 2115, horas y créditos',
  },
  {
    href: 'http://csu.rec.utn.edu.ar/CSU/RES/2026/260.pdf',
    label: 'Resolución 260/2026, continuidad en FRA',
  },
  {
    href: '/NuevoPlanDeEstudio2025.pdf',
    label: 'PDF local llamado plan 2025',
    download: 'NuevoPlanDeEstudio2025.pdf',
  },
];
