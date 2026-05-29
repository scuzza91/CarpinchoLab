export const members = [
  {
    slug: 'roji',
    fullName: 'Rocío (Roji)',
    shortName: 'Roji',
    role: 'Documentación · accesibilidad',
    avatar: '/img/Rocio.png',
    city: 'CABA, Ciudad Autónoma de Buenos Aires',
    age: 37,
    github: 'https://github.com/',
    tp1Url: 'https://roji-web-ok.vercel.app/',
    bio: 'Enfocada en comunicación técnica, documentación clara y buenas prácticas de accesibilidad en interfaces web.',
    hobbies:
      'Fotografía urbana liviana, andar en bici y construir cosas con el equipo.',
    skills: [
      { name: 'Comunicación técnica', level: 88 },
      { name: 'Markdown / README', level: 92 },
      { name: 'HTML semántico', level: 75 },
      { name: 'Accesibilidad (a11y)', level: 70 },
      { name: 'Organización de repo', level: 85 },
    ],
    projects: [
      {
        title: 'TP1 CarpinchoLab',
        description: 'Sitio estático multipágina con navegación accesible y bitácora.',
        image: '/img/carpincho-entrada.png',
      },
      {
        title: 'Guía de estilos',
        description: 'Definición de paleta, tipografías y componentes visuales del equipo.',
        image: '/img/Rocio.png',
      },
      {
        title: 'Checklist de entrega',
        description: 'Plantillas de revisión antes de cada milestone del curso.',
        image: '/img/readme/Portada.png',
      },
    ],
    techStack: [
      { icon: 'fa-brands fa-html5', label: 'HTML5' },
      { icon: 'fa-brands fa-css3-alt', label: 'CSS3' },
      { icon: 'fa-brands fa-markdown', label: 'Markdown' },
      { icon: 'fa-brands fa-github', label: 'GitHub' },
      { icon: 'fa-solid fa-universal-access', label: 'a11y' },
      { icon: 'fa-brands fa-figma', label: 'Figma' },
    ],
    social: [
      { icon: 'fa-brands fa-github', label: 'GitHub', url: 'https://github.com/' },
      { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', url: 'https://linkedin.com/' },
      { icon: 'fa-solid fa-envelope', label: 'Email', url: 'mailto:roji@ejemplo.com' },
    ],
    movies: [
      'Volver al futuro (Robert Zemeckis)',
      'Esperando la carroza (Alejandro Doria)',
      'La ciénaga (Lucrecia Martel)',
    ],
    albums: ['Jessico — Babasónicos', 'Debí tirar más fotos — Bad Bunny', 'Las 4 estaciones — Vivaldi'],
  },
  {
    slug: 'fran',
    fullName: 'Francisco (Fran)',
    shortName: 'Fran',
    role: 'Responsive · CSS · JavaScript',
    avatar: '/img/Fran.png',
    city: 'Ciudad Autónoma de Buenos Aires',
    age: 24,
    github: 'https://github.com/',
    tp1Url: 'https://tp-frontend-wine.vercel.app/',
    bio: 'Desarrollador frontend orientado a layout responsive, animaciones CSS y lógica en JavaScript/React.',
    hobbies:
      'Armar interfaces en HTML/CSS por curiosidad, música mientras depuro en consola y salir a correr.',
    skills: [
      { name: 'CSS Grid / Flexbox', level: 90 },
      { name: 'Media queries', level: 88 },
      { name: 'JavaScript', level: 82 },
      { name: 'React', level: 78 },
      { name: 'Git', level: 80 },
    ],
    projects: [
      {
        title: 'Dashboard TP2',
        description: 'Migración a React con sidebar, rutas y componentes reutilizables.',
        image: '/img/Fran.png',
      },
      {
        title: 'Explorador JSON',
        description: 'Filtrado en tiempo real sobre dataset local de 20 recursos.',
        image: '/img/carpincho-entrada.png',
      },
      {
        title: 'Integración API',
        description: 'Consumo asíncrono con estados de carga, error y paginación.',
        image: '/img/readme/Bitacora.png',
      },
    ],
    techStack: [
      { icon: 'fa-brands fa-react', label: 'React' },
      { icon: 'fa-brands fa-js', label: 'JavaScript' },
      { icon: 'fa-brands fa-css3-alt', label: 'CSS3' },
      { icon: 'fa-brands fa-node-js', label: 'Node' },
      { icon: 'fa-brands fa-git-alt', label: 'Git' },
      { icon: 'fa-solid fa-mobile-screen', label: 'Responsive' },
    ],
    social: [
      { icon: 'fa-brands fa-github', label: 'GitHub', url: 'https://github.com/' },
      { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', url: 'https://linkedin.com/' },
      { icon: 'fa-brands fa-dev', label: 'Dev.to', url: 'https://dev.to/' },
    ],
    movies: ['Hércules (Ron Clements)', 'Star Wars (George Lucas)', 'El señor de los anillos (Peter Jackson)'],
    albums: [
      'Cabalgata de las Walkirias — Wagner',
      'Random Access Memories — Daft Punk',
      'Volver a empezar — Alejandro Lerner',
    ],
  },
  {
    slug: 'cin',
    fullName: 'Cintia (Cin)',
    shortName: 'Cin',
    role: 'Estética · pruebas en móvil',
    avatar: '/img/Cintia.png',
    city: 'Libertador San Martín, Entre Ríos',
    age: 31,
    github: 'https://github.com/',
    tp1Url: 'https://mi-portfolio-three-gamma.vercel.app/',
    bio: 'Diseño visual, paleta coherente y validación en dispositivos reales para experiencias cuidadas.',
    hobbies: 'Leer, jugar al Sims y cuidar a mi bebé.',
    skills: [
      { name: 'Dirección de arte', level: 86 },
      { name: 'Paleta y tipografía', level: 90 },
      { name: 'Figma básico', level: 72 },
      { name: 'Pruebas móvil', level: 84 },
      { name: 'Ilustración vectorial', level: 68 },
    ],
    projects: [
      {
        title: 'Sistema visual CarpinchoLab',
        description: 'Identidad oscura con acento mint y mascota carpincho.',
        image: '/img/Cintia.png',
      },
      {
        title: 'Galería interactiva',
        description: 'Grid con lightbox, zoom y navegación por teclado.',
        image: '/img/carpincho-entrada.png',
      },
      {
        title: 'Portfolio personal',
        description: 'Sitio individual desplegado en Vercel.',
        image: '/img/readme/Perfil_individual.png',
      },
    ],
    techStack: [
      { icon: 'fa-brands fa-figma', label: 'Figma' },
      { icon: 'fa-brands fa-css3-alt', label: 'CSS3' },
      { icon: 'fa-solid fa-palette', label: 'Color' },
      { icon: 'fa-solid fa-pen-nib', label: 'UI' },
      { icon: 'fa-solid fa-image', label: 'Assets' },
      { icon: 'fa-brands fa-react', label: 'React' },
    ],
    social: [
      { icon: 'fa-brands fa-github', label: 'GitHub', url: 'https://github.com/' },
      { icon: 'fa-brands fa-instagram', label: 'Instagram', url: 'https://instagram.com/' },
      { icon: 'fa-brands fa-behance', label: 'Behance', url: 'https://behance.net/' },
    ],
    movies: ['Harry Potter (David Yates)', 'Yo antes de ti (Thea Sharrock)', 'Diario de una pasión (Nick Cassavetes)'],
    albums: [
      'Lo que te conté mientras dormías — La Oreja de Van Gogh',
      'Pies descalzos — Shakira',
      'Amor prohibido — Selena',
    ],
  },
];

export function getMemberBySlug(slug) {
  return members.find((m) => m.slug === slug);
}
