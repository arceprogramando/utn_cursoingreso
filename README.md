# Tecnicatura Universitaria en Programación - UTN

![Tecnicatura UTN](https://github.com/arceprogramando/utn_cursoingreso/blob/main/public/VideoPresentacion.gif)

## 📚 Descripción

Sitio web educativo que recopila apuntes, materiales y proyectos de la **Tecnicatura Universitaria en Programación de la UTN**. Una plataforma construida para mejorar el acceso a la información y facilitar el aprendizaje de los estudiantes.

## 🚀 Tecnologías

- **Astro.js** - Framework web moderno
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utility-first
- **MDX** - Markdown con componentes JSX

## 🎯 Características

- ✅ Apuntes organizados por materias
- ✅ Galería de proyectos estudiantiles
- ✅ Optimización de imágenes automática
- ✅ Diseño responsive
- ✅ SEO optimizado
- ✅ Carga rápida y rendimiento excelente

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Configuración

```bash
# Clonar el repositorio
git clone https://github.com/arceprogramando/utn_cursoingreso.git

# Navegar al directorio
cd utn_cursoingreso

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🧞 Comandos Disponibles

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia servidor local en `localhost:4321`       |
| `npm run build`           | Construye el sitio para producción en `./dist/` |
| `npm run preview`         | Previsualiza la build localmente                |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                   |
| `npm run astro -- --help` | Ayuda para usar el CLI de Astro                 |

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── *.avif              # Imágenes optimizadas
│   └── favicon.svg         # Favicon
├── src/
│   ├── components/         # Componentes reutilizables
│   ├── content/           
│   │   ├── career/        # Apuntes de materias (MDX)
│   │   └── projects/      # Datos de proyectos (JSON)
│   ├── layouts/           # Plantillas de página
│   ├── pages/             # Rutas del sitio
│   └── types/             # Definiciones de TypeScript
├── astro.config.mjs       # Configuración de Astro
└── tailwind.config.mjs    # Configuración de Tailwind
```

## 🤝 Contribuir

### Agregar un Proyecto
1. Crea un issue con la etiqueta "nuevo-proyecto"
2. Incluye: título, descripción, tecnologías, enlace y repositorio
3. El equipo revisará y agregará el proyecto

### Agregar Apuntes
1. Fork del repositorio
2. Agrega archivos MDX en `src/content/career/`
3. Sigue la estructura de frontmatter existente
4. Crea un Pull Request

### Reportar Problemas
- Usa GitHub Issues para reportar bugs
- Proporciona detalles del problema y pasos para reproducirlo

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👥 Equipo

- **Felipe Arce** - [@arceprogramando](https://github.com/arceprogramando)

## 🔗 Enlaces

- **Sitio Web**: [utn-cursoingreso.vercel.app](https://utn-cursoingreso.vercel.app/)
- **Repositorio**: [GitHub](https://github.com/arceprogramando/utn_cursoingreso)

---

⭐ Si este proyecto te resulta útil, ¡considera darle una estrella en GitHub!
