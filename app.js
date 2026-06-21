/* ============ i18n DICTIONARY ============ */
const i18n = {
  en: {
    // Nav
    nav_features: 'Features', nav_roles: 'Roles', nav_ia: 'AI',
    nav_contact: 'Contact', nav_demo: 'View demo', nav_access: 'Request access',
    // Hero
    hero_title: 'The operating system of modern housekeeping',
    hero_sub: 'HotelFlow connects your entire team in real time - cleaners, supervisors, reception and maintenance - in one mobile app with built-in artificial intelligence.',
    ea_banner: '🚀 Early Adopter Program open for local properties: Only 3 spots left! <a href="#early-adopter">Learn More</a>',
    hero_cta_primary: 'Apply for Early Adopter',
    hero_cta_spots: 'Only 3 local spots available',
    hero_cta_secondary: 'See how it works',
    hero_trust_1: 'iOS & Android',
    hero_trust_2: 'No server installation',
    hero_trust_3: 'Works offline',
    // Phone mockup
    app_header_title: 'Board - Floor 3',
    app_header_badge: 'Live',
    app_tab_all: 'All', app_tab_departures: 'Departures', app_tab_prearrival: 'Pre-arrival',
    float_a_label: 'AI Agent', float_a_val: 'Roster generated',
    float_b_label: 'Check-in ready', float_b_val: 'Room 304 free',
    room_pending: 'Pending', room_assigned: 'Assigned',
    room_inprogress: 'In progress', room_completed: 'Completed ✓', room_inspection: 'Inspection',
    // Problem
    prob_title: 'The chaos of housekeeping has a real cost',
    prob_1_title: 'Manual coordination',
    prob_1_text: "Walkie-talkies, paper and constant calls to know which room is ready. Without a system, everything depends on one person's memory.",
    prob_2_title: 'Check-in delays',
    prob_2_text: "Without real-time visibility, reception doesn't know when a room will be available. The guest waits, the reputation suffers.",
    prob_3_title: 'No performance data',
    prob_3_text: 'Impossible to measure how long each team takes, how many rooms they cleaned or where supplies are lost. Without data, no improvement is possible.',
    // How it works
    how_title: 'A clear workflow for every role',
    how_sub: 'Every team member sees exactly what they need, at the exact right moment.',
    step_1_num: '01', step_1_title: 'The shift begins',
    step_1_text: 'The supervisor opens the cleaning session. The system automatically assigns rooms by priority: departures first, then pre-arrivals.',
    step_2_num: '02', step_2_title: 'The cleaner receives their room',
    step_2_text: 'Zen mode: a single card with the room number, cleaning type and a start button. No distractions.',
    step_3_num: '03', step_3_title: 'Scans the door with NFC',
    step_3_text: 'On arrival, they scan the NFC tag on the door. The cleaning timer starts automatically.',
    step_4_num: '04', step_4_title: 'Supervisor inspects',
    step_4_text: 'When done, if supervisors are active, the room moves to Inspection. The supervisor runs the checklist on their phone and approves or rejects.',
    step_5_num: '05', step_5_title: 'Reception sees status live',
    step_5_text: "As soon as it's approved, reception sees the room as Completed and can assign the check-in immediately.",
    // Features
    feat_title: 'Everything your operation needs',
    feat_1_title: 'Real-time board',
    feat_1_text: 'Kanban-style view of all hotel rooms. Colour-coded by cleaning type: red (departure), violet (pre-arrival), orange (stayover), yellow (weekly) and more. Status visible to the whole team instantly.',
    feat_2_title: 'Personal AI Assistant',
    feat_2_text: 'An AI agent that acts as your personal assistant. Ask questions about room status and clients, and let it support your daily tasks with real-time information.',
    feat_3_title: 'Operational chat with AI',
    feat_3_text: 'Ask anything about the hotel\'s status in real time. <em>"How many rooms are left to clean?"</em>, <em>"What incidents are open on floor 3?"</em> The AI agent answers in seconds with real hotel context.',
    feat_4_title: 'Automatic prioritisation',
    feat_4_text: 'The algorithm orders rooms by urgency: next guest arrival time, cleaning type, time in queue and whether a guest is waiting. Zero manual decisions for the supervisor.',
    feat_5_title: 'NFC on room doors',
    feat_5_text: 'Cleaners scan NFC tags when entering and leaving. The timer starts and stops automatically. Real-time data feeds dashboard statistics.',
    feat_6_title: 'Works without internet',
    feat_6_text: "When there's no signal, actions are saved in an offline queue. When the connection is restored, everything syncs in order automatically. The team doesn't stop even if WiFi fails.",
    feat_7_title: 'Biometric login',
    feat_7_text: 'Face ID and Touch ID built in. Employees log in with fingerprint or facial recognition. No passwords to forget in the middle of a shift.',
    feat_8_title: 'Incident management',
    feat_8_text: 'Any role can report incidents with photo, priority and target role. Push notifications reach the responsible person in seconds with full context.',
    feat_9_title: 'Reports & analytics',
    feat_9_text: 'Dashboard with real KPIs: rooms cleaned today, average time by cleaning type, team performance, weekly activity. Real data, not estimates.',
    // Roles
    roles_title: 'One app, six different experiences',
    roles_sub: 'Each role sees only what they need. No noise, no confusion.',
    role_1_title: 'Admin',
    role_1_text: 'Complete hotel overview. Manages rooms, staff, inventory, cleaning types and analytics. Dashboard with 7 tabs: Overview, Rooms, Staff, Stock, Types, Board and Live. Quick-action FAB to add records, open AI chat and create alerts.',
    role_2_title: 'Supervisor',
    role_2_text: "Opens and closes cleaning shifts. Inspects completed rooms with visual checklist. Sees each team's live progress. Receives priority incident alerts. Can reject an inspection and return it to the cleaner.",
    role_3_title: 'Cleaner',
    role_3_text: 'Zen mode: one room at a time. Swipe to start, report supplies used, take incident photos, request extra time. No distractions from the rest of the hotel. Automatic timer via NFC.',
    role_4_title: 'Reception',
    role_4_text: 'Sees real-time status of all rooms. Can move guests between rooms, manage check-in/check-out, update guest status and consult the visual occupancy timeline.',
    role_5_title: 'Maintenance',
    role_5_text: 'Receives work orders automatically when assigned to an incident. Sees rooms in Maintenance state, updates the reason, takes photos of the problem and closes the order when resolved.',
    role_6_title: 'Houseman',
    role_6_text: 'Focuses on departure and pre-arrival rooms. Runs the linen checklist per the exact bed configuration of each room (King, Queen, Single, Cot). Marks individual tasks as completed.',
    // IA
    ia_badge: '🤖 AI Agent',
    ia_title: "Your hotel's AI companion - always by your side",
    ia_sub: 'Ask anything. Check metrics. Set alerts. The AI agent knows every room, every team member and every incident in real time.',
    ia_companion_title: 'One companion for every role',
    ia_companion_text: "Whether you're a supervisor monitoring team progress, reception waiting for a room, or an admin reviewing the day - the AI agent is one message away, 24/7.",
    ia_chip_1: 'Instant answers', ia_chip_2: 'Live metrics', ia_chip_3: 'Smart alerts', ia_chip_4: 'Voice',
    ia_cta: 'Try the AI Agent →',
    ia_online: 'Online · Real-time context',
    ia_placeholder: 'Ask about rooms, metrics or alerts…',
    ia_1_title: 'Instant answers',
    ia_1_text: "Ask about any room, team member or situation in natural language. The AI agent reads the live hotel state and responds in seconds - no dashboards to navigate.",
    ia_2_title: 'Live metrics',
    ia_2_text: 'Get on-demand KPIs: rooms cleaned, average cleaning time, team rankings, open incidents. Turn a single question into a full performance summary.',
    ia_3_title: 'Smart alerts',
    ia_3_text: '"Alert me if room 401 isn\'t done by 14:00." The AI agent sets it, monitors it and sends you a push notification - without you having to watch the board.',
    ia_4_title: 'Voice & hands-free',
    ia_4_text: "Speak directly to the AI agent when your hands are busy. It listens, understands the context and responds - no need to touch the screen.",
    // Tipos
    tipos_title: 'A system for every type of service',
    tipos_sub: 'HotelFlow understands the 8 most common housekeeping operations in the hotel sector.',
    tipo_1_name: 'Departure', tipo_1_desc: 'Checkout room - top priority',
    tipo_2_name: 'Pre-Arrival', tipo_2_desc: 'Guest arriving today - ready for check-in',
    tipo_3_name: 'Stayover', tipo_3_desc: 'Guest continuing - maintenance cleaning',
    tipo_4_name: 'Weekly Clean', tipo_4_desc: 'Weekly deep clean',
    tipo_5_name: 'Rubbish', tipo_5_desc: 'Quick rubbish collection',
    tipo_6_name: 'Day Use', tipo_6_desc: 'Hourly use',
    tipo_7_name: 'Holdover', tipo_7_desc: 'Guest staying longer',
    tipo_8_name: 'Turnover', tipo_8_desc: 'Quick changeover between guests',

    // Screenshots section
    ss_title: 'The real app - no filters',
    ss_sub: 'Every screenshot is from the live HotelFlow application. No mockups, no illustrations.',
    ss_tab_cleaner: 'Cleaner', ss_tab_supervisor: 'Supervisor', ss_tab_reception: 'Reception',
    ss_tab_houseman: 'Houseman', ss_tab_maintenance: 'Maintenance',
    ss_cleaner_title: 'Zen mode - one room at a time',
    ss_cleaner_text: 'The cleaner sees their next room, team progress, and can report issues or chat with the AI agent in one tap.',
    ss_supervisor_title: 'Complete visibility across the floor',
    ss_supervisor_text: 'The live room grid, inspection queue and team tracker - everything a supervisor needs to stay ahead of every shift.',
    ss_reception_title: 'Powerful web dashboard for reception',
    ss_reception_text: "The web app gives reception and admin a bird's-eye view: rooms, teams, live board - and the AI agent panel always on hand for instant answers.",
    ss_houseman_title: 'Linen, prep and supply requests',
    ss_houseman_text: 'From general requests to automatic linen calculations - the houseman has everything needed to support the cleaning teams across all groups.',
    ss_maintenance_title: 'Work orders & blocked rooms',
    ss_maintenance_text: 'Maintenance receives alerts the moment an incident is reported. Manage work orders, set priority levels and control which rooms are blocked from service.',
    ea_section_title: 'Join the Early Adopter Program',
    ea_section_sub: 'We are looking for 3 local partners to launch with. Exclusive benefits:',
    ea_ben_1_title: '1 Month Free',
    ea_ben_1_text: 'Full hands-on onboarding for your entire staff.',
    ea_ben_2_title: '1 Custom Feature',
    ea_ben_2_text: 'Built exclusively for your specific workflow at zero cost.',
    ea_ben_3_title: 'Direct Support',
    ea_ben_3_text: 'Direct line to our founding team.',
    // CTA & form
    cta_title: "Apply for the Early Adopter Program",
    cta_sub: "Accepting only 3 properties for the local beta. Request access and we'll contact you in under 24 hours.",
    form_name_label: 'Name', form_email_label: 'Email',
    form_hotel_label: 'Hotel / Number of rooms',
    form_name_placeholder: 'Your name',
    form_email_placeholder: 'you@hotel.com',
    form_hotel_placeholder: 'Hotel Mediterranean · 120 rooms',
    form_btn: 'Request access',
    form_note: 'No commitment · We reply in under 24h',
    form_success_title: '🎉 Request received!',
    form_success_text: "We'll contact you in under 24 hours",
    // Footer
    footer_tagline: 'The operating system of modern housekeeping.',
    footer_available: 'Available on iOS and Android',
    footer_copy: '© 2026 HotelFlow. All rights reserved.',
    footer_privacy: 'Privacy policy',
    // Meta
    meta_title: 'HotelFlow - Hotel housekeeping management with AI',
    meta_desc: 'Mobile app for hotels connecting cleaners, supervisors and reception in real time, with integrated AI for shifts and operations.',
  },
  es: {
    // Nav
    nav_features: 'Features', nav_roles: 'Roles', nav_ia: 'IA',
    nav_contact: 'Contacto', nav_demo: 'Ver demo', nav_access: 'Solicitar acceso',
    // Hero
    hero_title: 'El sistema operativo del housekeeping moderno',
    hero_sub: 'HotelFlow conecta a todo tu equipo en tiempo real - limpiadores, supervisores, recepción y mantenimiento - en una sola app móvil con inteligencia artificial integrada.',
    ea_banner: '🚀 Programa Early Adopter abierto para hoteles locales: ¡Solo 3 plazas! <a href="#early-adopter">Saber más</a>',
    hero_cta_primary: 'Aplicar al Early Adopter',
    hero_cta_spots: 'Solo 3 plazas locales disponibles',
    hero_cta_secondary: 'Ver cómo funciona',
    hero_trust_1: 'iOS & Android',
    hero_trust_2: 'Sin instalación en servidor',
    hero_trust_3: 'Funciona offline',
    // Phone mockup
    app_header_title: 'Tablero - Planta 3',
    app_header_badge: 'En vivo',
    app_tab_all: 'Todas', app_tab_departures: 'Salidas', app_tab_prearrival: 'Pre-llegada',
    float_a_label: 'Agente AI', float_a_val: 'Roster generado',
    float_b_label: 'Check-in listo', float_b_val: 'Hab. 304 libre',
    room_pending: 'Pendiente', room_assigned: 'Asignada',
    room_inprogress: 'En progreso', room_completed: 'Completada ✓', room_inspection: 'Inspección',
    // Problem
    prob_title: 'El caos del housekeeping tiene un coste real',
    prob_1_title: 'Coordinación manual',
    prob_1_text: 'Walkie-talkies, papel y llamadas constantes para saber qué habitación está lista. Sin sistema, todo depende de la memoria de una persona.',
    prob_2_title: 'Retrasos en check-in',
    prob_2_text: 'Sin visibilidad en tiempo real, recepción no sabe cuándo una habitación estará disponible. El huésped espera, la reputación sufre.',
    prob_3_title: 'Sin datos de rendimiento',
    prob_3_text: 'Imposible medir cuánto tarda cada equipo, cuántas habitaciones hicieron o dónde se pierden los suministros. Sin datos, no hay mejora posible.',
    // How it works
    how_title: 'Un flujo de trabajo claro para cada rol',
    how_sub: 'Cada miembro del equipo ve exactamente lo que necesita, en el momento exacto.',
    step_1_num: '01', step_1_title: 'El turno comienza',
    step_1_text: 'El supervisor abre la sesión de limpieza. El sistema asigna habitaciones automáticamente por prioridad: salidas primero, luego pre-llegadas.',
    step_2_num: '02', step_2_title: 'El limpiador recibe su habitación',
    step_2_text: 'En modo Zen: una sola tarjeta con el número de habitación, tipo de limpieza y un botón de inicio. Sin distracciones.',
    step_3_num: '03', step_3_title: 'Escanea la puerta con NFC',
    step_3_text: 'Al llegar, escanea la etiqueta NFC en la puerta. El temporizador de limpieza arranca automáticamente.',
    step_4_num: '04', step_4_title: 'El supervisor inspecciona',
    step_4_text: 'Al terminar, si hay supervisores activos, la habitación pasa a estado Inspection. El supervisor hace el checklist en su teléfono y aprueba o rechaza.',
    step_5_num: '05', step_5_title: 'Recepción ve el estado en vivo',
    step_5_text: 'En cuanto se aprueba, recepción ve la habitación como Completed y puede asignar el check-in de inmediato.',
    // Features
    feat_title: 'Todo lo que necesita tu operación',
    feat_1_title: 'Tablero en tiempo real',
    feat_1_text: 'Vista tipo Kanban de todas las habitaciones del hotel. Colores por tipo de limpieza: rojo (salida), violeta (pre-llegada), naranja (stayover), amarillo (semanal) y más. Estado visible para todo el equipo al instante.',
    feat_2_title: 'Asistente personal de IA',
    feat_2_text: 'Un agente con IA que actúa como tu asistente personal. Permite hacer preguntas del estado de las habitaciones y de los clientes, apoyando a cada rol para facilitar sus tareas con la información que necesitan.',
    feat_3_title: 'Chat operacional con IA',
    feat_3_text: 'Pregunta cualquier cosa sobre el estado del hotel en tiempo real. <em>"¿Cuántas habitaciones quedan por limpiar?"</em>, <em>"¿Qué incidentes están abiertos en planta 3?"</em> El agente AI responde en segundos con contexto real del hotel.',
    feat_4_title: 'Priorización automática',
    feat_4_text: 'El algoritmo ordena habitaciones por urgencia: hora de llegada del próximo huésped, tipo de limpieza, tiempo en cola y si hay huésped esperando. Cero decisiones manuales para el supervisor.',
    feat_5_title: 'NFC en puertas de habitación',
    feat_5_text: 'Los limpiadores escanean etiquetas NFC al entrar y salir. El cronómetro arranca y para automáticamente. Los datos de tiempo real alimentan las estadísticas del dashboard.',
    feat_6_title: 'Funciona sin internet',
    feat_6_text: 'Cuando no hay señal, las acciones se guardan en cola offline. Al recuperar conexión, todo se sincroniza en orden automáticamente. El equipo no se detiene aunque el WiFi falle.',
    feat_7_title: 'Login biométrico',
    feat_7_text: 'Face ID y Touch ID integrados. Los empleados entran con huella o reconocimiento facial. Sin contraseñas que olvidar en medio del turno.',
    feat_8_title: 'Gestión de incidencias',
    feat_8_text: 'Cualquier rol puede reportar incidencias con foto, prioridad y rol destinatario. Las notificaciones push llegan al responsable en segundos con todo el contexto.',
    feat_9_title: 'Reportes y analytics',
    feat_9_text: 'Dashboard con KPIs reales: habitaciones limpiadas hoy, tiempo promedio por tipo de limpieza, rendimiento por equipo, actividad semanal. Datos reales, no estimados.',
    // Roles
    roles_title: 'Una app, seis experiencias distintas',
    roles_sub: 'Cada rol ve solo lo que necesita. Sin ruido, sin confusión.',
    role_1_title: 'Admin',
    role_1_text: 'Visión completa del hotel. Gestiona habitaciones, personal, inventario, tipos de limpieza y analítica. Dashboard con 7 pestañas: Overview, Rooms, Staff, Stock, Types, Board y Live. FAB de acciones rápidas para añadir registros, abrir chat IA y crear alertas.',
    role_2_title: 'Supervisor',
    role_2_text: 'Abre y cierra turnos de limpieza. Inspecciona habitaciones terminadas con checklist visual. Ve el progreso en vivo de cada equipo. Recibe alertas de incidencias prioritarias. Puede rechazar una inspección y devolverla al limpiador.',
    role_3_title: 'Limpiador',
    role_3_text: 'Modo Zen: una habitación a la vez. Desliza para empezar, reporta suministros usados, toma fotos de incidencias, solicita tiempo extra. Sin distracciones del resto del hotel. Cronómetro automático por NFC.',
    role_4_title: 'Recepción',
    role_4_text: 'Ve el estado en tiempo real de todas las habitaciones. Puede mover huéspedes entre habitaciones, gestionar check-in/check-out, actualizar estado del huésped y consultar el timeline visual de ocupación.',
    role_5_title: 'Mantenimiento',
    role_5_text: 'Recibe órdenes de trabajo automáticamente al ser asignado en una incidencia. Ve habitaciones en estado Maintenance, actualiza el motivo, toma fotos del problema y cierra la orden cuando está resuelto.',
    role_6_title: 'Houseman',
    role_6_text: 'Se enfoca en habitaciones de salida y pre-llegada. Hace el checklist de ropa de cama según la configuración exacta de camas de cada habitación (King, Queen, Single, Cuna). Marca tareas individuales como completadas.',
    // IA
    ia_badge: '🤖 Agente AI',
    ia_title: 'Tu compañero de IA - siempre a tu lado',
    ia_sub: 'Pregunta lo que quieras. Consulta métricas. Configura alertas. El agente AI conoce cada habitación, cada miembro del equipo y cada incidencia en tiempo real.',
    ia_companion_title: 'Un compañero para cada rol',
    ia_companion_text: 'Seas supervisor revisando el progreso del equipo, recepción esperando una habitación o admin revisando el día - el agente AI está a un mensaje, las 24 horas.',
    ia_chip_1: 'Respuestas al instante', ia_chip_2: 'Métricas en vivo', ia_chip_3: 'Alertas inteligentes', ia_chip_4: 'Voz',
    ia_cta: 'Probar agente AI →',
    ia_online: 'Online · Contexto en tiempo real',
    ia_placeholder: 'Pregunta sobre habitaciones, métricas o alertas…',
    ia_1_title: 'Respuestas al instante',
    ia_1_text: 'Pregunta sobre cualquier habitación, miembro del equipo o situación en lenguaje natural. El agente AI lee el estado del hotel en vivo y responde en segundos - sin navegar por dashboards.',
    ia_2_title: 'Métricas en vivo',
    ia_2_text: 'KPIs bajo demanda: habitaciones limpiadas, tiempo medio de limpieza, ranking del equipo, incidencias abiertas. Una sola pregunta, un resumen completo de rendimiento.',
    ia_3_title: 'Alertas inteligentes',
    ia_3_text: '"Avísame si la habitación 401 no está lista a las 14:00." El agente AI la configura, la monitoriza y te manda una notificación push - sin que tengas que vigilar el tablero.',
    ia_4_title: 'Voz y manos libres',
    ia_4_text: 'Habla directamente con el agente AI cuando tienes las manos ocupadas. Entiende el contexto y responde sin que tengas que tocar la pantalla.',
    // Tipos
    tipos_title: 'Un sistema para cada tipo de servicio',
    tipos_sub: 'HotelFlow entiende las 8 operaciones de housekeeping más comunes del sector hotelero.',
    tipo_1_name: 'Departure', tipo_1_desc: 'Habitación de salida - máxima prioridad',
    tipo_2_name: 'Pre-Arrival', tipo_2_desc: 'Huésped llega hoy - lista para check-in',
    tipo_3_name: 'Stayover', tipo_3_desc: 'Huésped continúa - limpieza de mantenimiento',
    tipo_4_name: 'Weekly Clean', tipo_4_desc: 'Limpieza semanal profunda',
    tipo_5_name: 'Rubbish', tipo_5_desc: 'Recogida rápida de basura',
    tipo_6_name: 'Day Use', tipo_6_desc: 'Uso por horas',
    tipo_7_name: 'Holdover', tipo_7_desc: 'Huésped se queda más tiempo',
    tipo_8_name: 'Turnover', tipo_8_desc: 'Cambio rápido entre huéspedes',

    // Screenshots section
    ss_title: 'La app real - sin filtros',
    ss_sub: 'Cada captura proviene de la aplicación HotelFlow en vivo. Sin maquetas, sin ilustraciones.',
    ss_tab_cleaner: 'Limpiador', ss_tab_supervisor: 'Supervisor', ss_tab_reception: 'Recepción',
    ss_tab_houseman: 'Houseman', ss_tab_maintenance: 'Mantenimiento',
    ss_cleaner_title: 'Modo Zen - una habitación a la vez',
    ss_cleaner_text: 'El limpiador ve su próxima habitación, el progreso del equipo y puede reportar incidencias o chatear con el agente AI con un toque.',
    ss_supervisor_title: 'Visibilidad total del turno',
    ss_supervisor_text: 'El tablero de habitaciones en vivo, la cola de inspecciones y el rastreador del equipo - todo lo que el supervisor necesita para anticiparse.',
    ss_reception_title: 'Dashboard web para recepción',
    ss_reception_text: 'La app web da a recepción y administración una vista panorámica: habitaciones, equipos, tablero en vivo - y el panel de agente AI siempre a mano.',
    ss_houseman_title: 'Ropa de cama, preparación y solicitudes',
    ss_houseman_text: 'Desde solicitudes generales hasta cálculos de lencería automáticos - el houseman tiene todo lo necesario para apoyar a los equipos de limpieza.',
    ss_maintenance_title: 'Órdenes de trabajo y habitaciones bloqueadas',
    ss_maintenance_text: 'Mantenimiento recibe alertas en el momento en que se reporta una incidencia. Gestiona órdenes, establece prioridades y controla qué habitaciones están fuera de servicio.',
    ea_section_title: 'Únete al programa Early Adopter',
    ea_section_sub: 'Buscamos 3 hoteles locales para nuestro lanzamiento. Beneficios exclusivos:',
    ea_ben_1_title: '1 Mes de Acceso Gratuito',
    ea_ben_1_text: 'Onboarding presencial completo para todo tu equipo.',
    ea_ben_2_title: '1 Función a Medida',
    ea_ben_2_text: 'Desarrollada en exclusiva para tu operativa a coste cero.',
    ea_ben_3_title: 'Soporte Directo',
    ea_ben_3_text: 'Línea directa con nuestro equipo fundador.',
    // CTA & form
    cta_title: 'Aplica al programa Early Adopter',
    cta_sub: 'Aceptando solo 3 hoteles para la beta local. Solicita acceso y te contactamos en menos de 24 horas.',
    form_name_label: 'Nombre', form_email_label: 'Email',
    form_hotel_label: 'Nombre del hotel / número de habitaciones',
    form_name_placeholder: 'Tu nombre',
    form_email_placeholder: 'tu@hotel.com',
    form_hotel_placeholder: 'Hotel Mediterráneo · 120 hab.',
    form_btn: 'Solicitar acceso',
    form_note: 'Sin compromiso · Te respondemos en menos de 24h',
    form_success_title: '🎉 ¡Solicitud recibida!',
    form_success_text: 'Te contactaremos en menos de 24 horas',
    // Footer
    footer_tagline: 'El sistema operativo del housekeeping moderno.',
    footer_available: 'Disponible en iOS y Android',
    footer_copy: '© 2026 HotelFlow. Todos los derechos reservados.',
    footer_privacy: 'Política de privacidad',
    // Meta
    meta_title: 'HotelFlow - Gestión de housekeeping hotelero con IA',
    meta_desc: 'App móvil para hoteles que conecta limpiadores, supervisores y recepción en tiempo real, con IA integrada para turnos y operaciones.',
  },
};

