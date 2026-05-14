/**
 * main.js — VitalTrek interaction and i18n module
 * NexumDevs · UPC 2026
 */

/**
 * Active language code.
 * Default is English as required by the i18n statement.
 * @type {string}
 */
let currentLanguage = 'en';

/**
 * Translation strings for all supported locales.
 * Supported: 'en' (en_US), 'es_419' (Latin American Spanish).
 * Keys follow the pattern: section.element-description
 * @type {Object.<string, Object.<string, string>>}
 */
const translations = {

  /* ================================================
     english — en_US (default)
  ================================================ */
  en: {

    /* navbar */
    'nav.tourists':  'Tourists',
    'nav.agencies':  'Agencies',
    'nav.ecosystem': 'Ecosystem',
    'nav.plans':     'Plans',
    'nav.about':     'About us',
    'nav.join':      'Join',

    /* hero */
    'hero.badge':        'IoT platform for extreme adventure tourism in Peru',
    'hero.title-line':   'Explore more.',
    'hero.title-italic': 'Worry ',
    'hero.title-bold':   'less.',
    'hero.description':  'VitalTrek connects adventurous tourists and tour agencies in a smart ecosystem that monitors location, vital signs, and progress in real time, even without a signal.',
    'hero.cta-tourist':  'I am a tourist',
    'hero.cta-agency':   'I have an agency',

    /* problem section */
    'problem.tag':                  'The Problem',
    'problem.title-main':           'Adventure tourism ',
    'problem.title-accent':         'has real risks.',
    'problem.description':          'The agencies manage remote groups using radios and phone calls. The trekkers get lost, suffer altitude sickness, or experience medical emergencies with no way to alert others in time. There\'s no tracking, no history, and no digital experience to build tourist loyalty.',
    'problem.stat-tourists-number': '4.2M',
    'problem.stat-tourists-desc':   'Foreign tourists visit Peru annually, many for extreme adventure.',
    'problem.stat-iot-number':      '0%',
    'problem.stat-iot-desc':        'Local agencies use platforms with integrated IoT monitoring',
    'problem.stat-days-number':     '3+',
    'problem.stat-days-desc':       'Average number of days for a trek without visibility for the agency',
    'problem.stat-liability-desc':  'Legal liability for incidents without an active monitoring system',

    /* tourists section */
    'tourists.tag':                  'For Adventurous Tourists',
    'tourists.title-pre':            'Your smart ',
    'tourists.title-accent':         'adventure partner.',
    'tourists.description':          'VitalTrek transforms your smartphone into a personal navigation, tracking, and security system. Explore with confidence knowing that someone always knows your location, even without internet access.',
    'tourists.offline-nav-title':    'Complete offline navigation',
    'tourists.offline-nav-desc':     'Download maps and routes before you leave. Works in areas without signal using native GPS.',
    'tourists.wearable-title':       'Wearable device with vital signs',
    'tourists.wearable-desc':        'Pulse, oxygenation, and temperature are automatically synchronized with your guide and agency.',
    'tourists.experience-title':     'Record of your experience',
    'tourists.experience-desc':      'Photos, notes, and achievements from the tour are automatically saved with geographical context.',
    'tourists.contextual-info-title':'Contextual tour information',
    'tourists.contextual-info-desc': 'History, wildlife, altitude, climate and points of interest as you progress along the route.',
    'tourists.feat-maps-title':      'Offline Maps',
    'tourists.feat-maps-desc':       'Downloadable maps with checkpoints, danger zones, and points of interest. Works offline.',
    'tourists.feat-health-title':    'Health on the Road',
    'tourists.feat-health-desc':     'Continuous monitoring of heart rate and O₂ saturation. Automatic alerts for critical values.',
    'tourists.feat-gps-title':       'GPS Tracking',
    'tourists.feat-gps-desc':        'Real-time position shared with your guide and emergency contacts, always.',
    'tourists.feat-memory-title':    'Memory Maps',
    'tourists.feat-memory-desc':     'Geotagged photos and videos shared with other travelers at the same route points.',

    /* agencies section */
    'agencies.tag':                   'For the Tours Agencies',
    'agencies.title':                 'Manage all your tours from one place.',
    'agencies.description':           'VitalTrek gives your agency a real-time command center. Monitor groups, receive alerts for anomalies, and respond before a problem becomes an emergency.',
    'agencies.feat-dashboard-title':  'Live Dashboard',
    'agencies.feat-dashboard-desc':   'View all your groups on a unified map with progress and health status.',
    'agencies.feat-alerts-title':     'Automatic Alerts',
    'agencies.feat-alerts-desc':      'AI detects anomalies and notifies the guide and operator before climbing.',
    'agencies.feat-reports-title':    'Post-tour Reports',
    'agencies.feat-reports-desc':     'Complete metrics for each tour to optimize routes and experiences.',
    'agencies.feat-sync-title':       'Asynchronous Sync',
    'agencies.feat-sync-desc':        'Operates without continuous internet. Data is synchronized when a signal is available.',

    /* ecosystem section */
    'ecosystem.tag':              'Technology',
    'ecosystem.title':            'VitalTrek IoT Ecosystem',
    'ecosystem.description':      'An integrated ecosystem of hardware and software that captures, synchronizes, and displays data from each adventure in real time or offline.',
    'ecosystem.wearables-title':  'IoT Wearables',
    'ecosystem.wearables-desc':   'Compact devices that capture pulse, SpO₂, body temperature and GPS location with long battery life.',
    'ecosystem.bluetooth-title':  'Bluetooth Checkpoints',
    'ecosystem.bluetooth-desc':   'Beacons installed on key routes that record the passage of each tourist and relay data even without WiFi.',
    'ecosystem.mobile-title':     'Mobile App',
    'ecosystem.mobile-desc':      'Offline navigation, experience recording, and contextual tour information for tourists.',
    'ecosystem.web-title':        'Web Platform',
    'ecosystem.web-desc':         'Dashboard for agencies with live maps, automatic alerts and detailed reports for each tour.',

    /* plans section — headers */
    'plans.tag':             'Plans',
    'plans.title':           'Plans for every adventure',
    'plans.subtitle':        'Transparent, no surprises. The IoT is always provided by the agency, the tourist only needs the app.',
    'plans.toggle-tourists': 'Tourists',
    'plans.toggle-agencies': 'Agencies',

    /* explorer tourist plan */
    'plans.explorer.tier':               'Explorer',
    'plans.explorer.title':              'Free app for everyone',
    'plans.explorer.description':        'Everything essential to participate in an agency-managed tour. No cost, no card.',
    'plans.explorer.price':              'Free',
    'plans.explorer.note':               '',
    'plans.explorer.group-navigation':   'On-route navigation',
    'plans.explorer.feat-offline-map':   'Downloadable offline route map (no signal)',
    'plans.explorer.feat-checkpoints':   'Checkpoints marked on the map',
    'plans.explorer.feat-danger-zones':  'Danger zones visible on route',
    'plans.explorer.feat-gps':           'Your GPS position in real time',
    'plans.explorer.group-health':       'Health via agency watch',
    'plans.explorer.feat-heart-rate':    'View your current heart rate',
    'plans.explorer.feat-oxygen':        'View your oxygen saturation (SpO₂)',
    'plans.explorer.feat-auto-alerts':   'Automatic alerts to agency if anomaly',
    'plans.explorer.group-record':       'Trip record',
    'plans.explorer.feat-photos':        'Upload photos during route up to 20 photos',
    'plans.explorer.feat-geo-photos':    'View geo-contextual photos of other travelers',
    'plans.explorer.cta':                'Download here',

    /* trekker tourist plan */
    'plans.trekker.tier':                   'Trekker',
    'plans.trekker.title':                  'The complete experience',
    'plans.trekker.description':            'For the adventurer who wants to record and relive every moment of their expedition.',
    'plans.trekker.price':                  'S/19',
    'plans.trekker.note':                   'Monthly | 7-day free trial, no commitment',
    'plans.trekker.group-navigation':       'On-route navigation',
    'plans.trekker.feat-includes-explorer': 'Everything in Explorer plan',
    'plans.trekker.feat-unlimited-routes':  'Unlimited downloadable routes',
    'plans.trekker.feat-history':           'Completed routes history',
    'plans.trekker.group-health':           'Health via agency watch',
    'plans.trekker.feat-realtime-vitals':   'Heart rate and SpO₂ in real time',
    'plans.trekker.feat-vitals-graph':      'Historical vital signs graph for the tour',
    'plans.trekker.feat-emergency-alerts':  'Automatic alerts to agency and emergency contact',
    'plans.trekker.feat-emergency-contacts':'Up to 3 emergency contacts',
    'plans.trekker.group-record':           'Trip record',
    'plans.trekker.feat-unlimited-photos':  'Unlimited photos with auto geo-tag',
    'plans.trekker.feat-videos':            'Videos during the route up to 10 clips',
    'plans.trekker.feat-journal':           'Auto-generated travel journal at end of tour',
    'plans.trekker.feat-export-journal':    'Export journal in PDF or share link',
    'plans.trekker.cta':                    'Try 7 days free',

    /* expedition tourist plan */
    'plans.expedition.tier':                  'Expedition',
    'plans.expedition.title':                 'For frequent adventurers',
    'plans.expedition.description':           'Multiple tours per year, unlimited journals and the best multimedia experience of each adventure.',
    'plans.expedition.price':                 'S/39',
    'plans.expedition.note':                  'Monthly | Everything in Trekker, no limits',
    'plans.expedition.group-navigation':      'On-route navigation',
    'plans.expedition.feat-includes-trekker': 'Everything in Trekker plan',
    'plans.expedition.feat-public-profile':   'Public adventurer profile with your routes',
    'plans.expedition.group-health':          'Health via agency watch',
    'plans.expedition.feat-health-history':   'Accumulated health history across all tours',
    'plans.expedition.feat-unlimited-contacts':'Unlimited emergency contacts',
    'plans.expedition.feat-medical-summary':  'Exportable post-tour medical summary (PDF)',
    'plans.expedition.group-record':          'Trip record',
    'plans.expedition.feat-unlimited-media':  'Unlimited photos and videos',
    'plans.expedition.feat-unlimited-journals':'Auto-generated journals, no tour limit',
    'plans.expedition.feat-album':            'Personal album across all tours',
    'plans.expedition.feat-community':        'Contribute geo-contextual content to community',
    'plans.expedition.cta':                   'Choose Expedition',

    /* base agency plan */
    'plans.agency-base.tier':                'Base',
    'plans.agency-base.title':               'For agencies getting started',
    'plans.agency-base.description':         'Digitize your first tour operation with GPS monitoring and small group management.',
    'plans.agency-base.price':               'S/299',
    'plans.agency-base.note':                'Monthly | Includes initial setup onboarding',
    'plans.agency-base.group-hardware':      'IoT Hardware included',
    'plans.agency-base.feat-watches':        'Up to 5 smart watches managed',
    'plans.agency-base.feat-vitals-capture': 'Heart rate and SpO₂ capture on route',
    'plans.agency-base.feat-gps-watch':      'GPS geolocation by watch in real time',
    'plans.agency-base.feat-auto-sync':      'Auto sync when signal available',
    'plans.agency-base.group-panel':         'Web management panel',
    'plans.agency-base.feat-live-location':  'Real-time location of each active group',
    'plans.agency-base.feat-health-status':  'Health status by trekker (HR & SpO₂)',
    'plans.agency-base.feat-active-tours':   'Up to 2 simultaneous active tours',
    'plans.agency-base.feat-guides':         'Up to 3 registered guides',
    'plans.agency-base.feat-routes':         'Package and route management up to 5',
    'plans.agency-base.cta':                 'Get Started',

    /* pro agency plan */
    'plans.agency-pro.tier':                  'Pro',
    'plans.agency-pro.title':                 'Complete IoT operation',
    'plans.agency-pro.description':           'For agencies operating multiple simultaneous tours with full field control, including Bluetooth checkpoints on route.',
    'plans.agency-pro.price':                 'S/599',
    'plans.agency-pro.note':                  'Monthly | Includes Bluetooth checkpoint installation',
    'plans.agency-pro.group-hardware':        'IoT Hardware included',
    'plans.agency-pro.feat-watches':          'Up to 20 smart watches managed',
    'plans.agency-pro.feat-vitals-capture':   'Heart rate and SpO₂ capture on route',
    'plans.agency-pro.feat-gps':              'GPS geolocation in real time',
    'plans.agency-pro.feat-async-sync':       'Asynchronous sync (works without signal)',
    'plans.agency-pro.feat-bluetooth':        'Bluetooth checkpoints on route up to 10 posts',
    'plans.agency-pro.feat-checkpoint-record':'Automatic checkpoint passage record',
    'plans.agency-pro.group-panel':           'Web management panel',
    'plans.agency-pro.feat-live-map':         'Live map with all active groups',
    'plans.agency-pro.feat-health-realtime':  'Real-time health status per trekker',
    'plans.agency-pro.feat-unlimited-tours':  'Unlimited simultaneous active tours',
    'plans.agency-pro.feat-unlimited-guides': 'Unlimited registered guides',
    'plans.agency-pro.feat-management':       'Centralized guides, packages and IoT equipment management',
    'plans.agency-pro.feat-mobile-access':    'Panel accessible from web and mobile app',
    'plans.agency-pro.cta':                   'Try 7 days free',

    /* enterprise agency plan */
    'plans.agency-enterprise.tier':                    'Enterprise',
    'plans.agency-enterprise.title':                   'For large operators',
    'plans.agency-enterprise.description':             'Dedicated infrastructure, personalized hardware and 24/7 support for large-scale operations.',
    'plans.agency-enterprise.price':                   'Custom',
    'plans.agency-enterprise.note':                    'Talk to our team — Demo included',
    'plans.agency-enterprise.group-hardware':          'IoT Hardware at scale',
    'plans.agency-enterprise.feat-unlimited-watches':  'Unlimited smart watches',
    'plans.agency-enterprise.feat-unlimited-checkpoints':'Unlimited Bluetooth checkpoints',
    'plans.agency-enterprise.feat-custom-hardware':    'Hardware customizable by tour type and route',
    'plans.agency-enterprise.feat-maintenance':        'Preventive device maintenance included',
    'plans.agency-enterprise.group-platform':          'Dedicated platform',
    'plans.agency-enterprise.feat-includes-pro':       'Everything in Pro plan included',
    'plans.agency-enterprise.feat-private-server':     'Private server or dedicated cloud',
    'plans.agency-enterprise.feat-sla':                '99.9% uptime guaranteed SLA',
    'plans.agency-enterprise.feat-white-label':        'White-label (your brand on the platform)',
    'plans.agency-enterprise.feat-api':                'REST API to integrate with your CRM or ERP',
    'plans.agency-enterprise.group-support':           'Dedicated 24/7 support',
    'plans.agency-enterprise.feat-onboarding':         'Onboarding and on-site training',
    'plans.agency-enterprise.feat-support-line':       '24/7 support with dedicated direct line',
    'plans.agency-enterprise.feat-success-manager':    'Assigned customer success manager',
    'plans.agency-enterprise.cta':                     'Contact us',

    /* testimonials section */
    'testimonials.tag':            'Testimonies',
    'testimonials.title':          'What our users say',
    'testimonials.subtitle':       'Agencies and adventurers who are already familiar with VitalTrek share their perspective.',
    'testimonials.quote-mendoza':  '"As an agency, the hardest part was always knowing our groups were safe when there was no signal. With VitalTrek, that fear disappears. The Bluetooth checkpoints are fantastic."',
    'testimonials.name-mendoza':   'Carlos Mendoza',
    'testimonials.role-mendoza':   'Director of Operations · AventurAndes Tours',
    'testimonials.label-mendoza':  'Agency',
    'testimonials.quote-reyes':    '"I did the 4-day Choquequirao trek and the automatic journal it generated at the end was incredible. Photos, routes, my vital signs at each point. I wouldn\'t have documented it the same way on my own."',
    'testimonials.name-reyes':     'Sofia Reyes',
    'testimonials.role-reyes':     'Independent Trekker · Lima',
    'testimonials.label-reyes':    'Adventuress',
    'testimonials.quote-quispe':   '"Our foreign clients often ask us about security in remote areas. Showing them the real-time monitoring panel closes sales that we previously lost due to that fear."',
    'testimonials.name-quispe':    'Marco Quispe',
    'testimonials.role-quispe':    'CEO · Condor Expeditions Cusco',
    'testimonials.label-quispe':   'Agency',

    /* about section */
    'about.tag':                  'Who are we',
    'about.title':                'We are a team passionate about safe adventure.',
    'about.description':          'VitalTrek was born out of frustration at seeing adventure tourism grow without the technological tools it deserves. We are five Peruvian engineers who believe that exploring the world should be a free, connected, and safe experience for everyone.',
    'about.card-identity-label':  'Who we are',
    'about.card-identity-title':  'An IoT technology startup',
    'about.card-identity-desc':   'VitalTrek is a platform that integrates wearable hardware, smart checkpoints, and cloud-based software to transform the management of adventure tours in Peru and Latin America.',
    'about.card-mission-label':   'Mission',
    'about.card-mission-title':   'Connect adventure with safety',
    'about.card-mission-desc':    'Our mission is to provide tourists and agencies with the necessary technological tools to enjoy adventure experiences with real-time information, preventing risks and preserving the excitement of the unknown.',
    'about.card-vision-label':    'Vision',
    'about.card-vision-title':    'The global standard for smart tourism',
    'about.card-vision-desc':     'By 2028, to be the leading platform in Latin America for adventure tour management, expanding our IoT network to the continent\'s main trekking routes.',
    'about.team-title':           'Founding team',

    /* team members */
    'team.member-miler-name':      'Miler Rodriguez',
    'team.member-miler-role':      'Software engineer specializing in frontend development and user experience. Responsible for designing modern, intuitive interfaces.',
    'team.member-giancarlo-name':  'Giancarlo Verastigue',
    'team.member-giancarlo-role':  'Software engineer focused on backend and databases. Responsible for system logic and secure data handling.',
    'team.member-gabriel-name':    'Gabriel Vilchez',
    'team.member-gabriel-role':    'Software engineer specializing in full-stack development. Supports integration between frontend and backend.',
    'team.member-joaquin-name':    'Joaquin Alfaro',
    'team.member-joaquin-role':    'Software engineer specializing in mobile development. Designs and maintains applications for Android and iOS.',
    'team.member-edu-name':        'Edu Quispe',
    'team.member-edu-role':        'Software engineer specializing in DevOps and cybersecurity. Responsible for deployments, system monitoring, and platform security.',

    /* footer */
    'footer.tagline':       'IoT platform for extreme adventure tourism in Peru and Latin America.',
    'footer.nav-title':     'Navigation',
    'footer.nav-tourists':  'Tourists',
    'footer.nav-agencies':  'Agencies',
    'footer.nav-ecosystem': 'Ecosystem',
    'footer.nav-plans':     'Plans',
    'footer.nav-about':     'About us',
    'footer.social-title':  'Social networks',
    'footer.facebook':      'Facebook',
    'footer.tiktok':        'TikTok',
    'footer.instagram':     'Instagram',
    'footer.contact-title': 'Contacts',
    'footer.phone':         '+51 922119422',
    'footer.email':         'VitalTrekperu@gmail.com',
    'footer.location':      'Lima, Perú',
    'footer.copyright':     '© 2026 VitalTrek — NexumDevs. All rights reserved.',
    'footer.privacy':       'Privacy Policy',
    'footer.terms':         'Terms and conditions',

    /* join modal */
    'modal.title':    'Welcome to VitalTrek',
    'modal.subtitle': 'Select how you want to continue.',
    'modal.login':    'Sign in',
    'modal.register': 'Create account',
    'modal.guest':    'Continue as guest →'
  },

  /* ================================================
     latin american spanish — es_419
  ================================================ */
  es_419: {

    /* navbar */
    'nav.tourists':  'Turistas',
    'nav.agencies':  'Agencias',
    'nav.ecosystem': 'Ecosistema',
    'nav.plans':     'Planes',
    'nav.about':     'Nosotros',
    'nav.join':      'Únete',

    /* hero */
    'hero.badge':        'Plataforma IoT para turismo de aventura extrema en Perú',
    'hero.title-line':   'Explora más.',
    'hero.title-italic': 'Preocúpate ',
    'hero.title-bold':   'menos.',
    'hero.description':  'VitalTrek conecta turistas aventureros y agencias de tours en un ecosistema inteligente que monitorea ubicación, signos vitales y avance en tiempo real, incluso sin señal.',
    'hero.cta-tourist':  'Soy turista',
    'hero.cta-agency':   'Tengo una agencia',

    /* problem section */
    'problem.tag':                  'El Problema',
    'problem.title-main':           'El turismo de aventura ',
    'problem.title-accent':         'tiene riesgos reales.',
    'problem.description':          'Las agencias gestionan grupos remotos con radios y llamadas. Los trekkers se pierden, sufren mal de altura o tienen emergencias médicas sin poder avisar a tiempo. Sin rastreo, sin historial, sin experiencia digital que fidelice al turista.',
    'problem.stat-tourists-number': '4.2M',
    'problem.stat-tourists-desc':   'Turistas extranjeros visitan Perú anualmente, muchos para aventura extrema.',
    'problem.stat-iot-number':      '0%',
    'problem.stat-iot-desc':        'Agencias locales usan plataformas con monitoreo IoT integrado',
    'problem.stat-days-number':     '3+',
    'problem.stat-days-desc':       'Días promedio de un trek sin visibilidad para la agencia',
    'problem.stat-liability-desc':  'Responsabilidad legal por incidentes sin sistema de monitoreo activo',

    /* tourists section */
    'tourists.tag':                  'Para Turistas Aventureros',
    'tourists.title-pre':            'Tu inteligente ',
    'tourists.title-accent':         'compañero de aventura.',
    'tourists.description':          'VitalTrek transforma tu smartphone en un sistema personal de navegación, rastreo y seguridad. Explora con confianza sabiendo que alguien siempre conoce tu ubicación, incluso sin internet.',
    'tourists.offline-nav-title':    'Navegación offline completa',
    'tourists.offline-nav-desc':     'Descarga mapas y rutas antes de salir. Funciona en zonas sin señal usando GPS nativo.',
    'tourists.wearable-title':       'Dispositivo wearable con signos vitales',
    'tourists.wearable-desc':        'Pulso, oxigenación y temperatura se sincronizan automáticamente con tu guía y agencia.',
    'tourists.experience-title':     'Registro de tu experiencia',
    'tourists.experience-desc':      'Fotos, notas y logros del tour se guardan automáticamente con contexto geográfico.',
    'tourists.contextual-info-title':'Información contextual del tour',
    'tourists.contextual-info-desc': 'Historia, fauna, altitud, clima y puntos de interés conforme avanzas en la ruta.',
    'tourists.feat-maps-title':      'Mapas Offline',
    'tourists.feat-maps-desc':       'Mapas descargables con checkpoints, zonas de peligro y puntos de interés. Funciona sin conexión.',
    'tourists.feat-health-title':    'Salud en Ruta',
    'tourists.feat-health-desc':     'Monitoreo continuo de frecuencia cardíaca y saturación O₂. Alertas automáticas ante valores críticos.',
    'tourists.feat-gps-title':       'Rastreo GPS',
    'tourists.feat-gps-desc':        'Posición en tiempo real compartida con tu guía y contactos de emergencia, siempre.',
    'tourists.feat-memory-title':    'Mapas de Memoria',
    'tourists.feat-memory-desc':     'Fotos y videos geoetiquetados compartidos con otros viajeros en los mismos puntos de la ruta.',

    /* agencies section */
    'agencies.tag':                   'Para Agencias de Tours',
    'agencies.title':                 'Gestiona todos tus tours desde un solo lugar.',
    'agencies.description':           'VitalTrek le da a tu agencia un centro de mando en tiempo real. Monitorea grupos, recibe alertas de anomalías y responde antes de que un problema se convierta en emergencia.',
    'agencies.feat-dashboard-title':  'Dashboard en Vivo',
    'agencies.feat-dashboard-desc':   'Ve todos tus grupos en un mapa unificado con progreso y estado de salud.',
    'agencies.feat-alerts-title':     'Alertas Automáticas',
    'agencies.feat-alerts-desc':      'La IA detecta anomalías y notifica al guía y operador antes de escalar.',
    'agencies.feat-reports-title':    'Reportes Post-tour',
    'agencies.feat-reports-desc':     'Métricas completas de cada tour para optimizar rutas y experiencias.',
    'agencies.feat-sync-title':       'Sincronía Asincrónica',
    'agencies.feat-sync-desc':        'Opera sin internet continuo. Los datos se sincronizan cuando hay señal disponible.',

    /* ecosystem section */
    'ecosystem.tag':              'Tecnología',
    'ecosystem.title':            'Ecosistema IoT VitalTrek',
    'ecosystem.description':      'Un ecosistema integrado de hardware y software que captura, sincroniza y muestra datos de cada aventura en tiempo real u offline.',
    'ecosystem.wearables-title':  'Wearables IoT',
    'ecosystem.wearables-desc':   'Dispositivos compactos que capturan pulso, SpO₂, temperatura corporal y ubicación GPS con larga duración de batería.',
    'ecosystem.bluetooth-title':  'Checkpoints Bluetooth',
    'ecosystem.bluetooth-desc':   'Balizas instaladas en rutas clave que registran el paso de cada turista y retransmiten datos incluso sin WiFi.',
    'ecosystem.mobile-title':     'App Móvil',
    'ecosystem.mobile-desc':      'Navegación offline, registro de experiencias e información contextual del tour para turistas.',
    'ecosystem.web-title':        'Plataforma Web',
    'ecosystem.web-desc':         'Dashboard para agencias con mapas en vivo, alertas automáticas e informes detallados de cada tour.',

    /* plans section — headers */
    'plans.tag':             'Planes',
    'plans.title':           'Planes para cada aventura',
    'plans.subtitle':        'Transparente, sin sorpresas. El IoT siempre lo provee la agencia, el turista solo necesita la app.',
    'plans.toggle-tourists': 'Turistas',
    'plans.toggle-agencies': 'Agencias',

    /* explorer tourist plan */
    'plans.explorer.tier':               'Explorador',
    'plans.explorer.title':              'App gratuita para todos',
    'plans.explorer.description':        'Todo lo esencial para participar en un tour gestionado por tu agencia. Sin costo, sin tarjeta.',
    'plans.explorer.price':              'Gratis',
    'plans.explorer.note':               '',
    'plans.explorer.group-navigation':   'Navegación en ruta',
    'plans.explorer.feat-offline-map':   'Mapa de ruta descargable offline (sin señal)',
    'plans.explorer.feat-checkpoints':   'Checkpoints marcados en el mapa',
    'plans.explorer.feat-danger-zones':  'Zonas de peligro visibles en ruta',
    'plans.explorer.feat-gps':           'Tu posición GPS en tiempo real',
    'plans.explorer.group-health':       'Salud vía watch de la agencia',
    'plans.explorer.feat-heart-rate':    'Ver tu ritmo cardíaco actual',
    'plans.explorer.feat-oxygen':        'Ver tu saturación de oxígeno (SpO₂)',
    'plans.explorer.feat-auto-alerts':   'Alertas automáticas a la agencia si hay anomalía',
    'plans.explorer.group-record':       'Registro del viaje',
    'plans.explorer.feat-photos':        'Subida de fotos durante el recorrido hasta 20 fotos',
    'plans.explorer.feat-geo-photos':    'Ver fotos geo-contextuales de otros viajeros en cada punto',
    'plans.explorer.cta':                'Descargar aquí',

    /* trekker tourist plan */
    'plans.trekker.tier':                   'Trekker',
    'plans.trekker.title':                  'La experiencia completa',
    'plans.trekker.description':            'Para el aventurero que quiere registrar y revivir cada momento de su expedición.',
    'plans.trekker.price':                  'S/19',
    'plans.trekker.note':                   'Mensual | Prueba de 7 días gratis, sin compromiso',
    'plans.trekker.group-navigation':       'Navegación en ruta',
    'plans.trekker.feat-includes-explorer': 'Todo lo del plan Explorador',
    'plans.trekker.feat-unlimited-routes':  'Rutas descargables (ilimitadas)',
    'plans.trekker.feat-history':           'Historial de rutas completadas',
    'plans.trekker.group-health':           'Salud vía watch de la agencia',
    'plans.trekker.feat-realtime-vitals':   'Ritmo cardíaco y SpO₂ en tiempo real',
    'plans.trekker.feat-vitals-graph':      'Gráfico histórico de signos vitales del tour',
    'plans.trekker.feat-emergency-alerts':  'Alertas automáticas a agencia y contacto de emergencia',
    'plans.trekker.feat-emergency-contacts':'Contactos de emergencia hasta 3',
    'plans.trekker.group-record':           'Registro del viaje',
    'plans.trekker.feat-unlimited-photos':  'Fotos ilimitadas con geo-etiqueta automática',
    'plans.trekker.feat-videos':            'Vídeos durante el recorrido hasta 10 clips',
    'plans.trekker.feat-journal':           'Diario de viaje generado automáticamente al terminar el tour',
    'plans.trekker.feat-export-journal':    'Exportar diario en PDF o compartir link',
    'plans.trekker.cta':                    'Probar 7 días',

    /* expedition tourist plan */
    'plans.expedition.tier':                  'Expedición',
    'plans.expedition.title':                 'Para aventureros frecuentes',
    'plans.expedition.description':           'Múltiples tours al año, diarios ilimitados y la mejor experiencia multimedia de cada aventura.',
    'plans.expedition.price':                 'S/39',
    'plans.expedition.note':                  'Mensual | Todo lo de Trekker, sin ningún límite',
    'plans.expedition.group-navigation':      'Navegación en ruta',
    'plans.expedition.feat-includes-trekker': 'Todo lo del plan Trekker',
    'plans.expedition.feat-public-profile':   'Perfil de aventurero público con tus rutas',
    'plans.expedition.group-health':          'Salud vía watch de la agencia',
    'plans.expedition.feat-health-history':   'Histórico acumulado de salud por todos tus tours',
    'plans.expedition.feat-unlimited-contacts':'Contactos de emergencia (ilimitados)',
    'plans.expedition.feat-medical-summary':  'Resumen médico exportable post-tour (PDF)',
    'plans.expedition.group-record':          'Registro del viaje',
    'plans.expedition.feat-unlimited-media':  'Fotos y videos ilimitados',
    'plans.expedition.feat-unlimited-journals':'Diarios generados automáticamente, sin límite de tours',
    'plans.expedition.feat-album':            'Álbum personal acumulado de todos tus recorridos',
    'plans.expedition.feat-community':        'Contribuir con fotos/videos geo-contextuales a la comunidad',
    'plans.expedition.cta':                   'Elegir Expedición',

    /* base agency plan */
    'plans.agency-base.tier':                'Base',
    'plans.agency-base.title':               'Para agencias que empiezan',
    'plans.agency-base.description':         'Digitaliza tu primera operación de tours con monitoreo GPS y gestión de grupos pequeños.',
    'plans.agency-base.price':               'S/299',
    'plans.agency-base.note':                'Mensual | Incluye onboarding de configuración inicial',
    'plans.agency-base.group-hardware':      'Hardware IoT incluido',
    'plans.agency-base.feat-watches':        'Watches inteligentes gestionados hasta 5',
    'plans.agency-base.feat-vitals-capture': 'Captura de ritmo cardíaco y SpO₂ en ruta',
    'plans.agency-base.feat-gps-watch':      'Geolocalización GPS por watch en tiempo real',
    'plans.agency-base.feat-auto-sync':      'Sincronización automática cuando hay señal',
    'plans.agency-base.group-panel':         'Panel web de gestión',
    'plans.agency-base.feat-live-location':  'Ubicación en tiempo real de cada grupo activo',
    'plans.agency-base.feat-health-status':  'Estado de salud por trekker (FC y SpO₂)',
    'plans.agency-base.feat-active-tours':   'Tours activos simultáneos hasta 2',
    'plans.agency-base.feat-guides':         'Guías registrados hasta 3',
    'plans.agency-base.feat-routes':         'Gestión de paquetes y rutas hasta 5 rutas',
    'plans.agency-base.cta':                 'Comenzar',

    /* pro agency plan */
    'plans.agency-pro.tier':                  'Pro',
    'plans.agency-pro.title':                 'Operación completa con IoT',
    'plans.agency-pro.description':           'Para agencias que operan múltiples tours simultáneos con control total en campo, incluyendo checkpoints Bluetooth en ruta.',
    'plans.agency-pro.price':                 'S/599',
    'plans.agency-pro.note':                  'Mensual | Incluye instalación de checkpoints Bluetooth en tus rutas',
    'plans.agency-pro.group-hardware':        'Hardware IoT incluido',
    'plans.agency-pro.feat-watches':          'Watches inteligentes gestionados hasta 20',
    'plans.agency-pro.feat-vitals-capture':   'Captura de ritmo cardíaco y SpO₂ en ruta',
    'plans.agency-pro.feat-gps':              'Geolocalización GPS en tiempo real',
    'plans.agency-pro.feat-async-sync':       'Sincronización asíncrona (funciona sin señal)',
    'plans.agency-pro.feat-bluetooth':        'Checkpoints Bluetooth instalados en ruta hasta 10 postes',
    'plans.agency-pro.feat-checkpoint-record':'Registro automático de paso por checkpoint',
    'plans.agency-pro.group-panel':           'Panel web de gestión',
    'plans.agency-pro.feat-live-map':         'Mapa en vivo con todos los grupos activos',
    'plans.agency-pro.feat-health-realtime':  'Estado de salud en tiempo real por cada trekker',
    'plans.agency-pro.feat-unlimited-tours':  'Tours activos simultáneos ilimitados',
    'plans.agency-pro.feat-unlimited-guides': 'Guías registrados ilimitados',
    'plans.agency-pro.feat-management':       'Gestión centralizada de guías, paquetes y equipos IoT',
    'plans.agency-pro.feat-mobile-access':    'Panel accesible desde web y app móvil',
    'plans.agency-pro.cta':                   'Probar 7 días',

    /* enterprise agency plan */
    'plans.agency-enterprise.tier':                    'Empresa',
    'plans.agency-enterprise.title':                   'Para grandes operadoras',
    'plans.agency-enterprise.description':             'Infraestructura dedicada, hardware personalizado y soporte 24/7 para operaciones a gran escala.',
    'plans.agency-enterprise.price':                   'A medida',
    'plans.agency-enterprise.note':                    'Habla con nuestro equipo — Demo incluida',
    'plans.agency-enterprise.group-hardware':          'Hardware IoT a escala',
    'plans.agency-enterprise.feat-unlimited-watches':  'Watches inteligentes ilimitados',
    'plans.agency-enterprise.feat-unlimited-checkpoints':'Checkpoints Bluetooth ilimitados',
    'plans.agency-enterprise.feat-custom-hardware':    'Hardware personalizable por tipo de tour y ruta',
    'plans.agency-enterprise.feat-maintenance':        'Mantenimiento preventivo de dispositivos incluido',
    'plans.agency-enterprise.group-platform':          'Plataforma dedicada',
    'plans.agency-enterprise.feat-includes-pro':       'Todo lo del plan Pro incluido',
    'plans.agency-enterprise.feat-private-server':     'Servidor o nube privada dedicada',
    'plans.agency-enterprise.feat-sla':                'SLA garantizado 99.9% uptime',
    'plans.agency-enterprise.feat-white-label':        'White-label (tu marca en la plataforma)',
    'plans.agency-enterprise.feat-api':                'API REST para integrar con tu CRM o ERP',
    'plans.agency-enterprise.group-support':           'Soporte dedicado 24/7',
    'plans.agency-enterprise.feat-onboarding':         'Onboarding y capacitación presencial',
    'plans.agency-enterprise.feat-support-line':       'Soporte 24/7 con línea directa dedicada',
    'plans.agency-enterprise.feat-success-manager':    'Gerente de éxito de cliente asignado',
    'plans.agency-enterprise.cta':                     'Contáctanos',

    /* testimonials section */
    'testimonials.tag':            'Testimonios',
    'testimonials.title':          'Lo que dicen nuestros usuarios',
    'testimonials.subtitle':       'Agencias y aventureros que ya conocen VitalTrek comparten su perspectiva.',
    'testimonials.quote-mendoza':  '"Como agencia, lo más difícil siempre fue saber que nuestros grupos estaban seguros sin señal. Con VitalTrek, ese miedo desaparece. Los checkpoints Bluetooth son fantásticos."',
    'testimonials.name-mendoza':   'Carlos Mendoza',
    'testimonials.role-mendoza':   'Director de Operaciones · AventurAndes Tours',
    'testimonials.label-mendoza':  'Agencia',
    'testimonials.quote-reyes':    '"Hice el trek de 4 días a Choquequirao y el diario automático que generó al final fue increíble. Fotos, rutas, mis signos vitales en cada punto. No lo hubiera documentado igual por mi cuenta."',
    'testimonials.name-reyes':     'Sofia Reyes',
    'testimonials.role-reyes':     'Trekker Independiente · Lima',
    'testimonials.label-reyes':    'Aventurera',
    'testimonials.quote-quispe':   '"Nuestros clientes extranjeros nos preguntan frecuentemente sobre seguridad en zonas remotas. Mostrarles el panel de monitoreo en tiempo real cierra ventas que antes perdíamos por ese miedo."',
    'testimonials.name-quispe':    'Marco Quispe',
    'testimonials.role-quispe':    'CEO · Condor Expeditions Cusco',
    'testimonials.label-quispe':   'Agencia',

    /* about section */
    'about.tag':                  'Quiénes somos',
    'about.title':                'Somos un equipo apasionado por la aventura segura.',
    'about.description':          'VitalTrek nació de la frustración de ver crecer el turismo de aventura sin las herramientas tecnológicas que merece. Somos cinco ingenieros peruanos que creemos que explorar el mundo debe ser una experiencia libre, conectada y segura para todos.',
    'about.card-identity-label':  'Quiénes somos',
    'about.card-identity-title':  'Una startup de tecnología IoT',
    'about.card-identity-desc':   'VitalTrek es una plataforma que integra hardware wearable, checkpoints inteligentes y software en la nube para transformar la gestión de tours de aventura en Perú y América Latina.',
    'about.card-mission-label':   'Misión',
    'about.card-mission-title':   'Conectar aventura con seguridad',
    'about.card-mission-desc':    'Nuestra misión es proveer a turistas y agencias de las herramientas tecnológicas necesarias para disfrutar experiencias de aventura con información en tiempo real, previniendo riesgos.',
    'about.card-vision-label':    'Visión',
    'about.card-vision-title':    'El estándar global del turismo inteligente',
    'about.card-vision-desc':     'Para 2028, ser la plataforma líder en América Latina para la gestión de tours de aventura, expandiendo nuestra red IoT a las principales rutas de trekking del continente.',
    'about.team-title':           'Equipo fundador',

    /* team members */
    'team.member-miler-name':      'Miler Rodriguez',
    'team.member-miler-role':      'Ingeniero de software especializado en frontend y UX. Diseña interfaces modernas e intuitivas.',
    'team.member-giancarlo-name':  'Giancarlo Verastigue',
    'team.member-giancarlo-role':  'Ingeniero de software enfocado en backend y bases de datos. Responsable de la lógica del sistema.',
    'team.member-gabriel-name':    'Gabriel Vilchez',
    'team.member-gabriel-role':    'Ingeniero full-stack que soporta la integración entre frontend y backend.',
    'team.member-joaquin-name':    'Joaquin Alfaro',
    'team.member-joaquin-role':    'Especializado en desarrollo móvil. Diseña y mantiene apps para Android e iOS.',
    'team.member-edu-name':        'Edu Quispe',
    'team.member-edu-role':        'Especializado en DevOps y ciberseguridad. Responsable de despliegues y seguridad.',

    /* footer */
    'footer.tagline':       'Plataforma IoT para turismo de aventura extrema en Perú y América Latina.',
    'footer.nav-title':     'Navegación',
    'footer.nav-tourists':  'Turistas',
    'footer.nav-agencies':  'Agencias',
    'footer.nav-ecosystem': 'Ecosistema',
    'footer.nav-plans':     'Planes',
    'footer.nav-about':     'Nosotros',
    'footer.social-title':  'Redes Sociales',
    'footer.facebook':      'Facebook',
    'footer.tiktok':        'TikTok',
    'footer.instagram':     'Instagram',
    'footer.contact-title': 'Contactos',
    'footer.phone':         '+51 922119422',
    'footer.email':         'VitalTrekperu@gmail.com',
    'footer.location':      'Lima, Perú',
    'footer.copyright':     '© 2026 VitalTrek — NexumDevs. Todos los derechos reservados.',
    'footer.privacy':       'Política de privacidad',
    'footer.terms':         'Términos y condiciones',

    /* join modal */
    'modal.title':    'Bienvenido a VitalTrek',
    'modal.subtitle': 'Selecciona cómo deseas continuar.',
    'modal.login':    'Iniciar sesión',
    'modal.register': 'Crear cuenta',
    'modal.guest':    'Continuar como invitado →'
  }
};

