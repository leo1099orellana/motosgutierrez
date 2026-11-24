// Las 3 tarjetas de "Servicios". `message` es el texto que se precarga en WhatsApp
// al tocar "Consultar". `icon` es el nombre de un ícono de src/components/icons.jsx.

export const services = [
  {
    id: 'service',
    icon: 'wrench',
    title: 'Service',
    intro: 'El mantenimiento que tu moto necesita para no dejarte a pie.',
    items: [
      'Cambio de aceite y filtros',
      'Frenos: pastillas, discos y líquido',
      'Cadena y kit de transmisión',
      'Afinación completa',
    ],
    message: 'Hola, quiero pedir turno para el service de mi moto',
  },
  {
    id: 'reparacion',
    icon: 'engine',
    title: 'Reparación',
    intro: 'Si hace un ruido raro o no arranca, la revisamos a fondo.',
    items: ['Motor', 'Sistema eléctrico', 'Suspensión', 'Diagnóstico'],
    message: 'Hola, quiero consultar por una reparación para mi moto',
  },
  {
    id: 'limpieza',
    icon: 'drop',
    title: 'Limpieza',
    intro: 'Sale como el día que la sacaste de la concesionaria.',
    items: ['Lavado completo', 'Limpieza de motor', 'Detailing', 'Protección de pintura'],
    message: 'Hola, quiero consultar por limpieza y detailing para mi moto',
  },
];
