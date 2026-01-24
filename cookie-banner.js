/**
 * Advanced Cookie Banner - Global Privacy Laws Compliant
 * Supports GDPR, CCPA, LGPD, 152-ФЗ РФ, PIPEDA, PIPL, APPI, PIPA and other privacy regulations
 * Multilingual support with 20+ languages and auto-detection
 * Anti-adblock protection and advanced features
 * https://github.com/SerGioPlay01/cookies_widget_sergioplay
 * 
 * @version 3.3.0
 * @author SerGioPlay01
 * @license MIT
 */

(function(window, document) {
    'use strict';

    // Performance optimization
    const raf = window.requestAnimationFrame || window.setTimeout;
    const now = Date.now || function() { return new Date().getTime(); };
    
    // Comprehensive language support with auto-detection
    const LANGUAGES = {
        'ru': {
            name: 'Русский',
            flag: '🇷🇺',
            title: 'Использование файлов cookie',
            description: 'Мы используем файлы cookie для улучшения работы сайта, анализа трафика и персонализации контента. Продолжая использовать сайт, вы соглашаетесь с нашей',
            privacyPolicy: 'политикой конфиденциальности',
            compliance: 'В соответствии с международными стандартами защиты данных.',
            settings: 'Настройки',
            decline: 'Отклонить',
            acceptAll: 'Принять все',
            acceptSelected: 'Принять выбранные',
            settingsTitle: 'Настройки файлов cookie',
            settingsDescription: 'Управляйте настройками файлов cookie. Вы можете включить или отключить различные категории cookie в соответствии с вашими предпочтениями.',
            necessary: 'Необходимые файлы cookie',
            necessaryDesc: 'Эти файлы cookie необходимы для работы сайта и не могут быть отключены.',
            functional: 'Функциональные файлы cookie',
            functionalDesc: 'Эти файлы cookie позволяют сайту предоставлять расширенную функциональность.',
            analytics: 'Аналитические файлы cookie',
            analyticsDesc: 'Эти файлы cookie помогают нам понять, как посетители взаимодействуют с сайтом.',
            marketing: 'Маркетинговые файлы cookie',
            marketingDesc: 'Эти файлы cookie используются для отображения релевантной рекламы.',
            performance: 'Производительность',
            performanceDesc: 'Эти файлы cookie помогают улучшить производительность сайта.',
            cancel: 'Отмена',
            saveSettings: 'Сохранить настройки',
            learnMore: 'Узнать больше',
            poweredBy: 'Работает на Cookie Widget',
            website: 'Сайт',
            github: 'GitHub',
            trackersDetected: 'Обнаружено трекеров',
            trackers: 'трекеров',
            detectedTrackers: 'Обнаруженные трекеры',
            scriptsBlocked: 'Заблокировано скриптов',
            scripts: 'скриптов',
            policyUpdated: 'Наша политика конфиденциальности была обновлена. Пожалуйста, ознакомьтесь с изменениями и обновите свои настройки.',
            consentExpired: 'Срок действия вашего согласия истек. Пожалуйста, обновите свои настройки конфиденциальности.'
        },
        'en': {
            name: 'English',
            flag: '🇺🇸',
            title: 'Cookie Usage',
            description: 'We use cookies to improve website performance, analyze traffic and personalize content. By continuing to use this site, you agree to our',
            privacyPolicy: 'privacy policy',
            compliance: 'In accordance with GDPR, CCPA, and other applicable data protection laws.',
            settings: 'Settings',
            decline: 'Decline',
            acceptAll: 'Accept All',
            acceptSelected: 'Accept Selected',
            settingsTitle: 'Cookie Settings',
            settingsDescription: 'Manage your cookie settings. You can enable or disable different categories of cookies according to your preferences.',
            necessary: 'Necessary Cookies',
            necessaryDesc: 'These cookies are necessary for the website to function and cannot be switched off.',
            functional: 'Functional Cookies',
            functionalDesc: 'These cookies enable the website to provide enhanced functionality and personalization.',
            analytics: 'Analytics Cookies',
            analyticsDesc: 'These cookies help us understand how visitors interact with the website.',
            marketing: 'Marketing Cookies',
            marketingDesc: 'These cookies are used to track visitors across websites for advertising purposes.',
            performance: 'Performance Cookies',
            performanceDesc: 'These cookies help improve website performance and loading times.',
            cancel: 'Cancel',
            saveSettings: 'Save Settings',
            learnMore: 'Learn More',
            poweredBy: 'Powered by Cookie Widget',
            website: 'Website',
            github: 'GitHub',
            trackersDetected: 'Trackers detected',
            trackers: 'trackers',
            detectedTrackers: 'Detected Trackers',
            scriptsBlocked: 'Scripts blocked',
            scripts: 'scripts',
            policyUpdated: 'Our privacy policy has been updated. Please review the changes and update your preferences.',
            consentExpired: 'Your consent has expired. Please update your privacy preferences.'
        },
        'de': {
            name: 'Deutsch',
            flag: '🇩🇪',
            title: 'Cookie-Verwendung',
            description: 'Wir verwenden Cookies, um die Website-Leistung zu verbessern, den Traffic zu analysieren und Inhalte zu personalisieren. Durch die weitere Nutzung dieser Website stimmen Sie unserer',
            privacyPolicy: 'Datenschutzrichtlinie',
            compliance: 'In Übereinstimmung mit DSGVO, CCPA und anderen geltenden Datenschutzgesetzen.',
            settings: 'Einstellungen',
            decline: 'Ablehnen',
            acceptAll: 'Alle akzeptieren',
            acceptSelected: 'Ausgewählte akzeptieren',
            settingsTitle: 'Cookie-Einstellungen',
            settingsDescription: 'Verwalten Sie Ihre Cookie-Einstellungen. Sie können verschiedene Cookie-Kategorien nach Ihren Wünschen aktivieren oder deaktivieren.',
            necessary: 'Notwendige Cookies',
            necessaryDesc: 'Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht ausgeschaltet werden.',
            functional: 'Funktionale Cookies',
            functionalDesc: 'Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen.',
            analytics: 'Analyse-Cookies',
            analyticsDesc: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
            marketing: 'Marketing-Cookies',
            marketingDesc: 'Diese Cookies werden verwendet, um Besucher websiteübergreifend für Werbezwecke zu verfolgen.',
            performance: 'Leistungs-Cookies',
            performanceDesc: 'Diese Cookies helfen dabei, die Website-Leistung und Ladezeiten zu verbessern.',
            cancel: 'Abbrechen',
            saveSettings: 'Einstellungen speichern',
            learnMore: 'Mehr erfahren',
            poweredBy: 'Unterstützt von Cookie Widget',
            website: 'Website',
            github: 'GitHub',
            trackersDetected: 'Tracker erkannt',
            trackers: 'Tracker',
            detectedTrackers: 'Erkannte Tracker',
            scriptsBlocked: 'Skripte blockiert',
            scripts: 'Skripte',
            policyUpdated: 'Unsere Datenschutzrichtlinie wurde aktualisiert. Bitte überprüfen Sie die Änderungen und aktualisieren Sie Ihre Einstellungen.',
            consentExpired: 'Ihre Einwilligung ist abgelaufen. Bitte aktualisieren Sie Ihre Datenschutzeinstellungen.'
        },
        'fr': {
            name: 'Français',
            flag: '🇫🇷',
            title: 'Utilisation des cookies',
            description: 'Nous utilisons des cookies pour améliorer les performances du site web, analyser le trafic et personnaliser le contenu. En continuant à utiliser ce site, vous acceptez notre',
            privacyPolicy: 'politique de confidentialité',
            compliance: 'Conformément au RGPD, CCPA et autres lois applicables sur la protection des données.',
            settings: 'Paramètres',
            decline: 'Refuser',
            acceptAll: 'Tout accepter',
            acceptSelected: 'Accepter la sélection',
            settingsTitle: 'Paramètres des cookies',
            settingsDescription: 'Gérez vos paramètres de cookies. Vous pouvez activer ou désactiver différentes catégories de cookies selon vos préférences.',
            necessary: 'Cookies nécessaires',
            necessaryDesc: 'Ces cookies sont nécessaires au fonctionnement du site web et ne peuvent pas être désactivés.',
            functional: 'Cookies fonctionnels',
            functionalDesc: 'Ces cookies permettent au site web de fournir des fonctionnalités améliorées et une personnalisation.',
            analytics: 'Cookies analytiques',
            analyticsDesc: 'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec le site web.',
            marketing: 'Cookies marketing',
            marketingDesc: 'Ces cookies sont utilisés pour suivre les visiteurs sur les sites web à des fins publicitaires.',
            performance: 'Cookies de performance',
            performanceDesc: 'Ces cookies aident à améliorer les performances du site web et les temps de chargement.',
            cancel: 'Annuler',
            saveSettings: 'Enregistrer les paramètres',
            learnMore: 'En savoir plus',
            poweredBy: 'Propulsé par Cookie Widget',
            website: 'Site web',
            github: 'GitHub',
            trackersDetected: 'Trackers détectés',
            trackers: 'trackers',
            detectedTrackers: 'Trackers détectés',
            scriptsBlocked: 'Scripts bloqués',
            scripts: 'scripts',
            policyUpdated: 'Notre politique de confidentialité a été mise à jour. Veuillez examiner les modifications et mettre à jour vos préférences.',
            consentExpired: 'Votre consentement a expiré. Veuillez mettre à jour vos préférences de confidentialité.'
        },
        'es': {
            name: 'Español',
            flag: '🇪🇸',
            title: 'Uso de cookies',
            description: 'Utilizamos cookies para mejorar el rendimiento del sitio web, analizar el tráfico y personalizar el contenido. Al continuar usando este sitio, acepta nuestra',
            privacyPolicy: 'política de privacidad',
            compliance: 'De acuerdo con RGPD, CCPA y otras leyes aplicables de protección de datos.',
            settings: 'Configuración',
            decline: 'Rechazar',
            acceptAll: 'Aceptar todo',
            acceptSelected: 'Aceptar seleccionados',
            settingsTitle: 'Configuración de cookies',
            settingsDescription: 'Gestione su configuración de cookies. Puede habilitar o deshabilitar diferentes categorías de cookies según sus preferencias.',
            necessary: 'Cookies necesarias',
            necessaryDesc: 'Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar.',
            functional: 'Cookies funcionales',
            functionalDesc: 'Estas cookies permiten al sitio web proporcionar funcionalidad mejorada y personalización.',
            analytics: 'Cookies analíticas',
            analyticsDesc: 'Estas cookies nos ayudan a entender cómo los visitantes interactúan con el sitio web.',
            marketing: 'Cookies de marketing',
            marketingDesc: 'Estas cookies se utilizan para rastrear visitantes en sitios web con fines publicitarios.',
            performance: 'Cookies de rendimiento',
            performanceDesc: 'Estas cookies ayudan a mejorar el rendimiento del sitio web y los tiempos de carga.',
            cancel: 'Cancelar',
            saveSettings: 'Guardar configuración',
            learnMore: 'Saber más',
            poweredBy: 'Desarrollado por Cookie Widget',
            website: 'Sitio web',
            github: 'GitHub',
            trackersDetected: 'Rastreadores detectados',
            trackers: 'rastreadores',
            detectedTrackers: 'Rastreadores detectados',
            scriptsBlocked: 'Scripts bloqueados',
            scripts: 'scripts',
            policyUpdated: 'Nuestra política de privacidad ha sido actualizada. Por favor, revise los cambios y actualice sus preferencias.',
            consentExpired: 'Su consentimiento ha expirado. Por favor, actualice sus preferencias de privacidad.'
        },
        'it': {
            name: 'Italiano',
            flag: '🇮🇹',
            title: 'Utilizzo dei cookie',
            description: 'Utilizziamo i cookie per migliorare le prestazioni del sito web, analizzare il traffico e personalizzare i contenuti. Continuando a utilizzare questo sito, accetti la nostra',
            privacyPolicy: 'politica sulla privacy',
            compliance: 'In conformità con GDPR, CCPA e altre leggi applicabili sulla protezione dei dati.',
            settings: 'Impostazioni',
            decline: 'Rifiuta',
            acceptAll: 'Accetta tutto',
            acceptSelected: 'Accetta selezionati',
            settingsTitle: 'Impostazioni cookie',
            settingsDescription: 'Gestisci le tue impostazioni dei cookie. Puoi abilitare o disabilitare diverse categorie di cookie secondo le tue preferenze.',
            necessary: 'Cookie necessari',
            necessaryDesc: 'Questi cookie sono necessari per il funzionamento del sito web e non possono essere disattivati.',
            functional: 'Cookie funzionali',
            functionalDesc: 'Questi cookie consentono al sito web di fornire funzionalità avanzate e personalizzazione.',
            analytics: 'Cookie analitici',
            analyticsDesc: 'Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito web.',
            marketing: 'Cookie di marketing',
            marketingDesc: 'Questi cookie vengono utilizzati per tracciare i visitatori sui siti web a scopi pubblicitari.',
            performance: 'Cookie delle prestazioni',
            performanceDesc: 'Questi cookie aiutano a migliorare le prestazioni del sito web e i tempi di caricamento.',
            cancel: 'Annulla',
            saveSettings: 'Salva impostazioni',
            learnMore: 'Scopri di più',
            poweredBy: 'Alimentato da Cookie Widget',
            website: 'Sito web',
            github: 'GitHub',
            trackersDetected: 'Tracker rilevati',
            trackers: 'tracker',
            detectedTrackers: 'Tracker rilevati',
            scriptsBlocked: 'Script bloccati',
            scripts: 'script',
            policyUpdated: 'La nostra politica sulla privacy è stata aggiornata. Si prega di rivedere le modifiche e aggiornare le preferenze.',
            consentExpired: 'Il tuo consenso è scaduto. Si prega di aggiornare le preferenze sulla privacy.'
        },
        'pt': {
            name: 'Português',
            flag: '🇵🇹',
            title: 'Uso de cookies',
            description: 'Utilizamos cookies para melhorar o desempenho do site, analisar o tráfego e personalizar o conteúdo. Ao continuar a usar este site, você concorda com nossa',
            privacyPolicy: 'política de privacidade',
            compliance: 'De acordo com GDPR, CCPA e outras leis aplicáveis de proteção de dados.',
            settings: 'Configurações',
            decline: 'Recusar',
            acceptAll: 'Aceitar tudo',
            acceptSelected: 'Aceitar selecionados',
            settingsTitle: 'Configurações de cookies',
            settingsDescription: 'Gerencie suas configurações de cookies. Você pode habilitar ou desabilitar diferentes categorias de cookies de acordo com suas preferências.',
            necessary: 'Cookies necessários',
            necessaryDesc: 'Estes cookies são necessários para o funcionamento do site e não podem ser desativados.',
            functional: 'Cookies funcionais',
            functionalDesc: 'Estes cookies permitem que o site forneça funcionalidade aprimorada e personalização.',
            analytics: 'Cookies analíticos',
            analyticsDesc: 'Estes cookies nos ajudam a entender como os visitantes interagem com o site.',
            marketing: 'Cookies de marketing',
            marketingDesc: 'Estes cookies são usados para rastrear visitantes em sites para fins publicitários.',
            performance: 'Cookies de desempenho',
            performanceDesc: 'Estes cookies ajudam a melhorar o desempenho do site e os tempos de carregamento.',
            cancel: 'Cancelar',
            saveSettings: 'Salvar configurações',
            learnMore: 'Saiba mais',
            poweredBy: 'Desenvolvido por Cookie Widget',
            website: 'Site',
            github: 'GitHub',
            trackersDetected: 'Rastreadores detectados',
            trackers: 'rastreadores',
            detectedTrackers: 'Rastreadores detectados',
            scriptsBlocked: 'Scripts bloqueados',
            scripts: 'scripts',
            policyUpdated: 'Nossa política de privacidade foi atualizada. Por favor, revise as alterações e atualize suas preferências.',
            consentExpired: 'Seu consentimento expirou. Por favor, atualize suas preferências de privacidade.'
        },
        'nl': {
            name: 'Nederlands',
            flag: '🇳🇱',
            title: 'Cookiegebruik',
            description: 'We gebruiken cookies om de websiteprestaties te verbeteren, verkeer te analyseren en inhoud te personaliseren. Door deze site te blijven gebruiken, gaat u akkoord met ons',
            privacyPolicy: 'privacybeleid',
            compliance: 'In overeenstemming met AVG, CCPA en andere toepasselijke gegevensbeschermingswetten.',
            settings: 'Instellingen',
            decline: 'Weigeren',
            acceptAll: 'Alles accepteren',
            acceptSelected: 'Geselecteerde accepteren',
            settingsTitle: 'Cookie-instellingen',
            settingsDescription: 'Beheer uw cookie-instellingen. U kunt verschillende categorieën cookies in- of uitschakelen volgens uw voorkeuren.',
            necessary: 'Noodzakelijke cookies',
            necessaryDesc: 'Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen niet worden uitgeschakeld.',
            functional: 'Functionele cookies',
            functionalDesc: 'Deze cookies stellen de website in staat om verbeterde functionaliteit en personalisatie te bieden.',
            analytics: 'Analytische cookies',
            analyticsDesc: 'Deze cookies helpen ons begrijpen hoe bezoekers omgaan met de website.',
            marketing: 'Marketing cookies',
            marketingDesc: 'Deze cookies worden gebruikt om bezoekers op websites te volgen voor reclamedoeleinden.',
            performance: 'Prestatie cookies',
            performanceDesc: 'Deze cookies helpen de websiteprestaties en laadtijden te verbeteren.',
            cancel: 'Annuleren',
            saveSettings: 'Instellingen opslaan',
            learnMore: 'Meer informatie',
            poweredBy: 'Aangedreven door Cookie Widget',
            website: 'Website',
            github: 'GitHub',
            trackersDetected: 'Trackers gedetecteerd',
            trackers: 'trackers',
            detectedTrackers: 'Gedetecteerde trackers',
            scriptsBlocked: 'Scripts geblokkeerd',
            scripts: 'scripts',
            policyUpdated: 'Ons privacybeleid is bijgewerkt. Bekijk de wijzigingen en werk uw voorkeuren bij.',
            consentExpired: 'Uw toestemming is verlopen. Werk uw privacyvoorkeuren bij.'
        },
        'pl': {
            name: 'Polski',
            flag: '🇵🇱',
            title: 'Używanie plików cookie',
            description: 'Używamy plików cookie, aby poprawić wydajność strony internetowej, analizować ruch i personalizować treści. Kontynuując korzystanie z tej strony, zgadzasz się z naszą',
            privacyPolicy: 'polityką prywatności',
            compliance: 'Zgodnie z RODO, CCPA i innymi obowiązującymi przepisami o ochronie danych.',
            settings: 'Ustawienia',
            decline: 'Odrzuć',
            acceptAll: 'Zaakceptuj wszystkie',
            acceptSelected: 'Zaakceptuj wybrane',
            settingsTitle: 'Ustawienia plików cookie',
            settingsDescription: 'Zarządzaj ustawieniami plików cookie. Możesz włączyć lub wyłączyć różne kategorie plików cookie zgodnie z preferencjami.',
            necessary: 'Niezbędne pliki cookie',
            necessaryDesc: 'Te pliki cookie są niezbędne do funkcjonowania strony internetowej i nie można ich wyłączyć.',
            functional: 'Funkcjonalne pliki cookie',
            functionalDesc: 'Te pliki cookie umożliwiają stronie internetowej zapewnienie rozszerzonej funkcjonalności i personalizacji.',
            analytics: 'Analityczne pliki cookie',
            analyticsDesc: 'Te pliki cookie pomagają nam zrozumieć, jak odwiedzający wchodzą w interakcję ze stroną internetową.',
            marketing: 'Marketingowe pliki cookie',
            marketingDesc: 'Te pliki cookie są używane do śledzenia odwiedzających na stronach internetowych w celach reklamowych.',
            performance: 'Pliki cookie wydajności',
            performanceDesc: 'Te pliki cookie pomagają poprawić wydajność strony internetowej i czasy ładowania.',
            cancel: 'Anuluj',
            saveSettings: 'Zapisz ustawienia',
            learnMore: 'Dowiedz się więcej',
            poweredBy: 'Napędzane przez Cookie Widget',
            website: 'Strona internetowa',
            github: 'GitHub',
            trackersDetected: 'Wykryto trackery',
            trackers: 'trackerów',
            detectedTrackers: 'Wykryte trackery',
            scriptsBlocked: 'Zablokowane skrypty',
            scripts: 'skryptów',
            policyUpdated: 'Nasza polityka prywatności została zaktualizowana. Przejrzyj zmiany i zaktualizuj swoje preferencje.',
            consentExpired: 'Twoja zgoda wygasła. Zaktualizuj swoje preferencje prywatności.'
        },
        'sv': {
            name: 'Svenska',
            flag: '🇸🇪',
            title: 'Användning av cookies',
            description: 'Vi använder cookies för att förbättra webbplatsens prestanda, analysera trafik och personalisera innehåll. Genom att fortsätta använda denna webbplats godkänner du vår',
            privacyPolicy: 'integritetspolicy',
            compliance: 'I enlighet med GDPR, CCPA och andra tillämpliga dataskyddslagar.',
            settings: 'Inställningar',
            decline: 'Avvisa',
            acceptAll: 'Acceptera alla',
            acceptSelected: 'Acceptera valda',
            settingsTitle: 'Cookie-inställningar',
            settingsDescription: 'Hantera dina cookie-inställningar. Du kan aktivera eller inaktivera olika kategorier av cookies enligt dina preferenser.',
            necessary: 'Nödvändiga cookies',
            necessaryDesc: 'Dessa cookies är nödvändiga för webbplatsens funktion och kan inte stängas av.',
            functional: 'Funktionella cookies',
            functionalDesc: 'Dessa cookies gör det möjligt för webbplatsen att tillhandahålla förbättrad funktionalitet och personalisering.',
            analytics: 'Analytiska cookies',
            analyticsDesc: 'Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen.',
            marketing: 'Marknadsföringscookies',
            marketingDesc: 'Dessa cookies används för att spåra besökare på webbplatser för reklamändamål.',
            performance: 'Prestanda cookies',
            performanceDesc: 'Dessa cookies hjälper till att förbättra webbplatsens prestanda och laddningstider.',
            cancel: 'Avbryt',
            saveSettings: 'Spara inställningar',
            learnMore: 'Läs mer',
            poweredBy: 'Drivs av Cookie Widget',
            website: 'Webbplats',
            github: 'GitHub',
            trackersDetected: 'Spårare upptäckta',
            trackers: 'spårare',
            detectedTrackers: 'Upptäckta spårare',
            scriptsBlocked: 'Skript blockerade',
            scripts: 'skript',
            policyUpdated: 'Vår integritetspolicy har uppdaterats. Granska ändringarna och uppdatera dina preferenser.',
            consentExpired: 'Ditt samtycke har löpt ut. Uppdatera dina integritetspreferenser.'
        },
        'no': {
            name: 'Norsk',
            flag: '🇳🇴',
            title: 'Bruk av informasjonskapsler',
            description: 'Vi bruker informasjonskapsler for å forbedre nettstedets ytelse, analysere trafikk og tilpasse innhold. Ved å fortsette å bruke dette nettstedet godtar du vår',
            privacyPolicy: 'personvernpolicy',
            compliance: 'I samsvar med GDPR, CCPA og andre gjeldende databeskyttelseslover.',
            settings: 'Innstillinger',
            decline: 'Avvis',
            acceptAll: 'Godta alle',
            acceptSelected: 'Godta valgte',
            settingsTitle: 'Cookie-innstillinger',
            settingsDescription: 'Administrer dine cookie-innstillinger. Du kan aktivere eller deaktivere forskjellige kategorier av cookies i henhold til dine preferanser.',
            necessary: 'Nødvendige cookies',
            necessaryDesc: 'Disse cookiene er nødvendige for at nettstedet skal fungere og kan ikke slås av.',
            functional: 'Funksjonelle cookies',
            functionalDesc: 'Disse cookiene gjør det mulig for nettstedet å tilby forbedret funksjonalitet og personalisering.',
            analytics: 'Analytiske cookies',
            analyticsDesc: 'Disse cookiene hjelper oss å forstå hvordan besøkende samhandler med nettstedet.',
            marketing: 'Markedsføringscookies',
            marketingDesc: 'Disse cookiene brukes til å spore besøkende på nettsteder for reklameformål.',
            performance: 'Ytelsescookies',
            performanceDesc: 'Disse cookiene hjelper til med å forbedre nettstedets ytelse og lastetider.',
            cancel: 'Avbryt',
            saveSettings: 'Lagre innstillinger',
            learnMore: 'Lær mer',
            poweredBy: 'Drevet av Cookie Widget',
            website: 'Nettsted',
            github: 'GitHub',
            trackersDetected: 'Sporere oppdaget',
            trackers: 'sporere',
            detectedTrackers: 'Oppdagede sporere',
            scriptsBlocked: 'Skript blokkert',
            scripts: 'skript',
            policyUpdated: 'Vår personvernpolicy har blitt oppdatert. Vennligst gjennomgå endringene og oppdater dine preferanser.',
            consentExpired: 'Ditt samtykke har utløpt. Vennligst oppdater dine personvernpreferanser.'
        },
        'da': {
            name: 'Dansk',
            flag: '🇩🇰',
            title: 'Brug af cookies',
            description: 'Vi bruger cookies til at forbedre hjemmesidens ydeevne, analysere trafik og personalisere indhold. Ved at fortsætte med at bruge dette websted accepterer du vores',
            privacyPolicy: 'privatlivspolitik',
            compliance: 'I overensstemmelse med GDPR, CCPA og andre gældende databeskyttelseslove.',
            settings: 'Indstillinger',
            decline: 'Afvis',
            acceptAll: 'Accepter alle',
            acceptSelected: 'Accepter valgte',
            settingsTitle: 'Cookie-indstillinger',
            settingsDescription: 'Administrer dine cookie-indstillinger. Du kan aktivere eller deaktivere forskellige kategorier af cookies i henhold til dine præferencer.',
            necessary: 'Nødvendige cookies',
            necessaryDesc: 'Disse cookies er nødvendige for hjemmesidens funktion og kan ikke slås fra.',
            functional: 'Funktionelle cookies',
            functionalDesc: 'Disse cookies gør det muligt for hjemmesiden at levere forbedret funktionalitet og personalisering.',
            analytics: 'Analytiske cookies',
            analyticsDesc: 'Disse cookies hjælper os med at forstå, hvordan besøgende interagerer med hjemmesiden.',
            marketing: 'Marketing cookies',
            marketingDesc: 'Disse cookies bruges til at spore besøgende på hjemmesider til reklameformål.',
            performance: 'Ydeevne cookies',
            performanceDesc: 'Disse cookies hjælper med at forbedre hjemmesidens ydeevne og indlæsningstider.',
            cancel: 'Annuller',
            saveSettings: 'Gem indstillinger',
            learnMore: 'Lær mere',
            poweredBy: 'Drevet af Cookie Widget',
            website: 'Hjemmeside',
            github: 'GitHub',
            trackersDetected: 'Trackere opdaget',
            trackers: 'trackere',
            detectedTrackers: 'Opdagede trackere',
            scriptsBlocked: 'Scripts blokeret',
            scripts: 'scripts',
            policyUpdated: 'Vores privatlivspolitik er blevet opdateret. Gennemgå ændringerne og opdater dine præferencer.',
            consentExpired: 'Dit samtykke er udløbet. Opdater dine privatlivspræferencer.'
        },
        'fi': {
            name: 'Suomi',
            flag: '🇫🇮',
            title: 'Evästeiden käyttö',
            description: 'Käytämme evästeitä verkkosivuston suorituskyvyn parantamiseksi, liikenteen analysoimiseksi ja sisällön personoimiseksi. Jatkamalla tämän sivuston käyttöä hyväksyt',
            privacyPolicy: 'tietosuojakäytäntömme',
            compliance: 'GDPR:n, CCPA:n ja muiden sovellettavien tietosuojalakien mukaisesti.',
            settings: 'Asetukset',
            decline: 'Hylkää',
            acceptAll: 'Hyväksy kaikki',
            acceptSelected: 'Hyväksy valitut',
            settingsTitle: 'Evästeasetukset',
            settingsDescription: 'Hallitse evästeasetuksiasi. Voit ottaa käyttöön tai poistaa käytöstä erilaisia evästekategorioita mieltymystesi mukaan.',
            necessary: 'Välttämättömät evästeet',
            necessaryDesc: 'Nämä evästeet ovat välttämättömiä verkkosivuston toiminnalle, eikä niitä voi poistaa käytöstä.',
            functional: 'Toiminnalliset evästeet',
            functionalDesc: 'Nämä evästeet mahdollistavat verkkosivuston tarjoamaan parannettua toiminnallisuutta ja personointia.',
            analytics: 'Analyyttiset evästeet',
            analyticsDesc: 'Nämä evästeet auttavat meitä ymmärtämään, miten vierailijat ovat vuorovaikutuksessa verkkosivuston kanssa.',
            marketing: 'Markkinointievästeet',
            marketingDesc: 'Näitä evästeitä käytetään vierailijoiden seuraamiseen verkkosivustoilla mainostarkoituksiin.',
            performance: 'Suorituskykyevästeet',
            performanceDesc: 'Nämä evästeet auttavat parantamaan verkkosivuston suorituskykyä ja latausaikoja.',
            cancel: 'Peruuta',
            saveSettings: 'Tallenna asetukset',
            learnMore: 'Lue lisää',
            poweredBy: 'Voimanlähteenä Cookie Widget',
            website: 'Verkkosivusto',
            github: 'GitHub',
            trackersDetected: 'Seurantoja havaittu',
            trackers: 'seurantaa',
            detectedTrackers: 'Havaitut seurannat',
            scriptsBlocked: 'Skriptejä estetty',
            scripts: 'skriptiä',
            policyUpdated: 'Tietosuojakäytäntöämme on päivitetty. Tarkista muutokset ja päivitä asetuksesi.',
            consentExpired: 'Suostumuksesi on vanhentunut. Päivitä tietosuoja-asetuksesi.'
        },
        'cs': {
            name: 'Čeština',
            flag: '🇨🇿',
            title: 'Používání cookies',
            description: 'Používáme cookies ke zlepšení výkonu webových stránek, analýze provozu a personalizaci obsahu. Pokračováním v používání těchto stránek souhlasíte s našimi',
            privacyPolicy: 'zásadami ochrany osobních údajů',
            compliance: 'V souladu s GDPR, CCPA a dalšími platnými zákony o ochraně údajů.',
            settings: 'Nastavení',
            decline: 'Odmítnout',
            acceptAll: 'Přijmout vše',
            acceptSelected: 'Přijmout vybrané',
            settingsTitle: 'Nastavení cookies',
            settingsDescription: 'Spravujte nastavení cookies. Můžete povolit nebo zakázat různé kategorie cookies podle vašich preferencí.',
            necessary: 'Nezbytné cookies',
            necessaryDesc: 'Tyto cookies jsou nezbytné pro fungování webových stránek a nelze je vypnout.',
            functional: 'Funkční cookies',
            functionalDesc: 'Tyto cookies umožňují webovým stránkám poskytovat rozšířenou funkcionalitu a personalizaci.',
            analytics: 'Analytické cookies',
            analyticsDesc: 'Tyto cookies nám pomáhají pochopit, jak návštěvníci interagují s webovými stránkami.',
            marketing: 'Marketingové cookies',
            marketingDesc: 'Tyto cookies se používají ke sledování návštěvníků na webových stránkách pro reklamní účely.',
            performance: 'Výkonnostní cookies',
            performanceDesc: 'Tyto cookies pomáhají zlepšit výkon webových stránek a dobu načítání.',
            cancel: 'Zrušit',
            saveSettings: 'Uložit nastavení',
            learnMore: 'Dozvědět se více',
            poweredBy: 'Poháněno Cookie Widget',
            website: 'Webové stránky',
            github: 'GitHub',
            trackersDetected: 'Detekované trackery',
            trackers: 'trackerů',
            detectedTrackers: 'Detekované trackery',
            scriptsBlocked: 'Blokované skripty',
            scripts: 'skriptů',
            policyUpdated: 'Naše zásady ochrany osobních údajů byly aktualizovány. Zkontrolujte změny a aktualizujte své preference.',
            consentExpired: 'Váš souhlas vypršel. Aktualizujte své preference ochrany osobních údajů.'
        },
        'hu': {
            name: 'Magyar',
            flag: '🇭🇺',
            title: 'Cookie használat',
            description: 'Cookie-kat használunk a weboldal teljesítményének javítására, a forgalom elemzésére és a tartalom személyre szabására. A weboldal további használatával elfogadja',
            privacyPolicy: 'adatvédelmi szabályzatunkat',
            compliance: 'A GDPR, CCPA és egyéb alkalmazandó adatvédelmi törvények szerint.',
            settings: 'Beállítások',
            decline: 'Elutasítás',
            acceptAll: 'Összes elfogadása',
            acceptSelected: 'Kiválasztottak elfogadása',
            settingsTitle: 'Cookie beállítások',
            settingsDescription: 'Cookie beállítások kezelése. Engedélyezheti vagy letilthatja a különböző cookie kategóriákat preferenciái szerint.',
            necessary: 'Szükséges cookie-k',
            necessaryDesc: 'Ezek a cookie-k szükségesek a weboldal működéséhez és nem kapcsolhatók ki.',
            functional: 'Funkcionális cookie-k',
            functionalDesc: 'Ezek a cookie-k lehetővé teszik a weboldal számára a továbbfejlesztett funkcionalitás és személyre szabás biztosítását.',
            analytics: 'Analitikai cookie-k',
            analyticsDesc: 'Ezek a cookie-k segítenek megérteni, hogyan lépnek kapcsolatba a látogatók a weboldallal.',
            marketing: 'Marketing cookie-k',
            marketingDesc: 'Ezeket a cookie-kat a látogatók weboldalakon történő követésére használják reklámcélokból.',
            performance: 'Teljesítmény cookie-k',
            performanceDesc: 'Ezek a cookie-k segítenek javítani a weboldal teljesítményét és betöltési idejét.',
            cancel: 'Mégse',
            saveSettings: 'Beállítások mentése',
            learnMore: 'Tudjon meg többet',
            poweredBy: 'Cookie Widget által működtetve',
            website: 'Weboldal',
            github: 'GitHub',
            trackersDetected: 'Követők észlelve',
            trackers: 'követő',
            detectedTrackers: 'Észlelt követők',
            scriptsBlocked: 'Blokolt szkriptek',
            scripts: 'szkript',
            policyUpdated: 'Adatvédelmi szabályzatunk frissítve lett. Kérjük, tekintse át a változásokat és frissítse beállításait.',
            consentExpired: 'Hozzájárulása lejárt. Kérjük, frissítse adatvédelmi beállításait.'
        },
        'ro': {
            name: 'Română',
            flag: '🇷🇴',
            title: 'Utilizarea cookie-urilor',
            description: 'Folosim cookie-uri pentru a îmbunătăți performanța site-ului web, pentru a analiza traficul și pentru a personaliza conținutul. Continuând să folosiți acest site, sunteți de acord cu',
            privacyPolicy: 'politica noastră de confidențialitate',
            compliance: 'În conformitate cu GDPR, CCPA și alte legi aplicabile de protecție a datelor.',
            settings: 'Setări',
            decline: 'Refuz',
            acceptAll: 'Accept toate',
            acceptSelected: 'Accept selectate',
            settingsTitle: 'Setări cookie-uri',
            settingsDescription: 'Gestionați setările cookie-urilor. Puteți activa sau dezactiva diferite categorii de cookie-uri conform preferințelor dvs.',
            necessary: 'Cookie-uri necesare',
            necessaryDesc: 'Aceste cookie-uri sunt necesare pentru funcționarea site-ului web și nu pot fi dezactivate.',
            functional: 'Cookie-uri funcționale',
            functionalDesc: 'Aceste cookie-uri permit site-ului web să ofere funcționalitate îmbunătățită și personalizare.',
            analytics: 'Cookie-uri analitice',
            analyticsDesc: 'Aceste cookie-uri ne ajută să înțelegem cum interacționează vizitatorii cu site-ul web.',
            marketing: 'Cookie-uri de marketing',
            marketingDesc: 'Aceste cookie-uri sunt folosite pentru a urmări vizitatorii pe site-uri web în scopuri publicitare.',
            performance: 'Cookie-uri de performanță',
            performanceDesc: 'Aceste cookie-uri ajută la îmbunătățirea performanței site-ului web și a timpilor de încărcare.',
            cancel: 'Anulare',
            saveSettings: 'Salvare setări',
            learnMore: 'Aflați mai multe',
            poweredBy: 'Alimentat de Cookie Widget',
            website: 'Site web',
            github: 'GitHub',
            trackersDetected: 'Trackere detectate',
            trackers: 'trackere',
            detectedTrackers: 'Trackere detectate',
            scriptsBlocked: 'Scripturi blocate',
            scripts: 'scripturi',
            policyUpdated: 'Politica noastră de confidențialitate a fost actualizată. Vă rugăm să examinați modificările și să vă actualizați preferințele.',
            consentExpired: 'Consimțământul dvs. a expirat. Vă rugăm să vă actualizați preferințele de confidențialitate.'
        },
        'bg': {
            name: 'Български',
            flag: '🇧🇬',
            title: 'Използване на бисквитки',
            description: 'Използваме бисквитки за подобряване на производителността на уебсайта, анализиране на трафика и персонализиране на съдържанието. Продължавайки да използвате този сайт, вие се съгласявате с нашата',
            privacyPolicy: 'политика за поверителност',
            compliance: 'В съответствие с GDPR, CCPA и други приложими закони за защита на данните.',
            settings: 'Настройки',
            decline: 'Отказ',
            acceptAll: 'Приемам всички',
            acceptSelected: 'Приемам избраните',
            settingsTitle: 'Настройки за бисквитки',
            settingsDescription: 'Управлявайте настройките си за бисквитки. Можете да активирате или деактивирате различни категории бисквитки според вашите предпочитания.',
            necessary: 'Необходими бисквитки',
            necessaryDesc: 'Тези бисквитки са необходими за функционирането на уебсайта и не могат да бъдат изключени.',
            functional: 'Функционални бисквитки',
            functionalDesc: 'Тези бисквитки позволяват на уебсайта да предоставя подобрена функционалност и персонализация.',
            analytics: 'Аналитични бисквитки',
            analyticsDesc: 'Тези бисквитки ни помагат да разберем как посетителите взаимодействат с уебсайта.',
            marketing: 'Маркетингови бисквитки',
            marketingDesc: 'Тези бисквитки се използват за проследяване на посетители в уебсайтове за рекламни цели.',
            performance: 'Бисквитки за производителност',
            performanceDesc: 'Тези бисквитки помагат за подобряване на производителността на уебсайта и времето за зареждане.',
            cancel: 'Отказ',
            saveSettings: 'Запазване на настройките',
            learnMore: 'Научете повече',
            poweredBy: 'Задвижван от Cookie Widget',
            website: 'Уебсайт',
            github: 'GitHub',
            trackersDetected: 'Открити тракери',
            trackers: 'тракери',
            detectedTrackers: 'Открити тракери',
            scriptsBlocked: 'Блокирани скриптове',
            scripts: 'скриптове',
            policyUpdated: 'Нашата политика за поверителност беше актуализирана. Моля, прегледайте промените и актуализирайте предпочитанията си.',
            consentExpired: 'Вашето съгласие е изтекло. Моля, актуализирайте предпочитанията си за поверителност.'
        },
        'el': {
            name: 'Ελληνικά',
            flag: '🇬🇷',
            title: 'Χρήση cookies',
            description: 'Χρησιμοποιούμε cookies για να βελτιώσουμε την απόδοση του ιστότοπου, να αναλύσουμε την κίνηση και να εξατομικεύσουμε το περιεχόμενο. Συνεχίζοντας να χρησιμοποιείτε αυτόν τον ιστότοπο, συμφωνείτε με την',
            privacyPolicy: 'πολιτική απορρήτου μας',
            compliance: 'Σύμφωνα με το GDPR, CCPA και άλλους ισχύοντες νόμους προστασίας δεδομένων.',
            settings: 'Ρυθμίσεις',
            decline: 'Απόρριψη',
            acceptAll: 'Αποδοχή όλων',
            acceptSelected: 'Αποδοχή επιλεγμένων',
            settingsTitle: 'Ρυθμίσεις cookies',
            settingsDescription: 'Διαχειριστείτε τις ρυθμίσεις cookies σας. Μπορείτε να ενεργοποιήσετε ή να απενεργοποιήσετε διαφορετικές κατηγορίες cookies σύμφωνα με τις προτιμήσεις σας.',
            necessary: 'Απαραίτητα cookies',
            necessaryDesc: 'Αυτά τα cookies είναι απαραίτητα για τη λειτουργία του ιστότοπου και δεν μπορούν να απενεργοποιηθούν.',
            functional: 'Λειτουργικά cookies',
            functionalDesc: 'Αυτά τα cookies επιτρέπουν στον ιστότοπο να παρέχει βελτιωμένη λειτουργικότητα και εξατομίκευση.',
            analytics: 'Αναλυτικά cookies',
            analyticsDesc: 'Αυτά τα cookies μας βοηθούν να κατανοήσουμε πώς οι επισκέπτες αλληλεπιδρούν με τον ιστότοπο.',
            marketing: 'Marketing cookies',
            marketingDesc: 'Αυτά τα cookies χρησιμοποιούνται για την παρακολούθηση επισκεπτών σε ιστότοπους για διαφημιστικούς σκοπούς.',
            performance: 'Cookies απόδοσης',
            performanceDesc: 'Αυτά τα cookies βοηθούν στη βελτίωση της απόδοσης του ιστότοπου και των χρόνων φόρτωσης.',
            cancel: 'Ακύρωση',
            saveSettings: 'Αποθήκευση ρυθμίσεων',
            learnMore: 'Μάθετε περισσότερα',
            poweredBy: 'Τροφοδοτείται από Cookie Widget',
            website: 'Ιστότοπος',
            github: 'GitHub',
            trackersDetected: 'Ανιχνεύθηκαν trackers',
            trackers: 'trackers',
            detectedTrackers: 'Ανιχνευμένα trackers',
            scriptsBlocked: 'Μπλοκαρισμένα scripts',
            scripts: 'scripts',
            policyUpdated: 'Η πολιτική απορρήτου μας έχει ενημερωθεί. Παρακαλούμε εξετάστε τις αλλαγές και ενημερώστε τις προτιμήσεις σας.',
            consentExpired: 'Η συγκατάθεσή σας έχει λήξει. Παρακαλούμε ενημερώστε τις προτιμήσεις απορρήτου σας.'
        },
        'tr': {
            name: 'Türkçe',
            flag: '🇹🇷',
            title: 'Çerez kullanımı',
            description: 'Web sitesi performansını iyileştirmek, trafiği analiz etmek ve içeriği kişiselleştirmek için çerezler kullanıyoruz. Bu siteyi kullanmaya devam ederek',
            privacyPolicy: 'gizlilik politikamızı',
            compliance: 'GDPR, CCPA ve diğer geçerli veri koruma yasalarına uygun olarak.',
            settings: 'Ayarlar',
            decline: 'Reddet',
            acceptAll: 'Tümünü kabul et',
            acceptSelected: 'Seçilenleri kabul et',
            settingsTitle: 'Çerez ayarları',
            settingsDescription: 'Çerez ayarlarınızı yönetin. Tercihlerinize göre farklı çerez kategorilerini etkinleştirebilir veya devre dışı bırakabilirsiniz.',
            necessary: 'Gerekli çerezler',
            necessaryDesc: 'Bu çerezler web sitesinin çalışması için gereklidir ve kapatılamaz.',
            functional: 'İşlevsel çerezler',
            functionalDesc: 'Bu çerezler web sitesinin gelişmiş işlevsellik ve kişiselleştirme sağlamasını mümkün kılar.',
            analytics: 'Analitik çerezler',
            analyticsDesc: 'Bu çerezler ziyaretçilerin web sitesiyle nasıl etkileşimde bulunduğunu anlamamıza yardımcı olur.',
            marketing: 'Pazarlama çerezleri',
            marketingDesc: 'Bu çerezler reklam amaçları için ziyaretçileri web sitelerinde takip etmek için kullanılır.',
            performance: 'Performans çerezleri',
            performanceDesc: 'Bu çerezler web sitesi performansını ve yükleme sürelerini iyileştirmeye yardımcı olur.',
            cancel: 'İptal',
            saveSettings: 'Ayarları kaydet',
            learnMore: 'Daha fazla bilgi',
            poweredBy: 'Cookie Widget tarafından desteklenmektedir',
            website: 'Web sitesi',
            github: 'GitHub',
            trackersDetected: 'Takipçiler tespit edildi',
            trackers: 'takipçi',
            detectedTrackers: 'Tespit edilen takipçiler',
            scriptsBlocked: 'Engellenen scriptler',
            scripts: 'script',
            policyUpdated: 'Gizlilik politikamız güncellendi. Lütfen değişiklikleri inceleyin ve tercihlerinizi güncelleyin.',
            consentExpired: 'Onayınızın süresi doldu. Lütfen gizlilik tercihlerinizi güncelleyin.'
        },
        'ja': {
            name: '日本語',
            flag: '🇯🇵',
            title: 'Cookieの使用',
            description: 'ウェブサイトのパフォーマンス向上、トラフィック分析、コンテンツのパーソナライゼーションのためにCookieを使用しています。このサイトを継続して使用することで、',
            privacyPolicy: 'プライバシーポリシー',
            compliance: 'GDPR、CCPA、その他の適用されるデータ保護法に従って。',
            settings: '設定',
            decline: '拒否',
            acceptAll: 'すべて受け入れる',
            acceptSelected: '選択したものを受け入れる',
            settingsTitle: 'Cookie設定',
            settingsDescription: 'Cookie設定を管理します。お客様の設定に応じて、さまざまなCookieカテゴリを有効または無効にできます。',
            necessary: '必要なCookie',
            necessaryDesc: 'これらのCookieはウェブサイトの機能に必要であり、無効にすることはできません。',
            functional: '機能的Cookie',
            functionalDesc: 'これらのCookieにより、ウェブサイトは拡張機能とパーソナライゼーションを提供できます。',
            analytics: '分析Cookie',
            analyticsDesc: 'これらのCookieは、訪問者がウェブサイトとどのように相互作用するかを理解するのに役立ちます。',
            marketing: 'マーケティングCookie',
            marketingDesc: 'これらのCookieは、広告目的でウェブサイト間で訪問者を追跡するために使用されます。',
            performance: 'パフォーマンスCookie',
            performanceDesc: 'これらのCookieは、ウェブサイトのパフォーマンスと読み込み時間の改善に役立ちます。',
            cancel: 'キャンセル',
            saveSettings: '設定を保存',
            learnMore: '詳細を見る',
            poweredBy: 'Cookie Widgetによって提供',
            website: 'ウェブサイト',
            github: 'GitHub',
            trackersDetected: 'トラッカーが検出されました',
            trackers: 'トラッカー',
            detectedTrackers: '検出されたトラッカー',
            scriptsBlocked: 'ブロックされたスクリプト',
            scripts: 'スクリプト',
            policyUpdated: 'プライバシーポリシーが更新されました。変更内容を確認し、設定を更新してください。',
            consentExpired: '同意の有効期限が切れました。プライバシー設定を更新してください。'
        },
        'ko': {
            name: '한국어',
            flag: '🇰🇷',
            title: '쿠키 사용',
            description: '웹사이트 성능 향상, 트래픽 분석 및 콘텐츠 개인화를 위해 쿠키를 사용합니다. 이 사이트를 계속 사용하시면',
            privacyPolicy: '개인정보 보호정책에',
            compliance: 'GDPR, CCPA 및 기타 적용 가능한 데이터 보호법에 따라.',
            settings: '설정',
            decline: '거부',
            acceptAll: '모두 수락',
            acceptSelected: '선택한 것 수락',
            settingsTitle: '쿠키 설정',
            settingsDescription: '쿠키 설정을 관리하세요. 기본 설정에 따라 다양한 쿠키 카테고리를 활성화하거나 비활성화할 수 있습니다.',
            necessary: '필수 쿠키',
            necessaryDesc: '이러한 쿠키는 웹사이트 기능에 필요하며 끌 수 없습니다.',
            functional: '기능적 쿠키',
            functionalDesc: '이러한 쿠키를 통해 웹사이트는 향상된 기능과 개인화를 제공할 수 있습니다.',
            analytics: '분석 쿠키',
            analyticsDesc: '이러한 쿠키는 방문자가 웹사이트와 상호 작용하는 방식을 이해하는 데 도움이 됩니다.',
            marketing: '마케팅 쿠키',
            marketingDesc: '이러한 쿠키는 광고 목적으로 웹사이트에서 방문자를 추적하는 데 사용됩니다.',
            performance: '성능 쿠키',
            performanceDesc: '이러한 쿠키는 웹사이트 성능과 로딩 시간을 개선하는 데 도움이 됩니다.',
            cancel: '취소',
            saveSettings: '설정 저장',
            learnMore: '자세히 알아보기',
            poweredBy: 'Cookie Widget 제공',
            website: '웹사이트',
            github: 'GitHub',
            trackersDetected: '트래커 감지됨',
            trackers: '트래커',
            detectedTrackers: '감지된 트래커',
            scriptsBlocked: '차단된 스크립트',
            scripts: '스크립트',
            policyUpdated: '개인정보 보호정책이 업데이트되었습니다. 변경사항을 검토하고 설정을 업데이트하세요.',
            consentExpired: '동의가 만료되었습니다. 개인정보 보호 설정을 업데이트하세요.'
        },
        'zh': {
            name: '中文',
            flag: '🇨🇳',
            title: 'Cookie使用',
            description: '我们使用Cookie来改善网站性能、分析流量和个性化内容。继续使用本网站即表示您同意我们的',
            privacyPolicy: '隐私政策',
            compliance: '符合GDPR、CCPA和其他适用的数据保护法律。',
            settings: '设置',
            decline: '拒绝',
            acceptAll: '接受全部',
            acceptSelected: '接受选中的',
            settingsTitle: 'Cookie设置',
            settingsDescription: '管理您的Cookie设置。您可以根据偏好启用或禁用不同类别的Cookie。',
            necessary: '必要Cookie',
            necessaryDesc: '这些Cookie是网站功能所必需的，无法关闭。',
            functional: '功能性Cookie',
            functionalDesc: '这些Cookie使网站能够提供增强的功能和个性化。',
            analytics: '分析Cookie',
            analyticsDesc: '这些Cookie帮助我们了解访问者如何与网站互动。',
            marketing: '营销Cookie',
            marketingDesc: '这些Cookie用于跨网站跟踪访问者以进行广告宣传。',
            performance: '性能Cookie',
            performanceDesc: '这些Cookie有助于改善网站性能和加载时间。',
            cancel: '取消',
            saveSettings: '保存设置',
            learnMore: '了解更多',
            poweredBy: '由Cookie Widget提供支持',
            website: '网站',
            github: 'GitHub',
            trackersDetected: '检测到跟踪器',
            trackers: '跟踪器',
            detectedTrackers: '检测到的跟踪器',
            scriptsBlocked: '已阻止的脚本',
            scripts: '脚本',
            policyUpdated: '我们的隐私政策已更新。请查看更改并更新您的偏好。',
            consentExpired: '您的同意已过期。请更新您的隐私偏好。'
        },
        'ar': {
            name: 'العربية',
            flag: '🇸🇦',
            title: 'استخدام ملفات تعريف الارتباط',
            description: 'نحن نستخدم ملفات تعريف الارتباط لتحسين أداء الموقع وتحليل حركة المرور وتخصيص المحتوى. من خلال الاستمرار في استخدام هذا الموقع، فإنك توافق على',
            privacyPolicy: 'سياسة الخصوصية الخاصة بنا',
            compliance: 'وفقاً لقانون حماية البيانات العامة GDPR وقانون خصوصية المستهلك في كاليفورنيا CCPA وقوانين حماية البيانات الأخرى المعمول بها.',
            settings: 'الإعدادات',
            decline: 'رفض',
            acceptAll: 'قبول الكل',
            acceptSelected: 'قبول المحدد',
            settingsTitle: 'إعدادات ملفات تعريف الارتباط',
            settingsDescription: 'إدارة إعدادات ملفات تعريف الارتباط الخاصة بك. يمكنك تمكين أو تعطيل فئات مختلفة من ملفات تعريف الارتباط وفقاً لتفضيلاتك.',
            necessary: 'ملفات تعريف الارتباط الضرورية',
            necessaryDesc: 'هذه الملفات ضرورية لعمل الموقع ولا يمكن إيقافها.',
            functional: 'ملفات تعريف الارتباط الوظيفية',
            functionalDesc: 'تمكن هذه الملفات الموقع من توفير وظائف محسنة وتخصيص.',
            analytics: 'ملفات تعريف الارتباط التحليلية',
            analyticsDesc: 'تساعدنا هذه الملفات على فهم كيفية تفاعل الزوار مع الموقع.',
            marketing: 'ملفات تعريف الارتباط التسويقية',
            marketingDesc: 'تُستخدم هذه الملفات لتتبع الزوار عبر المواقع لأغراض إعلانية.',
            performance: 'ملفات تعريف الارتباط للأداء',
            performanceDesc: 'تساعد هذه الملفات في تحسين أداء الموقع وأوقات التحميل.',
            cancel: 'إلغاء',
            saveSettings: 'حفظ الإعدادات',
            learnMore: 'تعلم المزيد',
            poweredBy: 'مدعوم بواسطة Cookie Widget',
            website: 'الموقع الإلكتروني',
            github: 'GitHub',
            trackersDetected: 'تم اكتشاف متتبعات',
            trackers: 'متتبعات',
            detectedTrackers: 'المتتبعات المكتشفة',
            scriptsBlocked: 'النصوص المحجوبة',
            scripts: 'نصوص',
            policyUpdated: 'تم تحديث سياسة الخصوصية الخاصة بنا. يرجى مراجعة التغييرات وتحديث تفضيلاتك.',
            consentExpired: 'انتهت صلاحية موافقتك. يرجى تحديث تفضيلات الخصوصية الخاصة بك.'
        },
        'uk': {
            name: 'Українська',
            flag: '🇺🇦',
            title: 'Використання файлів cookie',
            description: 'Ми використовуємо файли cookie для покращення продуктивності веб-сайту, аналізу трафіку та персоналізації контенту. Продовжуючи використовувати цей сайт, ви погоджуєтеся з нашою',
            privacyPolicy: 'політикою конфіденційності',
            compliance: 'Відповідно до GDPR, CCPA та інших застосовних законів про захист даних.',
            settings: 'Налаштування',
            decline: 'Відхилити',
            acceptAll: 'Прийняти все',
            acceptSelected: 'Прийняти вибране',
            settingsTitle: 'Налаштування файлів cookie',
            settingsDescription: 'Керуйте налаштуваннями файлів cookie. Ви можете увімкнути або вимкнути різні категорії файлів cookie відповідно до ваших уподобань.',
            necessary: 'Необхідні файли cookie',
            necessaryDesc: 'Ці файли cookie необхідні для роботи веб-сайту і не можуть бути вимкнені.',
            functional: 'Функціональні файли cookie',
            functionalDesc: 'Ці файли cookie дозволяють веб-сайту надавати розширену функціональність та персоналізацію.',
            analytics: 'Аналітичні файли cookie',
            analyticsDesc: 'Ці файли cookie допомагають нам зрозуміти, як відвідувачі взаємодіють з веб-сайтом.',
            marketing: 'Маркетингові файли cookie',
            marketingDesc: 'Ці файли cookie використовуються для відстеження відвідувачів на веб-сайтах з рекламною метою.',
            performance: 'Файли cookie продуктивності',
            performanceDesc: 'Ці файли cookie допомагають покращити продуктивність веб-сайту та час завантаження.',
            cancel: 'Скасувати',
            saveSettings: 'Зберегти налаштування',
            learnMore: 'Дізнатися більше',
            poweredBy: 'Працює на Cookie Widget',
            website: 'Веб-сайт',
            github: 'GitHub',
            trackersDetected: 'Виявлено трекери',
            trackers: 'трекерів',
            detectedTrackers: 'Виявлені трекери',
            scriptsBlocked: 'Заблоковані скрипти',
            scripts: 'скриптів',
            policyUpdated: 'Наша політика конфіденційності була оновлена. Будь ласка, перегляньте зміни та оновіть свої налаштування.',
            consentExpired: 'Термін дії вашої згоди закінчився. Будь ласка, оновіть налаштування конфіденційності.'
        }
    };

    // Script Guard - Advanced script blocking system
    const SCRIPT_GUARD = {
        blocked: new Set(),
        proxies: new Map(),
        originalMethods: new Map(),
        
        // Initialize script blocking before any scripts load
        init() {
            this.blockGoogleAnalytics();
            this.blockMetaPixel();
            this.blockYandexMetrika();
            this.blockTikTokPixel();
            this.blockGoogleAds();
            this.blockHotjar();
            this.blockLinkedInInsight();
            this.interceptScriptLoading();
        },
        
        // Block Google Analytics
        blockGoogleAnalytics() {
            // Block gtag
            window.gtag = this.createBlockedProxy('gtag', 'analytics');
            window.ga = this.createBlockedProxy('ga', 'analytics');
            
            // Block dataLayer
            if (!window.dataLayer) {
                window.dataLayer = this.createBlockedArray('dataLayer', 'analytics');
            }
        },
        
        // Block Meta Pixel
        blockMetaPixel() {
            window.fbq = this.createBlockedProxy('fbq', 'marketing');
            window._fbq = this.createBlockedProxy('_fbq', 'marketing');
        },
        
        // Block Yandex Metrika
        blockYandexMetrika() {
            window.ym = this.createBlockedProxy('ym', 'analytics');
            window.Ya = window.Ya || {};
            window.Ya.Metrika2 = this.createBlockedProxy('Ya.Metrika2', 'analytics');
        },
        
        // Block TikTok Pixel
        blockTikTokPixel() {
            window.ttq = this.createBlockedProxy('ttq', 'marketing');
        },
        
        // Block Google Ads
        blockGoogleAds() {
            window.google_trackConversion = this.createBlockedProxy('google_trackConversion', 'marketing');
            window.gtag_report_conversion = this.createBlockedProxy('gtag_report_conversion', 'marketing');
        },
        
        // Block Hotjar
        blockHotjar() {
            window.hj = this.createBlockedProxy('hj', 'analytics');
        },
        
        // Block LinkedIn Insight
        blockLinkedInInsight() {
            window._linkedin_partner_id = null;
            window.lintrk = this.createBlockedProxy('lintrk', 'marketing');
        },
        
        // Create blocked proxy function
        createBlockedProxy(name, category) {
            const proxy = (...args) => {
                if (this.isAllowed(category)) {
                    const original = this.originalMethods.get(name);
                    if (original) {
                        return original.apply(window, args);
                    }
                } else {
                    LOGGER.security('SCRIPT-GUARD', '🔒', `Blocked ${name} (${category})`);
                    this.blocked.add(name);
                }
            };
            
            // Add properties for complex objects
            proxy.push = (...args) => {
                if (this.isAllowed(category)) {
                    const original = this.originalMethods.get(name + '.push');
                    if (original) {
                        return original.apply(window, args);
                    }
                } else {
                    LOGGER.security('SCRIPT-GUARD', '🔒', `Blocked ${name}.push (${category})`);
                }
            };
            
            this.proxies.set(name, { proxy, category });
            return proxy;
        },
        
        // Create blocked array
        createBlockedArray(name, category) {
            const array = [];
            const originalPush = array.push;
            
            array.push = (...args) => {
                if (this.isAllowed(category)) {
                    return originalPush.apply(array, args);
                } else {
                    LOGGER.security('SCRIPT-GUARD', '🔒', `Blocked ${name}.push (${category})`);
                    this.blocked.add(name);
                }
            };
            
            this.proxies.set(name, { proxy: array, category });
            return array;
        },
        
        // Check if category is allowed
        isAllowed(category) {
            // Always allow necessary cookies
            if (category === 'necessary') return true;
            
            // Check if cookieBanner instance exists
            if (!window.cookieBanner) {
                LOGGER.security('SCRIPT-GUARD', '🔒', `Blocked ${category} - no banner instance`);
                return false;
            }
            
            const settings = window.cookieBanner.getCookieSettings();
            
            // If no settings found, block all non-necessary by default
            if (!settings || Object.keys(settings).length === 0) {
                LOGGER.security('SCRIPT-GUARD', '🔒', `Blocked ${category} - no settings found`);
                return false;
            }
            
            const isAllowed = settings[category] === true;
            
            if (!isAllowed) {
                LOGGER.security('SCRIPT-GUARD', '🔒', `Blocked ${category} - user denied consent`);
            }
            
            // Return the actual setting for this category
            return isAllowed;
        },
        
        // Intercept script loading
        interceptScriptLoading() {
            const originalCreateElement = document.createElement;
            document.createElement = function(tagName) {
                const element = originalCreateElement.call(document, tagName);
                
                if (tagName.toLowerCase() === 'script') {
                    const originalSetAttribute = element.setAttribute;
                    element.setAttribute = function(name, value) {
                        if (name === 'src' && SCRIPT_GUARD.shouldBlockScript(value)) {
                            LOGGER.security('SCRIPT-GUARD', '🔒', `Blocked script loading: ${value}`);
                            return;
                        }
                        return originalSetAttribute.call(element, name, value);
                    };
                    
                    // Also intercept src property
                    Object.defineProperty(element, 'src', {
                        set: function(value) {
                            if (SCRIPT_GUARD.shouldBlockScript(value)) {
                                LOGGER.security('SCRIPT-GUARD', '🔒', `Blocked script src: ${value}`);
                                return;
                            }
                            this.setAttribute('src', value);
                        },
                        get: function() {
                            return this.getAttribute('src');
                        }
                    });
                }
                
                return element;
            };
        },
        
        // Check if script should be blocked
        shouldBlockScript(src) {
            if (!src) return false;
            
            const blockPatterns = {
                analytics: [
                    'google-analytics.com',
                    'googletagmanager.com',
                    'mc.yandex.ru',
                    'metrika.yandex.ru',
                    'hotjar.com'
                ],
                marketing: [
                    'connect.facebook.net',
                    'analytics.tiktok.com',
                    'googleadservices.com',
                    'snap.licdn.com'
                ]
            };
            
            for (const [category, patterns] of Object.entries(blockPatterns)) {
                if (!this.isAllowed(category)) {
                    if (patterns.some(pattern => src.includes(pattern))) {
                        return true;
                    }
                }
            }
            
            return false;
        },
        
        // Enable category and restore functions
        enableCategory(category) {
            // Double-check that category is actually allowed before enabling
            if (!this.isAllowed(category)) {
                LOGGER.warning('SCRIPT-GUARD', '⚠️', `Attempted to enable ${category} but it's not allowed`);
                return;
            }
            
            for (const [name, config] of this.proxies.entries()) {
                if (config.category === category) {
                    LOGGER.success('SCRIPT-GUARD', '✅', `Enabled ${name} (${category})`);
                }
            }
            
            // Enable iframes for this category
            IFRAME_BLOCKER.unblockCategory(category);
            
            // Enable lazy-loaded scripts for this category
            LAZY_SCRIPT_GUARD.enableCategory(category);
        },
        
        // Get blocked scripts count
        getBlockedCount() {
            return this.blocked.size;
        }
    };

    // Auto-Renew Consent system
    const AUTO_RENEW = {
        intervals: {
            '3months': 90 * 24 * 60 * 60 * 1000,
            '6months': 180 * 24 * 60 * 60 * 1000,
            '12months': 365 * 24 * 60 * 60 * 1000
        },
        
        // Check if consent needs renewal
        needsRenewal(consentData, renewalPeriod = '12months') {
            if (!consentData || !consentData.timestamp) return true;
            
            const now = Date.now();
            const consentAge = now - consentData.timestamp;
            const maxAge = this.intervals[renewalPeriod];
            
            return consentAge > maxAge;
        },
        
        // Check if privacy policy version changed
        policyVersionChanged(consentData, currentVersion = '1.0') {
            if (!consentData || !consentData.policyVersion) return true;
            return consentData.policyVersion !== currentVersion;
        },
        
        // Get renewal reason
        getRenewalReason(consentData, renewalPeriod, policyVersion) {
            if (this.policyVersionChanged(consentData, policyVersion)) {
                return 'policy_updated';
            }
            if (this.needsRenewal(consentData, renewalPeriod)) {
                return 'expired';
            }
            return null;
        }
    };

    // Zero-Reload Mode - Dynamic script management
    const ZERO_RELOAD = {
        scriptQueue: new Map(),
        
        // Queue script for execution when consent is given
        queueScript(category, scriptFn, context = 'inline') {
            if (!this.scriptQueue.has(category)) {
                this.scriptQueue.set(category, []);
            }
            
            this.scriptQueue.get(category).push({
                fn: scriptFn,
                context,
                queued: Date.now()
            });
        },
        
        // Execute queued scripts for category
        executeCategory(category) {
            const scripts = this.scriptQueue.get(category);
            if (!scripts) return;
            
            LOGGER.info('ZERO-RELOAD', '🚀', `Executing ${scripts.length} scripts for ${category}`);
            
            scripts.forEach(script => {
                try {
                    if (typeof script.fn === 'function') {
                        script.fn();
                    } else if (typeof script.fn === 'string') {
                        // Execute script string
                        const scriptElement = document.createElement('script');
                        scriptElement.textContent = script.fn;
                        document.head.appendChild(scriptElement);
                    }
                    LOGGER.success('ZERO-RELOAD', '✅', `Executed ${category} script`);
                } catch (error) {
                    LOGGER.error('ZERO-RELOAD', '❌', `Failed to execute ${category} script:`, error);
                }
            });
            
            // Clear executed scripts
            this.scriptQueue.set(category, []);
        },
        
        // Disable category scripts
        disableCategory(category) {
            LOGGER.warning('ZERO-RELOAD', '🛑', `Disabling ${category} scripts`);
            
            // Clear any queued scripts
            this.scriptQueue.set(category, []);
            
            // Disable tracking functions
            SCRIPT_GUARD.proxies.forEach((config, name) => {
                if (config.category === category) {
                    LOGGER.warning('ZERO-RELOAD', '🛑', `Disabled ${name}`);
                }
            });
        }
    };

    // SEO-Friendly Mode - Bot detection system
    const SEO_MODE = {
        botUserAgents: [
            'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
            'yandexbot', 'facebookexternalhit', 'twitterbot', 'linkedinbot',
            'whatsapp', 'telegrambot', 'applebot', 'ia_archiver'
        ],
        
        // Detect if current visitor is a bot
        isBot() {
            // Check user agent
            const userAgent = navigator.userAgent.toLowerCase();
            const isBotUA = this.botUserAgents.some(bot => userAgent.includes(bot));
            
            // Check for automation indicators
            const isAutomated = this.detectAutomation();
            
            // Check for headless browser indicators
            const isHeadless = this.detectHeadless();
            
            return isBotUA || isAutomated || isHeadless;
        },
        
        // Detect automation (Selenium, Puppeteer, etc.)
        detectAutomation() {
            // Check for webdriver
            if (navigator.webdriver) return true;
            
            // Check for automation properties
            if (window.chrome && window.chrome.runtime && window.chrome.runtime.onConnect) {
                return false; // Real Chrome
            }
            
            // Check for common automation indicators
            const automationIndicators = [
                'webdriver' in window,
                'callPhantom' in window,
                '_phantom' in window,
                'phantom' in window,
                '__nightmare' in window,
                'spawn' in window,
                'Buffer' in window,
                'emit' in window,
                'domAutomation' in window || 'domAutomationController' in window
            ];
            
            return automationIndicators.some(indicator => indicator);
        },
        
        // Detect headless browsers
        detectHeadless() {
            // Check for missing features typical in headless browsers
            const headlessIndicators = [
                !window.outerHeight || !window.outerWidth,
                navigator.plugins.length === 0,
                !navigator.languages || navigator.languages.length === 0,
                /HeadlessChrome/.test(navigator.userAgent)
            ];
            
            return headlessIndicators.some(indicator => indicator);
        },
        
        // Get bot-friendly consent (assumes all cookies accepted for SEO)
        getBotConsent() {
            return {
                necessary: true,
                functional: true,
                analytics: true,
                marketing: true,
                performance: true,
                timestamp: Date.now(),
                version: '3.3.0',
                botMode: true,
                userAgent: navigator.userAgent
            };
        }
    };

    // Integrations Hub - Pre-configured integrations
    const INTEGRATIONS_HUB = {
        configurations: {
            'google-tag-manager': {
                name: 'Google Tag Manager',
                category: 'analytics',
                setup: (containerId) => ({
                    script: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','${containerId}');
                    `,
                    noscript: `<iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    consentUpdate: (settings) => {
                        if (typeof gtag !== 'undefined') {
                            gtag('consent', 'update', {
                                'analytics_storage': settings.analytics ? 'granted' : 'denied',
                                'ad_storage': settings.marketing ? 'granted' : 'denied',
                                'functionality_storage': settings.functional ? 'granted' : 'denied'
                            });
                        }
                    }
                })
            },
            
            'yandex-metrika': {
                name: 'Yandex Metrika',
                category: 'analytics',
                setup: (counterId, options = {}) => ({
                    script: `
                        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                        (window, document, "script", "https://mc.yandex.ru/metrika/watch.js", "ym");
                        ym(${counterId}, "init", ${JSON.stringify({
                            clickmap: options.clickmap !== false,
                            trackLinks: options.trackLinks !== false,
                            accurateTrackBounce: options.accurateTrackBounce !== false,
                            ...options
                        })});
                    `,
                    noscript: `<div><img src="https://mc.yandex.ru/watch/${counterId}" style="position:absolute; left:-9999px;" alt="" /></div>`
                })
            },
            
            'meta-pixel': {
                name: 'Meta Pixel',
                category: 'marketing',
                setup: (pixelId) => ({
                    script: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '${pixelId}');
                        fbq('track', 'PageView');
                    `,
                    noscript: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"/>`
                })
            },
            
            'tiktok-pixel': {
                name: 'TikTok Pixel',
                category: 'marketing',
                setup: (pixelId) => ({
                    script: `
                        !function (w, d, t) {
                            w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
                            ttq.load('${pixelId}');
                            ttq.page();
                        }(window, document, 'ttq');
                    `
                })
            },
            
            'google-recaptcha-v3': {
                name: 'Google reCAPTCHA v3',
                category: 'functional',
                setup: (siteKey) => ({
                    script: `
                        var recaptchaScript = document.createElement('script');
                        recaptchaScript.src = 'https://www.google.com/recaptcha/api.js?render=${siteKey}';
                        document.head.appendChild(recaptchaScript);
                        
                        window.executeRecaptcha = function(action) {
                            return new Promise((resolve) => {
                                grecaptcha.ready(function() {
                                    grecaptcha.execute('${siteKey}', {action: action}).then(resolve);
                                });
                            });
                        };
                    `
                })
            },
            
            'cloudflare-turnstile': {
                name: 'Cloudflare Turnstile',
                category: 'functional',
                setup: (siteKey) => ({
                    script: `
                        var turnstileScript = document.createElement('script');
                        turnstileScript.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
                        turnstileScript.async = true;
                        turnstileScript.defer = true;
                        document.head.appendChild(turnstileScript);
                        
                        window.renderTurnstile = function(element) {
                            if (typeof turnstile !== 'undefined') {
                                return turnstile.render(element, {
                                    sitekey: '${siteKey}',
                                    callback: function(token) {
                                        console.log('Turnstile token:', token);
                                    }
                                });
                            }
                        };
                    `
                })
            }
        },
        
        // Setup integration
        setupIntegration(type, config) {
            const integration = this.configurations[type];
            if (!integration) {
                console.error(`Integration ${type} not found`);
                return null;
            }
            
            const setup = integration.setup(config.id || config.siteKey || config.containerId, config.options);
            
            return {
                name: integration.name,
                category: integration.category,
                script: setup.script,
                noscript: setup.noscript,
                consentUpdate: setup.consentUpdate,
                execute: () => {
                    if (setup.script) {
                        const scriptElement = document.createElement('script');
                        scriptElement.textContent = setup.script;
                        document.head.appendChild(scriptElement);
                    }
                    
                    if (setup.noscript) {
                        const noscriptElement = document.createElement('noscript');
                        noscriptElement.innerHTML = setup.noscript;
                        document.head.appendChild(noscriptElement);
                    }
                }
            };
        },
        
        // Get available integrations
        getAvailableIntegrations() {
            return Object.keys(this.configurations).map(key => ({
                id: key,
                name: this.configurations[key].name,
                category: this.configurations[key].category
            }));
        }
    };

    // Secure LocalStorage Backup system
    const SECURE_STORAGE = {
        storageKeys: {
            localStorage: 'cookie_consent_ls',
            sessionStorage: 'cookie_consent_ss',
            indexedDB: 'cookie_consent_idb'
        },
        
        // Try to store data in multiple locations
        setSecureItem(key, value) {
            const data = {
                value,
                timestamp: Date.now(),
                version: '3.3.0'
            };
            
            const serialized = JSON.stringify(data);
            const results = {
                localStorage: false,
                sessionStorage: false,
                indexedDB: false,
                cookies: false
            };
            
            // Try localStorage
            try {
                localStorage.setItem(this.storageKeys.localStorage, serialized);
                results.localStorage = true;
            } catch (e) {
                console.warn('localStorage not available:', e.message);
            }
            
            // Try sessionStorage
            try {
                sessionStorage.setItem(this.storageKeys.sessionStorage, serialized);
                results.sessionStorage = true;
            } catch (e) {
                console.warn('sessionStorage not available:', e.message);
            }
            
            // Try IndexedDB
            this.setIndexedDBItem(serialized).then(() => {
                results.indexedDB = true;
            }).catch(e => {
                console.warn('IndexedDB not available:', e.message);
            });
            
            // Try cookies as fallback
            try {
                document.cookie = `${key}=${encodeURIComponent(serialized)}; path=/; max-age=31536000; SameSite=Lax`;
                results.cookies = true;
            } catch (e) {
                console.warn('Cookies not available:', e.message);
            }
            
            LOGGER.security('SECURE-STORAGE', '🔒', 'Saved to', Object.keys(results).filter(k => results[k]));
            return results;
        },
        
        // Try to retrieve data from multiple locations
        getSecureItem(key) {
            // Try localStorage first
            try {
                const data = localStorage.getItem(this.storageKeys.localStorage);
                if (data) {
                    const parsed = JSON.parse(data);
                    if (this.isValidData(parsed)) {
                        return parsed.value;
                    }
                }
            } catch (e) {}
            
            // Try sessionStorage
            try {
                const data = sessionStorage.getItem(this.storageKeys.sessionStorage);
                if (data) {
                    const parsed = JSON.parse(data);
                    if (this.isValidData(parsed)) {
                        return parsed.value;
                    }
                }
            } catch (e) {}
            
            // Try IndexedDB
            try {
                // This would need to be async, but for compatibility we'll skip for now
                // const data = await this.getIndexedDBItem();
            } catch (e) {}
            
            // Try cookies as fallback
            try {
                const cookies = document.cookie.split(';');
                for (const cookie of cookies) {
                    const [name, value] = cookie.trim().split('=');
                    if (name === key) {
                        const parsed = JSON.parse(decodeURIComponent(value));
                        if (this.isValidData(parsed)) {
                            return parsed.value;
                        }
                    }
                }
            } catch (e) {}
            
            return null;
        },
        
        // IndexedDB operations
        async setIndexedDBItem(data) {
            return new Promise((resolve, reject) => {
                const request = indexedDB.open('CookieWidget', 1);
                
                request.onerror = () => reject(request.error);
                
                request.onsuccess = () => {
                    const db = request.result;
                    const transaction = db.transaction(['consent'], 'readwrite');
                    const store = transaction.objectStore('consent');
                    
                    store.put({ id: 'current', data });
                    transaction.oncomplete = () => resolve();
                    transaction.onerror = () => reject(transaction.error);
                };
                
                request.onupgradeneeded = () => {
                    const db = request.result;
                    if (!db.objectStoreNames.contains('consent')) {
                        db.createObjectStore('consent', { keyPath: 'id' });
                    }
                };
            });
        },
        
        // Validate stored data
        isValidData(data) {
            return data && 
                   data.value && 
                   data.timestamp && 
                   data.version &&
                   (Date.now() - data.timestamp) < (365 * 24 * 60 * 60 * 1000); // 1 year max
        },
        
        // Clear all storage locations
        clearSecureItem(key) {
            try { localStorage.removeItem(this.storageKeys.localStorage); } catch (e) {}
            try { sessionStorage.removeItem(this.storageKeys.sessionStorage); } catch (e) {}
            try { document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`; } catch (e) {}
            
            // Clear IndexedDB
            try {
                const request = indexedDB.open('CookieWidget', 1);
                request.onsuccess = () => {
                    const db = request.result;
                    const transaction = db.transaction(['consent'], 'readwrite');
                    const store = transaction.objectStore('consent');
                    store.delete('current');
                };
            } catch (e) {}
        }
    };

    // Initialize Script Guard immediately
    SCRIPT_GUARD.init();

    // Smart tracker detection database
    const TRACKER_DATABASE = {
        analytics: {
            'Google Analytics': {
                patterns: ['gtag', 'ga(', '_ga', '_gid', '_gat', 'google-analytics', 'googletagmanager'],
                scripts: ['gtag/js', 'analytics.js', 'gtm.js'],
                domains: ['google-analytics.com', 'googletagmanager.com']
            },
            'Yandex Metrika': {
                patterns: ['ym(', 'yaCounter', '_ym_', 'yandex_metrika'],
                scripts: ['metrika/watch.js', 'mc.yandex.ru'],
                domains: ['mc.yandex.ru', 'metrika.yandex.ru']
            },
            'Adobe Analytics': {
                patterns: ['s.t()', 's.tl()', '_satellite', 'adobe_analytics'],
                scripts: ['omniture', 'adobe_analytics'],
                domains: ['omtrdc.net', 'demdex.net']
            },
            'Hotjar': {
                patterns: ['hj(', 'hotjar', '_hjSettings'],
                scripts: ['hotjar.com'],
                domains: ['hotjar.com', 'hotjar.io']
            }
        },
        marketing: {
            'Meta Pixel': {
                patterns: ['fbq(', 'facebook-pixel', '_fbp', '_fbc'],
                scripts: ['connect.facebook.net'],
                domains: ['facebook.com', 'connect.facebook.net']
            },
            'TikTok Pixel': {
                patterns: ['ttq.', 'tiktok_pixel', '_ttp'],
                scripts: ['analytics.tiktok.com'],
                domains: ['analytics.tiktok.com', 'tiktok.com']
            },
            'Google Ads': {
                patterns: ['gtag_report_conversion', 'google_trackConversion', '_gcl_'],
                scripts: ['googleadservices.com'],
                domains: ['googleadservices.com', 'googlesyndication.com']
            },
            'LinkedIn Insight': {
                patterns: ['_linkedin_partner_id', 'linkedin_pixel'],
                scripts: ['snap.licdn.com'],
                domains: ['linkedin.com', 'snap.licdn.com']
            }
        },
        functional: {
            'YouTube': {
                patterns: ['youtube.com/embed', 'ytimg.com'],
                scripts: ['youtube.com'],
                domains: ['youtube.com', 'ytimg.com']
            },
            'Google Maps': {
                patterns: ['maps.googleapis.com', 'google.maps'],
                scripts: ['maps.googleapis.com'],
                domains: ['maps.googleapis.com', 'maps.google.com']
            },
            'Intercom': {
                patterns: ['Intercom(', 'intercom-frame'],
                scripts: ['intercom.io'],
                domains: ['intercom.io', 'intercom.com']
            }
        }
    };

    // 🎨 Beautiful Console Logger
    const LOGGER = {
        styles: {
            primary: 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
            success: 'background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
            warning: 'background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
            error: 'background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
            info: 'background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
            mobile: 'background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
            security: 'background: linear-gradient(135deg, #FF5722 0%, #D84315 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
            geo: 'background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
            tracker: 'background: linear-gradient(135deg, #795548 0%, #5D4037 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
            iframe: 'background: linear-gradient(135deg, #E91E63 0%, #C2185B 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
            scanner: 'background: linear-gradient(135deg, #3F51B5 0%, #303F9F 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
            sandbox: 'background: linear-gradient(135deg, #607D8B 0%, #455A64 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;'
        },
        
        log(category, icon, message, data = null, style = 'primary') {
            const timestamp = new Date().toLocaleTimeString();
            const prefix = `%c${icon} ${category}`;
            
            if (data) {
                console.log(`${prefix} %c${message}`, this.styles[style], 'color: #333; font-weight: normal;', data);
            } else {
                console.log(`${prefix} %c${message}`, this.styles[style], 'color: #333; font-weight: normal;');
            }
        },
        
        success(category, icon, message, data = null) {
            this.log(category, icon, message, data, 'success');
        },
        
        warning(category, icon, message, data = null) {
            this.log(category, icon, message, data, 'warning');
        },
        
        error(category, icon, message, data = null) {
            this.log(category, icon, message, data, 'error');
        },
        
        info(category, icon, message, data = null) {
            this.log(category, icon, message, data, 'info');
        },
        
        mobile(category, icon, message, data = null) {
            this.log(category, icon, message, data, 'mobile');
        },
        
        security(category, icon, message, data = null) {
            this.log(category, icon, message, data, 'security');
        },
        
        geo(category, icon, message, data = null) {
            this.log(category, icon, message, data, 'geo');
        },
        
        tracker(category, icon, message, data = null) {
            this.log(category, icon, message, data, 'tracker');
        },
        
        iframe(category, icon, message, data = null) {
            this.log(category, icon, message, data, 'iframe');
        },
        
        scanner(category, icon, message, data = null) {
            this.log(category, icon, message, data, 'scanner');
        },
        
        sandbox(category, icon, message, data = null) {
            this.log(category, icon, message, data, 'sandbox');
        }
    };

    // 🚫 Advanced iFrame Blocker
    const IFRAME_BLOCKER = {
        blockedIframes: new Set(),
        originalSrcs: new Map(),
        
        // Known iframe patterns that require consent
        patterns: {
            analytics: [
                'google-analytics.com',
                'googletagmanager.com',
                'hotjar.com',
                'fullstory.com'
            ],
            marketing: [
                'facebook.com',
                'connect.facebook.net',
                'doubleclick.net',
                'googlesyndication.com',
                'ads.yahoo.com'
            ],
            functional: [
                'youtube.com',
                'youtube-nocookie.com',
                'vimeo.com',
                'tiktok.com',
                'maps.google.com',
                'google.com/maps',
                'openstreetmap.org'
            ]
        },
        
        init() {
            this.interceptIframeCreation();
            this.scanExistingIframes();
            LOGGER.security('IFRAME-BLOCKER', '🚫', 'Advanced iframe blocker initialized');
        },
        
        interceptIframeCreation() {
            const originalCreateElement = document.createElement;
            document.createElement = function(tagName) {
                const element = originalCreateElement.call(document, tagName);
                
                if (tagName.toLowerCase() === 'iframe') {
                    IFRAME_BLOCKER.setupIframeInterception(element);
                }
                
                return element;
            };
        },
        
        setupIframeInterception(iframe) {
            const originalSetAttribute = iframe.setAttribute;
            iframe.setAttribute = function(name, value) {
                if (name === 'src' && IFRAME_BLOCKER.shouldBlockIframe(value)) {
                    IFRAME_BLOCKER.blockIframe(iframe, value);
                    return;
                }
                return originalSetAttribute.call(iframe, name, value);
            };
            
            // Intercept src property
            Object.defineProperty(iframe, 'src', {
                set: function(value) {
                    if (IFRAME_BLOCKER.shouldBlockIframe(value)) {
                        IFRAME_BLOCKER.blockIframe(iframe, value);
                        return;
                    }
                    this.setAttribute('src', value);
                },
                get: function() {
                    return this.getAttribute('src');
                }
            });
        },
        
        shouldBlockIframe(src) {
            if (!src) return false;
            
            for (const [category, patterns] of Object.entries(this.patterns)) {
                if (!this.isAllowed(category)) {
                    if (patterns.some(pattern => src.includes(pattern))) {
                        return true;
                    }
                }
            }
            return false;
        },
        
        blockIframe(iframe, originalSrc) {
            this.originalSrcs.set(iframe, originalSrc);
            this.blockedIframes.add(iframe);
            
            const category = this.getCategoryForSrc(originalSrc);
            
            // Create placeholder
            iframe.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(`
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f5f5f5; font-family: Arial, sans-serif; text-align: center; padding: 20px; box-sizing: border-box;">
                    <div>
                        <div style="font-size: 48px; margin-bottom: 16px;">🔒</div>
                        <h3 style="margin: 0 0 8px 0; color: #333;">Content Blocked</h3>
                        <p style="margin: 0 0 16px 0; color: #666; font-size: 14px;">This ${category} content requires your consent</p>
                        <button onclick="parent.postMessage({type: 'unblock-iframe', category: '${category}'}, '*')" 
                                style="background: #4CAF50; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
                            Allow ${category} content
                        </button>
                    </div>
                </div>
            `);
            
            LOGGER.iframe('IFRAME-BLOCKER', '🚫', `Blocked ${category} iframe: ${originalSrc}`);
        },
        
        getCategoryForSrc(src) {
            for (const [category, patterns] of Object.entries(this.patterns)) {
                if (patterns.some(pattern => src.includes(pattern))) {
                    return category;
                }
            }
            return 'unknown';
        },
        
        scanExistingIframes() {
            const iframes = document.querySelectorAll('iframe');
            let blockedCount = 0;
            
            iframes.forEach(iframe => {
                const src = iframe.src || iframe.getAttribute('src');
                if (src && this.shouldBlockIframe(src)) {
                    this.blockIframe(iframe, src);
                    blockedCount++;
                }
            });
            
            if (blockedCount > 0) {
                LOGGER.iframe('IFRAME-BLOCKER', '🚫', `Blocked ${blockedCount} existing iframes`);
            }
        },
        
        unblockCategory(category) {
            this.blockedIframes.forEach(iframe => {
                const originalSrc = this.originalSrcs.get(iframe);
                if (originalSrc && this.getCategoryForSrc(originalSrc) === category) {
                    iframe.src = originalSrc;
                    this.blockedIframes.delete(iframe);
                    this.originalSrcs.delete(iframe);
                    LOGGER.iframe('IFRAME-BLOCKER', '✅', `Unblocked ${category} iframe: ${originalSrc}`);
                }
            });
        },
        
        isAllowed(category) {
            if (!window.cookieBanner) return false;
            const settings = window.cookieBanner.getCookieSettings();
            return settings[category] === true;
        }
    };

    // 🔍 Advanced Script Scanner
    const SCRIPT_SCANNER = {
        scannedScripts: new Map(),
        cookiePatterns: [
            /document\.cookie\s*=/,
            /localStorage\.setItem/,
            /sessionStorage\.setItem/,
            /\.setItem\(/,
            /setCookie/,
            /createCookie/,
            /writeCookie/,
            /_ga\s*=/,
            /_gid\s*=/,
            /gtag\(/,
            /fbq\(/,
            /ttq\(/,
            /analytics/i,
            /tracking/i
        ],
        
        init() {
            this.scanAllScripts();
            this.interceptNewScripts();
            LOGGER.scanner('SCRIPT-SCANNER', '🔍', 'Advanced script scanner initialized');
        },
        
        scanAllScripts() {
            const scripts = document.querySelectorAll('script');
            let totalScanned = 0;
            let cookieScripts = 0;
            
            scripts.forEach(script => {
                const result = this.analyzeScript(script);
                if (result.setsCookies) {
                    cookieScripts++;
                }
                totalScanned++;
            });
            
            LOGGER.scanner('SCRIPT-SCANNER', '🔍', `Scanned ${totalScanned} scripts, found ${cookieScripts} cookie-setting scripts`);
        },
        
        analyzeScript(script) {
            const src = script.src;
            const content = script.textContent || script.innerHTML;
            
            const analysis = {
                element: script,
                src: src,
                hasContent: !!content,
                setsCookies: false,
                category: 'unknown',
                patterns: [],
                risk: 'low'
            };
            
            // Check external script URL
            if (src) {
                analysis.category = this.categorizeByUrl(src);
                analysis.setsCookies = this.isKnownTracker(src);
            }
            
            // Check inline script content
            if (content) {
                const cookieMatches = this.cookiePatterns.filter(pattern => pattern.test(content));
                if (cookieMatches.length > 0) {
                    analysis.setsCookies = true;
                    analysis.patterns = cookieMatches.map(p => p.toString());
                    analysis.risk = cookieMatches.length > 2 ? 'high' : 'medium';
                }
                
                if (!analysis.category || analysis.category === 'unknown') {
                    analysis.category = this.categorizeByContent(content);
                }
            }
            
            this.scannedScripts.set(script, analysis);
            
            if (analysis.setsCookies) {
                LOGGER.scanner('SCRIPT-SCANNER', '🍪', `Cookie script detected: ${analysis.category} (${analysis.risk} risk)`, {
                    src: src || 'inline',
                    patterns: analysis.patterns
                });
            }
            
            return analysis;
        },
        
        categorizeByUrl(url) {
            const patterns = {
                analytics: ['google-analytics', 'googletagmanager', 'hotjar', 'fullstory', 'mixpanel', 'segment'],
                marketing: ['facebook.net', 'doubleclick', 'googlesyndication', 'tiktok', 'linkedin', 'twitter'],
                functional: ['youtube', 'vimeo', 'maps.google', 'recaptcha', 'cloudflare']
            };
            
            for (const [category, urlPatterns] of Object.entries(patterns)) {
                if (urlPatterns.some(pattern => url.includes(pattern))) {
                    return category;
                }
            }
            return 'unknown';
        },
        
        categorizeByContent(content) {
            if (/gtag|ga\(|_ga|google.*analytics/i.test(content)) return 'analytics';
            if (/fbq|facebook|fb_|meta.*pixel/i.test(content)) return 'marketing';
            if (/ttq|tiktok|tt_/i.test(content)) return 'marketing';
            if (/youtube|vimeo|maps/i.test(content)) return 'functional';
            return 'unknown';
        },
        
        isKnownTracker(url) {
            const trackerDomains = [
                'google-analytics.com',
                'googletagmanager.com',
                'connect.facebook.net',
                'analytics.tiktok.com',
                'hotjar.com',
                'fullstory.com'
            ];
            return trackerDomains.some(domain => url.includes(domain));
        },
        
        interceptNewScripts() {
            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    mutation.addedNodes.forEach(node => {
                        if (node.tagName === 'SCRIPT') {
                            this.analyzeScript(node);
                        }
                    });
                });
            });
            
            observer.observe(document, {
                childList: true,
                subtree: true
            });
        },
        
        getScriptsByCategory(category) {
            const scripts = [];
            this.scannedScripts.forEach((analysis, script) => {
                if (analysis.category === category) {
                    scripts.push(analysis);
                }
            });
            return scripts;
        }
    };

    // 🏖️ Secure Sandbox Execution
    const SECURE_SANDBOX = {
        sandboxes: new Map(),
        
        init() {
            LOGGER.sandbox('SECURE-SANDBOX', '🏖️', 'Secure sandbox execution initialized');
        },
        
        executeInSandbox(code, category, context = {}) {
            const sandboxId = `sandbox-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.sandbox = 'allow-scripts';
            iframe.srcdoc = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <title>Secure Sandbox</title>
                </head>
                <body>
                    <script>
                        // Sandbox environment
                        const context = ${JSON.stringify(context)};
                        const category = "${category}";
                        
                        // Limited API access
                        const sandboxAPI = {
                            log: (msg) => parent.postMessage({type: 'sandbox-log', message: msg, category}, '*'),
                            error: (err) => parent.postMessage({type: 'sandbox-error', error: err.toString(), category}, '*'),
                            result: (data) => parent.postMessage({type: 'sandbox-result', data, category}, '*')
                        };
                        
                        // Override dangerous functions
                        document.cookie = '';
                        localStorage = undefined;
                        sessionStorage = undefined;
                        
                        try {
                            // Execute user code
                            ${code}
                        } catch (error) {
                            sandboxAPI.error(error);
                        }
                    </script>
                </body>
                </html>
            `;
            
            document.body.appendChild(iframe);
            this.sandboxes.set(sandboxId, iframe);
            
            LOGGER.sandbox('SECURE-SANDBOX', '🏖️', `Executing ${category} script in sandbox: ${sandboxId}`);
            
            // Auto-cleanup after 30 seconds
            setTimeout(() => {
                this.destroySandbox(sandboxId);
            }, 30000);
            
            return sandboxId;
        },
        
        destroySandbox(sandboxId) {
            const iframe = this.sandboxes.get(sandboxId);
            if (iframe && iframe.parentNode) {
                iframe.parentNode.removeChild(iframe);
                this.sandboxes.delete(sandboxId);
                LOGGER.sandbox('SECURE-SANDBOX', '🗑️', `Destroyed sandbox: ${sandboxId}`);
            }
        }
    };

    // ⏳ Lazy-Loading Script Guard
    const LAZY_SCRIPT_GUARD = {
        deferredScripts: new Set(),
        asyncScripts: new Set(),
        
        init() {
            this.interceptDeferredScripts();
            this.interceptAsyncScripts();
            this.scanExistingScripts();
            LOGGER.security('LAZY-GUARD', '⏳', 'Lazy-loading script guard initialized');
        },
        
        interceptDeferredScripts() {
            const originalSetAttribute = Element.prototype.setAttribute;
            Element.prototype.setAttribute = function(name, value) {
                if (this.tagName === 'SCRIPT' && name === 'defer') {
                    LAZY_SCRIPT_GUARD.handleDeferredScript(this);
                }
                if (this.tagName === 'SCRIPT' && name === 'async') {
                    LAZY_SCRIPT_GUARD.handleAsyncScript(this);
                }
                return originalSetAttribute.call(this, name, value);
            };
        },
        
        interceptAsyncScripts() {
            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    mutation.addedNodes.forEach(node => {
                        if (node.tagName === 'SCRIPT') {
                            if (node.defer) {
                                LAZY_SCRIPT_GUARD.handleDeferredScript(node);
                            }
                            if (node.async) {
                                LAZY_SCRIPT_GUARD.handleAsyncScript(node);
                            }
                        }
                    });
                });
            });
            
            observer.observe(document, {
                childList: true,
                subtree: true
            });
        },
        
        scanExistingScripts() {
            const deferredScripts = document.querySelectorAll('script[defer]');
            const asyncScripts = document.querySelectorAll('script[async]');
            
            deferredScripts.forEach(script => this.handleDeferredScript(script));
            asyncScripts.forEach(script => this.handleAsyncScript(script));
            
            LOGGER.security('LAZY-GUARD', '⏳', `Found ${deferredScripts.length} deferred and ${asyncScripts.length} async scripts`);
        },
        
        handleDeferredScript(script) {
            const src = script.src;
            const category = this.categorizeScript(src || script.textContent);
            
            if (!this.isAllowed(category)) {
                script.removeAttribute('defer');
                script.type = 'text/blocked-defer';
                this.deferredScripts.add({script, category, originalSrc: src});
                LOGGER.security('LAZY-GUARD', '⏳', `Blocked deferred ${category} script: ${src || 'inline'}`);
            }
        },
        
        handleAsyncScript(script) {
            const src = script.src;
            const category = this.categorizeScript(src || script.textContent);
            
            if (!this.isAllowed(category)) {
                script.removeAttribute('async');
                script.type = 'text/blocked-async';
                this.asyncScripts.add({script, category, originalSrc: src});
                LOGGER.security('LAZY-GUARD', '⏳', `Blocked async ${category} script: ${src || 'inline'}`);
            }
        },
        
        categorizeScript(srcOrContent) {
            if (!srcOrContent) return 'unknown';
            
            if (/google.*analytics|gtag|ga\(/i.test(srcOrContent)) return 'analytics';
            if (/facebook|fbq|meta.*pixel/i.test(srcOrContent)) return 'marketing';
            if (/tiktok|ttq/i.test(srcOrContent)) return 'marketing';
            if (/youtube|vimeo|maps/i.test(srcOrContent)) return 'functional';
            
            return 'unknown';
        },
        
        enableCategory(category) {
            // Enable deferred scripts
            this.deferredScripts.forEach(item => {
                if (item.category === category) {
                    item.script.type = 'text/javascript';
                    item.script.defer = true;
                    if (item.originalSrc) {
                        item.script.src = item.originalSrc;
                    }
                    LOGGER.security('LAZY-GUARD', '✅', `Enabled deferred ${category} script`);
                }
            });
            
            // Enable async scripts
            this.asyncScripts.forEach(item => {
                if (item.category === category) {
                    item.script.type = 'text/javascript';
                    item.script.async = true;
                    if (item.originalSrc) {
                        item.script.src = item.originalSrc;
                    }
                    LOGGER.security('LAZY-GUARD', '✅', `Enabled async ${category} script`);
                }
            });
        },
        
        isAllowed(category) {
            if (!window.cookieBanner) return false;
            const settings = window.cookieBanner.getCookieSettings();
            return settings[category] === true;
        }
    };

    // Geo-location and privacy law mapping
    const PRIVACY_LAWS = {
        'EU': {
            name: 'GDPR',
            strictMode: true,
            requiresExplicitConsent: true,
            showDeclineButton: true,
            defaultDenied: true,
            complianceText: {
                'ru': 'В соответствии с требованиями GDPR и европейскими законами о защите данных.',
                'en': 'In accordance with GDPR and European data protection laws.',
                'de': 'In Übereinstimmung mit der DSGVO und den europäischen Datenschutzgesetzen.',
                'fr': 'Conformément au RGPD et aux lois européennes sur la protection des données.',
                'es': 'De acuerdo con el RGPD y las leyes europeas de protección de datos.',
                'it': 'In conformità con il GDPR e le leggi europee sulla protezione dei dati.',
                'pt': 'De acordo com o RGPD e as leis europeias de proteção de dados.',
                'pl': 'Zgodnie z RODO i europejskimi przepisami o ochronie danych.',
                'uk': 'Відповідно до вимог GDPR та європейських законів про захист даних.',
                'default': 'In accordance with GDPR and European data protection laws.'
            }
        },
        'US': {
            name: 'CCPA/CPRA',
            strictMode: false,
            requiresExplicitConsent: false,
            showDeclineButton: true,
            defaultDenied: false,
            complianceText: {
                'ru': 'В соответствии с требованиями CCPA, CPRA и калифорнийскими законами о конфиденциальности.',
                'en': 'In accordance with CCPA, CPRA and California privacy laws.',
                'de': 'In Übereinstimmung mit CCPA, CPRA und kalifornischen Datenschutzgesetzen.',
                'fr': 'Conformément au CCPA, CPRA et aux lois californiennes sur la confidentialité.',
                'es': 'De acuerdo con CCPA, CPRA y las leyes de privacidad de California.',
                'it': 'In conformità con CCPA, CPRA e le leggi californiane sulla privacy.',
                'pt': 'De acordo com CCPA, CPRA e as leis de privacidade da Califórnia.',
                'pl': 'Zgodnie z CCPA, CPRA i kalifornijskimi przepisami o prywatności.',
                'uk': 'Відповідно до вимог CCPA, CPRA та каліфорнійських законів про конфіденційність.',
                'default': 'In accordance with CCPA, CPRA and California privacy laws.'
            }
        },
        'BR': {
            name: 'LGPD',
            strictMode: true,
            requiresExplicitConsent: true,
            showDeclineButton: true,
            defaultDenied: true,
            complianceText: {
                'ru': 'В соответствии с требованиями LGPD и бразильскими законами о защите данных.',
                'en': 'In accordance with LGPD and Brazilian data protection laws.',
                'de': 'In Übereinstimmung mit LGPD und brasilianischen Datenschutzgesetzen.',
                'fr': 'Conformément à la LGPD et aux lois brésiliennes sur la protection des données.',
                'es': 'De acuerdo con la LGPD y las leyes brasileñas de protección de datos.',
                'it': 'In conformità con la LGPD e le leggi brasiliane sulla protezione dei dati.',
                'pt': 'De acordo com a LGPD e as leis brasileiras de proteção de dados.',
                'pl': 'Zgodnie z LGPD i brazylijskimi przepisami o ochronie danych.',
                'uk': 'Відповідно до вимог LGPD та бразильських законів про захист даних.',
                'default': 'In accordance with LGPD and Brazilian data protection laws.'
            }
        },
        'RU': {
            name: '152-ФЗ РФ',
            strictMode: true,
            requiresExplicitConsent: true,
            showDeclineButton: true,
            defaultDenied: true,
            complianceText: {
                'ru': 'В соответствии с требованиями 152-ФЗ "О персональных данных".',
                'en': 'In accordance with Federal Law No. 152-FZ "On Personal Data".',
                'de': 'In Übereinstimmung mit dem Bundesgesetz Nr. 152-FZ "Über personenbezogene Daten".',
                'fr': 'Conformément à la loi fédérale n° 152-FZ "Sur les données personnelles".',
                'es': 'De acuerdo con la Ley Federal No. 152-FZ "Sobre Datos Personales".',
                'it': 'In conformità con la Legge Federale n. 152-FZ "Sui dati personali".',
                'pt': 'De acordo com a Lei Federal nº 152-FZ "Sobre Dados Pessoais".',
                'pl': 'Zgodnie z ustawą federalną nr 152-FZ "O danych osobowych".',
                'uk': 'Відповідно до вимог Федерального закону № 152-ФЗ "Про персональні дані".',
                'default': 'In accordance with Federal Law No. 152-FZ "On Personal Data".'
            }
        },
        'CA': {
            name: 'PIPEDA',
            strictMode: false,
            requiresExplicitConsent: false,
            showDeclineButton: true,
            defaultDenied: false,
            complianceText: {
                'ru': 'В соответствии с требованиями PIPEDA и канадскими законами о конфиденциальности.',
                'en': 'In accordance with PIPEDA and Canadian privacy laws.',
                'de': 'In Übereinstimmung mit PIPEDA und kanadischen Datenschutzgesetzen.',
                'fr': 'Conformément à la LPRPDE et aux lois canadiennes sur la protection de la vie privée.',
                'es': 'De acuerdo con PIPEDA y las leyes canadienses de privacidad.',
                'it': 'In conformità con PIPEDA e le leggi canadesi sulla privacy.',
                'pt': 'De acordo com PIPEDA e as leis canadenses de privacidade.',
                'pl': 'Zgodnie z PIPEDA i kanadyjskimi przepisami o prywatności.',
                'uk': 'Відповідно до вимог PIPEDA та канадських законів про конфіденційність.',
                'default': 'In accordance with PIPEDA and Canadian privacy laws.'
            }
        },
        'DEFAULT': {
            name: 'Privacy Compliance',
            strictMode: false,
            requiresExplicitConsent: false,
            showDeclineButton: false,
            defaultDenied: false,
            complianceText: {
                'ru': 'Мы уважаем вашу конфиденциальность и соблюдаем применимые законы о защите данных.',
                'en': 'We respect your privacy and comply with applicable data protection laws.',
                'de': 'Wir respektieren Ihre Privatsphäre und halten uns an geltende Datenschutzgesetze.',
                'fr': 'Nous respectons votre vie privée et nous conformons aux lois applicables sur la protection des données.',
                'es': 'Respetamos su privacidad y cumplimos con las leyes aplicables de protección de datos.',
                'it': 'Rispettiamo la tua privacy e rispettiamo le leggi applicabili sulla protezione dei dati.',
                'pt': 'Respeitamos sua privacidade e cumprimos as leis aplicáveis de proteção de dados.',
                'pl': 'Szanujemy Twoją prywatność i przestrzegamy obowiązujących przepisów o ochronie danych.',
                'uk': 'Ми поважаємо вашу конфіденційність та дотримуємося чинних законів про захист даних.',
                'default': 'We respect your privacy and comply with applicable data protection laws.'
            }
        }
    };

    // Advanced CookieBanner class
    class AdvancedCookieBanner {
        constructor(options = {}) {
            this.version = '3.3.0';
            this.cookieName = 'cookie_consent';
            this.cookieExpiry = options.cookieExpiry || 365;
            this.currentLanguage = null;
            this.userRegion = null;
            this.detectedTrackers = {};
            this.privacyLaw = null;
            this.isInitialized = false;
            
            // Advanced options
            this.scriptGuardEnabled = options.scriptGuard !== false;
            this.autoRenewPeriod = options.autoRenewPeriod || '12months';
            this.policyVersion = options.policyVersion || '1.0';
            this.zeroReloadMode = options.zeroReloadMode !== false;
            
            // New options
            this.seoFriendlyMode = options.seoFriendlyMode !== false;
            this.secureStorage = options.secureStorage !== false;
            this.integrations = options.integrations || [];
            this.isBot = false;
            
            // Configuration
            this.config = {
                autoShow: options.autoShow !== false,
                showDeclineButton: options.showDeclineButton !== false,
                showSettingsButton: options.showSettingsButton !== false,
                position: options.position || 'bottom',
                theme: options.theme || 'default',
                layout: options.layout || 'bar',
                privacyPolicyUrl: options.privacyPolicyUrl || '/privacy-policy',
                showPoweredBy: options.showPoweredBy !== false,
                respectDNT: options.respectDNT !== false,
                
                // Callbacks
                onAccept: options.onAccept || null,
                onDecline: options.onDecline || null,
                onSettingsChange: options.onSettingsChange || null,
                onLanguageChange: options.onLanguageChange || null,
                
                // Custom texts override
                customTexts: options.customTexts || {},
                
                // Categories
                categories: options.categories || ['necessary', 'functional', 'analytics', 'marketing', 'performance']
            };
            
            // Default settings
            this.defaultSettings = {
                necessary: true,
                functional: false,
                analytics: false,
                marketing: false,
                performance: false
            };
            
            // Current settings cache
            this.currentSettings = null;
            
            // Initialize
            this.init();
        }
        
        // Initialize the banner
        async init() {
            if (this.isInitialized) return;
            
            try {
                // SEO-Friendly Mode: Check if visitor is a bot
                if (this.seoFriendlyMode) {
                    this.isBot = SEO_MODE.isBot();
                    if (this.isBot) {
                        console.log('🤖 SEO Mode: Bot detected, applying bot-friendly consent');
                        const botConsent = SEO_MODE.getBotConsent();
                        this.applyCookieSettings(botConsent);
                        this.isInitialized = true;
                        return; // Don't show banner to bots
                    }
                }
                
                // Setup integrations
                this.setupIntegrations();
                
                // Detect user region and privacy law
                await this.detectUserRegion();
                
                // Detect user language
                this.currentLanguage = this.detectLanguage();
                
                // Smart tracker detection
                await this.detectTrackers();
                
                // Apply geo-adaptive settings
                this.applyGeoAdaptiveSettings();
                
                // Load existing settings first
                const existingSettings = this.getCookieSettings();
                if (existingSettings && Object.keys(existingSettings).length > 0) {
                    // Apply existing settings immediately (without Zero-Reload activation)
                    this.applyInitialSettings(existingSettings);
                    LOGGER.info('SETTINGS', '⚙️', 'Applied existing consent settings:', existingSettings);
                } else {
                    // Apply default settings (only necessary = true)
                    const defaultSettings = {};
                    this.config.categories.forEach(category => {
                        defaultSettings[category] = category === 'necessary';
                    });
                    this.applyInitialSettings(defaultSettings);
                    LOGGER.info('SETTINGS', '⚙️', 'Applied default settings (necessary only):', defaultSettings);
                }
                
                // Check if banner should be shown
                if (this.shouldShowBanner()) {
                    await this.createBanner();
                    
                    // Для мобильных - принудительно показываем
                    if (this.config.autoShow) {
                        // Небольшая задержка для мобильных чтобы DOM успел обновиться
                        if (this.isMobileDevice()) {
                            setTimeout(() => {
                                this.showBanner();
                                LOGGER.mobile('MOBILE', '📱', 'Banner shown with delay for mobile');
                            }, 100);
                        } else {
                            this.showBanner();
                        }
                        
                        // Дополнительная проверка для мобильных сразу после показа
                        if (this.isMobileDevice()) {
                            setTimeout(() => {
                                const banner = document.getElementById('cookieBanner');
                                if (banner && !banner.classList.contains('show')) {
                                    LOGGER.mobile('MOBILE', '⚠️', 'Banner not showing after initial display, forcing again');
                                    this.showBanner();
                                }
                            }, 500);
                        }
                    }
                } else {
                    // Даже если не должен показываться, на мобильных проверяем еще раз
                    if (this.isMobileDevice()) {
                        LOGGER.mobile('MOBILE', '📱', 'Banner should not show according to shouldShowBanner(), but checking consent...');
                        const consent = this.getCookieConsent();
                        LOGGER.mobile('MOBILE', '📋', 'Current consent:', consent);
                    }
                }
                
                // Setup global functions
                this.setupGlobalFunctions();
                
                this.isInitialized = true;
                
                // Dispatch initialization event
                this.dispatchEvent('cookieBannerInitialized', {
                    version: this.version,
                    language: this.currentLanguage,
                    region: this.userRegion,
                    privacyLaw: this.privacyLaw?.name,
                    detectedTrackers: this.detectedTrackers,
                    isBot: this.isBot,
                    integrations: this.integrations.length,
                    settings: existingSettings
                });
                
                // Beautiful initialization banner
                console.log(
                    '%c🍪 COOKIE WIDGET %cv3.3.0 %c🚀 INITIALIZED',
                    'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 8px 12px; border-radius: 8px 0 0 8px; font-weight: bold; font-size: 14px;',
                    'background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); color: white; padding: 8px 12px; font-weight: bold; font-size: 14px;',
                    'background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%); color: white; padding: 8px 12px; border-radius: 0 8px 8px 0; font-weight: bold; font-size: 14px;'
                );
                
                console.group('%c📊 INITIALIZATION SUMMARY', 'background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;');
                LOGGER.info('SYSTEM', '🌍', `Language: ${this.currentLanguage} (${LANGUAGES[this.currentLanguage].name}) | Region: ${this.userRegion}`);
                LOGGER.info('SYSTEM', '⚖️', `Privacy Law: ${this.privacyLaw?.name || 'Default'}`);
                LOGGER.info('SYSTEM', '🧠', `Trackers Detected: ${Object.values(this.detectedTrackers).flat().length}`);
                LOGGER.info('SYSTEM', '🔒', `Script Guard: ${this.scriptGuardEnabled ? 'Enabled' : 'Disabled'}`);
                LOGGER.info('SYSTEM', '🚀', `Zero-Reload: ${this.zeroReloadMode ? 'Enabled' : 'Disabled'}`);
                LOGGER.info('SYSTEM', '🤖', `Bot Detection: ${this.isBot ? 'Bot Detected' : 'Human User'}`);
                LOGGER.info('SYSTEM', '🚫', `iFrame Blocker: Enabled`);
                LOGGER.info('SYSTEM', '🔍', `Script Scanner: Enabled`);
                LOGGER.info('SYSTEM', '🏖️', `Secure Sandbox: Enabled`);
                LOGGER.info('SYSTEM', '⏳', `Lazy Script Guard: Enabled`);
                LOGGER.info('SYSTEM', '🗣️', `Supported Languages: ${Object.keys(LANGUAGES).length} (${Object.keys(LANGUAGES).join(', ')})`);
                console.groupEnd();
                
                // Дополнительная проверка для мобильных устройств
                if (this.isMobileDevice()) {
                    setTimeout(() => {
                        this.mobileCompatibilityCheck();
                    }, 1500);
                }
                
            } catch (error) {
                console.warn('Cookie banner initialization failed:', error);
            }
        }
        
        // Проверка совместимости с мобильными устройствами
        mobileCompatibilityCheck() {
            const banner = document.getElementById('cookieBanner');
            const settings = document.getElementById('cookieSettings');
            const shouldShow = this.shouldShowBanner();
            
            LOGGER.mobile('MOBILE', '📱', 'Mobile compatibility check:', {
                bannerExists: !!banner,
                settingsExists: !!settings,
                shouldShow: shouldShow,
                bannerVisible: banner ? banner.classList.contains('show') : false,
                settingsVisible: settings ? settings.classList.contains('show') : false,
                bannerDisplay: banner ? banner.style.display : 'N/A',
                bannerVisibility: banner ? banner.style.visibility : 'N/A'
            });
            
            // Убеждаемся, что настройки скрыты при загрузке
            if (settings) {
                settings.style.display = 'none';
                settings.classList.remove('show');
                settings.setAttribute('aria-hidden', 'true');
            }
            
            // Если баннер должен показываться
            if (shouldShow) {
                if (banner && !banner.classList.contains('show')) {
                    LOGGER.mobile('MOBILE', '📱', 'Banner should be visible but is not, forcing display');
                    
                    // Принудительно показываем баннер
                    banner.style.display = 'block';
                    banner.style.visibility = 'visible';
                    banner.style.position = 'fixed';
                    banner.style.bottom = '0';
                    banner.style.left = '0';
                    banner.style.right = '0';
                    banner.style.zIndex = '999999';
                    banner.style.width = '100%';
                    banner.style.opacity = '1';
                    
                    // Добавляем класс show
                    banner.classList.add('show');
                    banner.setAttribute('aria-hidden', 'false');
                    
                    LOGGER.mobile('MOBILE', '✅', 'Banner forced to display');
                } else if (!banner) {
                    // Если баннер вообще не создан, но должен быть
                    LOGGER.mobile('MOBILE', '📱', 'Banner not created, forcing creation');
                    this.createBanner().then(() => {
                        setTimeout(() => {
                            this.showBanner();
                        }, 100);
                    });
                }
            }
        }
        
        // Setup configured integrations
        setupIntegrations() {
            this.integrations.forEach(integration => {
                try {
                    const setup = INTEGRATIONS_HUB.setupIntegration(integration.type, integration.config);
                    if (setup) {
                        // Queue integration script for execution when consent is granted
                        if (this.zeroReloadMode) {
                            ZERO_RELOAD.queueScript(setup.category, setup.execute, 'integration');
                        }
                        
                        console.log(`🔌 Integration: ${setup.name} configured for ${setup.category}`);
                    }
                } catch (error) {
                    console.error(`Failed to setup integration ${integration.type}:`, error);
                }
            });
        }
        
        // 🛰 Geo-Adaptive Consent: Detect user region
        async detectUserRegion() {
            try {
                // First try timezone-based detection (more reliable)
                this.detectRegionByTimezone();
                
                // Then try to enhance with IP-based detection (optional)
                try {
                    // Use more reliable services with proper CORS support
                    const geoServices = [
                        'https://api.country.is/', // Free, CORS-enabled
                        'https://ipapi.co/json/', // Backup
                    ];
                    
                    for (const service of geoServices) {
                        try {
                            const controller = new AbortController();
                            const timeoutId = setTimeout(() => controller.abort(), 2000);
                            
                            const response = await fetch(service, { 
                                signal: controller.signal,
                                headers: { 
                                    'Accept': 'application/json',
                                    'User-Agent': 'CookieWidget/3.3'
                                }
                            });
                            
                            clearTimeout(timeoutId);
                            
                            if (response.ok) {
                                const data = await response.json();
                                const countryCode = data.country || data.country_code || data.countryCode;
                                
                                if (countryCode && countryCode !== this.getTimezoneCountry()) {
                                    const detectedRegion = this.mapCountryToRegion(countryCode);
                                    if (detectedRegion !== 'DEFAULT') {
                                        this.userRegion = detectedRegion;
                                        this.privacyLaw = PRIVACY_LAWS[this.userRegion] || PRIVACY_LAWS['DEFAULT'];
                                        LOGGER.geo('GEO-DETECT', '🌍', `Enhanced region detection: ${this.userRegion} (${countryCode}) - ${this.privacyLaw.name}`);
                                        return;
                                    }
                                }
                            }
                        } catch (e) {
                            // Silently continue to next service or use timezone fallback
                            continue;
                        }
                    }
                } catch (error) {
                    // IP detection failed, but we already have timezone fallback
                    console.log('🌍 Using timezone-based region detection');
                }
                
            } catch (error) {
                console.warn('Geo-detection failed, using default settings:', error);
                this.userRegion = 'DEFAULT';
                this.privacyLaw = PRIVACY_LAWS['DEFAULT'];
            }
        }
        
        // Map country codes to privacy law regions
        mapCountryToRegion(countryCode) {
            const euCountries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO'];
            
            if (euCountries.includes(countryCode)) return 'EU';
            if (countryCode === 'US') return 'US';
            if (countryCode === 'BR') return 'BR';
            if (countryCode === 'RU') return 'RU';
            if (countryCode === 'CA') return 'CA';
            
            return 'DEFAULT';
        }
        
        // Fallback region detection by timezone
        detectRegionByTimezone() {
            try {
                const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                
                if (timezone.includes('Europe/')) {
                    this.userRegion = 'EU';
                } else if (timezone.includes('America/New_York') || timezone.includes('America/Los_Angeles')) {
                    this.userRegion = 'US';
                } else if (timezone.includes('America/Sao_Paulo')) {
                    this.userRegion = 'BR';
                } else if (timezone.includes('Europe/Moscow')) {
                    this.userRegion = 'RU';
                } else if (timezone.includes('America/Toronto')) {
                    this.userRegion = 'CA';
                } else {
                    this.userRegion = 'DEFAULT';
                }
                
                this.privacyLaw = PRIVACY_LAWS[this.userRegion];
                LOGGER.geo('GEO-DETECT', '🕐', `Region detected by timezone: ${this.userRegion} - ${this.privacyLaw.name}`);
                
            } catch (e) {
                this.userRegion = 'DEFAULT';
                this.privacyLaw = PRIVACY_LAWS['DEFAULT'];
            }
        }
        
        // Get country code from timezone (helper method)
        getTimezoneCountry() {
            try {
                const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                
                // Map common timezones to country codes
                const timezoneMap = {
                    'Europe/Moscow': 'RU',
                    'Europe/London': 'GB',
                    'Europe/Berlin': 'DE',
                    'Europe/Paris': 'FR',
                    'America/New_York': 'US',
                    'America/Los_Angeles': 'US',
                    'America/Chicago': 'US',
                    'America/Toronto': 'CA',
                    'America/Sao_Paulo': 'BR',
                    'Asia/Tokyo': 'JP',
                    'Asia/Shanghai': 'CN',
                    'Australia/Sydney': 'AU'
                };
                
                return timezoneMap[timezone] || 'DEFAULT';
            } catch (e) {
                return 'DEFAULT';
            }
        }
        
        // 🧠 Smart Auto-Detect Tracking
        async detectTrackers() {
            this.detectedTrackers = {
                analytics: [],
                marketing: [],
                functional: []
            };
            
            // Scan scripts in DOM
            this.scanDOMForTrackers();
            
            // Monitor network requests
            this.monitorNetworkRequests();
            
            // Scan cookies
            this.scanExistingCookies();
            
            // Wait a bit for dynamic content to load
            setTimeout(() => {
                this.scanDOMForTrackers();
                this.logDetectedTrackers();
            }, 2000);
        }
        
        // Scan DOM for tracker scripts and patterns
        scanDOMForTrackers() {
            // Scan script tags
            const scripts = document.querySelectorAll('script[src]');
            scripts.forEach(script => {
                const src = script.src.toLowerCase();
                this.checkScriptForTrackers(src);
            });
            
            // Scan inline scripts
            const inlineScripts = document.querySelectorAll('script:not([src])');
            inlineScripts.forEach(script => {
                const content = script.textContent.toLowerCase();
                this.checkContentForTrackers(content);
            });
            
            // Scan for iframe embeds
            const iframes = document.querySelectorAll('iframe[src]');
            iframes.forEach(iframe => {
                const src = iframe.src.toLowerCase();
                this.checkScriptForTrackers(src);
            });
        }
        
        // Check script URL for known trackers
        checkScriptForTrackers(src) {
            for (const [category, trackers] of Object.entries(TRACKER_DATABASE)) {
                for (const [name, config] of Object.entries(trackers)) {
                    // Check domains
                    if (config.domains.some(domain => src.includes(domain))) {
                        this.addDetectedTracker(category, name, 'script', src);
                    }
                    
                    // Check script patterns
                    if (config.scripts.some(pattern => src.includes(pattern))) {
                        this.addDetectedTracker(category, name, 'script', src);
                    }
                }
            }
        }
        
        // Check content for tracker patterns
        checkContentForTrackers(content) {
            for (const [category, trackers] of Object.entries(TRACKER_DATABASE)) {
                for (const [name, config] of Object.entries(trackers)) {
                    if (config.patterns.some(pattern => content.includes(pattern.toLowerCase()))) {
                        this.addDetectedTracker(category, name, 'inline', 'inline script');
                    }
                }
            }
        }
        
        // Monitor network requests for trackers
        monitorNetworkRequests() {
            // Override fetch
            const originalFetch = window.fetch;
            window.fetch = (...args) => {
                const url = args[0];
                if (typeof url === 'string') {
                    this.checkScriptForTrackers(url.toLowerCase());
                }
                return originalFetch.apply(window, args);
            };
            
            // Monitor XMLHttpRequest
            const originalXHROpen = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function(method, url) {
                if (typeof url === 'string') {
                    window.cookieBanner?.checkScriptForTrackers(url.toLowerCase());
                }
                return originalXHROpen.apply(this, arguments);
            };
        }
        
        // Scan existing cookies for tracker patterns
        scanExistingCookies() {
            const cookies = document.cookie.split(';');
            
            cookies.forEach(cookie => {
                const cookieName = cookie.split('=')[0].trim().toLowerCase();
                
                for (const [category, trackers] of Object.entries(TRACKER_DATABASE)) {
                    for (const [name, config] of Object.entries(trackers)) {
                        if (config.patterns.some(pattern => cookieName.includes(pattern.toLowerCase()))) {
                            this.addDetectedTracker(category, name, 'cookie', cookieName);
                        }
                    }
                }
            });
        }
        
        // Add detected tracker to the list
        addDetectedTracker(category, name, type, source) {
            if (!this.detectedTrackers[category]) {
                this.detectedTrackers[category] = [];
            }
            
            const existing = this.detectedTrackers[category].find(t => t.name === name);
            if (!existing) {
                this.detectedTrackers[category].push({
                    name,
                    type,
                    source,
                    detectedAt: Date.now()
                });
            }
        }
        
        // Log detected trackers for debugging
        logDetectedTrackers() {
            const totalTrackers = Object.values(this.detectedTrackers).flat().length;
            
            if (totalTrackers > 0) {
                LOGGER.tracker('SMART-DETECT', '🧠', `Smart Tracker Detection: Found ${totalTrackers} trackers`);
                console.group('%c🧠 SMART-DETECT %cTracker Details', LOGGER.styles.tracker, 'color: #333; font-weight: normal;');
                
                for (const [category, trackers] of Object.entries(this.detectedTrackers)) {
                    if (trackers.length > 0) {
                        console.group(`%c📊 ${category.toUpperCase()} %c(${trackers.length})`, LOGGER.styles.info, 'color: #666;');
                        trackers.forEach(tracker => {
                            console.log(`%c• %c${tracker.name} %c(${tracker.type})`, 'color: #4CAF50; font-weight: bold;', 'color: #333;', 'color: #666;', tracker.source);
                        });
                        console.groupEnd();
                    }
                }
                
                console.groupEnd();
            } else {
                LOGGER.tracker('SMART-DETECT', '🧠', 'Smart Tracker Detection: No trackers detected');
            }
        }
        
        // Apply geo-adaptive settings based on detected region
        applyGeoAdaptiveSettings() {
            if (!this.privacyLaw) return;
            
            // Update configuration based on privacy law
            this.config.showDeclineButton = this.privacyLaw.showDeclineButton;
            this.config.strictMode = this.privacyLaw.strictMode;
            this.config.requiresExplicitConsent = this.privacyLaw.requiresExplicitConsent;
            
            // Update default settings based on law requirements
            if (this.privacyLaw.defaultDenied) {
                Object.keys(this.defaultSettings).forEach(key => {
                    if (key !== 'necessary') {
                        this.defaultSettings[key] = false;
                    }
                });
            }
            
            // Update compliance text based on region AND language
            this.config.customTexts = this.config.customTexts || {};
            const complianceTextObj = this.privacyLaw.complianceText;
            
            // Get localized compliance text based on current language
            if (typeof complianceTextObj === 'object') {
                this.config.customTexts.compliance = complianceTextObj[this.currentLanguage] || complianceTextObj['default'] || complianceTextObj['en'];
            } else {
                // Fallback for old format (string)
                this.config.customTexts.compliance = complianceTextObj;
            }
            
            LOGGER.info('COMPLIANCE', '⚖️', `Applied ${this.privacyLaw.name} compliance settings for language: ${this.currentLanguage}`);
            LOGGER.info('COMPLIANCE', '📝', `Compliance text: ${this.config.customTexts.compliance}`);
        }
        
        // Enhanced language detection
        detectLanguage() {
            // Check URL parameters
            const urlParams = new URLSearchParams(window.location.search);
            const urlLang = urlParams.get('lang') || urlParams.get('language');
            if (urlLang && LANGUAGES[urlLang]) {
                return urlLang;
            }
            
            // Check localStorage
            try {
                const storedLang = localStorage.getItem('cookie_banner_language');
                if (storedLang && LANGUAGES[storedLang]) {
                    return storedLang;
                }
            } catch (e) {}
            
            // Check browser languages
            const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
            
            for (const lang of browserLanguages) {
                // Check exact match first
                if (LANGUAGES[lang]) {
                    return lang;
                }
                
                // Check language code without region (e.g., 'en' from 'en-US')
                const langCode = lang.split('-')[0].toLowerCase();
                if (LANGUAGES[langCode]) {
                    return langCode;
                }
                
                // Check for regional variants
                if (lang.includes('-')) {
                    const [mainLang, region] = lang.split('-');
                    
                    // Special cases for regional variants
                    if (mainLang === 'zh') {
                        if (region === 'CN' || region === 'Hans') return 'zh'; // Simplified Chinese
                        if (region === 'TW' || region === 'Hant') return 'zh'; // Traditional Chinese (using same for now)
                    }
                    
                    if (mainLang === 'pt') {
                        return 'pt'; // Portuguese (Brazil and Portugal use same)
                    }
                    
                    if (mainLang === 'en') {
                        return 'en'; // All English variants
                    }
                    
                    if (mainLang === 'ru') {
                        return 'ru'; // Russian
                    }
                    
                    if (mainLang === 'uk') {
                        return 'uk'; // Ukrainian
                    }
                    
                    if (mainLang === 'pl') {
                        return 'pl'; // Polish
                    }
                }
            }
            
            // Default to English
            return 'en';
        }
        
        // Check if banner should be shown
        shouldShowBanner() {
            // Check Do Not Track header
            if (this.config.respectDNT && navigator.doNotTrack === '1') {
                return false;
            }
            
            const consent = this.getCookieConsent();
            
            // Always show if no consent exists
            if (!consent) {
                LOGGER.info('BANNER', '📋', 'No consent found - showing banner');
                return true;
            }
            
            // Check version compatibility
            if (consent.version !== this.version) {
                LOGGER.info('BANNER', '📋', `Version mismatch (${consent.version} vs ${this.version}) - showing banner`);
                return true;
            }
            
            // Check auto-renewal
            const renewalReason = AUTO_RENEW.getRenewalReason(consent, this.autoRenewPeriod, this.policyVersion);
            if (renewalReason) {
                console.log(`🔄 Auto-Renew: Consent renewal required (${renewalReason})`);
                this.renewalReason = renewalReason;
                return true;
            }
            
            LOGGER.info('BANNER', '📋', 'Valid consent exists - not showing banner');
            return false;
        }
        
        // Get translation text
        t(key) {
            // Check custom texts first
            if (this.config.customTexts && this.config.customTexts[key]) {
                return this.config.customTexts[key];
            }
            
            // Get from language pack
            const langPack = LANGUAGES[this.currentLanguage] || LANGUAGES['ru'];
            return langPack[key] || key;
        }
        
        // Change language
        changeLanguage(langCode) {
            if (LANGUAGES[langCode]) {
                this.currentLanguage = langCode;
                
                // Update compliance text for new language
                if (this.privacyLaw && this.privacyLaw.complianceText) {
                    this.config.customTexts = this.config.customTexts || {};
                    const complianceTextObj = this.privacyLaw.complianceText;
                    
                    if (typeof complianceTextObj === 'object') {
                        this.config.customTexts.compliance = complianceTextObj[langCode] || complianceTextObj['default'] || complianceTextObj['en'];
                    } else {
                        this.config.customTexts.compliance = complianceTextObj;
                    }
                    
                    LOGGER.info('COMPLIANCE', '📝', `Updated compliance text for language: ${langCode}`);
                }
                
                // Save to localStorage
                try {
                    localStorage.setItem('cookie_banner_language', langCode);
                } catch (e) {}
                
                // Update banner if it exists
                const banner = document.getElementById('cookieBanner');
                if (banner) {
                    // Recreate banner with new language
                    this.createBanner().then(() => {
                        if (banner.classList.contains('show')) {
                            this.showBanner();
                        }
                    });
                }
                
                LOGGER.info('LANGUAGE', '🌍', `Language changed to: ${langCode} (${LANGUAGES[langCode].name})`);
                
                // Dispatch language change event
                this.dispatchEvent('languageChanged', {
                    language: langCode,
                    languageName: LANGUAGES[langCode].name
                });
            }
        }
        
        // Get available languages
        getAvailableLanguages() {
            return Object.keys(LANGUAGES).map(code => ({
                code: code,
                name: LANGUAGES[code].name,
                flag: LANGUAGES[code].flag
            }));
        }
        
        // Create banner HTML
        async createBanner() {
            // Проверяем, не существует ли уже баннер
            const existingBanner = document.getElementById('cookieBanner');
            if (existingBanner) {
                existingBanner.remove();
            }
            
            const banner = document.createElement('div');
            banner.className = 'cookie-banner';
            banner.id = 'cookieBanner';
            banner.setAttribute('role', 'dialog');
            banner.setAttribute('aria-hidden', 'true');
            
            // Мобильные исправления - НЕ используем transform, используем display
            const isMobile = this.isMobileDevice();
            if (isMobile) {
                banner.style.position = 'fixed';
                banner.style.bottom = '0';
                banner.style.left = '0';
                banner.style.right = '0';
                banner.style.zIndex = '999999';
                banner.style.width = '100%';
                banner.style.display = 'none'; // Скрываем через display вместо transform
                banner.style.visibility = 'hidden';
                
                LOGGER.mobile('MOBILE', '📱', 'Creating mobile banner with fixed positioning');
            }
            
            // Create banner content
            banner.innerHTML = await this.createBannerHTML();
            
            // Add to DOM
            document.body.appendChild(banner);
            
            // Setup event listeners
            this.setupEventListeners(banner);
            
            // Дополнительная проверка для мобильных
            if (isMobile) {
                setTimeout(() => {
                    const bannerCheck = document.getElementById('cookieBanner');
                    if (bannerCheck) {
                        LOGGER.success('MOBILE', '✅', 'Cookie banner created successfully');
                        LOGGER.mobile('MOBILE', '📱', 'Banner styles:', {
                            display: bannerCheck.style.display,
                            visibility: bannerCheck.style.visibility,
                            position: bannerCheck.style.position,
                            zIndex: bannerCheck.style.zIndex
                        });
                    } else {
                        LOGGER.error('MOBILE', '❌', 'Cookie banner creation failed');
                    }
                }, 100);
            }
            
            return banner;
        }
        
        // Generate banner HTML
        async createBannerHTML() {
            const totalTrackers = Object.values(this.detectedTrackers).flat().length;
            const privacyLawName = this.privacyLaw?.name || 'Privacy Compliance';
            const blockedScripts = this.scriptGuardEnabled ? SCRIPT_GUARD.getBlockedCount() : 0;
            
            return `
                <div class="cookie-banner__main">
                    <div class="cookie-banner__container">
                        <div class="cookie-banner__content">
                            <h2 class="cookie-banner__title">
                                ${this.renewalReason ? '🔄 ' : ''}${this.t('title')}
                                ${this.privacyLaw ? `<span class="cookie-banner__law">${privacyLawName}</span>` : ''}
                            </h2>
                            <p class="cookie-banner__text">
                                ${this.renewalReason ? this.getRenewalText() : this.t('description')} 
                                <a href="${this.config.privacyPolicyUrl}" class="cookie-banner__link" target="_blank" rel="noopener">
                                    ${this.t('privacyPolicy')}
                                </a>.
                            </p>
                            ${totalTrackers > 0 ? `
                                <div class="cookie-banner__trackers">
                                    <span class="cookie-banner__trackers-icon">🧠</span>
                                    <span class="cookie-banner__trackers-text">
                                        ${this.t('trackersDetected')}: ${totalTrackers} ${this.t('trackers')}
                                    </span>
                                </div>
                            ` : ''}
                            ${blockedScripts > 0 ? `
                                <div class="cookie-banner__guard">
                                    <span class="cookie-banner__guard-icon">🔒</span>
                                    <span class="cookie-banner__guard-text">
                                        ${this.t('scriptsBlocked')}: ${blockedScripts} ${this.t('scripts')}
                                    </span>
                                </div>
                            ` : ''}
                            ${this.config.customTexts?.compliance ? `
                                <p class="cookie-banner__compliance">
                                    ${this.config.customTexts.compliance}
                                </p>
                            ` : ''}
                        </div>
                        
                        <div class="cookie-banner__actions">
                            ${this.config.showSettingsButton ? `
                                <button class="cookie-banner__button cookie-banner__button--settings" 
                                        data-action="settings" 
                                        aria-label="${this.t('settings')}">
                                    ${this.t('settings')}
                                </button>
                            ` : ''}
                            
                            ${this.config.showDeclineButton ? `
                                <button class="cookie-banner__button cookie-banner__button--decline" 
                                        data-action="decline"
                                        aria-label="${this.t('decline')}">
                                    ${this.t('decline')}
                                </button>
                            ` : ''}
                            
                            <button class="cookie-banner__button cookie-banner__button--accept" 
                                    data-action="accept"
                                    aria-label="${this.t('acceptAll')}">
                                ${this.t('acceptAll')}
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="cookie-settings" id="cookieSettings" style="display: none;">
                    ${await this.createSettingsHTML()}
                </div>
            `;
        }
        
        // Get renewal reason text
        getRenewalText() {
            switch (this.renewalReason) {
                case 'policy_updated':
                    return this.t('policyUpdated');
                case 'expired':
                    return this.t('consentExpired');
                default:
                    return this.t('description');
            }
        }
        
        // Create settings panel HTML
        async createSettingsHTML() {
            return `
                <div class="cookie-settings__container">
                    <div class="cookie-settings__header">
                        <h3 class="cookie-settings__title">
                            ${this.t('settingsTitle')}
                        </h3>
                        <p class="cookie-settings__description">
                            ${this.t('settingsDescription')}
                        </p>
                        ${this.privacyLaw ? `
                            <div class="cookie-settings__law-info">
                                <span class="cookie-settings__law-badge">${this.privacyLaw.name}</span>
                                <span class="cookie-settings__region">📍 ${this.userRegion}</span>
                            </div>
                        ` : ''}
                    </div>
                    
                    <div class="cookie-settings__content">
                        ${this.config.categories.map(category => this.createCategoryHTML(category)).join('')}
                    </div>
                    
                    <div class="cookie-settings__footer">
                        <button class="cookie-banner__button cookie-banner__button--decline" 
                                data-action="close-settings">
                            ${this.t('cancel')}
                        </button>
                        <button class="cookie-banner__button cookie-banner__button--accept" 
                                data-action="save-settings">
                            ${this.t('saveSettings')}
                        </button>
                    </div>
                    
                    <div class="cookie-settings__links">
                        <a href="https://cookies-widget-sergioplay.vercel.app/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           class="cookie-settings__link">
                            🌐 ${this.t('website')}
                        </a>
                        <a href="https://github.com/SerGioPlay01/cookies_widget_sergioplay" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           class="cookie-settings__link">
                            📦 ${this.t('github')}
                        </a>
                    </div>
                </div>
            `;
        }
        
        // Create category HTML
        createCategoryHTML(category) {
            const isNecessary = category === 'necessary';
            const currentSettings = this.getCookieSettings();
            const isChecked = currentSettings[category] || isNecessary;
            const detectedInCategory = this.detectedTrackers[category] || [];
            
            return `
                <div class="cookie-category">
                    <div class="cookie-category__header">
                        <h4 class="cookie-category__title">
                            ${this.t(category)}
                            ${detectedInCategory.length > 0 ? `
                                <span class="cookie-category__count">${detectedInCategory.length}</span>
                            ` : ''}
                        </h4>
                        <div class="cookie-category__toggle">
                            <input type="checkbox" 
                                   id="cookie-${category}"
                                   data-category="${category}"
                                   ${isChecked ? 'checked' : ''}
                                   ${isNecessary ? 'disabled' : ''}>
                            <label class="cookie-category__slider" for="cookie-${category}"></label>
                        </div>
                    </div>
                    <p class="cookie-category__description">
                        ${this.t(category + 'Desc')}
                    </p>
                    ${detectedInCategory.length > 0 ? `
                        <div class="cookie-category__trackers">
                            <div class="cookie-category__trackers-header">
                                <span class="cookie-category__trackers-icon">🧠</span>
                                <span class="cookie-category__trackers-title">${this.t('detectedTrackers')}:</span>
                            </div>
                            <div class="cookie-category__trackers-list">
                                ${detectedInCategory.map(tracker => `
                                    <div class="cookie-tracker">
                                        <span class="cookie-tracker__name">${tracker.name}</span>
                                        <span class="cookie-tracker__type">${tracker.type}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        }
        
        // Setup event listeners
        setupEventListeners(banner) {
            const isMobile = this.isMobileDevice();
            
            // Основной обработчик кликов
            const handleClick = (e) => {
                const action = e.target.getAttribute('data-action');
                if (!action) return;
                
                e.preventDefault();
                e.stopPropagation();
                
                // Добавляем визуальную обратную связь для мобильных
                if (isMobile && e.target.tagName === 'BUTTON') {
                    e.target.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        e.target.style.transform = '';
                    }, 150);
                }
                
                switch (action) {
                    case 'accept':
                        this.acceptAll();
                        break;
                    case 'decline':
                        this.declineAll();
                        break;
                    case 'settings':
                        this.showSettings();
                        break;
                    case 'close-settings':
                        this.hideSettings();
                        break;
                    case 'save-settings':
                        this.saveSettings();
                        break;
                }
            };
            
            // Добавляем обработчики для клика и touch
            banner.addEventListener('click', handleClick);
            
            if (isMobile) {
                // Дополнительная обработка touch событий для мобильных
                banner.addEventListener('touchend', (e) => {
                    // Предотвращаем двойной вызов на мобильных
                    if (e.target.getAttribute('data-action')) {
                        e.preventDefault();
                        handleClick(e);
                    }
                });
                
                // Улучшенная обработка touch для кнопок
                const buttons = banner.querySelectorAll('button[data-action]');
                buttons.forEach(button => {
                    button.addEventListener('touchstart', (e) => {
                        button.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    });
                    
                    button.addEventListener('touchend', (e) => {
                        setTimeout(() => {
                            button.style.backgroundColor = '';
                        }, 200);
                    });
                });
            }
            
            // Keyboard navigation
            banner.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.hideSettings();
                }
            });
        }
        
        // Show banner with animation
        showBanner() {
            const banner = document.getElementById('cookieBanner');
            if (!banner) {
                console.warn('Cookie banner element not found');
                return;
            }
            
            // Мобильные исправления
            const isMobile = this.isMobileDevice();
            
            // Убеждаемся, что настройки скрыты при показе баннера
            const settings = document.getElementById('cookieSettings');
            if (settings) {
                settings.style.display = 'none';
                settings.classList.remove('show');
                settings.setAttribute('aria-hidden', 'true');
            }
            
            if (isMobile) {
                // Для мобильных - сначала делаем видимым через display и visibility
                banner.style.display = 'block';
                banner.style.visibility = 'visible';
                banner.style.position = 'fixed';
                banner.style.bottom = '0';
                banner.style.left = '0';
                banner.style.right = '0';
                banner.style.zIndex = '999999';
                banner.style.width = '100%';
                banner.style.opacity = '0';
                
                LOGGER.mobile('MOBILE', '📱', 'Showing banner on mobile device');
                
                // Затем добавляем класс show для анимации
                setTimeout(() => {
                    banner.style.opacity = '1';
                    banner.classList.add('show');
                    banner.setAttribute('aria-hidden', 'false');
                    
                    LOGGER.mobile('MOBILE', '✅', 'Banner shown successfully');
                }, 50);
            } else {
                // Для десктопа - стандартная анимация
                const showAnimation = () => {
                    banner.classList.add('show');
                    banner.setAttribute('aria-hidden', 'false');
                    
                    // Focus management for accessibility
                    const firstButton = banner.querySelector('button');
                    if (firstButton) {
                        setTimeout(() => {
                            firstButton.focus();
                        }, 100);
                    }
                };
                
                raf(showAnimation);
            }
            
            this.dispatchEvent('cookieBannerShown');
        }
        
        // Определение мобильного устройства
        isMobileDevice() {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            
            // Проверка на мобильные устройства
            const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
            const isMobileUA = mobileRegex.test(userAgent.toLowerCase());
            
            // Дополнительные проверки
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth <= 768;
            
            return isMobileUA || (isTouchDevice && isSmallScreen);
        }
        
        // Hide banner with animation
        hideBanner() {
            const banner = document.getElementById('cookieBanner');
            if (!banner) return;
            
            banner.classList.remove('show');
            banner.setAttribute('aria-hidden', 'true');
            
            setTimeout(() => {
                if (banner.parentNode) {
                    banner.parentNode.removeChild(banner);
                }
            }, 300);
            
            this.dispatchEvent('cookieBannerHidden');
        }
        
        // Show settings panel
        showSettings() {
            const settings = document.getElementById('cookieSettings');
            
            if (!settings) return;
            
            // Для мобильных устройств - настройки как часть виджета
            const isMobile = this.isMobileDevice();
            
            if (isMobile) {
                // Настройки остаются частью виджета, просто показываем их
                settings.style.display = 'flex';
                settings.style.position = 'relative';
                settings.style.maxHeight = window.innerHeight <= 600 ? '55vh' : '70vh';
            } else {
                settings.style.display = 'block';
            }
            
            // Добавляем класс show для анимации
            settings.classList.add('show');
            settings.setAttribute('aria-hidden', 'false');
            
            // Update toggles with current settings
            this.updateSettingsToggles();
            
            // Мобильная оптимизация - прокрутка к настройкам
            if (isMobile) {
                setTimeout(() => {
                    // Прокручиваем к началу настроек
                    settings.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                    
                    // Убеждаемся, что хедер настроек виден
                    const header = settings.querySelector('.cookie-settings__header');
                    if (header) {
                        header.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                        });
                    }
                }, 100);
            }
            
            // Focus management
            const firstInput = settings.querySelector('input, button');
            if (firstInput && !isMobile) {
                // На мобильных не фокусируем автоматически
                firstInput.focus();
            }
            
            this.dispatchEvent('cookieSettingsShown');
        }
        
        // Hide settings panel
        hideSettings() {
            const settings = document.getElementById('cookieSettings');
            
            if (!settings) return;
            
            const isMobile = this.isMobileDevice();
            
            // Убираем класс show для анимации скрытия
            settings.classList.remove('show');
            settings.setAttribute('aria-hidden', 'true');
            
            // Для мобильных - анимация скрытия как часть виджета
            if (isMobile) {
                // Плавное скрытие через CSS transition
                setTimeout(() => {
                    settings.style.display = 'none';
                }, 400); // Время должно совпадать с CSS transition
            } else {
                settings.style.display = 'none';
            }
            
            // Мобильная оптимизация - прокрутка обратно к основному баннеру
            if (isMobile) {
                setTimeout(() => {
                    const banner = document.getElementById('cookieBanner');
                    if (banner) {
                        const mainSection = banner.querySelector('.cookie-banner__main');
                        if (mainSection) {
                            mainSection.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'start' 
                            });
                        }
                    }
                }, 100);
            }
            
            this.dispatchEvent('cookieSettingsHidden');
        }
        
        // Update settings toggles with current values
        updateSettingsToggles() {
            const currentSettings = this.getCookieSettings();
            const toggles = document.querySelectorAll('#cookieSettings input[data-category]');
            
            toggles.forEach(toggle => {
                const category = toggle.getAttribute('data-category');
                if (category && currentSettings.hasOwnProperty(category)) {
                    toggle.checked = currentSettings[category];
                }
            });
        }
        
        // Accept all cookies
        acceptAll() {
            const settings = {};
            this.config.categories.forEach(category => {
                settings[category] = true;
            });
            
            LOGGER.success('USER-ACTION', '✅', 'User accepted all cookies', settings);
            
            this.saveConsentSettings(settings);
            this.hideBanner();
            
            if (this.config.onAccept) {
                this.config.onAccept(settings);
            }
            
            this.dispatchEvent('cookieConsentAccepted', settings);
        }
        
        // Decline all non-necessary cookies
        declineAll() {
            const settings = {};
            this.config.categories.forEach(category => {
                settings[category] = category === 'necessary';
            });
            
            LOGGER.warning('USER-ACTION', '❌', 'User declined all non-necessary cookies', settings);
            
            this.saveConsentSettings(settings);
            this.hideBanner();
            
            if (this.config.onDecline) {
                this.config.onDecline(settings);
            }
            
            this.dispatchEvent('cookieConsentDeclined', settings);
        }
        
        // Save custom settings
        saveSettings() {
            const settings = {};
            const toggles = document.querySelectorAll('#cookieSettings input[data-category]');
            
            toggles.forEach(toggle => {
                const category = toggle.getAttribute('data-category');
                if (category) {
                    settings[category] = toggle.checked;
                }
            });
            
            // Ensure necessary cookies are always enabled
            settings.necessary = true;
            
            LOGGER.success('USER-ACTION', '⚙️', 'User saved custom settings', settings);
            
            this.saveConsentSettings(settings);
            this.hideSettings();
            this.hideBanner();
            
            if (this.config.onSettingsChange) {
                this.config.onSettingsChange(settings);
            }
            
            this.dispatchEvent('cookieConsentChanged', settings);
        }
        
        // Save consent settings to storage
        saveConsentSettings(settings) {
            const consentData = {
                ...settings,
                timestamp: now(),
                version: this.version,
                language: this.currentLanguage,
                policyVersion: this.policyVersion,
                renewalPeriod: this.autoRenewPeriod
            };
            
            // Save to multiple storage locations for redundancy
            this.setStorageItem(this.cookieName, JSON.stringify(consentData));
            
            // Apply settings with Zero-Reload Mode
            this.applyCookieSettingsZeroReload(settings);
            
            // Store current settings for future reference
            this.currentSettings = { ...settings };
            
            LOGGER.success('CONSENT', '💾', 'Cookie consent saved:', settings);
        }
        
        // Apply settings with Zero-Reload Mode
        applyCookieSettingsZeroReload(settings) {
            const previousSettings = this.currentSettings || {};
            
            // First apply traditional cookie settings
            this.applyCookieSettings(settings);
            
            // Zero-Reload Mode: Handle dynamic script management
            if (this.zeroReloadMode) {
                for (const [category, enabled] of Object.entries(settings)) {
                    const wasEnabled = previousSettings[category];
                    
                    // Only enable scripts if they were previously disabled and now enabled
                    // AND if this is not the initial load (previousSettings should have data)
                    if (enabled && !wasEnabled && Object.keys(previousSettings).length > 0) {
                        // Category was enabled - execute queued scripts
                        SCRIPT_GUARD.enableCategory(category);
                        ZERO_RELOAD.executeCategory(category);
                        LOGGER.success('ZERO-RELOAD', '🚀', `Enabled ${category} without page reload`);
                    } else if (!enabled && wasEnabled) {
                        // Category was disabled - stop scripts
                        ZERO_RELOAD.disableCategory(category);
                        LOGGER.warning('ZERO-RELOAD', '🛑', `Disabled ${category} without page reload`);
                    } else if (!enabled) {
                        // Category is disabled - make sure it stays disabled
                        ZERO_RELOAD.disableCategory(category);
                        LOGGER.info('ZERO-RELOAD', '🔒', `Keeping ${category} disabled`);
                    }
                }
            }
        }
        
        // Get current cookie consent
        getCookieConsent() {
            try {
                const consentStr = this.getStorageItem(this.cookieName);
                return consentStr ? JSON.parse(consentStr) : null;
            } catch (e) {
                return null;
            }
        }
        
        // Get current cookie settings
        getCookieSettings() {
            // First try to get from current instance
            if (this.currentSettings && Object.keys(this.currentSettings).length > 0) {
                return { ...this.currentSettings };
            }
            
            // Then try to get from storage
            const consent = this.getCookieConsent();
            if (!consent) {
                // Return default settings (only necessary = true)
                const defaultSettings = {};
                this.config.categories.forEach(category => {
                    defaultSettings[category] = category === 'necessary';
                });
                return defaultSettings;
            }
            
            const settings = {};
            this.config.categories.forEach(category => {
                settings[category] = consent[category] !== undefined ? consent[category] : (category === 'necessary');
            });
            
            // Cache the settings
            this.currentSettings = { ...settings };
            
            return settings;
        }
        
        // Storage methods with secure backup
        setStorageItem(key, value) {
            if (this.secureStorage) {
                return SECURE_STORAGE.setSecureItem(key, value);
            } else {
                // Original method
                const methods = [
                    () => localStorage.setItem(key, value),
                    () => sessionStorage.setItem(key, value),
                    () => this.setCookie(key, value, this.cookieExpiry)
                ];
                
                methods.forEach(method => {
                    try {
                        method();
                    } catch (e) {
                        // Continue to next method
                    }
                });
            }
        }
        
        getStorageItem(key) {
            if (this.secureStorage) {
                return SECURE_STORAGE.getSecureItem(key);
            } else {
                // Original method
                const methods = [
                    () => localStorage.getItem(key),
                    () => sessionStorage.getItem(key),
                    () => this.getCookie(key)
                ];
                
                for (const method of methods) {
                    try {
                        const value = method();
                        if (value) return value;
                    } catch (e) {
                        continue;
                    }
                }
                
                return null;
            }
        }
        
        clearStorageItem(key) {
            if (this.secureStorage) {
                SECURE_STORAGE.clearSecureItem(key);
            } else {
                try {
                    localStorage.removeItem(key);
                    sessionStorage.removeItem(key);
                    this.deleteCookie(key);
                } catch (e) {
                    console.warn('Could not clear storage:', e);
                }
            }
        }
        
        // Cookie storage methods
        setCookie(name, value, days) {
            const expires = new Date();
            expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            
            const cookieString = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
            document.cookie = cookieString;
        }
        
        getCookie(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) {
                    return decodeURIComponent(c.substring(nameEQ.length, c.length));
                }
            }
            return null;
        }
        
        // Apply cookie settings to page
        applyCookieSettings(settings) {
            // Update current settings cache
            this.currentSettings = { ...settings };
            
            // First, block all non-necessary cookies
            this.blockRejectedCookies(settings);
            
            // Dispatch event for other scripts to listen
            this.dispatchEvent('cookieSettingsApplied', settings);
            
            // Apply Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('consent', 'update', {
                    'analytics_storage': settings.analytics ? 'granted' : 'denied',
                    'ad_storage': settings.marketing ? 'granted' : 'denied',
                    'functionality_storage': settings.functional ? 'granted' : 'denied'
                });
            }
            
            // Clean up existing cookies if rejected
            this.cleanupRejectedCookies(settings);
            
            LOGGER.info('SETTINGS', '⚙️', 'Cookie settings applied:', settings);
        }
        
        // Apply initial settings during initialization (without Zero-Reload activation)
        applyInitialSettings(settings) {
            // Update current settings cache
            this.currentSettings = { ...settings };
            
            // First, block all non-necessary cookies
            this.blockRejectedCookies(settings);
            
            // Dispatch event for other scripts to listen
            this.dispatchEvent('cookieSettingsApplied', settings);
            
            // Apply Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('consent', 'update', {
                    'analytics_storage': settings.analytics ? 'granted' : 'denied',
                    'ad_storage': settings.marketing ? 'granted' : 'denied',
                    'functionality_storage': settings.functional ? 'granted' : 'denied'
                });
            }
            
            // Clean up existing cookies if rejected
            this.cleanupRejectedCookies(settings);
            
            LOGGER.info('SETTINGS', '⚙️', 'Initial cookie settings applied:', settings);
        }
        
        // Block rejected cookies by intercepting document.cookie
        blockRejectedCookies(settings) {
            const self = this;
            
            // Store original cookie descriptor
            if (!this.originalCookieDescriptor) {
                this.originalCookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') || 
                                               Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');
            }
            
            // Define cookie categories and their patterns
            const cookiePatterns = {
                analytics: ['_ga', '_gid', '_gat', '__utm', 'gtm_', 'google_', 'analytics'],
                marketing: ['_fbp', '_fbc', 'fbm_', 'ads', 'doubleclick', '_gcl_'],
                functional: ['preferences', 'settings', 'theme', 'language'],
                performance: ['performance', 'speed', 'timing', 'metrics']
            };
            
            // Override document.cookie setter
            if (this.originalCookieDescriptor && this.originalCookieDescriptor.set) {
                Object.defineProperty(document, 'cookie', {
                    get: function() {
                        return self.originalCookieDescriptor.get.call(this);
                    },
                    set: function(value) {
                        const cookieName = value.split('=')[0].trim();
                        
                        // Always allow necessary cookies
                        const necessaryPatterns = ['session', 'csrf', 'xsrf', 'auth', 'login', 'security', 'consent'];
                        const isNecessary = necessaryPatterns.some(pattern => 
                            cookieName.toLowerCase().includes(pattern.toLowerCase())
                        );
                        
                        if (isNecessary) {
                            return self.originalCookieDescriptor.set.call(this, value);
                        }
                        
                        // Check each category
                        for (const [category, patterns] of Object.entries(cookiePatterns)) {
                            if (!settings[category]) {
                                const isBlocked = patterns.some(pattern => 
                                    cookieName.toLowerCase().includes(pattern.toLowerCase())
                                );
                                
                                if (isBlocked) {
                                    console.log(`Cookie blocked (${category}): ${cookieName}`);
                                    return; // Block the cookie
                                }
                            }
                        }
                        
                        // Allow the cookie if not blocked
                        return self.originalCookieDescriptor.set.call(this, value);
                    },
                    configurable: true
                });
            }
        }
        
        // Clean up existing cookies that are now rejected
        cleanupRejectedCookies(settings) {
            const cookiePatterns = {
                analytics: ['_ga', '_gid', '_gat', '__utm', 'gtm_', 'google_', 'analytics'],
                marketing: ['_fbp', '_fbc', 'fbm_', 'ads', 'doubleclick', '_gcl_'],
                functional: ['preferences', 'settings', 'theme', 'language'],
                performance: ['performance', 'speed', 'timing', 'metrics']
            };
            
            // Get all existing cookies
            const cookies = document.cookie.split(';');
            
            for (const cookie of cookies) {
                const cookieName = cookie.split('=')[0].trim();
                
                // Check each category
                for (const [category, patterns] of Object.entries(cookiePatterns)) {
                    if (!settings[category]) {
                        const shouldDelete = patterns.some(pattern => 
                            cookieName.toLowerCase().includes(pattern.toLowerCase())
                        );
                        
                        if (shouldDelete) {
                            this.deleteCookie(cookieName);
                            console.log(`Cookie deleted (${category}): ${cookieName}`);
                        }
                    }
                }
            }
        }
        
        // Delete a specific cookie
        deleteCookie(name) {
            // Delete for current path
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            
            // Delete for root path
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
            
            // Delete for parent domain
            const domain = window.location.hostname;
            const parts = domain.split('.');
            if (parts.length > 2) {
                const parentDomain = '.' + parts.slice(-2).join('.');
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${parentDomain};`;
            }
        }
        
        // Setup global functions
        setupGlobalFunctions() {
            const self = this;
            
            // Global message handler for iframe unblocking
            window.addEventListener('message', (event) => {
                if (event.data.type === 'unblock-iframe') {
                    const category = event.data.category;
                    if (self.getCookieSettings()[category]) {
                        IFRAME_BLOCKER.unblockCategory(category);
                    } else {
                        LOGGER.iframe('IFRAME-BLOCKER', '⚠️', `User requested ${category} content but consent not granted`);
                    }
                } else if (event.data.type === 'sandbox-log') {
                    LOGGER.sandbox('SECURE-SANDBOX', '📝', `Sandbox ${event.data.category}: ${event.data.message}`);
                } else if (event.data.type === 'sandbox-error') {
                    LOGGER.sandbox('SECURE-SANDBOX', '❌', `Sandbox ${event.data.category} error: ${event.data.error}`);
                } else if (event.data.type === 'sandbox-result') {
                    LOGGER.sandbox('SECURE-SANDBOX', '✅', `Sandbox ${event.data.category} result:`, event.data.data);
                }
            });
            
            // Multiple function names to avoid blocking
            const functionNames = ['showCookieSettings', 'openCookieSettings', 'cookiePreferences', 'privacySettings'];
            
            functionNames.forEach(name => {
                window[name] = function() {
                    if (!document.getElementById('cookieBanner')) {
                        self.forceInit();
                    }
                    setTimeout(() => {
                        self.showSettings();
                    }, 100);
                };
            });
            
            // Reset function
            window.resetCookieConsent = function() {
                self.resetConsent();
            };
            
            // Get settings function
            window.getCookieSettings = function() {
                return self.getCookieSettings();
            };
            
            // Advanced functions
            window.scanPageScripts = function() {
                SCRIPT_SCANNER.scanAllScripts();
            };
            
            window.executeInSandbox = function(code, category, context) {
                return SECURE_SANDBOX.executeInSandbox(code, category, context);
            };
            
            window.getScriptAnalysis = function(category) {
                return SCRIPT_SCANNER.getScriptsByCategory(category);
            };
            
            // Language functions
            window.changeCookieLanguage = function(langCode) {
                self.changeLanguage(langCode);
            };
            
            window.getCookieLanguages = function() {
                return self.getAvailableLanguages();
            };
            
            window.getCurrentCookieLanguage = function() {
                return {
                    code: self.currentLanguage,
                    name: LANGUAGES[self.currentLanguage].name,
                    flag: LANGUAGES[self.currentLanguage].flag
                };
            };
            
            // Mobile-specific functions
            window.showCookieBannerMobile = function() {
                console.log('📱 Mobile force show called');
                if (!document.getElementById('cookieBanner')) {
                    self.forceInit();
                }
                setTimeout(() => {
                    const banner = document.getElementById('cookieBanner');
                    if (banner) {
                        // Принудительные мобильные стили
                        banner.style.display = 'block';
                        banner.style.visibility = 'visible';
                        banner.style.position = 'fixed';
                        banner.style.bottom = '0';
                        banner.style.left = '0';
                        banner.style.right = '0';
                        banner.style.zIndex = '999999';
                        banner.style.width = '100%';
                        banner.style.transform = 'translateY(0)';
                        banner.style.webkitTransform = 'translateY(0)';
                        banner.classList.add('show');
                        banner.setAttribute('aria-hidden', 'false');
                        console.log('📱 Mobile banner forced visible');
                    }
                }, 200);
            };
            
            // Debug function for mobile
            window.debugCookieBannerMobile = function() {
                const banner = document.getElementById('cookieBanner');
                console.log('📱 Mobile Debug Info:', {
                    bannerExists: !!banner,
                    bannerVisible: banner ? getComputedStyle(banner).display !== 'none' : false,
                    bannerClasses: banner ? banner.className : 'N/A',
                    isMobile: self.isMobileDevice(),
                    userAgent: navigator.userAgent,
                    viewport: { width: window.innerWidth, height: window.innerHeight },
                    shouldShow: self.shouldShowBanner(),
                    consent: self.getCookieConsent()
                });
                return banner;
            };
            
            // Force reset and show for mobile (для отладки)
            window.forceResetAndShowMobile = function() {
                console.log('📱 Force reset and show for mobile');
                
                // Очищаем все хранилища
                try {
                    localStorage.removeItem('cookie_consent');
                    sessionStorage.removeItem('cookie_consent');
                    document.cookie = 'cookie_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                } catch (e) {
                    console.error('Error clearing storage:', e);
                }
                
                // Удаляем существующий баннер
                const existing = document.getElementById('cookieBanner');
                if (existing) {
                    existing.remove();
                }
                
                // Перезагружаем страницу
                setTimeout(() => {
                    location.reload();
                }, 100);
            };
        }
        
        // Force initialization (for manual triggers)
        forceInit() {
            // Remove existing banner
            const existing = document.getElementById('cookieBanner');
            if (existing) {
                existing.remove();
            }
            
            // Reset consent to force showing
            this.clearStorageItem(this.cookieName);
            
            // Re-initialize
            this.isInitialized = false;
            this.init();
        }
        
        // Reset all consent
        resetConsent() {
            this.clearStorageItem(this.cookieName);
            
            // Remove banner
            const banner = document.getElementById('cookieBanner');
            if (banner) {
                banner.remove();
            }
            
            // Clear applied settings
            this.applyCookieSettings(this.defaultSettings);
            
            // Reset current settings cache
            this.currentSettings = null;
            
            // Restore original cookie descriptor if it was overridden
            if (this.originalCookieDescriptor) {
                Object.defineProperty(document, 'cookie', this.originalCookieDescriptor);
                this.originalCookieDescriptor = null;
            }
            
            this.dispatchEvent('cookieConsentReset');
        }
        
        clearStorageItem(key) {
            try {
                localStorage.removeItem(key);
                sessionStorage.removeItem(key);
                this.deleteCookie(key);
            } catch (e) {
                console.warn('Could not clear storage:', e);
            }
        }
        
        // Event dispatcher
        dispatchEvent(eventName, detail = {}) {
            const event = new CustomEvent(eventName, {
                detail: {
                    ...detail,
                    timestamp: now(),
                    version: this.version,
                    language: this.currentLanguage
                },
                bubbles: true,
                cancelable: true
            });
            
            window.dispatchEvent(event);
            document.dispatchEvent(event);
        }
        
        // Public API methods
        show() {
            const isMobile = this.isMobileDevice();
            
            if (isMobile) {
                console.log('📱 Mobile show() called');
            }
            
            if (!document.getElementById('cookieBanner')) {
                this.forceInit();
            }
            
            // Дополнительные проверки для мобильных
            if (isMobile) {
                setTimeout(() => {
                    const banner = document.getElementById('cookieBanner');
                    if (banner) {
                        // Принудительно применяем мобильные стили
                        banner.style.display = 'block';
                        banner.style.visibility = 'visible';
                        banner.style.position = 'fixed';
                        banner.style.bottom = '0';
                        banner.style.left = '0';
                        banner.style.right = '0';
                        banner.style.zIndex = '999999';
                        banner.style.width = '100%';
                    }
                    this.showBanner();
                }, 100);
            } else {
                this.showBanner();
            }
            
            return this;
        }
        
        hide() {
            this.hideBanner();
            return this;
        }
        
        getSettings() {
            return this.getCookieSettings();
        }
        
        setSettings(settings) {
            // Validate settings
            const validatedSettings = {};
            this.config.categories.forEach(category => {
                validatedSettings[category] = settings[category] !== undefined ? 
                    Boolean(settings[category]) : 
                    (category === 'necessary');
            });
            
            this.saveConsentSettings(validatedSettings);
            return this;
        }
        
        reset() {
            this.resetConsent();
            return this;
        }
        
        getLanguage() {
            return this.currentLanguage;
        }
        
        getVersion() {
            return this.version;
        }
        
        // Get detected trackers
        getDetectedTrackers() {
            return this.detectedTrackers;
        }
        
        // Get user region and privacy law
        getRegionInfo() {
            return {
                region: this.userRegion,
                privacyLaw: this.privacyLaw?.name,
                strictMode: this.privacyLaw?.strictMode,
                requiresExplicitConsent: this.privacyLaw?.requiresExplicitConsent
            };
        }
        
        // Force re-detection of trackers
        async redetectTrackers() {
            await this.detectTrackers();
            this.refreshBanner();
            return this.detectedTrackers;
        }
        
        // Get tracker statistics
        getTrackerStats() {
            const stats = {
                total: 0,
                byCategory: {}
            };
            
            for (const [category, trackers] of Object.entries(this.detectedTrackers)) {
                stats.byCategory[category] = trackers.length;
                stats.total += trackers.length;
            }
            
            return stats;
        }
        
        // Get Script Guard statistics
        getScriptGuardStats() {
            return {
                enabled: this.scriptGuardEnabled,
                blockedCount: SCRIPT_GUARD.getBlockedCount(),
                blockedScripts: Array.from(SCRIPT_GUARD.blocked)
            };
        }
        
        // Get Auto-Renew information
        getAutoRenewInfo() {
            const consent = this.getCookieConsent();
            return {
                period: this.autoRenewPeriod,
                policyVersion: this.policyVersion,
                needsRenewal: AUTO_RENEW.needsRenewal(consent, this.autoRenewPeriod),
                policyChanged: AUTO_RENEW.policyVersionChanged(consent, this.policyVersion),
                renewalReason: AUTO_RENEW.getRenewalReason(consent, this.autoRenewPeriod, this.policyVersion),
                lastConsent: consent?.timestamp ? new Date(consent.timestamp) : null
            };
        }
        
        // Queue script for Zero-Reload execution
        queueScript(category, scriptFn, context = 'api') {
            if (this.zeroReloadMode) {
                ZERO_RELOAD.queueScript(category, scriptFn, context);
                LOGGER.info('ZERO-RELOAD', '📝', `Queued script for ${category}`);
            } else {
                LOGGER.warning('ZERO-RELOAD', '⚠️', 'Zero-Reload mode is disabled');
            }
        }
        
        // Force consent renewal
        forceRenewal(reason = 'manual') {
            this.renewalReason = reason;
            this.clearStorageItem(this.cookieName);
            this.forceInit();
        }
        
        // Get SEO mode information
        getSEOInfo() {
            return {
                enabled: this.seoFriendlyMode,
                isBot: this.isBot,
                botUserAgent: this.isBot ? navigator.userAgent : null
            };
        }
        
        // Get available integrations
        getAvailableIntegrations() {
            return INTEGRATIONS_HUB.getAvailableIntegrations();
        }
        
        // Setup new integration
        addIntegration(type, config) {
            try {
                const setup = INTEGRATIONS_HUB.setupIntegration(type, config);
                if (setup) {
                    this.integrations.push({ type, config, setup });
                    
                    // If consent already granted for this category, execute immediately
                    const settings = this.getCookieSettings();
                    if (settings[setup.category]) {
                        setup.execute();
                    } else if (this.zeroReloadMode) {
                        // Queue for later execution
                        ZERO_RELOAD.queueScript(setup.category, setup.execute, 'integration');
                    }
                    
                    console.log(`🔌 Integration added: ${setup.name}`);
                    return setup;
                }
            } catch (error) {
                console.error(`Failed to add integration ${type}:`, error);
                return null;
            }
        }
        
        // Get storage information
        getStorageInfo() {
            const info = {
                secureMode: this.secureStorage,
                available: {
                    localStorage: false,
                    sessionStorage: false,
                    indexedDB: false,
                    cookies: false
                }
            };
            
            // Test storage availability
            try {
                localStorage.setItem('test', 'test');
                localStorage.removeItem('test');
                info.available.localStorage = true;
            } catch (e) {}
            
            try {
                sessionStorage.setItem('test', 'test');
                sessionStorage.removeItem('test');
                info.available.sessionStorage = true;
            } catch (e) {}
            
            try {
                document.cookie = 'test=test; max-age=1';
                info.available.cookies = document.cookie.includes('test=test');
                document.cookie = 'test=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
            } catch (e) {}
            
            try {
                info.available.indexedDB = 'indexedDB' in window;
            } catch (e) {}
            
            return info;
        }
        
        // API for customizing banner text
        setText(key, value) {
            if (!this.config.customTexts) {
                this.config.customTexts = {};
            }
            this.config.customTexts[key] = value;
            
            // Refresh banner if it exists
            this.refreshBanner();
            return this;
        }
        
        setTexts(texts) {
            if (!this.config.customTexts) {
                this.config.customTexts = {};
            }
            Object.assign(this.config.customTexts, texts);
            
            // Refresh banner if it exists
            this.refreshBanner();
            return this;
        }
        
        getText(key) {
            return this.t(key);
        }
        
        getAllTexts() {
            const langPack = LANGUAGES[this.currentLanguage] || LANGUAGES['ru'];
            return { ...langPack, ...this.config.customTexts };
        }
        
        // API for customizing URLs
        setPrivacyPolicyUrl(url) {
            this.config.privacyPolicyUrl = url;
            this.refreshBanner();
            return this;
        }
        
        getPrivacyPolicyUrl() {
            return this.config.privacyPolicyUrl;
        }
        
        // API for customizing appearance
        setTheme(theme) {
            this.config.theme = theme;
            const banner = document.getElementById('cookieBanner');
            if (banner) {
                banner.className = banner.className.replace(/cookie-banner--\w+/g, '');
                banner.classList.add(`cookie-banner--${theme}`);
            }
            return this;
        }
        
        setPosition(position) {
            this.config.position = position;
            const banner = document.getElementById('cookieBanner');
            if (banner) {
                banner.className = banner.className.replace(/cookie-banner--\w+/g, '');
                banner.classList.add(`cookie-banner--${position}`);
            }
            return this;
        }
        
        // API for managing categories
        addCategory(category, config = {}) {
            if (!this.config.categories.includes(category)) {
                this.config.categories.push(category);
                
                // Add to default settings
                this.defaultSettings[category] = config.defaultValue || false;
                
                // Add translations if provided
                if (config.title) {
                    this.setText(category, config.title);
                }
                if (config.description) {
                    this.setText(category + 'Desc', config.description);
                }
                
                this.refreshBanner();
            }
            return this;
        }
        
        removeCategory(category) {
            if (category !== 'necessary') { // Can't remove necessary category
                const index = this.config.categories.indexOf(category);
                if (index > -1) {
                    this.config.categories.splice(index, 1);
                    delete this.defaultSettings[category];
                    this.refreshBanner();
                }
            }
            return this;
        }
        
        // Refresh banner content
        async refreshBanner() {
            const banner = document.getElementById('cookieBanner');
            if (!banner) return;
            
            const isSettingsOpen = document.getElementById('cookieSettings')?.classList.contains('show');
            
            // Update content
            banner.innerHTML = await this.createBannerHTML();
            
            // Restore settings state
            if (isSettingsOpen) {
                setTimeout(() => this.showSettings(), 100);
            }
            
            // Re-setup event listeners
            this.setupEventListeners(banner);
        }
    }
    
    // Auto-initialize when DOM is ready
    function autoInit() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', autoInit);
            return;
        }
        
        // Дополнительная задержка для мобильных устройств
        const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
        
        const initFunction = () => {
            // Create global instance
            if (!window.cookieBanner) {
                try {
                    window.cookieBanner = new AdvancedCookieBanner();
                    
                    if (isMobile) {
                        LOGGER.mobile('MOBILE', '📱', 'Cookie banner initialized');
                        
                        // Дополнительная проверка через 1 секунду
                        setTimeout(() => {
                            if (window.cookieBanner && window.cookieBanner.shouldShowBanner && window.cookieBanner.shouldShowBanner()) {
                                console.log('📱 Mobile: Forcing banner display check');
                                const banner = document.getElementById('cookieBanner');
                                if (banner && !banner.classList.contains('show')) {
                                    window.cookieBanner.showBanner();
                                }
                            }
                        }, 1000);
                    }
                } catch (error) {
                    console.error('Cookie banner initialization failed:', error);
                }
            }
            
            // Expose class for manual instantiation
            window.CookieBanner = AdvancedCookieBanner;
            window.AdvancedCookieBanner = AdvancedCookieBanner;
        };
        
        if (isMobile) {
            // На мобильных добавляем небольшую задержку
            setTimeout(initFunction, 100);
        } else {
            initFunction();
        }
    }
    
    // Initialize advanced security systems after all constants are defined
    IFRAME_BLOCKER.init();
    SCRIPT_SCANNER.init();
    SECURE_SANDBOX.init();
    LAZY_SCRIPT_GUARD.init();
    
    // Initialize
    autoInit();
    
})(window, document);