/**
 * Labels announced to screen readers when the language changes.
 * Keyed by the locale that becomes active after toggling.
 * @type {Object.<string, string>}
 */
const langAnnouncements = {
  en:     'Language changed to English',
  es_419: 'Idioma cambiado a español'
};

/**
 * Aria-label text for the toggle button, describing what will happen on click.
 * Keyed by the locale that becomes active after toggling.
 * @type {Object.<string, string>}
 */
const langToggleLabels = {
  en:     'Switch to English',
  es_419: 'Cambiar a español'
};

/**
 * Visual label shown inside the language pill button.
 * Keyed by the target locale (what the button will switch to).
 * @type {Object.<string, string>}
 */
const langPillLabels = {
  en:     'EN',
  es_419: 'ES'
};

/**
 * Flag emoji shown inside the language pill button.
 * Keyed by the target locale.
 * @type {Object.<string, string>}
 */
const langPillFlags = {
  en:     '🇺🇸',
  es_419: '🇵🇪'
};

/**
 * Toggles the interface language between en_US and es_419.
 * Updates all [data-i18n] elements, the html lang attribute,
 * the language pill button, and announces the change via aria-live.
 * @returns {void}
 */
function toggleLanguage() {
  /* switch to the other locale */
  currentLanguage = currentLanguage === 'en' ? 'es_419' : 'en';

  /* update html lang attribute for screen readers and SEO */
  document.documentElement.lang = currentLanguage === 'en' ? 'en-US' : 'es-419';

  /* apply translations to every element that has a data-i18n key */
  const locale = translations[currentLanguage];
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (locale[key] !== undefined) {
      el.textContent = locale[key];
    }
  });

  /* update the pill button to show the opposite language (what it will switch to next) */
  const nextLocale = currentLanguage === 'en' ? 'es_419' : 'en';
  const codeEl     = document.getElementById('lang-code');
  const flagEl     = document.getElementById('lang-flag');
  const toggleBtn  = document.getElementById('lang-toggle-btn');

  if (codeEl) codeEl.textContent    = langPillLabels[nextLocale];
  if (flagEl) flagEl.textContent    = langPillFlags[nextLocale];
  if (toggleBtn) toggleBtn.setAttribute('aria-label', langToggleLabels[nextLocale]);

  /* announce language change to screen readers via aria-live region */
  const announcer = document.getElementById('lang-announcer');
  if (announcer) {
    announcer.textContent = langAnnouncements[currentLanguage];
  }
}