/* ============ LANGUAGE ============ */
let currentLang = localStorage.getItem('hf-lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('hf-lang', lang);
  const dict = i18n[lang];
  if (!dict) return;

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update meta title and description
  if (dict.meta_title) document.title = dict.meta_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.meta_desc) metaDesc.setAttribute('content', dict.meta_desc);

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // HTML content (for elements with <em> tags etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  // Update lang-btn active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  // Restart chat in new language if already running
  if (window.__aiRestartChat) window.__aiRestartChat();

  // Update the form success message if visible
  const successEl = document.querySelector('.form-success');
  if (successEl && successEl.style.display !== 'none') {
    const nameInput = document.getElementById('f-name');
    const firstName = nameInput ? nameInput.value.trim().split(' ')[0] : '';
    const h3 = successEl.querySelector('h3');
    const p = successEl.querySelector('p');
    if (h3 && dict.form_success_title) h3.textContent = dict.form_success_title;
    if (p && dict.form_success_text) p.textContent = firstName ? `${dict.form_success_text}, ${firstName}.` : `${dict.form_success_text}.`;
  }
}

/* ============ DARK MODE ============ */
function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

let currentTheme = localStorage.getItem('hf-theme') || getSystemTheme();

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('hf-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

/* ============ INIT ============ */
(() => {
  // Apply saved or system preferences immediately
  applyTheme(currentTheme);
  applyLang(currentLang);

  // Apply tipo-badge inline CSS vars (JS fallback for older browsers)
  document.querySelectorAll('.tipo-badge[style]').forEach(el => {
    const bg = el.style.getPropertyValue('--tipo-bg');
    const border = el.style.getPropertyValue('--tipo-border');
    const textColor = el.style.getPropertyValue('--tipo-text');
    if (bg) el.style.backgroundColor = bg;
    if (border) el.style.borderColor = border;
    if (textColor) el.querySelectorAll('strong').forEach(s => s.style.color = textColor);
  });

  // --- Language switcher ---
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // --- Theme toggles (desktop + mobile) ---
  ['theme-toggle', 'theme-toggle-mobile'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('hf-theme')) applyTheme(e.matches ? 'dark' : 'light');
  });

  // --- Navbar scroll ---
  const nav = document.getElementById('nav');
  const onScroll = () => nav && nav.classList.toggle('is-scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile hamburger ---
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open', open);
      mobileMenu.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Reveal on scroll ---
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const parent = e.target.closest('.problema__grid, .features__grid, .roles__grid, .ia__grid, .tipos__grid, .stack__grid, .steps');
      const idx = parent ? Array.from(parent.querySelectorAll('.reveal')).indexOf(e.target) : 0;
      setTimeout(() => e.target.classList.add('is-in'), idx * 70);
      io.unobserve(e.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // --- Smooth anchor scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
    });
  });

  // --- Demo button ---
  const btnDemo = document.getElementById('btn-demo');
  if (btnDemo) {
    btnDemo.addEventListener('click', () => {
      const t = document.getElementById('como-funciona');
      if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
    });
  }

  // --- Contact form ---
  const form = document.getElementById('cta-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const nombre = document.getElementById('f-name').value.trim();
      const email = document.getElementById('f-email').value.trim();
      const hotel = document.getElementById('f-hotel').value.trim();
      if (!nombre || !email || !hotel) {
        const missing = form.querySelector(':invalid');
        if (missing) missing.focus();
        return;
      }
      const submitBtn = form.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      try {
        const res = await fetch('https://formspree.io/f/mojoalae', {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ nombre, email, hotel }),
        });
        if (!res.ok) throw new Error();
        const dict = i18n[currentLang];
        form.style.display = 'none';
        const success = document.createElement('div');
        success.className = 'form-success';
        success.style.display = 'block';
        success.innerHTML = `<h3>${dict.form_success_title}</h3><p>${dict.form_success_text}, ${nombre.split(' ')[0]}.</p>`;
        form.parentElement.appendChild(success);
      } catch {
        submitBtn.disabled = false;
        alert('Hubo un error al enviar. Por favor, inténtalo de nuevo.');
      }
    });
  }

  // --- AI Agent chat animation ---
  const chatScript = {
    en: [
      { user: 'How many rooms are left on floor 3?',
        bot:  '2 rooms pending on floor 3 - 302 (Pre-Arrival, guest at 15:00) and 306 (Stayover). María is 10 min away from 302.' },
      { user: 'Alert me if room 302 isn\'t ready by 14:30',
        bot:  '✅ Alert set for 14:30. I\'ll send you a push notification if room 302 is still pending.' },
      { user: 'How\'s the team performing today?',
        bot:  'Great progress! 18 rooms cleaned, avg 22 min each. Carlos leads with 6. 2 open incidents - both assigned.' },
    ],
    es: [
      { user: '¿Cuántas habitaciones quedan en planta 3?',
        bot:  'Quedan 2 habitaciones en planta 3 - la 302 (Pre-Arrival, llegada a las 15:00) y la 306 (Stayover). María está a 10 min de la 302.' },
      { user: 'Avísame si la 302 no está lista a las 14:30',
        bot:  '✅ Alerta configurada para las 14:30. Te enviaré una notificación si la habitación 302 sigue pendiente.' },
      { user: '¿Cómo va el rendimiento del equipo hoy?',
        bot:  '¡Muy bien! 18 habitaciones limpias, 22 min de media. Carlos lidera con 6. 2 incidencias abiertas - ambas asignadas.' },
    ],
  };

  let chatTimer = null;

  function runChat() {
    const body = document.getElementById('ai-chat-body');
    const promptEl = document.getElementById('ai-prompt');
    if (!body) return;

    clearTimeout(chatTimer);
    body.innerHTML = '';
    const script = chatScript[currentLang];
    let idx = 0;

    function step() {
      if (idx >= script.length) {
        // Pause then restart
        chatTimer = setTimeout(() => { body.innerHTML = ''; idx = 0; step(); }, 3200);
        return;
      }
      const { user, bot } = script[idx++];

      // 1. Show user typing in input bar
      if (promptEl) promptEl.textContent = '';
      let charIdx = 0;
      const typeInterval = setInterval(() => {
        if (promptEl) promptEl.textContent = user.slice(0, ++charIdx);
        if (charIdx >= user.length) clearInterval(typeInterval);
      }, 32);

      chatTimer = setTimeout(() => {
        clearInterval(typeInterval);
        if (promptEl) promptEl.textContent = i18n[currentLang].ia_placeholder || 'Ask…';

        // 2. User message bubble
        const userEl = document.createElement('div');
        userEl.className = 'chat-msg chat-msg--user';
        userEl.textContent = user;
        body.appendChild(userEl);
        requestAnimationFrame(() => requestAnimationFrame(() => userEl.classList.add('is-visible')));
        body.scrollTop = body.scrollHeight;

        // 3. Typing indicator
        chatTimer = setTimeout(() => {
          const typingEl = document.createElement('div');
          typingEl.className = 'chat-typing';
          typingEl.innerHTML = '<span></span><span></span><span></span>';
          body.appendChild(typingEl);
          body.scrollTop = body.scrollHeight;

          // 4. Bot response
          chatTimer = setTimeout(() => {
            typingEl.remove();
            const botEl = document.createElement('div');
            botEl.className = 'chat-msg chat-msg--bot';
            botEl.textContent = bot;
            body.appendChild(botEl);
            requestAnimationFrame(() => requestAnimationFrame(() => botEl.classList.add('is-visible')));
            body.scrollTop = body.scrollHeight;

            chatTimer = setTimeout(step, 2600);
          }, 1500);
        }, 700);
      }, user.length * 32 + 200);
    }

    step();
  }

  // Expose restart function for language switches
  window.__aiRestartChat = runChat;

  // Start chat when section enters viewport
  const chatObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { runChat(); chatObserver.unobserve(e.target); }
    });
  }, { threshold: 0.3 });
  const chatSection = document.getElementById('ia');
  if (chatSection) chatObserver.observe(chatSection);

  // --- Screenshots tabs ---
  const ssTabs = document.querySelectorAll('.ss-tab');
  const ssPanels = document.querySelectorAll('.ss-panel');
  ssTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const role = tab.dataset.role;
      ssTabs.forEach(t => t.classList.toggle('is-active', t.dataset.role === role));
      ssPanels.forEach(p => p.classList.toggle('is-active', p.dataset.role === role));
    });
  });

  // --- Animated room cards ---
  const roomCards = document.querySelectorAll('.room-card');
  if (roomCards.length) {
    const states = [
      { cls: 'room-card--departure', key: 'room_pending' },
      { cls: 'room-card--prearrival', key: 'room_assigned' },
      { cls: 'room-card--inprogress', key: 'room_inprogress' },
      { cls: 'room-card--completed', key: 'room_completed' },
      { cls: 'room-card--stayover', key: 'room_pending' },
    ];
    setInterval(() => {
      const card = roomCards[Math.floor(Math.random() * roomCards.length)];
      const state = states[Math.floor(Math.random() * states.length)];
      card.className = 'room-card ' + state.cls;
      const statusEl = card.querySelector('.room-card__status');
      if (statusEl) {
        const dict = i18n[currentLang];
        const text = dict[state.key] || state.key;
        if (state.cls === 'room-card--inprogress') {
          statusEl.className = 'room-card__status room-card__status--live';
          statusEl.innerHTML = `<span class="live-dot"></span><span data-i18n="${state.key}">${text}</span>`;
        } else {
          statusEl.className = 'room-card__status';
          statusEl.setAttribute('data-i18n', state.key);
          statusEl.textContent = text;
        }
      }
    }, 2400);
  }
})();