/**
 * Switches the visible plans tab between 'tourists' and 'agencies'.
 * Updates aria-selected on tab buttons and hidden attribute on panels.
 * @param {string} tab - Either 'tourists' or 'agencies'.
 * @returns {void}
 */
function switchPlans(tab) {
  const touristPanel = document.getElementById('tourist-plans');
  const agencyPanel  = document.getElementById('agency-plans');
  const touristBtn   = document.getElementById('btn-tourists');
  const agencyBtn    = document.getElementById('btn-agencies');

  if (!touristPanel || !agencyPanel || !touristBtn || !agencyBtn) return;

  /* show the selected panel, hide the other */
  if (tab === 'tourists') {
    touristPanel.classList.add('active');
    agencyPanel.classList.remove('active');
    touristPanel.removeAttribute('hidden');
    agencyPanel.setAttribute('hidden', '');

    /* update tab aria states */
    touristBtn.classList.add('active');
    agencyBtn.classList.remove('active');
    touristBtn.setAttribute('aria-selected', 'true');
    agencyBtn.setAttribute('aria-selected', 'false');
  } else {
    agencyPanel.classList.add('active');
    touristPanel.classList.remove('active');
    agencyPanel.removeAttribute('hidden');
    touristPanel.setAttribute('hidden', '');

    /* update tab aria states */
    agencyBtn.classList.add('active');
    touristBtn.classList.remove('active');
    agencyBtn.setAttribute('aria-selected', 'true');
    touristBtn.setAttribute('aria-selected', 'false');
  }
}

/**
 * Toggles the mobile navigation menu open or closed.
 * Updates aria-expanded on the hamburger button and the open class on the nav.
 * @returns {void}
 */
function toggleMobileMenu() {
  const nav = document.getElementById('nav-collapse');
  const btn = document.querySelector('.hamburger-button');

  if (!nav || !btn) return;

  nav.classList.toggle('open');
  btn.classList.toggle('active');

  /* keep aria-expanded in sync with the visual state */
  const isOpen = nav.classList.contains('open');
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

/**
 * Closes the mobile menu when the viewport widens past the mobile breakpoint.
 * Prevents the menu from staying open after a resize to desktop width.
 */
window.addEventListener('resize', function () {
  const nav = document.getElementById('nav-collapse');
  const btn = document.querySelector('.hamburger-button');

  if (window.innerWidth > 900 && nav && btn) {
    nav.classList.remove('open');
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  }
});

/**
 * Closes the mobile menu when the user taps any nav link.
 * Runs after the DOM is fully parsed.
 */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      const nav = document.getElementById('nav-collapse');
      const btn = document.querySelector('.hamburger-button');

      if (nav && btn) {
        nav.classList.remove('open');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
});

/**
 * Opens the join modal and traps focus inside it.
 * Called when the user clicks the navbar Join button.
 * @returns {void}
 */
function openJoinModal() {
  const modal = document.getElementById('join-modal');
  if (!modal) return;

  /* show the modal */
  modal.removeAttribute('hidden');

  /* prevent background scroll while modal is open */
  document.body.style.overflow = 'hidden';

  /* move focus to the close button for keyboard users */
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();
}

/**
 * Closes the join modal and returns focus to the Join button.
 * Called by the close button or by clicking the overlay background.
 * @returns {void}
 */
function closeJoinModal() {
  const modal = document.getElementById('join-modal');
  if (!modal) return;

  /* hide the modal */
  modal.setAttribute('hidden', '');

  /* restore background scroll */
  document.body.style.overflow = '';

  /* return focus to the Join button */
  const joinBtn = document.querySelector('.btn-join');
  if (joinBtn) joinBtn.focus();
}

/**
 * Closes the modal when the user clicks the dark overlay background.
 * Clicks on the modal card itself do not propagate to the overlay.
 */
document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('join-modal');
  const card    = overlay && overlay.querySelector('.modal-card');

  if (overlay && card) {
    /* click on overlay background closes the modal */
    overlay.addEventListener('click', function () {
      closeJoinModal();
    });

    /* prevent clicks inside the card from closing the modal */
    card.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }
});

/**
 * Closes the modal when the Escape key is pressed.
 * Standard keyboard accessibility pattern for dialogs.
 */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('join-modal');
    if (modal && !modal.hasAttribute('hidden')) {
      closeJoinModal();
    }
  }
});