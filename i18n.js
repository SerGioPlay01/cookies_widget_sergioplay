// Internationalization для Cookie Widget
class I18n {
    constructor() {
        this.currentLanguage = 'en';
        this.fallbackLanguage = 'en';
        this.translations = {};
        this.supportedLanguages = {
            'ru': { name: 'Русский', flag: 'RU' },
            'en': { name: 'English', flag: 'EN' },
            'de': { name: 'Deutsch', flag: 'DE' },
            'fr': { name: 'Français', flag: 'FR' },
            'es': { name: 'Español', flag: 'ES' },
            'it': { name: 'Italiano', flag: 'IT' },
            'pt': { name: 'Português', flag: 'PT' },
            'pl': { name: 'Polski', flag: 'PL' },
            'uk': { name: 'Українська', flag: 'UA' },
            'be': { name: 'Беларуская', flag: 'BY' },
            'kz': { name: 'Қазақша', flag: 'KZ' },
            'zh': { name: '中文', flag: 'CN' },
            'ja': { name: '日本語', flag: 'JP' },
            'ko': { name: '한국어', flag: 'KR' }
        };
        
        this.loadTranslations();
        this.detectLanguage();
        this.init();
    }
    
    loadTranslations() {
        this.translations = {
            'ru': {
                // Navigation
                'nav.features': 'Возможности',
                'nav.installation': 'Установка',
                'nav.docs': 'Документация',
                'nav.examples': 'Примеры',
                'nav.tools': 'Инструменты',
                'nav.support': 'Поддержка',
                
                // Hero Section
                'hero.title.main': 'Cookie Widget',
                'hero.title.sub': 'GDPR & Global Privacy Compliant',
                'hero.description': 'Революционный виджет cookie баннера v3.3 с 4 эксклюзивными системами безопасности, которых нет у конкурентов: блокировщик iFrame, сканер скриптов, безопасная песочница, ленивая защита скриптов. Плюс Smart Auto-Detect трекеров, SEO-Friendly Mode, Zero-Reload Mode и поддержка 21 языка. Полное соответствие GDPR, CCPA, LGPD, 152-ФЗ.',
                'hero.btn.start': 'Начать использовать',
                'hero.btn.demo': 'Посмотреть демо',
                'hero.btn.examples': 'Примеры интеграции',
                'hero.btn.github': 'GitHub',
                'hero.stat.languages': 'Языков',
                'hero.stat.deps': 'Зависимостей',
                'hero.stat.features': 'Функций безопасности',
                'hero.stat.gdpr': 'Соответствие GDPR',
                

                // Features
                'features.title': 'Возможности',
                'features.description': 'Cookie Widget v3.3 с 4 революционными системами безопасности, которых нет у конкурентов: блокировщик iFrame, сканер скриптов, безопасная песочница, ленивая защита скриптов. Плюс Smart Auto-Detect трекеров, SEO-Friendly Mode, Zero-Reload Mode, поддержка 21 языка и полное соответствие международным законам о конфиденциальности.',
                
                // Installation
                'install.title': 'Установка',
                'install.description': 'Интегрируйте виджет на свой сайт за несколько минут',
                'install.tab.cdn': 'CDN',
                'install.tab.download': 'Скачать',
                'install.tab.integration': 'Интеграция',
                
                // Support
                'support.title': 'Поддержка проекта',
                'support.description': 'Помогите развитию проекта и получите поддержку',
                'support.bug.title': 'Сообщить об ошибке',
                'support.bug.description': 'Нашли баг или у вас есть предложение по улучшению?',
                'support.bug.link': 'Создать Issue →',
                'support.coffee.title': 'Поддержать разработчика',
                'support.coffee.description': 'Купите мне кофе и поддержите дальнейшее развитие проекта',
                'support.coffee.link': 'Buy me a coffee →',
                'support.docs.title': 'Документация',
                'support.docs.description': 'Подробная документация и примеры использования',
                'support.docs.link': 'Читать документацию →',
                
                // Demo Browser
                'demo.browser.url': 'https://yoursite.com',
                'demo.browser.title': 'Ваш сайт',
                'demo.banner.title': 'Использование файлов cookie',
                'demo.banner.description': 'Мы используем cookie для улучшения работы сайта...',
                'demo.banner.settings': 'Настройки',
                'demo.banner.accept': 'Принять',
                'demo.try': 'Попробовать виджет',
                
                // License
                'license.title': 'Открытая лицензия',
                'license.description': 'Проект распространяется под лицензией MIT. Вы можете свободно использовать, модифицировать и распространять код в коммерческих и некоммерческих проектах.',
                'license.link': 'Читать лицензию',
                
                // Documentation cards
                'docs.quickstart.title': 'Быстрый старт',
                'docs.quickstart.description': 'Пошаговое руководство по интеграции виджета на ваш сайт',
                'docs.quickstart.link': 'Читать →',
                'docs.config.title': 'Настройка',
                'docs.config.description': 'Как настроить виджет под ваши требования и дизайн сайта',
                'docs.config.link': 'Читать →',
                'docs.api.title': 'API',
                'docs.api.description': 'Справочник по методам и событиям для программного управления',
                'docs.api.link': 'Читать →',
                'docs.compliance.title': 'Соответствие законам',
                'docs.compliance.description': 'Как виджет обеспечивает соответствие GDPR и 152-ФЗ',
                'docs.compliance.link': 'Читать →',
                
                // Installation tabs
                'install.cdn.title': 'Подключение через CDN',
                'install.cdn.description': 'Самый простой способ - подключить файлы напрямую с https://cookies-widget-sergioplay.vercel.app/:',
                'install.download.title': 'Скачать файлы',
                'install.download.description': 'Скачайте файлы и разместите их на своем сервере:',
                'install.integration.title': 'Интеграция с популярными платформами',
                'install.integration.description': 'Примеры интеграции с различными CMS и фреймворками:',
                'install.example.title': 'Пример интеграции',
                
                // Footer
                'footer.description': 'Революционный виджет cookie баннера v3.3 с продвинутыми функциями безопасности',
                'footer.project': 'Проект',
                'footer.documentation': 'Документация',
                'footer.support': 'Поддержка',
                'footer.settings': 'Настройки Cookie',
                'footer.copyright': 'Распространяется под лицензией MIT.',
                
                // Language Selector
                'lang.select': 'Выберите язык',
                'lang.auto': 'Автоопределение',
                
                // Documentation
                'docs.title': 'Документация Cookie Widget',
                'docs.subtitle': 'Полное руководство по интеграции, настройке и использованию Cookie Widget для соблюдения GDPR, CCPA, 152-ФЗ РФ и других международных стандартов защиты данных',
                'docs.nav.quickstart': 'Быстрый старт',
                'docs.nav.installation': 'Установка',
                'docs.nav.configuration': 'Конфигурация',
                'docs.nav.api': 'API Reference',
                'docs.nav.customization': 'Кастомизация текста',
                'docs.nav.events': 'События',
                'docs.nav.examples': 'Примеры',
                'docs.nav.compliance': 'Соответствие законам',
                'docs.nav.troubleshooting': 'Решение проблем',
                
                // Documentation content
                'docs.quickstart.title': '🚀 Быстрый старт',
                'docs.quickstart.description': 'Интегрируйте Cookie Widget на ваш сайт за 2 минуты и получите полное соответствие международным стандартам защиты данных:',
                'docs.quickstart.features': '✨ Новые возможности в версии 3.0',
                'docs.quickstart.features.description': 'Автоматическая блокировка cookie, 20+ языков, API для кастомизации текста, защита от блокировщиков рекламы, интеграция с GA4 и Яндекс.Метрикой',
                'docs.quickstart.step1': '1. Подключите файлы',
                'docs.quickstart.step2': '2. Готово!',
                'docs.quickstart.step3': '3. Дополнительная настройка (опционально)',
                'docs.quickstart.auto.region': 'Определит регион',
                'docs.quickstart.auto.region.description': 'Автоматически определит местоположение пользователя и применит соответствующие требования законов (GDPR, CCPA, 152-ФЗ, LGPD и др.)',
                'docs.quickstart.auto.language': 'Выберет язык',
                'docs.quickstart.auto.language.description': 'Определит язык браузера из 20+ поддерживаемых языков включая русский, английский, немецкий, французский, китайский',
                'docs.quickstart.auto.blocking': 'Заблокирует cookie',
                'docs.quickstart.auto.blocking.description': 'Заблокирует все нежелательные cookie до получения согласия и автоматически удалит отклоненные cookie',
                'docs.quickstart.auto.responsive': 'Адаптируется',
                'docs.quickstart.auto.responsive.description': 'Отобразится корректно на всех устройствах и экранах с современным адаптивным дизайном',
                
                // Interface elements
                'ui.copy': 'Копировать',
                'ui.copied': 'Скопировано!',
                'ui.read_more': 'Читать →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Меню',
                'ui.close': 'Закрыть',
                
                // Documentation sections
                'docs.description.setup': 'Подробное руководство по настройке и использованию',
                'docs.stats.size': 'Минимальный размер',
                'docs.stats.languages': 'Языков поддержки', 
                'docs.stats.laws': 'Законов соответствия',
                'docs.stats.dependencies': 'Зависимостей',
                'docs.contents': 'Содержание',
                
                // Installation section details
                'install.wordpress.title': 'WordPress',
                'install.react.title': 'React/Next.js',
                'install.react.file': '_app.js или layout.js',
                'install.functions.file': 'functions.php',
                
                // Footer links
                'footer.releases': 'Релизы',
                'footer.license': 'Лицензия',
                'footer.installation': 'Установка',
                'footer.guide': 'Руководство',
                'footer.examples': 'Примеры',
                'footer.issues': 'Issues',
                'footer.support_dev': 'Поддержать',
                'footer.social': 'Социальные сети',
                'footer.install_app': 'Установить приложение',
                
                // Examples page
                'examples.title': 'Примеры интеграции',
                'examples.subtitle': 'Готовые решения для интеграции Cookie Widget в популярные фреймворки, CMS и аналитические системы. Копируйте код и адаптируйте под ваши потребности.',
                'examples.demo.title': 'Живая демонстрация',
                'examples.demo.description': 'Попробуйте Cookie Widget в действии:',
                'examples.demo.show': 'Показать Cookie Баннер',
                'examples.demo.reset': 'Сбросить настройки',
                'examples.demo.current': 'Текущие настройки',
                
                // Feature cards
                'feature.compliance.title': '🌍 Глобальное соответствие',
                'feature.compliance.description': 'Полное соответствие GDPR, CCPA, LGPD, 152-ФЗ РФ, PIPEDA, PIPL, APPI, PIPA и другим международным стандартам защиты данных с автоматическим определением региона',
                'feature.languages.title': '🗣️ 20+ языков поддержки',
                'feature.languages.description': 'Автоматическое определение языка браузера с поддержкой русского, английского, немецкого, французского, испанского, китайского, японского и других языков',
                'feature.blocking.title': '🛡️ Автоматическая блокировка',
                'feature.blocking.description': 'Интеллектуальная система блокировки cookie до получения согласия с автоматическим удалением отклоненных cookie и защитой от обхода',
                'feature.responsive.title': '📱 Адаптивный дизайн',
                'feature.responsive.description': 'Современный дизайн с градиентами и анимациями, идеально работающий на всех устройствах от мобильных телефонов до больших мониторов',
                'feature.api.title': '🎨 Мощный API кастомизации',
                'feature.api.description': 'Полная кастомизация текстов, ссылок, тем оформления и поведения через JavaScript API. Поддержка корпоративного брендинга и дополнительных категорий',
                'feature.performance.title': '⚡ Максимальная производительность',
                'feature.performance.description': 'Всего 5KB минифицированного кода, без внешних зависимостей, с защитой от блокировщиков рекламы и оптимизацией для максимальной скорости загрузки',
                'feature.analytics.title': '📊 Интеграция с аналитикой',
                'feature.analytics.description': 'Готовые примеры интеграции с Google Analytics 4, Яндекс.Метрикой, Facebook Pixel и другими аналитическими системами с поддержкой Consent Mode',
                'feature.frameworks.title': '⚛️ Поддержка фреймворков',
                'feature.frameworks.description': 'Готовые примеры интеграции для React, Vue.js, Next.js, Nuxt.js, WordPress и других популярных фреймворков и CMS с TypeScript поддержкой',
                
                // Interface elements
                'ui.copy': 'Copy',
                'ui.copied': 'Скопировано!',
                'ui.read_more': 'Читать →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Меню',
                'ui.close': 'Закрыть',
                
                // Documentation sections
                'docs.description.setup': 'Подробное руководство по настройке и использованию',
                'docs.stats.size': 'Минимальный размер',
                'docs.stats.languages': 'Языков поддержки', 
                'docs.stats.laws': 'Законов соответствия',
                'docs.stats.dependencies': 'Зависимостей',
                'docs.contents': 'Содержание',
                
                // Installation section details
                'install.wordpress.title': 'WordPress',
                'install.react.title': 'React/Next.js',
                'install.react.file': '_app.js или layout.js',
                'install.functions.file': 'functions.php',
                
                // Footer links
                'footer.releases': 'Релизы',
                'footer.license': 'Лицензия',
                'footer.installation': 'Установка',
                'footer.guide': 'Руководство',
                'footer.examples': 'Примеры',
                'footer.issues': 'Issues',
                'footer.support_dev': 'Поддержать',
                
                // Example cards
                'example.react.title': '⚛️ React / Next.js',
                'example.react.description': 'Современная интеграция для React приложений с TypeScript поддержкой',
                'example.vue.title': '🟢 Vue.js / Nuxt.js',
                'example.vue.description': 'Интеграция для Vue экосистемы с композиционным API',
                'example.wordpress.title': '📝 WordPress',
                'example.wordpress.description': 'Простая интеграция в WordPress с админ панелью',
                'example.ga4.title': '📊 Google Analytics 4',
                'example.ga4.description': 'Полная интеграция с GA4 и управление событиями',
                'example.yandex.title': '📈 Яндекс.Метрика',
                'example.yandex.description': 'Интеграция с российской системой аналитики',
                'example.corporate.title': '🏢 Корпоративные решения',
                'example.corporate.description': 'Настройка для крупных компаний и корпораций',
                
                // Documentation sections - detailed
                'docs.quickstart.step2.description': 'Cookie баннер автоматически:',
                'docs.installation.title': '📦 Установка',
                'docs.installation.cdn.title': 'CDN (Рекомендуется)',
                'docs.installation.cdn.description': 'Самый простой способ - использовать наш CDN:',
                'docs.installation.local.title': 'Локальная установка',
                'docs.installation.local.description': 'Скачайте файлы и разместите их на вашем сервере:',
                'docs.installation.local.download.css': 'Скачать CSS',
                'docs.installation.local.download.js': 'Скачать JS',
                'docs.installation.platforms.title': 'Интеграция с популярными платформами',
                'docs.configuration.title': '⚙️ Конфигурация',
                'docs.configuration.basic.title': 'Базовая конфигурация',
                'docs.configuration.basic.description': 'Создание с пользовательскими настройками',
                'docs.configuration.options.autoShow': 'Автоматически показывать баннер',
                'docs.configuration.options.theme': 'Тема оформления',
                'docs.configuration.options.position': 'Позиция баннера',
                'docs.configuration.options.privacyUrl': 'Ссылка на политику конфиденциальности',
                'docs.configuration.options.onAccept': 'Callback при принятии',
                'docs.configuration.options.onDecline': 'Callback при отклонении',
                'docs.api.title': '📚 API Справочник',
                'docs.api.methods.title': 'Основные методы',
                'docs.api.show.description': 'Показать cookie баннер',
                'docs.api.hide.description': 'Скрыть cookie баннер',
                'docs.api.getSettings.description': 'Получить текущие настройки cookie',
                'docs.api.setSettings.description': 'Установить настройки cookie',
                'docs.api.reset.description': 'Сбросить все настройки и показать баннер заново',
                'docs.api.getLanguage.description': 'Получить текущий язык интерфейса',
                'docs.api.getVersion.description': 'Получить версию Cookie Widget',
                'docs.api.getAllTexts.description': 'Получить все тексты интерфейса (включая кастомные)',
                'docs.api.setTheme.description': 'Установить тему оформления',
                'docs.api.setPosition.description': 'Установить позицию баннера',
                'docs.api.setTexts.title': 'setTexts(texts)',
                'docs.api.setTexts.description': 'Кастомизация текстов интерфейса',
                'docs.api.customization.title': '🎨 Кастомизация текста',
                'docs.api.customization.description': 'Полная кастомизация всех текстов интерфейса',
                'docs.api.customization.example': 'Пример кастомизации',
                'docs.api.events.title': '📡 События',
                'docs.api.events.description': 'Cookie Widget генерирует события для интеграции с вашим кодом',
                'docs.api.events.initialized': 'Виджет инициализирован',
                'docs.api.events.shown': 'Баннер показан',
                'docs.api.events.hidden': 'Баннер скрыт',
                'docs.api.events.accepted': 'Согласие принято',
                'docs.api.events.declined': 'Согласие отклонено',
                'docs.api.events.settingsChanged': 'Настройки изменены',
                'docs.examples.title': '💼 Расширенные примеры',
                'docs.examples.description': 'Готовые решения для популярных сценариев использования',
                'docs.examples.ga4.title': 'Google Analytics 4',
                'docs.examples.ga4.description': 'Продвинутая интеграция с Google Analytics 4',
                'docs.examples.yandex.title': 'Яндекс.Метрика',
                'docs.examples.yandex.description': 'Интеграция с Яндекс.Метрикой с соблюдением 152-ФЗ',
                'docs.examples.react.title': 'React + TypeScript',
                'docs.examples.react.description': 'Компонент для React приложений с TypeScript',
                'docs.examples.corporate.title': 'Корпоративная настройка',
                'docs.examples.corporate.description': 'Настройка для крупных компаний',
                'docs.compliance.title': '⚖️ Соответствие законам',
                'docs.compliance.description': 'Cookie Widget обеспечивает соответствие международным стандартам',
                'docs.compliance.gdpr.title': 'GDPR (Европа)',
                'docs.compliance.gdpr.description': 'Полное соответствие Общему регламенту по защите данных',
                'docs.compliance.ccpa.title': 'CCPA (Калифорния)',
                'docs.compliance.ccpa.description': 'Соответствие Калифорнийскому закону о защите прав потребителей',
                'docs.compliance.lgpd.title': 'LGPD (Бразилия)',
                'docs.compliance.lgpd.description': 'Соответствие Общему закону о защите данных Бразилии',
                'docs.compliance.russia.title': '152-ФЗ (Россия)',
                'docs.compliance.russia.description': 'Соответствие российскому закону о персональных данных',
                'docs.troubleshooting.title': '🔧 Решение проблем',
                'docs.troubleshooting.description': 'Часто встречающиеся проблемы и их решения',
                'docs.troubleshooting.not.showing.title': 'Баннер не отображается',
                'docs.troubleshooting.not.showing.description': 'Проверьте инициализацию и консоль браузера',
                'docs.troubleshooting.not.blocking.title': 'Cookie не блокируются',
                'docs.troubleshooting.not.blocking.description': 'Убедитесь, что скрипты загружаются после согласия',
                'docs.troubleshooting.styles.title': 'Проблемы со стилями',
                'docs.troubleshooting.styles.description': 'Проверьте подключение CSS файла',
                'docs.tip.title': '💡 Совет',
                'docs.tip.description': 'Для дополнительной настройки используйте мощный JavaScript API. Все тексты, ссылки, темы и поведение можно изменить программно. Посмотрите расширенные примеры ниже для интеграции с Google Analytics 4, Яндекс.Метрикой, React и корпоративных настроек.',
                'docs.warning.title': '⚠️ Важно для разработчиков',
                'docs.warning.description': 'Cookie Widget автоматически блокирует все cookie до получения согласия. Убедитесь, что ваши аналитические и маркетинговые скрипты загружаются только после события cookieConsentAccepted.',
                
                // Documentation sections - detailed features
                'docs.smart-detect.title': '🧠 Smart Auto-Detect трекеров',
                'docs.smart-detect.description': 'Автоматическое обнаружение трекеров и скриптов на странице с категоризацией по типам.',
                'docs.seo-friendly.title': '🔍 SEO-Friendly Mode',
                'docs.seo-friendly.description': 'Поисковые боты видят сайт как принявший все cookie для лучшей индексации, а реальные пользователи видят баннер.',
                'docs.script-guard.title': '🔒 Script Guard',
                'docs.script-guard.description': 'Блокировка скриптов аналитики и маркетинга еще до загрузки сайта через прокси-заглушки.',
                'docs.integrations-hub.title': '🤝 Integrations Hub',
                'docs.integrations-hub.description': 'Готовые настройки для популярных сервисов с интеграцией без настройки.',
                'docs.zero-reload.title': '🚀 Zero-Reload Mode',
                'docs.zero-reload.description': 'Включение и отключение трекеров без перезагрузки страницы через систему очередей.',
                'docs.secure-storage.title': '🔒 Secure LocalStorage Backup',
                'docs.secure-storage.description': 'Сохранение согласия в нескольких хранилищах для максимальной надежности.',
                
                // Examples page - detailed
                'examples.react.integration.title': '⚛️ React / Next.js интеграция',
                'examples.react.integration.description': 'Полный пример интеграции Cookie Widget в React приложение с TypeScript:',
                'examples.vue.integration.title': '🟢 Vue.js / Nuxt.js интеграция',
                'examples.vue.integration.description': 'Пример интеграции с Vue.js используя Composition API:',
                'examples.wordpress.integration.title': '📝 WordPress интеграция',
                'examples.wordpress.integration.description': 'Простая интеграция Cookie Widget в WordPress тему или плагин:',
                'examples.ga4.integration.title': '📊 Google Analytics 4 интеграция',
                'examples.ga4.integration.description': 'Полная интеграция с Google Analytics 4 с управлением согласием:',
                'examples.basic.title': '🚀 Базовая интеграция',
                'examples.basic.description': 'Самый простой способ подключить виджет к вашему сайту',
                'examples.ga4.simple.title': '📊 Google Analytics 4',
                'examples.ga4.simple.description': 'Интеграция с Google Analytics с учетом согласия пользователя',
                'examples.yandex.simple.title': '📈 Яндекс.Метрика',
                'examples.yandex.simple.description': 'Интеграция с Яндекс.Метрикой с условной загрузкой',
                'examples.wordpress.simple.title': '🔌 WordPress',
                'examples.wordpress.simple.description': 'Интеграция в WordPress через functions.php',
                'examples.react.simple.title': '⚛️ React',
                'examples.react.simple.description': 'Использование в React приложении',
                'examples.vue.simple.title': '💚 Vue.js',
                'examples.vue.simple.description': 'Интеграция в Vue.js приложение',
                'examples.customization.title': '🎨 Кастомизация стилей',
                'examples.customization.description': 'Настройка внешнего вида под ваш дизайн',
                'examples.page.title': 'Примеры интеграции',
                'examples.page.description': 'Готовые примеры для быстрой интеграции Cookie Widget в ваш проект',
                'examples.back.link': 'Назад к главной',
                'examples.back.main': 'Вернуться к главной странице',
                
                // Tools page
                'nav.tools': 'Инструменты',
                'tools.title': 'Инструменты для веб-мастеров',
                'tools.subtitle': 'Полезные инструменты для анализа cookie, проверки GDPR соответствия и тестирования cookie баннеров. Все инструменты работают локально в вашем браузере и не отправляют данные на сервер.',
                
                // Cookie Analyzer
                'tools.analyzer.title': 'Анализатор Cookie',
                'tools.analyzer.description': 'Анализируйте все cookie на текущем сайте, проверяйте их типы, сроки действия и соответствие GDPR требованиям.',
                'tools.analyzer.feature1': 'Список всех cookie на сайте',
                'tools.analyzer.feature2': 'Классификация по типам (необходимые, функциональные, аналитические)',
                'tools.analyzer.feature3': 'Проверка сроков действия и безопасности',
                'tools.analyzer.feature4': 'GDPR соответствие каждого cookie',
                'tools.analyzer.button': 'Анализировать Cookie',
                
                // GDPR Checker
                'tools.gdpr.title': 'GDPR Проверка',
                'tools.gdpr.description': 'Проверьте соответствие вашего сайта требованиям GDPR, CCPA, 152-ФЗ и других законов о защите данных.',
                'tools.gdpr.feature1': 'Проверка наличия cookie баннера',
                'tools.gdpr.feature2': 'Анализ политики конфиденциальности',
                'tools.gdpr.feature3': 'Проверка блокировки cookie до согласия',
                'tools.gdpr.feature4': 'Соответствие международным стандартам',
                'tools.gdpr.url.label': 'URL для проверки:',
                'tools.gdpr.url.placeholder': 'https://example.com',
                'tools.gdpr.button': 'Проверить GDPR',
                
                // Policy Generator
                'tools.policy.title': 'Генератор Политики Cookie',
                'tools.policy.description': 'Создайте профессиональную политику использования cookie для вашего сайта с учетом всех требований GDPR.',
                'tools.policy.feature1': 'Готовые шаблоны для разных типов сайтов',
                'tools.policy.feature2': 'GDPR совместимые формулировки',
                'tools.policy.feature3': 'Поддержка нескольких языков',
                'tools.policy.feature4': 'Экспорт в HTML и PDF',
                'tools.policy.company.label': 'Название компании:',
                'tools.policy.company.placeholder': 'Ваша компания',
                'tools.policy.website.label': 'Веб-сайт:',
                'tools.policy.website.placeholder': 'https://example.com',
                'tools.policy.email.label': 'Email для связи:',
                'tools.policy.email.placeholder': 'contact@example.com',
                'tools.policy.button': 'Создать Политику',
                
                // Banner Tester
                'tools.tester.title': 'Тестер Cookie Баннеров',
                'tools.tester.description': 'Протестируйте различные настройки Cookie Widget и посмотрите, как они будут выглядеть на вашем сайте.',
                'tools.tester.feature1': 'Предварительный просмотр разных тем',
                'tools.tester.feature2': 'Тестирование позиций баннера',
                'tools.tester.feature3': 'Проверка на разных языках',
                'tools.tester.feature4': 'Мобильная адаптивность',
                'tools.tester.theme.label': 'Тема:',
                'tools.tester.theme.modern': 'Современная',
                'tools.tester.theme.classic': 'Классическая',
                'tools.tester.theme.dark': 'Темная',
                'tools.tester.theme.minimal': 'Минимальная',
                'tools.tester.position.label': 'Позиция:',
                'tools.tester.position.bottom': 'Снизу',
                'tools.tester.position.top': 'Сверху',
                'tools.tester.position.center': 'По центру',
                'tools.tester.button': 'Показать Тест',
                'tools.tester.reset': 'Сбросить',
                
                // Consent Simulator
                'tools.simulator.title': 'Симулятор Согласия',
                'tools.simulator.description': 'Симулируйте различные сценарии согласия пользователей и проверьте, как ваш сайт реагирует на разные выборы.',
                'tools.simulator.feature1': 'Симуляция принятия/отклонения cookie',
                'tools.simulator.feature2': 'Тестирование частичного согласия',
                'tools.simulator.feature3': 'Проверка блокировки скриптов',
                'tools.simulator.feature4': 'Анализ событий согласия',
                'tools.simulator.scenario.label': 'Сценарий:',
                'tools.simulator.scenario.accept': 'Принять все',
                'tools.simulator.scenario.decline': 'Отклонить все',
                'tools.simulator.scenario.partial': 'Частичное согласие',
                'tools.simulator.scenario.analytics': 'Только аналитика',
                'tools.simulator.button': 'Запустить Симуляцию',
                
                // Performance Monitor
                'tools.performance.title': 'Монитор Производительности',
                'tools.performance.description': 'Отслеживайте влияние Cookie Widget на производительность вашего сайта и оптимизируйте загрузку.',
                'tools.performance.feature1': 'Время загрузки виджета',
                'tools.performance.feature2': 'Влияние на Core Web Vitals',
                'tools.performance.feature3': 'Размер загружаемых файлов',
                'tools.performance.feature4': 'Рекомендации по оптимизации',
                'tools.performance.button': 'Измерить Производительность',
                
                // Additional examples
                'examples.angular.title': '🅰️ Angular интеграция',
                'examples.angular.description': 'Интеграция Cookie Widget в Angular приложение с сервисом',
                'examples.svelte.title': '🧡 Svelte интеграция',
                'examples.svelte.description': 'Простая интеграция Cookie Widget в Svelte приложение',
                'examples.nuxt.title': '💚 Nuxt.js плагин',
                'examples.nuxt.description': 'Создание плагина для автоматической инициализации в Nuxt.js',
                'examples.drupal.title': '🔷 Drupal интеграция',
                'examples.drupal.description': 'Создание модуля для Drupal с админ панелью',
                'examples.joomla.title': '🟠 Joomla интеграция',
                'examples.joomla.description': 'Создание плагина для Joomla CMS',
                'examples.bitrix.title': '🔶 1C-Bitrix интеграция',
                'examples.bitrix.description': 'Интеграция Cookie Widget в 1C-Bitrix через компонент',
                'examples.laravel.title': '🔴 Laravel интеграция',
                'examples.laravel.description': 'Создание пакета для Laravel с middleware и сервис-провайдером',
                'examples.django.title': '🐍 Django интеграция',
                'examples.django.description': 'Создание Django приложения с middleware для Cookie Widget',
                'examples.shopify.title': '🛒 Shopify интеграция',
                'examples.shopify.description': 'Интеграция Cookie Widget в Shopify магазин',
                'examples.wix.title': '🎨 Wix интеграция',
                'examples.wix.description': 'Добавление Cookie Widget на сайт Wix',
                'examples.squarespace.title': '⬜ Squarespace интеграция',
                'examples.squarespace.description': 'Интеграция Cookie Widget в Squarespace сайт',
                'examples.webflow.title': '🌊 Webflow интеграция',
                'examples.webflow.description': 'Добавление Cookie Widget в Webflow проект',
                'examples.gtm.title': '📊 Google Tag Manager',
                'examples.gtm.description': 'Интеграция через Google Tag Manager с условной загрузкой тегов',
                'examples.facebook.title': '📘 Facebook Pixel',
                'examples.facebook.description': 'Интеграция с Facebook Pixel с управлением согласием',
                'examples.tiktok.title': '🎵 TikTok Pixel',
                'examples.tiktok.description': 'Интеграция с TikTok Pixel для рекламных кампаний',
                'examples.hotjar.title': '🔥 Hotjar интеграция',
                'examples.hotjar.description': 'Условная загрузка Hotjar с соблюдением приватности',
                'examples.mixpanel.title': '📈 Mixpanel интеграция',
                'examples.mixpanel.description': 'Интеграция с Mixpanel аналитикой',
                'examples.amplitude.title': '📊 Amplitude интеграция',
                'examples.amplitude.description': 'Интеграция с Amplitude для продуктовой аналитики',
                
                // Missing example card translations
                'example.advanced.title': '🚀 Продвинутые функции v3.3',
                'example.advanced.description': 'Использование новых эксклюзивных возможностей',
                'example.api.title': '🔧 API интеграция',
                'example.api.description': 'Программное управление через JavaScript API',
                'example.multilang.title': '🌍 Мультиязычность',
                'example.multilang.description': 'Поддержка множественных языков и локализация',
                'example.mobile.title': '📱 Мобильная оптимизация',
                'example.mobile.description': 'Адаптивный дизайн для мобильных устройств',
                'example.security.title': '🔒 Безопасность и приватность',
                'example.security.description': 'Максимальная защита данных пользователей',
                
                // Missing example card feature translations
                'example.react.feature1': 'TypeScript типизация',
                'example.react.feature2': 'Хуки для управления состоянием',
                'example.react.feature3': 'SSR совместимость',
                'example.react.feature4': 'Динамическая загрузка скриптов',
                
                'example.vue.feature1': 'Composition API',
                'example.vue.feature2': 'Реактивные настройки',
                'example.vue.feature3': 'Nuxt.js плагин',
                'example.vue.feature4': 'Автоматическая инициализация',
                
                'example.wordpress.feature1': 'Плагин для WordPress',
                'example.wordpress.feature2': 'Настройки в админке',
                'example.wordpress.feature3': 'Совместимость с темами',
                'example.wordpress.feature4': 'Шорткоды поддержка',
                
                'example.ga4.feature1': 'Условная загрузка GA4',
                'example.ga4.feature2': 'Отслеживание согласия',
                'example.ga4.feature3': 'Конфигурация приватности',
                'example.ga4.feature4': 'Кастомные события',
                
                'example.yandex.feature1': 'Соблюдение 152-ФЗ',
                'example.yandex.feature2': 'Цели и события',
                'example.yandex.feature3': 'Управление Вебвизором',
                'example.yandex.feature4': 'Карты кликов',
                
                'example.advanced.feature1': 'Smart Auto-Detect трекеров',
                'example.advanced.feature2': 'SEO-Friendly Mode',
                'example.advanced.feature3': 'Script Guard защита',
                'example.advanced.feature4': 'Zero-Reload Mode',
                
                'example.api.feature1': 'События и коллбэки',
                'example.api.feature2': 'Динамическое управление',
                'example.api.feature3': 'Кастомные категории',
                'example.api.feature4': 'SPA интеграция',
                
                'example.multilang.feature1': '8 языков из коробки',
                'example.multilang.feature2': 'Автоопределение языка',
                'example.multilang.feature3': 'Кастомные переводы',
                'example.multilang.feature4': 'RTL поддержка',
                
                'example.mobile.feature1': 'Адаптивный дизайн',
                'example.mobile.feature2': 'Touch-friendly интерфейс',
                'example.mobile.feature3': 'PWA совместимость',
                'example.mobile.feature4': 'Оптимизация производительности',
                
                'example.security.feature1': 'Secure Storage система',
                'example.security.feature2': 'Шифрование данных',
                'example.security.feature3': 'GDPR/CCPA соответствие',
                'example.security.feature4': 'Аудит безопасности',
                
                // Advanced Features v3.3
                'advanced.title': '🚀 Эксклюзивные функции',
                'advanced.description': 'Уникальные возможности, которых нет у конкурентов. Попробуйте прямо сейчас!',
                'advanced.cta.button': '🎮 Попробовать все функции',
                'advanced.cta.note': 'Интерактивная демонстрация всех эксклюзивных функций',
                
                // Feature cards for v3.3
                'feature.smart-detect.title': '🧠 Умное автообнаружение',
                'feature.smart-detect.description': 'Автоматическое обнаружение трекеров на странице',
                'feature.smart-detect.status': 'НОВОЕ',
                'feature.smart-detect.found': 'найдено трекеров',
                'feature.smart-detect.ga': '✓ Google Analytics обнаружен',
                'feature.smart-detect.ym': '✓ Яндекс.Метрика обнаружена',
                'feature.smart-detect.fb': '✓ Meta Pixel обнаружен',
                'feature.smart-detect.total': 'Всего',
                
                'feature.seo-friendly.title': '🔍 SEO-дружественный режим',
                'feature.seo-friendly.description': 'Определение ботов и поисковых роботов',
                'feature.seo-friendly.status': 'НОВОЕ',
                'feature.seo-friendly.human': '👤 Обычный посетитель',
                'feature.seo-friendly.useragent': 'User-Agent: Mozilla/5.0 (Windows NT 10.0; ...',
                
                'feature.script-guard.title': '🔒 Защита скриптов',
                'feature.script-guard.description': 'Блокировка скриптов до получения согласия',
                'feature.script-guard.status': 'НОВОЕ',
                'feature.script-guard.blocked': 'скриптов заблокировано',
                'feature.script-guard.gtag': '✓ gtag() перехвачен',
                'feature.script-guard.fbq': '✓ fbq() перехвачен',
                'feature.script-guard.waiting': 'Ожидание согласия...',
                
                'feature.iframe-blocker.title': '🚫 Блокировщик iFrame',
                'feature.iframe-blocker.description': 'Автоматическая блокировка YouTube, TikTok, карт и других iframe',
                'feature.iframe-blocker.status': 'НОВОЕ',
                
                'feature.script-scanner.title': '🔍 Сканер скриптов',
                'feature.script-scanner.description': 'Автоматический анализ скриптов страницы как у CookieBot',
                'feature.script-scanner.status': 'НОВОЕ',
                
                'feature.secure-sandbox.title': '🏖️ Безопасная песочница',
                'feature.secure-sandbox.description': 'Выполнение скриптов в изолированном sandbox iframe',
                'feature.secure-sandbox.status': 'НОВОЕ',
                
                'feature.lazy-guard.title': '⏳ Ленивая защита',
                'feature.lazy-guard.description': 'Блокирует deferred и async скрипты до ответа пользователя',
                'feature.lazy-guard.status': 'НОВОЕ',
                
                'feature.integrations.title': '🤝 Центр интеграций',
                'feature.integrations.description': 'Готовые конфигурации для популярных сервисов',
                'feature.integrations.status': 'НОВОЕ',
                'feature.integrations.gtm': 'Google Tag Manager',
                'feature.integrations.ym': 'Яндекс.Метрика',
                'feature.integrations.fb': 'Meta Pixel',
                'feature.integrations.tiktok': 'TikTok Pixel',
                'feature.integrations.recaptcha': 'reCAPTCHA v3',
                'feature.integrations.turnstile': 'Cloudflare Turnstile',
                
                'feature.zero-reload.title': '🚀 Режим без перезагрузки',
                'feature.zero-reload.description': 'Включение/выключение трекеров без перезагрузки страницы',
                
                'feature.auto-renew.title': '🔄 Автообновление согласия',
                'feature.auto-renew.description': 'Автоматическое обновление согласия через 3/6/12 месяцев или при изменении политики',
                
                'feature.secure-storage.title': '🔐 Безопасное хранилище',
                'feature.secure-storage.description': 'Сохранение согласия в localStorage, sessionStorage, IndexedDB и cookies. Тройная система резервного копирования предотвращает потерю данных.',
                
                'feature.iframe-blocker.title': '🚫 Блокировщик iFrame',
                'feature.iframe-blocker.description': 'Автоматически блокирует YouTube, TikTok, Google Maps и другие iframe, которые устанавливают cookie без согласия пользователя. Показывает заглушки с запросом согласия.',
                
                'feature.script-scanner.title': '🔍 Сканер скриптов',
                'feature.script-scanner.description': 'Анализирует все скрипты страницы как CookieBot, но локально. Обнаруживает паттерны установки cookie, классифицирует по категориям и предоставляет подробные отчеты.',
                
                'feature.secure-sandbox.title': '🏖️ Безопасная песочница',
                'feature.secure-sandbox.description': 'Выполняет скрипты в изолированных sandbox iframe с ограниченным доступом к API. Революционный подход к безопасности, который почти никто не реализует.',
                
                'feature.lazy-script-guard.title': '⏳ Ленивая защита скриптов',
                'feature.lazy-script-guard.description': 'Блокирует deferred и async скрипты до получения согласия пользователя. Предотвращает фоновое выполнение скриптов во время загрузки страницы.',
                
                // Demo Page
                'demo.page.title': 'Демо эксклюзивных функций v3.3',
                'demo.page.subtitle': 'Интерактивная демонстрация уникальных возможностей, которых нет у конкурентов',
                'demo.badge': 'v3.3 ДЕМО',
                'demo.back': 'Назад к главной',
                'demo.new_badge': 'НОВОЕ',
                
                // Demo Controls
                'demo.controls.title': 'Попробуйте Cookie Widget',
                'demo.controls.description': 'Протестируйте все функции в действии. Cookie Widget автоматически определит ваш регион и применит соответствующие настройки.',
                'demo.controls.show': '🍪 Показать Cookie Banner',
                'demo.controls.reset': '🔄 Сбросить демо',
                'demo.controls.home': '🏠 Вернуться на главную',
                
                // Documentation page
                'docs.title': 'Документация Cookie Widget v3.3',
                'docs.subtitle': 'Полное руководство по новым эксклюзивным функциям: Smart Auto-Detect трекеров, SEO-Friendly Mode, Script Guard, Zero-Reload Mode, Integrations Hub, Secure Storage и Geo-Adaptive Compliance',
                'docs.stats.version': 'Версия',
                'docs.stats.size': 'Полный размер',
                'docs.stats.features': 'Уникальных функций',
                'docs.stats.languages': 'Поддерживаемых языков',
                'docs.stats.laws': 'Соответствие законам',
                'docs.stats.dependencies': 'Зависимостей',
                'docs.contents': 'Содержание',
                
                // Documentation navigation
                'docs.nav.quickstart': 'Быстрый старт',
                'docs.nav.installation': 'Установка',
                'docs.nav.advanced': '🆕 Эксклюзивные функции',
                'docs.nav.smart-detect': '🧠 Smart Auto-Detect',
                'docs.nav.seo-friendly': '🔍 SEO-Friendly Mode',
                'docs.nav.script-guard': '🔒 Script Guard',
                'docs.nav.integrations': '🤝 Integrations Hub',
                'docs.nav.zero-reload': '🚀 Zero-Reload Mode',
                'docs.nav.secure-storage': '🔒 Secure Storage',
                'docs.nav.configuration': 'Конфигурация',
                'docs.nav.api': 'API Справочник',
                'docs.nav.customization': 'Настройка текста',
                'docs.nav.events': 'События',
                'docs.nav.examples': 'Примеры',
                'docs.nav.compliance': 'Соответствие законам',
                'docs.nav.troubleshooting': 'Решение проблем',
                
                // Quick start section
                'docs.quickstart.title': '🚀 Быстрый старт',
                'docs.quickstart.description': 'Интегрируйте Cookie Widget на ваш сайт за 2 минуты и получите полное соответствие международным стандартам защиты данных:',
                'docs.quickstart.features': '✨ Новые эксклюзивные функции в v3.3',
                'docs.quickstart.features.description': '🧠 Smart Auto-Detect трекеров • 🔍 SEO-Friendly Mode для ботов • 🔒 Script Guard блокировка • 🚀 Zero-Reload Mode • 🤝 Integrations Hub • 🔒 Secure Storage • 🔄 Auto-Renew Consent • 🌍 Geo-Adaptive Compliance',
                'docs.quickstart.step1': '1. Подключите файлы',
                'docs.quickstart.step2': '2. Готово!',
                'docs.quickstart.step2.description': 'Cookie баннер автоматически:',
                'docs.quickstart.step3': '3. Дополнительная настройка (опционально)',
                'docs.quickstart.auto.region': '🌍 Определит регион',
                'docs.quickstart.auto.region.description': 'Автоматически определит местоположение пользователя и применит соответствующие требования законов (GDPR, CCPA, 152-ФЗ, LGPD и др.)',
                'docs.quickstart.auto.language': '🗣️ Выберет язык',
                'docs.quickstart.auto.language.description': 'Определит язык браузера из 20+ поддерживаемых языков включая русский, английский, немецкий, французский, китайский',
                'docs.quickstart.auto.blocking': '🛡️ Заблокирует cookie',
                'docs.quickstart.auto.blocking.description': 'Заблокирует все нежелательные cookie до получения согласия и автоматически удалит отклоненные cookie',
                'docs.quickstart.auto.responsive': '📱 Адаптируется',
                'docs.quickstart.auto.responsive.description': 'Отобразится корректно на всех устройствах и экранах с современным адаптивным дизайном',
                
                // Tips and warnings
                'docs.tip.title': '💡 Совет',
                'docs.tip.description': 'Для дополнительной настройки используйте мощный JavaScript API. Все тексты, ссылки, темы и поведение можно изменить программно.',
                'docs.warning.title': '⚠️ Важно для разработчиков',
                'docs.warning.description': 'Cookie Widget автоматически блокирует все cookie до получения согласия. Убедитесь, что ваши аналитические и маркетинговые скрипты загружаются только после события cookieConsentAccepted.',
                
                // Examples page detailed integrations
                'examples.react.integration.title': '⚛️ React / Next.js интеграция',
                'examples.react.integration.description': 'Полный пример интеграции Cookie Widget в React приложение',
                'examples.vue.integration.title': '🟢 Vue.js интеграция',
                'examples.vue.integration.description': 'Пример интеграции с Vue.js используя Composition API',
                'examples.wordpress.integration.title': '📝 WordPress интеграция',
                'examples.wordpress.integration.description': 'Простая интеграция Cookie Widget в WordPress',
                'examples.ga4.integration.title': '📊 Google Analytics 4 интеграция',
                'examples.ga4.integration.description': 'Интеграция с Google Analytics с учетом согласия пользователя',
                'examples.yandex.integration.title': '📈 Яндекс.Метрика интеграция',
                'examples.yandex.integration.description': 'Интеграция с Яндекс.Метрикой с условной загрузкой',
                'examples.angular.title': '🅰️ Angular интеграция',
                'examples.angular.description': 'Интеграция Cookie Widget в Angular приложение с сервисом',
                'examples.svelte.title': '🧡 Svelte интеграция',
                'examples.svelte.description': 'Простая интеграция Cookie Widget в Svelte приложение',
                'examples.nuxt.title': '💚 Nuxt.js плагин',
                'examples.nuxt.description': 'Создание плагина для автоматической инициализации в Nuxt.js',
                'examples.drupal.title': '🔷 Drupal интеграция',
                'examples.drupal.description': 'Создание модуля для Drupal с админ панелью',
                'examples.joomla.title': '🟠 Joomla интеграция',
                'examples.joomla.description': 'Создание плагина для Joomla CMS',
                'examples.bitrix.title': '🔶 1C-Bitrix интеграция',
                'examples.bitrix.description': 'Интеграция Cookie Widget в 1C-Bitrix через компонент',
                'examples.laravel.title': '🔴 Laravel интеграция',
                'examples.laravel.description': 'Создание пакета для Laravel с middleware и сервис-провайдером',
                'examples.django.title': '🐍 Django интеграция',
                'examples.django.description': 'Создание Django приложения с middleware для Cookie Widget',
                
                // Demo features - missing translations
                'demo.smart.title': 'Smart Auto-Detect',
                'demo.smart.description': 'Автоматическое обнаружение трекеров на странице: Google Analytics, Meta Pixel, Yandex Metrika и других.',
                'demo.smart.status.scanning': 'Сканирование...',
                'demo.smart.status.found': 'Найдено',
                'demo.smart.loading': 'Анализ трекеров...',
                
                'demo.seo.title': 'SEO-Friendly Mode',
                'demo.seo.description': 'Определение поисковых ботов и роботов для лучшей индексации сайта.',
                'demo.seo.status.checking': 'Проверка...',
                'demo.seo.status.bot': 'Бот',
                'demo.seo.status.user': 'Пользователь',
                'demo.seo.loading': 'Анализ user-agent...',
                'demo.seo.type': 'Тип',
                'demo.seo.mode': 'Режим',
                'demo.seo.bot_type': 'Поисковый бот',
                'demo.seo.user_type': 'Обычный пользователь',
                'demo.seo.all_cookies': 'Все cookies разрешены',
                'demo.seo.standard_mode': 'Стандартный режим',
                
                'demo.guard.title': 'Script Guard',
                'demo.guard.description': 'Блокировка скриптов Analytics и Marketing до получения согласия пользователя.',
                'demo.guard.status.active': 'Активен',
                'demo.guard.placeholder': 'Заблокированные скрипты будут показаны здесь...',
                
                'demo.reload.title': 'Zero-Reload Mode',
                'demo.reload.description': 'Включение/выключение трекеров без перезагрузки страницы через систему очередей.',
                'demo.reload.status.ready': 'Готов',
                'demo.reload.active': 'Режим активен - скрипты будут загружаться динамически',
                
                'demo.storage.title': 'Secure Storage',
                'demo.storage.description': 'Сохранение согласия в нескольких местах: localStorage, sessionStorage, IndexedDB, cookies.',
                'demo.storage.status.checking': 'Проверка...',
                'demo.storage.loading': 'Проверка доступных хранилищ...',
                'demo.storage.available': 'Доступные хранилища',
                'demo.storage.total': 'Всего',
                'demo.storage.of': 'из',
                'demo.storage.possible': 'возможных',
                
                'demo.integrations.title': 'Integrations Hub',
                'demo.integrations.description': 'Готовые настройки для популярных сервисов: GTM, Meta Pixel, reCAPTCHA, Cloudflare Turnstile.',
                'demo.integrations.status.ready': 'Готов',
                'demo.integrations.placeholder': 'Доступные интеграции будут показаны здесь...',
                
                // New Advanced Security Features Demo
                'demo.iframe.title': 'Блокировщик iFrame',
                'demo.iframe.description': 'Блокирует YouTube/TikTok/карты без согласия',
                'demo.iframe.status.scanning': 'Сканирование iframe...',
                'demo.iframe.status.blocked': 'iframe заблокированы',
                
                'demo.scanner.title': 'Сканер скриптов',
                'demo.scanner.description': 'Анализирует скрипты как CookieBot локально',
                'demo.scanner.status.analyzing': 'Анализ скриптов...',
                'demo.scanner.status.found': 'скриптов найдено',
                
                'demo.sandbox.title': 'Безопасная песочница',
                'demo.sandbox.description': 'Изолированная среда выполнения скриптов',
                'demo.sandbox.status.testing': 'Тестирование песочницы...',
                'demo.sandbox.status.ready': 'Песочница готова',
                
                'demo.lazy.title': 'Ленивая защита скриптов',
                'demo.lazy.description': 'Блокирует deferred/async до согласия',
                'demo.lazy.status.monitoring': 'Мониторинг скриптов...',
                'demo.lazy.status.blocked': 'скриптов в очереди',
                
                // Feature translations for new security systems
                'feature.iframe-blocker.title': '🚫 Блокировщик iFrame',
                'feature.iframe-blocker.description': 'Автоматически блокирует YouTube, TikTok, Google Maps и другие iframe, которые устанавливают cookie без согласия пользователя. Показывает заглушки с запросом согласия.',
                
                'feature.script-scanner.title': '🔍 Сканер скриптов',
                'feature.script-scanner.description': 'Анализирует все скрипты страницы как CookieBot, но локально. Обнаруживает паттерны установки cookie, классифицирует по категориям и предоставляет подробные отчеты.',
                
                'feature.secure-sandbox.title': '🏖️ Безопасная песочница',
                'feature.secure-sandbox.description': 'Выполняет скрипты в изолированных sandbox iframe с ограниченным доступом к API. Революционный подход к безопасности, который почти никто не реализует.',
                
                'feature.lazy-script-guard.title': '⏳ Ленивая защита скриптов',
                'feature.lazy-script-guard.description': 'Блокирует deferred и async скрипты до получения согласия пользователя. Предотвращает фоновое выполнение скриптов во время загрузки страницы.',
            },
            
            'en': {
                // Navigation
                'nav.features': 'Features',
                'nav.installation': 'Installation',
                'nav.docs': 'Documentation',
                'nav.examples': 'Examples',
                'nav.tools': 'Tools',
                'nav.support': 'Support',
                
                // Hero Section
                'hero.title.main': 'Cookie Widget',
                'hero.title.sub': 'GDPR & Global Privacy Compliant',
                'hero.description': 'Revolutionary cookie banner widget v3.3 with 4 exclusive security systems that no competitor has: iFrame Blocker, Script Scanner, Secure Sandbox, Lazy Script Guard. Plus Smart Auto-Detect trackers, SEO-Friendly Mode, Zero-Reload Mode and 21 languages support. Full compliance with GDPR, CCPA, LGPD, 152-FZ.',
                'hero.btn.start': 'Get Started',
                'hero.btn.demo': 'View Demo',
                'hero.btn.examples': 'Integration Examples',
                'hero.btn.github': 'GitHub',
                'hero.stat.languages': 'Languages',
                'hero.stat.deps': 'Dependencies',
                'hero.stat.features': 'Security Features',
                

                // Features
                'features.title': 'Features',
                'features.description': 'Cookie Widget v3.3 with 4 revolutionary security systems that no competitor has: iFrame Blocker, Script Scanner, Secure Sandbox, Lazy Script Guard. Plus Smart Auto-Detect trackers, SEO-Friendly Mode, Zero-Reload Mode, 21 languages support and full compliance with international privacy laws.',
                
                // Advanced Features v3.3
                'advanced.title': '🚀 Exclusive Features',
                'advanced.description': 'Unique capabilities that competitors don\'t have. Try them right now!',
                
                // Demo features
                'demo.smart.title': 'Smart Auto-Detect',
                'demo.smart.description': 'Automatic tracker detection on the page',
                'demo.smart.status.scanning': 'Scanning...',
                'demo.seo.title': 'SEO-Friendly Mode',
                'demo.seo.description': 'Bot and search robot detection',
                'demo.seo.status.checking': 'Checking...',
                'demo.guard.title': 'Script Guard',
                'demo.guard.description': 'Script blocking before consent',
                'demo.integrations.title': 'Integrations Hub',
                'demo.integrations.description': 'Ready configurations for popular services',
                'demo.new_badge': 'NEW',
                
                // New Advanced Security Features Demo
                'demo.iframe.title': 'iFrame Blocker',
                'demo.iframe.description': 'Blocks YouTube/TikTok/Maps without consent',
                'demo.iframe.status.scanning': 'Scanning iframes...',
                'demo.iframe.status.blocked': 'iframes blocked',
                
                'demo.scanner.title': 'Script Scanner',
                'demo.scanner.description': 'Analyzes scripts like CookieBot locally',
                'demo.scanner.status.analyzing': 'Analyzing scripts...',
                'demo.scanner.status.found': 'scripts found',
                
                'demo.sandbox.title': 'Secure Sandbox',
                'demo.sandbox.description': 'Isolated script execution environment',
                'demo.sandbox.status.testing': 'Testing sandbox...',
                'demo.sandbox.status.ready': 'Sandbox ready',
                
                'demo.lazy.title': 'Lazy Script Guard',
                'demo.lazy.description': 'Blocks deferred/async until consent',
                'demo.lazy.status.monitoring': 'Monitoring scripts...',
                'demo.lazy.status.blocked': 'scripts in queue',
                
                // Feature translations for new security systems
                'feature.iframe-blocker.title': '🚫 iFrame Blocker',
                'feature.iframe-blocker.description': 'Automatically blocks YouTube, TikTok, Google Maps and other iframes that set cookies without user consent. Shows consent placeholders instead.',
                
                'feature.script-scanner.title': '🔍 Script Scanner',
                'feature.script-scanner.description': 'Analyzes all page scripts like CookieBot but locally. Detects cookie-setting patterns, classifies by categories and provides detailed reports.',
                
                'feature.secure-sandbox.title': '🏖️ Secure Sandbox',
                'feature.secure-sandbox.description': 'Executes scripts in isolated sandbox iframes with limited API access. Revolutionary security approach that almost no one implements.',
                
                'feature.lazy-script-guard.title': '⏳ Lazy Script Guard',
                'feature.lazy-script-guard.description': 'Blocks deferred and async scripts until user provides consent. Prevents background script execution during page load.',
                
                // Advanced CTA
                'advanced.cta.button': '🎮 Try All Features',
                'advanced.cta.note': 'Interactive demonstration of all exclusive features',
                
                // Feature cards - new v3.3 features
                'feature.smart-detect.title': '🧠 Smart Auto-Detect Tracking',
                'feature.smart-detect.description': 'Automatic detection of 20+ trackers: Google Analytics, Meta Pixel, Yandex Metrica, TikTok Pixel. DOM scanning, network requests and cookies with categorization by types.',
                'feature.seo-friendly.title': '🔍 SEO-Friendly Mode',
                'feature.seo-friendly.description': 'Search bots see the site as having accepted all cookies for better indexing. Detection of GoogleBot, YandexBot, BingBot via user-agent and automation indicators.',
                'feature.integrations.title': '🤝 Integrations Hub',
                'feature.integrations.description': 'Ready configurations for Google Tag Manager, Yandex Metrica, Meta Pixel, TikTok Pixel, reCAPTCHA v3, Cloudflare Turnstile. Zero-config integration.',
                'feature.script-guard.title': '🔒 Script Guard',
                'feature.script-guard.description': 'Blocking Analytics and Marketing scripts before site loading through proxy stubs. Protection from tracker execution without user consent.',
                'feature.iframe-blocker.title': '🚫 iFrame Blocker',
                'feature.iframe-blocker.description': 'Automatic blocking of YouTube, TikTok, Maps and other iframes that set cookies without consent. Shows consent request overlay.',
                'feature.script-scanner.title': '🔍 Script Scanner',
                'feature.script-scanner.description': 'Automatic page script analysis like CookieBot but locally. Detects cookie-setting scripts and classifies them by category.',
                'feature.secure-sandbox.title': '🏖️ Secure Sandbox',
                'feature.secure-sandbox.description': 'Scripts execution in isolated sandbox iframe with limited API access. Maximum security for untrusted code.',
                'feature.lazy-guard.title': '⏳ Lazy Script Guard',
                'feature.lazy-guard.description': 'Blocks deferred and async scripts until user responds to consent banner. Prevents background tracking.',
                'feature.zero-reload.title': '🚀 Zero-Reload Mode',
                'feature.zero-reload.description': 'Enable/disable trackers without page reload. Instant script activation upon consent through queue system.',
                'feature.auto-renew.title': '🔄 Auto-Renew Consent',
                'feature.auto-renew.description': 'Automatic consent renewal after 3/6/12 months or when policy changes. GDPR compliance with privacy policy version tracking.',
                'feature.secure-storage.title': '🔐 Secure Storage',
                'feature.secure-storage.description': 'Consent storage in localStorage, sessionStorage, IndexedDB and cookies. Works even in "anti-cookie" browsers with full cookie blocking.',
                
                'feature.iframe-blocker.title': '🚫 iFrame Blocker',
                'feature.iframe-blocker.description': 'Automatically blocks YouTube, TikTok, Google Maps and other iframes that set cookies without user consent. Shows consent placeholders instead.',
                
                'feature.script-scanner.title': '🔍 Script Scanner',
                'feature.script-scanner.description': 'Analyzes all page scripts like CookieBot but locally. Detects cookie-setting patterns, classifies by categories and provides detailed reports.',
                
                'feature.secure-sandbox.title': '🏖️ Secure Sandbox',
                'feature.secure-sandbox.description': 'Executes scripts in isolated sandbox iframes with limited API access. Revolutionary security approach that almost no one implements.',
                
                'feature.lazy-script-guard.title': '⏳ Lazy Script Guard',
                'feature.lazy-script-guard.description': 'Blocks deferred and async scripts until user provides consent. Prevents background script execution during page load.',
                
                // Installation
                'install.title': 'Installation',
                'install.description': 'Integrate the widget into your site in minutes',
                'install.tab.cdn': 'CDN',
                'install.tab.download': 'Download',
                'install.tab.integration': 'Integration',
                
                // Support
                'support.title': 'Project Support',
                'support.description': 'Help develop the project and get support',
                'support.bug.title': 'Report a Bug',
                'support.bug.description': 'Found a bug or have a suggestion for improvement?',
                'support.bug.link': 'Create Issue →',
                'support.coffee.title': 'Support Developer',
                'support.coffee.description': 'Buy me a coffee and support further project development',
                'support.coffee.link': 'Buy me a coffee →',
                'support.docs.title': 'Documentation',
                'support.docs.description': 'Detailed documentation and usage examples',
                'support.docs.link': 'Read Documentation →',
                
                // Demo Browser
                'demo.browser.url': 'https://yoursite.com',
                'demo.browser.title': 'Your Website',
                'demo.banner.title': 'Cookie Usage',
                'demo.banner.description': 'We use cookies to improve website functionality...',
                'demo.banner.settings': 'Settings',
                'demo.banner.accept': 'Accept',
                'demo.try': 'Try Widget',
                
                // License
                'license.title': 'Open License',
                'license.description': 'The project is distributed under the MIT license. You can freely use, modify and distribute the code in commercial and non-commercial projects.',
                'license.link': 'Read License',
                
                // Documentation cards
                'docs.quickstart.title': 'Quick Start',
                'docs.quickstart.description': 'Step-by-step guide to integrating the widget on your site',
                'docs.quickstart.link': 'Read →',
                'docs.config.title': 'Configuration',
                'docs.config.description': 'How to configure the widget for your requirements and site design',
                'docs.config.link': 'Read →',
                'docs.api.title': 'API',
                'docs.api.description': 'Reference for methods and events for programmatic control',
                'docs.api.link': 'Read →',
                'docs.compliance.title': 'Legal Compliance',
                'docs.compliance.description': 'How the widget ensures GDPR and legal compliance',
                'docs.compliance.link': 'Read →',
                
                // Installation tabs
                'install.cdn.title': 'CDN Integration',
                'install.cdn.description': 'The easiest way - connect files directly from https://cookies-widget-sergioplay.vercel.app/:',
                'install.download.title': 'Download Files',
                'install.download.description': 'Download files and place them on your server:',
                'install.integration.title': 'Integration with Popular Platforms',
                'install.integration.description': 'Integration examples with various CMS and frameworks:',
                'install.example.title': 'Integration Example',
                
                // Footer
                'footer.description': 'Revolutionary cookie banner widget v3.3 with advanced security features',
                'footer.project': 'Project',
                'footer.documentation': 'Documentation',
                'footer.support': 'Support',
                'footer.settings': 'Cookie Settings',
                'footer.copyright': 'Distributed under MIT License.',
                
                // Language Selector
                'lang.select': 'Select Language',
                'lang.auto': 'Auto-detect',
                
                // Documentation
                'docs.title': 'Cookie Widget Documentation',
                'docs.subtitle': 'Complete guide for integration, configuration and usage of Cookie Widget for GDPR, CCPA, LGPD compliance and other international data protection standards',
                'docs.nav.quickstart': 'Quick Start',
                'docs.nav.installation': 'Installation',
                'docs.nav.configuration': 'Configuration',
                'docs.nav.api': 'API Reference',
                'docs.nav.customization': 'Text Customization',
                'docs.nav.events': 'Events',
                'docs.nav.examples': 'Examples',
                'docs.nav.compliance': 'Legal Compliance',
                'docs.nav.troubleshooting': 'Troubleshooting',
                
                // Documentation content
                'docs.quickstart.title': '🚀 Quick Start',
                'docs.quickstart.description': 'Integrate Cookie Widget on your site in 2 minutes and get full compliance with international data protection standards:',
                'docs.quickstart.features': '✨ New features in version 3.0',
                'docs.quickstart.features.description': 'Automatic cookie blocking, 20+ languages, API for text customization, ad-blocker protection, integration with GA4 and Yandex.Metrica',
                'docs.quickstart.step1': '1. Connect files',
                'docs.quickstart.step2': '2. Done!',
                'docs.quickstart.step3': '3. Additional configuration (optional)',
                'docs.quickstart.auto.region': 'Detect region',
                'docs.quickstart.auto.region.description': 'Automatically detect user location and apply corresponding law requirements (GDPR, CCPA, 152-FZ, LGPD, etc.)',
                'docs.quickstart.auto.language': 'Select language',
                'docs.quickstart.auto.language.description': 'Detect browser language from 20+ supported languages including Russian, English, German, French, Chinese',
                'docs.quickstart.auto.blocking': 'Block cookies',
                'docs.quickstart.auto.blocking.description': 'Block all unwanted cookies before consent and automatically delete rejected cookies',
                'docs.quickstart.auto.responsive': 'Adapt',
                'docs.quickstart.auto.responsive.description': 'Display correctly on all devices and screens with modern responsive design',
                
                // Interface elements
                'ui.copy': 'Copy',
                'ui.copied': 'Copied!',
                'ui.read_more': 'Read →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Menu',
                'ui.close': 'Close',
                
                // Documentation sections
                'docs.description.setup': 'Detailed guide for configuration and usage',
                'docs.stats.size': 'Minimal Size',
                'docs.stats.languages': 'Language Support',
                'docs.stats.laws': 'Law Compliance',
                'docs.stats.dependencies': 'Dependencies',
                'docs.contents': 'Contents',
                
                // Installation section details
                'install.wordpress.title': 'WordPress',
                'install.react.title': 'React/Next.js',
                'install.react.file': '_app.js or layout.js',
                'install.functions.file': 'functions.php',
                
                // Footer links
                'footer.releases': 'Releases',
                'footer.license': 'License',
                'footer.installation': 'Installation',
                'footer.guide': 'Guide',
                'footer.examples': 'Examples',
                'footer.issues': 'Issues',
                'footer.support_dev': 'Support',
                'footer.install_app': 'Install App',
                
                // Examples page
                'examples.title': 'Integration Examples',
                'examples.subtitle': 'Ready-made solutions for integrating Cookie Widget into popular frameworks, CMS and analytics systems. Copy the code and adapt it to your needs.',
                'examples.demo.title': 'Live Demonstration',
                'examples.demo.description': 'Try Cookie Widget in action:',
                'examples.demo.show': 'Show Cookie Banner',
                'examples.demo.reset': 'Reset Settings',
                'examples.demo.current': 'Current Settings',
                
                // Feature cards
                'feature.compliance.title': '🌍 Global Compliance',
                'feature.compliance.description': 'Full compliance with GDPR, CCPA, LGPD, Russian 152-FZ, PIPEDA, PIPL, APPI, PIPA and other international data protection standards with automatic region detection',
                'feature.languages.title': '🗣️ 20+ Language Support',
                'feature.languages.description': 'Automatic browser language detection with support for Russian, English, German, French, Spanish, Chinese, Japanese and other languages',
                'feature.blocking.title': '🛡️ Automatic Blocking',
                'feature.blocking.description': 'Intelligent cookie blocking system before consent with automatic deletion of rejected cookies and bypass protection',
                'feature.responsive.title': '📱 Responsive Design',
                'feature.responsive.description': 'Modern design with gradients and animations, working perfectly on all devices from mobile phones to large monitors',
                'feature.api.title': '🎨 Powerful Customization API',
                'feature.api.description': 'Full customization of texts, links, themes and behavior through JavaScript API. Support for corporate branding and additional categories',
                'feature.performance.title': '⚡ Maximum Performance',
                'feature.performance.description': 'Only 5KB minified code, no external dependencies, with ad-blocker protection and optimization for maximum loading speed',
                'feature.analytics.title': '📊 Analytics Integration',
                'feature.analytics.description': 'Ready examples for integration with Google Analytics 4, Yandex.Metrica, Facebook Pixel and other analytics systems with Consent Mode support',
                'feature.frameworks.title': '⚛️ Framework Support',
                'feature.frameworks.description': 'Ready integration examples for React, Vue.js, Next.js, Nuxt.js, WordPress and other popular frameworks and CMS with TypeScript support',
                
                // Interface elements
                'ui.copy': 'Copy',
                'ui.copied': 'Copied!',
                'ui.read_more': 'Read →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Menu',
                'ui.close': 'Close',
                
                // Documentation sections
                'docs.description.setup': 'Detailed guide for configuration and usage',
                'docs.stats.size': 'Minimal Size',
                'docs.stats.languages': 'Language Support',
                'docs.stats.laws': 'Law Compliance',
                'docs.stats.dependencies': 'Dependencies',
                'docs.contents': 'Contents',
                
                // Installation section details
                'install.wordpress.title': 'WordPress',
                'install.react.title': 'React/Next.js',
                'install.react.file': '_app.js or layout.js',
                'install.functions.file': 'functions.php',
                
                // Footer links
                'footer.releases': 'Releases',
                'footer.license': 'License',
                'footer.installation': 'Installation',
                'footer.guide': 'Guide',
                'footer.examples': 'Examples',
                'footer.issues': 'Issues',
                'footer.support_dev': 'Support',
                'footer.install_app': 'Install App',
                
                // Example cards
                'example.react.title': '⚛️ React / Next.js',
                'example.react.description': 'Modern integration for React applications with TypeScript support',
                'example.vue.title': '🟢 Vue.js / Nuxt.js',
                'example.vue.description': 'Integration for Vue ecosystem with composition API',
                'example.wordpress.title': '📝 WordPress',
                'example.wordpress.description': 'Simple WordPress integration with admin panel',
                'example.ga4.title': '📊 Google Analytics 4',
                'example.ga4.description': 'Full GA4 integration and event management',
                'example.yandex.title': '📈 Yandex.Metrica',
                'example.yandex.description': 'Integration with Russian analytics system',
                'example.corporate.title': '🏢 Corporate Solutions',
                'example.corporate.description': 'Configuration for large companies and corporations',
                
                // Documentation sections - detailed
                'docs.quickstart.step2.description': 'Cookie banner automatically:',
                'docs.installation.title': '📦 Installation',
                'docs.installation.cdn.title': 'CDN (Recommended)',
                'docs.installation.cdn.description': 'The easiest way - use our CDN:',
                'docs.installation.local.title': 'Local Installation',
                'docs.installation.local.description': 'Download files and place them on your server:',
                'docs.installation.local.download.css': 'Download CSS',
                'docs.installation.local.download.js': 'Download JS',
                'docs.installation.platforms.title': 'Integration with Popular Platforms',
                'docs.configuration.title': '⚙️ Configuration',
                'docs.configuration.basic.title': 'Basic Configuration',
                'docs.configuration.basic.description': 'Creating with custom settings',
                'docs.configuration.options.autoShow': 'Automatically show banner',
                'docs.configuration.options.theme': 'Theme',
                'docs.configuration.options.position': 'Banner position',
                'docs.configuration.options.privacyUrl': 'Privacy policy URL',
                'docs.configuration.options.onAccept': 'Callback on accept',
                'docs.configuration.options.onDecline': 'Callback on decline',
                'docs.api.title': '📚 API Reference',
                'docs.api.methods.title': 'Main Methods',
                'docs.api.show.description': 'Show cookie banner',
                'docs.api.hide.description': 'Hide cookie banner',
                'docs.api.getSettings.description': 'Get current cookie settings',
                'docs.api.setSettings.description': 'Set cookie settings',
                'docs.api.reset.description': 'Reset all settings and show banner again',
                'docs.api.getLanguage.description': 'Get current interface language',
                'docs.api.getVersion.description': 'Get Cookie Widget version',
                'docs.api.getAllTexts.description': 'Get all interface texts (including custom)',
                'docs.api.setTheme.description': 'Set theme',
                'docs.api.setPosition.description': 'Set banner position',
                'docs.api.setTexts.title': 'setTexts(texts)',
                'docs.api.setTexts.description': 'Interface text customization',
                'docs.api.customization.title': '🎨 Text Customization',
                'docs.api.customization.description': 'Complete customization of all interface texts',
                'docs.api.customization.example': 'Customization example',
                'docs.api.events.title': '📡 Events',
                'docs.api.events.description': 'Cookie Widget generates events for integration with your code',
                'docs.api.events.initialized': 'Widget initialized',
                'docs.api.events.shown': 'Banner shown',
                'docs.api.events.hidden': 'Banner hidden',
                'docs.api.events.accepted': 'Consent accepted',
                'docs.api.events.declined': 'Consent declined',
                'docs.api.events.settingsChanged': 'Settings changed',
                'docs.examples.title': '💼 Advanced Examples',
                'docs.examples.description': 'Ready solutions for popular use cases',
                'docs.examples.ga4.title': 'Google Analytics 4',
                'docs.examples.ga4.description': 'Advanced integration with Google Analytics 4',
                'docs.examples.yandex.title': 'Yandex.Metrica',
                'docs.examples.yandex.description': 'Integration with Yandex.Metrica with 152-FZ compliance',
                'docs.examples.react.title': 'React + TypeScript',
                'docs.examples.react.description': 'Component for React applications with TypeScript',
                'docs.examples.corporate.title': 'Corporate Setup',
                'docs.examples.corporate.description': 'Setup for large companies',
                'docs.compliance.title': '⚖️ Legal Compliance',
                'docs.compliance.description': 'Cookie Widget ensures compliance with international standards',
                'docs.compliance.gdpr.title': 'GDPR (Europe)',
                'docs.compliance.gdpr.description': 'Full compliance with General Data Protection Regulation',
                'docs.compliance.ccpa.title': 'CCPA (California)',
                'docs.compliance.ccpa.description': 'Compliance with California Consumer Privacy Act',
                'docs.compliance.lgpd.title': 'LGPD (Brazil)',
                'docs.compliance.lgpd.description': 'Compliance with Brazilian General Data Protection Law',
                'docs.compliance.russia.title': '152-FZ (Russia)',
                'docs.compliance.russia.description': 'Compliance with Russian personal data law',
                'docs.troubleshooting.title': '🔧 Troubleshooting',
                'docs.troubleshooting.description': 'Common issues and their solutions',
                'docs.troubleshooting.not.showing.title': 'Banner not showing',
                'docs.troubleshooting.not.showing.description': 'Check initialization and browser console',
                'docs.troubleshooting.not.blocking.title': 'Cookies not blocked',
                'docs.troubleshooting.not.blocking.description': 'Make sure scripts load after consent',
                'docs.troubleshooting.styles.title': 'Style issues',
                'docs.troubleshooting.styles.description': 'Check CSS file connection',
                'docs.tip.title': '💡 Tip',
                'docs.tip.description': 'For additional customization use the powerful JavaScript API. All texts, links, themes and behavior can be changed programmatically. Check advanced examples below for integration with Google Analytics 4, Yandex.Metrica, React and corporate settings.',
                'docs.warning.title': '⚠️ Important for Developers',
                'docs.warning.description': 'Cookie Widget automatically blocks all cookies before consent. Make sure your analytics and marketing scripts load only after the cookieConsentAccepted event.',
                
                // Examples page - detailed
                'examples.react.integration.title': '⚛️ React / Next.js Integration',
                'examples.react.integration.description': 'Complete example of Cookie Widget integration in React application with TypeScript:',
                'examples.vue.integration.title': '🟢 Vue.js / Nuxt.js Integration',
                'examples.vue.integration.description': 'Integration example with Vue.js using Composition API:',
                'examples.wordpress.integration.title': '📝 WordPress Integration',
                'examples.wordpress.integration.description': 'Simple Cookie Widget integration in WordPress theme or plugin:',
                'examples.ga4.integration.title': '📊 Google Analytics 4 Integration',
                'examples.ga4.integration.description': 'Complete integration with Google Analytics 4 with consent management:',
                'examples.basic.title': '🚀 Basic Integration',
                'examples.basic.description': 'The simplest way to connect the widget to your site',
                'examples.ga4.simple.title': '📊 Google Analytics 4',
                'examples.ga4.simple.description': 'Integration with Google Analytics considering user consent',
                'examples.yandex.simple.title': '📈 Yandex.Metrica',
                'examples.yandex.simple.description': 'Integration with Yandex.Metrica with conditional loading',
                'examples.wordpress.simple.title': '🔌 WordPress',
                'examples.wordpress.simple.description': 'WordPress integration via functions.php',
                'examples.react.simple.title': '⚛️ React',
                'examples.react.simple.description': 'Usage in React application',
                'examples.vue.simple.title': '💚 Vue.js',
                'examples.vue.simple.description': 'Integration in Vue.js application',
                'examples.customization.title': '🎨 Style Customization',
                'examples.customization.description': 'Customize appearance for your design',
                'examples.page.title': 'Integration Examples',
                'examples.page.description': 'Ready examples for quick Cookie Widget integration in your project',
                'examples.back.link': 'Back to main',
                'examples.back.main': 'Return to main page',
                
                // Tools page
                'nav.tools': 'Tools',
                'tools.title': 'Webmaster Tools',
                'tools.subtitle': 'Useful tools for cookie analysis, GDPR compliance checking and cookie banner testing. All tools work locally in your browser and do not send data to the server.',
                
                // Cookie Analyzer
                'tools.analyzer.title': 'Cookie Analyzer',
                'tools.analyzer.description': 'Analyze all cookies on the current site, check their types, expiration dates and GDPR compliance requirements.',
                'tools.analyzer.feature1': 'List of all cookies on the site',
                'tools.analyzer.feature2': 'Classification by types (necessary, functional, analytical)',
                'tools.analyzer.feature3': 'Check expiration dates and security',
                'tools.analyzer.feature4': 'GDPR compliance of each cookie',
                'tools.analyzer.button': 'Analyze Cookies',
                
                // GDPR Checker
                'tools.gdpr.title': 'GDPR Check',
                'tools.gdpr.description': 'Check your site compliance with GDPR, CCPA, 152-FZ and other data protection laws.',
                'tools.gdpr.feature1': 'Check for cookie banner presence',
                'tools.gdpr.feature2': 'Privacy policy analysis',
                'tools.gdpr.feature3': 'Check cookie blocking before consent',
                'tools.gdpr.feature4': 'International standards compliance',
                'tools.gdpr.url.label': 'URL to check:',
                'tools.gdpr.url.placeholder': 'https://example.com',
                'tools.gdpr.button': 'Check GDPR',
                
                // Policy Generator
                'tools.policy.title': 'Cookie Policy Generator',
                'tools.policy.description': 'Create a professional cookie usage policy for your site considering all GDPR requirements.',
                'tools.policy.feature1': 'Ready templates for different site types',
                'tools.policy.feature2': 'GDPR compatible formulations',
                'tools.policy.feature3': 'Multiple language support',
                'tools.policy.feature4': 'Export to HTML and PDF',
                'tools.policy.company.label': 'Company name:',
                'tools.policy.company.placeholder': 'Your Company',
                'tools.policy.website.label': 'Website:',
                'tools.policy.website.placeholder': 'https://example.com',
                'tools.policy.email.label': 'Contact email:',
                'tools.policy.email.placeholder': 'contact@example.com',
                'tools.policy.button': 'Create Policy',
                
                // Banner Tester
                'tools.tester.title': 'Cookie Banner Tester',
                'tools.tester.description': 'Test different Cookie Widget settings and see how they will look on your site.',
                'tools.tester.feature1': 'Preview of different themes',
                'tools.tester.feature2': 'Testing banner positions',
                'tools.tester.feature3': 'Check in different languages',
                'tools.tester.feature4': 'Mobile responsiveness',
                'tools.tester.theme.label': 'Theme:',
                'tools.tester.theme.modern': 'Modern',
                'tools.tester.theme.classic': 'Classic',
                'tools.tester.theme.dark': 'Dark',
                'tools.tester.theme.minimal': 'Minimal',
                'tools.tester.position.label': 'Position:',
                'tools.tester.position.bottom': 'Bottom',
                'tools.tester.position.top': 'Top',
                'tools.tester.position.center': 'Center',
                'tools.tester.button': 'Show Test',
                'tools.tester.reset': 'Reset',
                
                // Consent Simulator
                'tools.simulator.title': 'Consent Simulator',
                'tools.simulator.description': 'Simulate different user consent scenarios and check how your site reacts to different choices.',
                'tools.simulator.feature1': 'Simulation of accepting/declining cookies',
                'tools.simulator.feature2': 'Testing partial consent',
                'tools.simulator.feature3': 'Check script blocking',
                'tools.simulator.feature4': 'Consent event analysis',
                'tools.simulator.scenario.label': 'Scenario:',
                'tools.simulator.scenario.accept': 'Accept all',
                'tools.simulator.scenario.decline': 'Decline all',
                'tools.simulator.scenario.partial': 'Partial consent',
                'tools.simulator.scenario.analytics': 'Analytics only',
                'tools.simulator.button': 'Run Simulation',
                
                // Performance Monitor
                'tools.performance.title': 'Performance Monitor',
                'tools.performance.description': 'Track Cookie Widget impact on your site performance and optimize loading.',
                'tools.performance.feature1': 'Widget loading time',
                'tools.performance.feature2': 'Impact on Core Web Vitals',
                'tools.performance.feature3': 'Size of loaded files',
                'tools.performance.feature4': 'Optimization recommendations',
                'tools.performance.button': 'Measure Performance',
                'footer.description': 'Modern cookie banner widget with GDPR compliance',
                'footer.project': 'Project',
                'footer.documentation': 'Documentation',
                'footer.support': 'Support',
                'footer.settings': 'Cookie Settings',
                'footer.copyright': 'Distributed under MIT License.',
                
                // Language Selector
                'lang.select': 'Select Language',
                'lang.auto': 'Auto-detect',
                
                // Documentation
                'docs.title': 'Cookie Widget Documentation',
                'docs.subtitle': 'Complete guide for integration, configuration and usage of Cookie Widget for GDPR, CCPA, LGPD compliance and other international data protection standards',
                'docs.nav.quickstart': 'Quick Start',
                'docs.nav.installation': 'Installation',
                'docs.nav.configuration': 'Configuration',
                'docs.nav.api': 'API Reference',
                'docs.nav.customization': 'Text Customization',
                'docs.nav.events': 'Events',
                'docs.nav.examples': 'Examples',
                'docs.nav.compliance': 'Legal Compliance',
                'docs.nav.troubleshooting': 'Troubleshooting',
                
                // Documentation content
                'docs.quickstart.title': '🚀 Quick Start',
                'docs.quickstart.description': 'Integrate Cookie Widget on your site in 2 minutes and get full compliance with international data protection standards:',
                'docs.quickstart.features': '✨ New features in version 3.0',
                'docs.quickstart.features.description': 'Automatic cookie blocking, 20+ languages, API for text customization, ad-blocker protection, integration with GA4 and Yandex.Metrica',
                'docs.quickstart.step1': '1. Connect files',
                'docs.quickstart.step2': '2. Done!',
                'docs.quickstart.step3': '3. Additional configuration (optional)',
                'docs.quickstart.auto.region': 'Detect region',
                'docs.quickstart.auto.region.description': 'Automatically detect user location and apply corresponding law requirements (GDPR, CCPA, 152-FZ, LGPD, etc.)',
                'docs.quickstart.auto.language': 'Select language',
                'docs.quickstart.auto.language.description': 'Detect browser language from 20+ supported languages including Russian, English, German, French, Chinese',
                'docs.quickstart.auto.blocking': 'Block cookies',
                'docs.quickstart.auto.blocking.description': 'Block all unwanted cookies before consent and automatically delete rejected cookies',
                'docs.quickstart.auto.responsive': 'Adapt',
                'docs.quickstart.auto.responsive.description': 'Display correctly on all devices and screens with modern responsive design',
                
                // Interface elements
                'ui.copy': 'Copy',
                'ui.copied': 'Copied!',
                'ui.read_more': 'Read →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Menu',
                'ui.close': 'Close',
                
                // Documentation sections
                'docs.description.setup': 'Detailed guide for configuration and usage',
                'docs.stats.size': 'Minimal Size',
                'docs.stats.languages': 'Language Support',
                'docs.stats.laws': 'Law Compliance',
                'docs.stats.dependencies': 'Dependencies',
                'docs.contents': 'Contents',
                
                // Installation section details
                'install.wordpress.title': 'WordPress',
                'install.react.title': 'React/Next.js',
                'install.react.file': '_app.js or layout.js',
                'install.functions.file': 'functions.php',
                
                // Footer links
                'footer.releases': 'Releases',
                'footer.license': 'License',
                'footer.installation': 'Installation',
                'footer.guide': 'Guide',
                'footer.examples': 'Examples',
                'footer.issues': 'Issues',
                'footer.support_dev': 'Support',
                'footer.install_app': 'Install App',
                
                // Examples page
                'examples.title': 'Integration Examples',
                'examples.subtitle': 'Ready-made solutions for integrating Cookie Widget into popular frameworks, CMS and analytics systems. Copy the code and adapt it to your needs.',
                'examples.demo.title': 'Live Demonstration',
                'examples.demo.description': 'Try Cookie Widget in action:',
                'examples.demo.show': 'Show Cookie Banner',
                'examples.demo.reset': 'Reset Settings',
                'examples.demo.current': 'Current Settings',
                
                // Feature cards
                'feature.compliance.title': '🌍 Global Compliance',
                'feature.compliance.description': 'Full compliance with GDPR, CCPA, LGPD, Russian 152-FZ, PIPEDA, PIPL, APPI, PIPA and other international data protection standards with automatic region detection',
                'feature.languages.title': '🗣️ 20+ Language Support',
                'feature.languages.description': 'Automatic browser language detection with support for Russian, English, German, French, Spanish, Chinese, Japanese and other languages',
                'feature.blocking.title': '🛡️ Automatic Blocking',
                'feature.blocking.description': 'Intelligent cookie blocking system before consent with automatic deletion of rejected cookies and bypass protection',
                'feature.responsive.title': '📱 Responsive Design',
                'feature.responsive.description': 'Modern design with gradients and animations, working perfectly on all devices from mobile phones to large monitors',
                'feature.api.title': '🎨 Powerful Customization API',
                'feature.api.description': 'Full customization of texts, links, themes and behavior through JavaScript API. Support for corporate branding and additional categories',
                'feature.performance.title': '⚡ Maximum Performance',
                'feature.performance.description': 'Only 5KB minified code, no external dependencies, with ad-blocker protection and optimization for maximum loading speed',
                'feature.analytics.title': '📊 Analytics Integration',
                'feature.analytics.description': 'Ready examples for integration with Google Analytics 4, Yandex.Metrica, Facebook Pixel and other analytics systems with Consent Mode support',
                'feature.frameworks.title': '⚛️ Framework Support',
                'feature.frameworks.description': 'Ready integration examples for React, Vue.js, Next.js, Nuxt.js, WordPress and other popular frameworks and CMS with TypeScript support',
                
                // Interface elements
                'ui.copy': 'Copy',
                'ui.copied': 'Copied!',
                'ui.read_more': 'Read →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Menu',
                'ui.close': 'Close',
                
                // Documentation sections
                'docs.description.setup': 'Detailed guide for configuration and usage',
                'docs.stats.size': 'Minimal Size',
                'docs.stats.languages': 'Language Support',
                'docs.stats.laws': 'Law Compliance',
                'docs.stats.dependencies': 'Dependencies',
                'docs.contents': 'Contents',
                
                // Installation section details
                'install.wordpress.title': 'WordPress',
                'install.react.title': 'React/Next.js',
                'install.react.file': '_app.js or layout.js',
                'install.functions.file': 'functions.php',
                
                // Footer links
                'footer.releases': 'Releases',
                'footer.license': 'License',
                'footer.installation': 'Installation',
                'footer.guide': 'Guide',
                'footer.examples': 'Examples',
                'footer.issues': 'Issues',
                'footer.support_dev': 'Support',
                'footer.install_app': 'Install App',
                
                // Example cards
                'example.react.title': '⚛️ React / Next.js',
                'example.react.description': 'Modern integration for React applications with TypeScript support',
                'example.vue.title': '🟢 Vue.js / Nuxt.js',
                'example.vue.description': 'Integration for Vue ecosystem with composition API',
                'example.wordpress.title': '📝 WordPress',
                'example.wordpress.description': 'Simple WordPress integration with admin panel',
                'example.ga4.title': '📊 Google Analytics 4',
                'example.ga4.description': 'Full GA4 integration and event management',
                'example.yandex.title': '📈 Yandex.Metrica',
                'example.yandex.description': 'Integration with Russian analytics system',
                'example.corporate.title': '🏢 Corporate Solutions',
                'example.corporate.description': 'Configuration for large companies and corporations',
                
                // Documentation sections - detailed
                'docs.quickstart.step2.description': 'Cookie banner automatically:',
                'docs.installation.title': '📦 Installation',
                'docs.installation.cdn.title': 'CDN (Recommended)',
                'docs.installation.cdn.description': 'The easiest way - use our CDN:',
                'docs.installation.local.title': 'Local Installation',
                'docs.installation.local.description': 'Download files and place them on your server:',
                'docs.installation.local.download.css': 'Download CSS',
                'docs.installation.local.download.js': 'Download JS',
                'docs.installation.platforms.title': 'Integration with Popular Platforms',
                'docs.configuration.title': '⚙️ Configuration',
                'docs.configuration.basic.title': 'Basic Configuration',
                'docs.configuration.basic.description': 'Creating with custom settings',
                'docs.configuration.options.autoShow': 'Automatically show banner',
                'docs.configuration.options.theme': 'Theme',
                'docs.configuration.options.position': 'Banner position',
                'docs.configuration.options.privacyUrl': 'Privacy policy URL',
                'docs.configuration.options.onAccept': 'Callback on accept',
                'docs.configuration.options.onDecline': 'Callback on decline',
                'docs.api.title': '📚 API Reference',
                'docs.api.methods.title': 'Main Methods',
                'docs.api.show.description': 'Show cookie banner',
                'docs.api.hide.description': 'Hide cookie banner',
                'docs.api.getSettings.description': 'Get current cookie settings',
                'docs.api.setSettings.description': 'Set cookie settings',
                'docs.api.reset.description': 'Reset all settings and show banner again',
                'docs.api.getLanguage.description': 'Get current interface language',
                'docs.api.getVersion.description': 'Get Cookie Widget version',
                'docs.api.getAllTexts.description': 'Get all interface texts (including custom)',
                'docs.api.setTheme.description': 'Set theme',
                'docs.api.setPosition.description': 'Set banner position',
                'docs.api.setTexts.title': 'setTexts(texts)',
                'docs.api.setTexts.description': 'Interface text customization',
                'docs.api.customization.title': '🎨 Text Customization',
                'docs.api.customization.description': 'Complete customization of all interface texts',
                'docs.api.customization.example': 'Customization example',
                'docs.api.events.title': '📡 Events',
                'docs.api.events.description': 'Cookie Widget generates events for integration with your code',
                'docs.api.events.initialized': 'Widget initialized',
                'docs.api.events.shown': 'Banner shown',
                'docs.api.events.hidden': 'Banner hidden',
                'docs.api.events.accepted': 'Consent accepted',
                'docs.api.events.declined': 'Consent declined',
                'docs.api.events.settingsChanged': 'Settings changed',
                'docs.examples.title': '💼 Advanced Examples',
                'docs.examples.description': 'Ready solutions for popular use cases',
                'docs.examples.ga4.title': 'Google Analytics 4',
                'docs.examples.ga4.description': 'Advanced integration with Google Analytics 4',
                'docs.examples.yandex.title': 'Yandex.Metrica',
                'docs.examples.yandex.description': 'Integration with Yandex.Metrica with 152-FZ compliance',
                'docs.examples.react.title': 'React + TypeScript',
                'docs.examples.react.description': 'Component for React applications with TypeScript',
                'docs.examples.corporate.title': 'Corporate Setup',
                'docs.examples.corporate.description': 'Setup for large companies',
                'docs.compliance.title': '⚖️ Legal Compliance',
                'docs.compliance.description': 'Cookie Widget ensures compliance with international standards',
                'docs.compliance.gdpr.title': 'GDPR (Europe)',
                'docs.compliance.gdpr.description': 'Full compliance with General Data Protection Regulation',
                'docs.compliance.ccpa.title': 'CCPA (California)',
                'docs.compliance.ccpa.description': 'Compliance with California Consumer Privacy Act',
                'docs.compliance.lgpd.title': 'LGPD (Brazil)',
                'docs.compliance.lgpd.description': 'Compliance with Brazilian General Data Protection Law',
                'docs.compliance.russia.title': '152-FZ (Russia)',
                'docs.compliance.russia.description': 'Compliance with Russian personal data law',
                'docs.troubleshooting.title': '🔧 Troubleshooting',
                'docs.troubleshooting.description': 'Common issues and their solutions',
                'docs.troubleshooting.not.showing.title': 'Banner not showing',
                'docs.troubleshooting.not.showing.description': 'Check initialization and browser console',
                'docs.troubleshooting.not.blocking.title': 'Cookies not blocked',
                'docs.troubleshooting.not.blocking.description': 'Make sure scripts load after consent',
                'docs.troubleshooting.styles.title': 'Style issues',
                'docs.troubleshooting.styles.description': 'Check CSS file connection',
                'docs.tip.title': '💡 Tip',
                'docs.tip.description': 'For additional customization use the powerful JavaScript API. All texts, links, themes and behavior can be changed programmatically. Check advanced examples below for integration with Google Analytics 4, Yandex.Metrica, React and corporate settings.',
                'docs.warning.title': '⚠️ Important for Developers',
                'docs.warning.description': 'Cookie Widget automatically blocks all cookies before consent. Make sure your analytics and marketing scripts load only after the cookieConsentAccepted event.',
                
                // Examples page - detailed
                'examples.react.integration.title': '⚛️ React / Next.js Integration',
                'examples.react.integration.description': 'Complete example of Cookie Widget integration in React application with TypeScript:',
                'examples.vue.integration.title': '🟢 Vue.js / Nuxt.js Integration',
                'examples.vue.integration.description': 'Integration example with Vue.js using Composition API:',
                'examples.wordpress.integration.title': '📝 WordPress Integration',
                'examples.wordpress.integration.description': 'Simple Cookie Widget integration in WordPress theme or plugin:',
                'examples.ga4.integration.title': '📊 Google Analytics 4 Integration',
                'examples.ga4.integration.description': 'Complete integration with Google Analytics 4 with consent management:',
                'examples.basic.title': '🚀 Basic Integration',
                'examples.basic.description': 'The simplest way to connect the widget to your site',
                'examples.ga4.simple.title': '📊 Google Analytics 4',
                'examples.ga4.simple.description': 'Integration with Google Analytics considering user consent',
                'examples.yandex.simple.title': '📈 Yandex.Metrica',
                'examples.yandex.simple.description': 'Integration with Yandex.Metrica with conditional loading',
                'examples.wordpress.simple.title': '🔌 WordPress',
                'examples.wordpress.simple.description': 'WordPress integration via functions.php',
                'examples.react.simple.title': '⚛️ React',
                'examples.react.simple.description': 'Usage in React application',
                'examples.vue.simple.title': '💚 Vue.js',
                'examples.vue.simple.description': 'Integration in Vue.js application',
                'examples.customization.title': '🎨 Style Customization',
                'examples.customization.description': 'Customize appearance for your design',
                'examples.page.title': 'Integration Examples',
                'examples.page.description': 'Ready examples for quick Cookie Widget integration in your project',
                'examples.back.link': 'Back to main',
                'examples.back.main': 'Return to main page',
                
                // Additional examples
                'examples.angular.title': '🅰️ Angular Integration',
                'examples.angular.description': 'Cookie Widget integration in Angular application with service',
                'examples.svelte.title': '🧡 Svelte Integration',
                'examples.svelte.description': 'Simple Cookie Widget integration in Svelte application',
                'examples.nuxt.title': '💚 Nuxt.js Plugin',
                'examples.nuxt.description': 'Creating a plugin for automatic initialization in Nuxt.js',
                'examples.drupal.title': '🔷 Drupal Integration',
                'examples.drupal.description': 'Creating a Drupal module with admin panel',
                'examples.joomla.title': '🟠 Joomla Integration',
                'examples.joomla.description': 'Creating a plugin for Joomla CMS',
                'examples.bitrix.title': '🔶 1C-Bitrix Integration',
                'examples.bitrix.description': 'Cookie Widget integration in 1C-Bitrix via component',
                'examples.laravel.title': '🔴 Laravel Integration',
                'examples.laravel.description': 'Creating a Laravel package with middleware and service provider',
                'examples.django.title': '🐍 Django Integration',
                'examples.django.description': 'Creating a Django application with middleware for Cookie Widget',
                'examples.shopify.title': '🛒 Shopify Integration',
                'examples.shopify.description': 'Cookie Widget integration in Shopify store',
                'examples.wix.title': '🎨 Wix Integration',
                'examples.wix.description': 'Adding Cookie Widget to Wix website',
                'examples.squarespace.title': '⬜ Squarespace Integration',
                'examples.squarespace.description': 'Cookie Widget integration in Squarespace site',
                'examples.webflow.title': '🌊 Webflow Integration',
                'examples.webflow.description': 'Adding Cookie Widget to Webflow project',
                'examples.gtm.title': '📊 Google Tag Manager',
                'examples.gtm.description': 'Integration via Google Tag Manager with conditional tag loading',
                'examples.facebook.title': '📘 Facebook Pixel',
                'examples.facebook.description': 'Facebook Pixel integration with consent management',
                'examples.tiktok.title': '🎵 TikTok Pixel',
                'examples.tiktok.description': 'TikTok Pixel integration for advertising campaigns',
                'examples.hotjar.title': '🔥 Hotjar Integration',
                'examples.hotjar.description': 'Conditional Hotjar loading with privacy compliance',
                'examples.mixpanel.title': '📈 Mixpanel Integration',
                'examples.mixpanel.description': 'Integration with Mixpanel analytics',
                'examples.amplitude.title': '📊 Amplitude Integration',
                'examples.amplitude.description': 'Integration with Amplitude for product analytics',
                
                // Missing example card translations
                'example.advanced.title': '🚀 Advanced Features v3.3',
                'example.advanced.description': 'Using new exclusive capabilities',
                'example.api.title': '🔧 API Integration',
                'example.api.description': 'Programmatic control via JavaScript API',
                'example.multilang.title': '🌍 Multilingual',
                'example.multilang.description': 'Support for multiple languages and localization',
                'example.mobile.title': '📱 Mobile Optimization',
                'example.mobile.description': 'Responsive design for mobile devices',
                'example.security.title': '🔒 Security and Privacy',
                'example.security.description': 'Maximum protection of user data',
                
                // Missing example card feature translations
                'example.react.feature1': 'TypeScript typing',
                'example.react.feature2': 'State management hooks',
                'example.react.feature3': 'SSR compatibility',
                'example.react.feature4': 'Dynamic script loading',
                
                'example.vue.feature1': 'Composition API',
                'example.vue.feature2': 'Reactive settings',
                'example.vue.feature3': 'Nuxt.js plugin',
                'example.vue.feature4': 'Automatic initialization',
                
                'example.wordpress.feature1': 'WordPress plugin',
                'example.wordpress.feature2': 'Admin panel settings',
                'example.wordpress.feature3': 'Theme compatibility',
                'example.wordpress.feature4': 'Shortcode support',
                
                'example.ga4.feature1': 'Conditional GA4 loading',
                'example.ga4.feature2': 'Consent tracking',
                'example.ga4.feature3': 'Privacy configuration',
                'example.ga4.feature4': 'Custom events',
                
                'example.yandex.feature1': '152-FZ compliance',
                'example.yandex.feature2': 'Goals and events',
                'example.yandex.feature3': 'Webvisor management',
                'example.yandex.feature4': 'Click maps',
                
                'example.advanced.feature1': 'Smart Auto-Detect trackers',
                'example.advanced.feature2': 'SEO-Friendly Mode',
                'example.advanced.feature3': 'Script Guard protection',
                'example.advanced.feature4': 'Zero-Reload Mode',
                
                'example.api.feature1': 'Events and callbacks',
                'example.api.feature2': 'Dynamic management',
                'example.api.feature3': 'Custom categories',
                'example.api.feature4': 'SPA integration',
                
                'example.multilang.feature1': '8 languages out of the box',
                'example.multilang.feature2': 'Auto language detection',
                'example.multilang.feature3': 'Custom translations',
                'example.multilang.feature4': 'RTL support',
                
                'example.mobile.feature1': 'Responsive design',
                'example.mobile.feature2': 'Touch-friendly interface',
                'example.mobile.feature3': 'PWA compatibility',
                'example.mobile.feature4': 'Performance optimization',
                
                'example.security.feature1': 'Secure Storage system',
                'example.security.feature2': 'Data encryption',
                'example.security.feature3': 'GDPR/CCPA compliance',
                'example.security.feature4': 'Security audit',
                
                // Advanced Features v3.3
                'advanced.title': '🚀 Exclusive Features',
                'advanced.description': 'Unique capabilities that competitors don\'t have. Try them right now!',
                'advanced.cta.button': '🎮 Try All Features',
                'advanced.cta.note': 'Interactive demonstration of all exclusive features',
                
                // Feature cards for v3.3
                'feature.smart-detect.title': '🧠 Smart Auto-Detect',
                'feature.smart-detect.description': 'Automatic tracker detection on the page',
                'feature.smart-detect.status': 'NEW',
                'feature.smart-detect.found': 'trackers found',
                'feature.smart-detect.ga': '✓ Google Analytics detected',
                'feature.smart-detect.ym': '✓ Yandex Metrika detected',
                'feature.smart-detect.fb': '✓ Meta Pixel detected',
                'feature.smart-detect.total': 'Total',
                
                'feature.seo-friendly.title': '🔍 SEO-Friendly Mode',
                'feature.seo-friendly.description': 'Bot and search robot detection',
                'feature.seo-friendly.status': 'NEW',
                'feature.seo-friendly.human': '👤 Human visitor',
                'feature.seo-friendly.useragent': 'User-Agent: Mozilla/5.0 (Windows NT 10.0; ...',
                
                'feature.script-guard.title': '🔒 Script Guard',
                'feature.script-guard.description': 'Script blocking before consent',
                'feature.script-guard.status': 'NEW',
                'feature.script-guard.blocked': 'scripts blocked',
                'feature.script-guard.gtag': '✓ gtag() intercepted',
                'feature.script-guard.fbq': '✓ fbq() intercepted',
                'feature.script-guard.waiting': 'Waiting for consent...',
                
                'feature.integrations.title': '🤝 Integrations Hub',
                'feature.integrations.description': 'Ready configurations for popular services',
                'feature.integrations.status': 'NEW',
                'feature.integrations.gtm': 'Google Tag Manager',
                'feature.integrations.ym': 'Yandex Metrika',
                'feature.integrations.fb': 'Meta Pixel',
                'feature.integrations.tiktok': 'TikTok Pixel',
                'feature.integrations.recaptcha': 'reCAPTCHA v3',
                'feature.integrations.turnstile': 'Cloudflare Turnstile',
                
                'feature.zero-reload.title': '🚀 Zero-Reload Mode',
                'feature.zero-reload.description': 'Enable/disable trackers without page reload',
                
                'feature.auto-renew.title': '🔄 Auto-Renew Consent',
                'feature.auto-renew.description': 'Automatic consent renewal after 3/6/12 months or when policy changes',
                
                'feature.secure-storage.title': '🔐 Secure Storage',
                'feature.secure-storage.description': 'Consent storage in localStorage, sessionStorage, IndexedDB and cookies',
                
                // Demo Page
                'demo.page.title': 'Exclusive Features v3.3 Demo',
                'demo.page.subtitle': 'Interactive demonstration of unique capabilities that competitors don\'t have',
                'demo.badge': 'v3.3 DEMO',
                'demo.back': 'Back to main',
                'demo.new_badge': 'NEW',
                
                // Demo Controls
                'demo.controls.title': 'Try Cookie Widget',
                'demo.controls.description': 'Test all features in action. Cookie Widget will automatically detect your region and apply appropriate settings.',
                'demo.controls.show': '🍪 Show Cookie Banner',
                'demo.controls.reset': '🔄 Reset Demo',
                'demo.controls.home': '🏠 Back to Main',
                
                // Documentation page
                'docs.title': 'Cookie Widget v3.3 Documentation',
                'docs.subtitle': 'Complete guide to new exclusive features: Smart Auto-Detect trackers, SEO-Friendly Mode, Script Guard, Zero-Reload Mode, Integrations Hub, Secure Storage and Geo-Adaptive Compliance',
                'docs.stats.version': 'Version',
                'docs.stats.size': 'Full size',
                'docs.stats.features': 'Unique features',
                'docs.stats.languages': 'Supported languages',
                'docs.stats.laws': 'Law compliance',
                'docs.stats.dependencies': 'Dependencies',
                'docs.contents': 'Contents',
                
                // Documentation navigation
                'docs.nav.quickstart': 'Quick Start',
                'docs.nav.installation': 'Installation',
                'docs.nav.advanced': '🆕 Exclusive Features',
                'docs.nav.smart-detect': '🧠 Smart Auto-Detect',
                'docs.nav.seo-friendly': '🔍 SEO-Friendly Mode',
                'docs.nav.script-guard': '🔒 Script Guard',
                'docs.nav.integrations': '🤝 Integrations Hub',
                'docs.nav.zero-reload': '🚀 Zero-Reload Mode',
                'docs.nav.secure-storage': '🔒 Secure Storage',
                'docs.nav.configuration': 'Configuration',
                'docs.nav.api': 'API Reference',
                'docs.nav.customization': 'Text Customization',
                'docs.nav.events': 'Events',
                'docs.nav.examples': 'Examples',
                'docs.nav.compliance': 'Law Compliance',
                'docs.nav.troubleshooting': 'Troubleshooting',
                
                // Quick start section
                'docs.quickstart.title': '🚀 Quick Start',
                'docs.quickstart.description': 'Integrate Cookie Widget on your site in 2 minutes and get full compliance with international data protection standards:',
                'docs.quickstart.features': '✨ New Exclusive Features in v3.3',
                'docs.quickstart.features.description': '🧠 Smart Auto-Detect trackers • 🔍 SEO-Friendly Mode for bots • 🔒 Script Guard blocking • 🚀 Zero-Reload Mode • 🤝 Integrations Hub • 🔒 Secure Storage • 🔄 Auto-Renew Consent • 🌍 Geo-Adaptive Compliance',
                'docs.quickstart.step1': '1. Include files',
                'docs.quickstart.step2': '2. Done!',
                'docs.quickstart.step2.description': 'Cookie banner will automatically:',
                'docs.quickstart.step3': '3. Additional setup (optional)',
                'docs.quickstart.auto.region': '🌍 Detect region',
                'docs.quickstart.auto.region.description': 'Automatically detect user location and apply corresponding law requirements (GDPR, CCPA, 152-FZ, LGPD, etc.)',
                'docs.quickstart.auto.language': '🗣️ Choose language',
                'docs.quickstart.auto.language.description': 'Detect browser language from 20+ supported languages including Russian, English, German, French, Chinese',
                'docs.quickstart.auto.blocking': '🛡️ Block cookies',
                'docs.quickstart.auto.blocking.description': 'Block all unwanted cookies until consent is given and automatically remove rejected cookies',
                'docs.quickstart.auto.responsive': '📱 Adapt',
                'docs.quickstart.auto.responsive.description': 'Display correctly on all devices and screens with modern responsive design',
                
                // Tips and warnings
                'docs.tip.title': '💡 Tip',
                'docs.tip.description': 'For additional customization use the powerful JavaScript API. All texts, links, themes and behavior can be changed programmatically.',
                'docs.warning.title': '⚠️ Important for Developers',
                'docs.warning.description': 'Cookie Widget automatically blocks all cookies until consent is given. Make sure your analytics and marketing scripts load only after the cookieConsentAccepted event.',
                
                // Documentation sections - detailed features
                'docs.smart-detect.title': '🧠 Smart Auto-Detect Tracking',
                'docs.smart-detect.description': 'Automatic detection of trackers and scripts on page with categorization by types.',
                'docs.seo-friendly.title': '🔍 SEO-Friendly Mode',
                'docs.seo-friendly.description': 'Search bots see the site as accepting all cookies for better indexing, while real users see the banner.',
                'docs.script-guard.title': '🔒 Script Guard',
                'docs.script-guard.description': 'Script blocking for Analytics and Marketing even before site loading through proxy stubs.',
                'docs.integrations-hub.title': '🤝 Integrations Hub',
                'docs.integrations-hub.description': 'Ready-made settings for popular services with zero-config integration.',
                'docs.zero-reload.title': '🚀 Zero-Reload Mode',
                'docs.zero-reload.description': 'Enable and disable trackers without page reload through queue system.',
                'docs.secure-storage.title': '🔒 Secure LocalStorage Backup',
                'docs.secure-storage.description': 'Save consent in multiple storages for maximum reliability.',
                
                // Examples page detailed integrations
                'examples.react.integration.title': '⚛️ React / Next.js Integration',
                'examples.react.integration.description': 'Complete example of Cookie Widget integration in React application',
                'examples.vue.integration.title': '🟢 Vue.js Integration',
                'examples.vue.integration.description': 'Integration example with Vue.js using Composition API',
                'examples.wordpress.integration.title': '📝 WordPress Integration',
                'examples.wordpress.integration.description': 'Simple Cookie Widget integration in WordPress',
                'examples.ga4.integration.title': '📊 Google Analytics 4 Integration',
                'examples.ga4.integration.description': 'Integration with Google Analytics considering user consent',
                'examples.yandex.integration.title': '📈 Yandex.Metrica Integration',
                'examples.yandex.integration.description': 'Integration with Yandex.Metrica with conditional loading',
                'examples.angular.title': '🅰️ Angular Integration',
                'examples.angular.description': 'Cookie Widget integration in Angular application with service',
                'examples.svelte.title': '🧡 Svelte Integration',
                'examples.svelte.description': 'Simple Cookie Widget integration in Svelte application',
                'examples.nuxt.title': '💚 Nuxt.js Plugin',
                'examples.nuxt.description': 'Creating a plugin for automatic initialization in Nuxt.js',
                'examples.drupal.title': '🔷 Drupal Integration',
                'examples.drupal.description': 'Creating a Drupal module with admin panel',
                'examples.joomla.title': '🟠 Joomla Integration',
                'examples.joomla.description': 'Creating a plugin for Joomla CMS',
                'examples.bitrix.title': '🔶 1C-Bitrix Integration',
                'examples.bitrix.description': 'Cookie Widget integration in 1C-Bitrix via component',
                'examples.laravel.title': '🔴 Laravel Integration',
                'examples.laravel.description': 'Creating a Laravel package with middleware and service provider',
                'examples.django.title': '🐍 Django Integration',
                'examples.django.description': 'Creating a Django application with middleware for Cookie Widget'
            },
            
            'de': {
                // Navigation
                'nav.features': 'Funktionen',
                'nav.installation': 'Installation',
                'nav.docs': 'Dokumentation',
                'nav.examples': 'Beispiele',
                'nav.tools': 'Tools',
                'nav.support': 'Support',
                
                // Hero Section
                'hero.title.main': 'Cookie Widget',
                'hero.title.sub': 'DSGVO & Global Privacy Compliant',
                'hero.description': 'Revolutionäres Cookie-Banner-Widget v3.3 mit 4 exklusiven Sicherheitssystemen, die kein Konkurrent hat: iFrame-Blocker, Script-Scanner, Secure Sandbox, Lazy Script Guard. Plus Smart Auto-Detect Tracker, SEO-Friendly Mode, Zero-Reload Mode und 21 Sprachen Support. Vollständige Compliance mit DSGVO, CCPA, LGPD, 152-FZ.',
                'hero.btn.start': 'Loslegen',
                'hero.btn.demo': 'Demo ansehen',
                'hero.btn.examples': 'Integrations-Beispiele',
                'hero.btn.github': 'GitHub',
                'hero.stat.languages': 'Sprachen',
                'hero.stat.deps': 'Abhängigkeiten',
                'hero.stat.features': 'Sicherheits-Features',
                'hero.stat.gdpr': 'DSGVO-Konformität',
                
                // Features
                'features.title': 'Funktionen',
                'features.description': 'Cookie Widget v3.3 mit 4 revolutionären Sicherheitssystemen, die kein Konkurrent hat: iFrame-Blocker, Script-Scanner, Secure Sandbox, Lazy Script Guard. Plus Smart Auto-Detect Tracker, SEO-Friendly Mode, Zero-Reload Mode, 21 Sprachen Support und vollständige Compliance mit internationalen Datenschutzgesetzen.',
                
                // Advanced Features v3.3
                'advanced.title': '🚀 Exklusive Funktionen',
                'advanced.description': 'Einzigartige Fähigkeiten, die Konkurrenten nicht haben. Probieren Sie sie jetzt aus!',
                'advanced.cta.button': '🎮 Alle Funktionen ausprobieren',
                'advanced.cta.note': 'Interaktive Demonstration aller exklusiven Funktionen',
                
                // Demo features
                'demo.smart.title': 'Smart Auto-Detect',
                'demo.smart.description': 'Automatische Tracker-Erkennung auf der Seite',
                'demo.smart.status.scanning': 'Scannen...',
                'demo.seo.title': 'SEO-Friendly Modus',
                'demo.seo.description': 'Bot- und Suchroboter-Erkennung',
                'demo.seo.status.checking': 'Überprüfen...',
                'demo.guard.title': 'Script Guard',
                'demo.guard.description': 'Script-Blockierung vor Zustimmung',
                'demo.integrations.title': 'Integrations Hub',
                'demo.integrations.description': 'Fertige Konfigurationen für beliebte Services',
                'demo.new_badge': 'NEU',
                
                // New Advanced Security Features Demo
                'demo.iframe.title': 'iFrame-Blocker',
                'demo.iframe.description': 'Blockiert YouTube/TikTok/Maps ohne Zustimmung',
                'demo.iframe.status.scanning': 'Scanne iframes...',
                'demo.iframe.status.blocked': 'iframes blockiert',
                
                'demo.scanner.title': 'Script-Scanner',
                'demo.scanner.description': 'Analysiert Scripts wie CookieBot lokal',
                'demo.scanner.status.analyzing': 'Analysiere Scripts...',
                'demo.scanner.status.found': 'Scripts gefunden',
                
                'demo.sandbox.title': 'Sichere Sandbox',
                'demo.sandbox.description': 'Isolierte Script-Ausführungsumgebung',
                'demo.sandbox.status.testing': 'Teste Sandbox...',
                'demo.sandbox.status.ready': 'Sandbox bereit',
                
                'demo.lazy.title': 'Lazy Script Guard',
                'demo.lazy.description': 'Blockiert deferred/async bis Zustimmung',
                'demo.lazy.status.monitoring': 'Überwache Scripts...',
                'demo.lazy.status.blocked': 'Scripts in Warteschlange',
                
                // Feature translations for new security systems
                'feature.iframe-blocker.title': '🚫 iFrame-Blocker',
                'feature.iframe-blocker.description': 'Blockiert automatisch YouTube, TikTok, Google Maps und andere iframes, die Cookies ohne Benutzerzustimmung setzen. Zeigt Zustimmungsplatzhalter stattdessen.',
                
                'feature.script-scanner.title': '🔍 Script-Scanner',
                'feature.script-scanner.description': 'Analysiert alle Seitenskripte wie CookieBot, aber lokal. Erkennt Cookie-setzende Muster, klassifiziert nach Kategorien und liefert detaillierte Berichte.',
                
                'feature.secure-sandbox.title': '🏖️ Sichere Sandbox',
                'feature.secure-sandbox.description': 'Führt Scripts in isolierten Sandbox-iframes mit begrenztem API-Zugang aus. Revolutionärer Sicherheitsansatz, den fast niemand implementiert.',
                
                'feature.lazy-script-guard.title': '⏳ Lazy Script Guard',
                'feature.lazy-script-guard.description': 'Blockiert deferred und async Scripts bis der Benutzer seine Zustimmung gibt. Verhindert Hintergrund-Script-Ausführung während des Seitenladens.',
                
                // Installation
                'install.title': 'Installation',
                'install.description': 'Integrieren Sie das Widget in wenigen Minuten in Ihre Website',
                'install.tab.cdn': 'CDN',
                'install.tab.download': 'Herunterladen',
                'install.tab.integration': 'Integration',
                
                // Support
                'support.title': 'Projekt unterstützen',
                'support.description': 'Helfen Sie bei der Projektentwicklung und erhalten Sie Support',
                'support.bug.title': 'Bug melden',
                'support.bug.description': 'Haben Sie einen Bug gefunden oder einen Verbesserungsvorschlag?',
                'support.bug.link': 'Issue erstellen →',
                'support.coffee.title': 'Entwickler unterstützen',
                'support.coffee.description': 'Kaufen Sie mir einen Kaffee und unterstützen Sie die weitere Projektentwicklung',
                'support.coffee.link': 'Buy me a coffee →',
                'support.docs.title': 'Dokumentation',
                'support.docs.description': 'Detaillierte Dokumentation und Verwendungsbeispiele',
                'support.docs.link': 'Dokumentation lesen →',
                
                // Examples
                'examples.title': 'Integrations-Beispiele',
                'examples.subtitle': 'Fertige Lösungen zur Integration von Cookie Widget in beliebte Frameworks, CMS und Analytics-Systeme. Code kopieren und an Ihre Bedürfnisse anpassen.',
                
                // Feature cards
                'feature.compliance.title': '🌍 Globale Compliance',
                'feature.compliance.description': 'Vollständige Compliance mit DSGVO, CCPA, LGPD, russischem 152-FZ, PIPEDA, PIPL, APPI, PIPA und anderen internationalen Datenschutzstandards mit automatischer Regionserkennung',
                'feature.languages.title': '🗣️ 20+ Sprachen Support',
                'feature.languages.description': 'Automatische Browser-Spracherkennung mit Unterstützung für Deutsch, Englisch, Französisch, Spanisch, Chinesisch, Japanisch und andere Sprachen',
                'feature.blocking.title': '🛡️ Automatische Blockierung',
                'feature.blocking.description': 'Intelligentes Cookie-Blockierungssystem vor Zustimmung mit automatischer Löschung abgelehnter Cookies und Umgehungsschutz',
                'feature.responsive.title': '📱 Responsive Design',
                'feature.responsive.description': 'Modernes Design mit Verläufen und Animationen, perfekt funktionierend auf allen Geräten von Mobiltelefonen bis zu großen Monitoren',
                'feature.api.title': '🎨 Mächtige Anpassungs-API',
                'feature.api.description': 'Vollständige Anpassung von Texten, Links, Themes und Verhalten über JavaScript API. Unterstützung für Corporate Branding und zusätzliche Kategorien',
                'feature.performance.title': '⚡ Maximale Performance',
                'feature.performance.description': 'Nur 5KB minifizierter Code, keine externen Abhängigkeiten, mit Adblocker-Schutz und Optimierung für maximale Ladegeschwindigkeit',
                'feature.analytics.title': '📊 Analytics Integration',
                'feature.analytics.description': 'Fertige Beispiele für Integration mit Google Analytics 4, Yandex.Metrica, Facebook Pixel und anderen Analytics-Systemen mit Consent Mode Support',
                'feature.frameworks.title': '⚛️ Framework Support',
                'feature.frameworks.description': 'Fertige Integrations-Beispiele für React, Vue.js, Next.js, Nuxt.js, WordPress und andere beliebte Frameworks und CMS mit TypeScript Support',
                
                // Interface elements
                'ui.copy': 'Kopieren',
                'ui.copied': 'Kopiert!',
                'ui.read_more': 'Lesen →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Menü',
                'ui.close': 'Schließen',
                
                // Footer
                'footer.description': 'Modernes Cookie-Banner-Widget mit DSGVO-Compliance',
                'footer.project': 'Projekt',
                'footer.documentation': 'Dokumentation',
                'footer.support': 'Support',
                'footer.settings': 'Cookie-Einstellungen',
                'footer.copyright': 'Unter MIT-Lizenz verteilt.',
                
                // Language Selector
                'lang.select': 'Sprache wählen',
                'lang.auto': 'Auto-Erkennung',
                
                // Tools page
                'tools.title': 'Webmaster-Tools',
                'tools.subtitle': 'Nützliche Tools für Cookie-Analyse, DSGVO-Compliance-Prüfung und Cookie-Banner-Tests. Alle Tools funktionieren lokal in Ihrem Browser und senden keine Daten an den Server.',
                
                // Cookie Analyzer
                'tools.analyzer.title': 'Cookie-Analysator',
                'tools.analyzer.description': 'Analysieren Sie alle Cookies auf der aktuellen Website, überprüfen Sie deren Typen, Ablaufzeiten und DSGVO-Compliance-Anforderungen.',
                'tools.analyzer.feature1': 'Liste aller Cookies auf der Website',
                'tools.analyzer.feature2': 'Klassifizierung nach Typen (notwendig, funktional, analytisch)',
                'tools.analyzer.feature3': 'Überprüfung von Ablaufzeiten und Sicherheit',
                'tools.analyzer.feature4': 'DSGVO-Compliance jedes Cookies',
                'tools.analyzer.button': 'Cookies analysieren',
                
                // GDPR Checker
                'tools.gdpr.title': 'DSGVO-Prüfung',
                'tools.gdpr.description': 'Überprüfen Sie die Compliance Ihrer Website mit DSGVO, CCPA, 152-FZ und anderen Datenschutzgesetzen.',
                'tools.gdpr.feature1': 'Überprüfung auf Cookie-Banner-Vorhandensein',
                'tools.gdpr.feature2': 'Datenschutzrichtlinien-Analyse',
                'tools.gdpr.feature3': 'Überprüfung der Cookie-Blockierung vor Zustimmung',
                'tools.gdpr.feature4': 'Internationale Standards-Compliance',
                'tools.gdpr.url.label': 'Zu überprüfende URL:',
                'tools.gdpr.url.placeholder': 'https://example.com',
                'tools.gdpr.button': 'DSGVO prüfen',
                
                // Policy Generator
                'tools.policy.title': 'Cookie-Richtlinien-Generator',
                'tools.policy.description': 'Erstellen Sie eine professionelle Cookie-Richtlinie für Ihre Website mit allen DSGVO-Anforderungen.',
                'tools.policy.feature1': 'Fertige Vorlagen für verschiedene Website-Typen',
                'tools.policy.feature2': 'DSGVO-konforme Formulierungen',
                'tools.policy.feature3': 'Mehrsprachige Unterstützung',
                'tools.policy.feature4': 'Export nach HTML und PDF',
                'tools.policy.company.label': 'Firmenname:',
                'tools.policy.company.placeholder': 'Ihr Unternehmen',
                'tools.policy.website.label': 'Website:',
                'tools.policy.website.placeholder': 'https://example.com',
                'tools.policy.email.label': 'Kontakt-E-Mail:',
                'tools.policy.email.placeholder': 'contact@example.com',
                'tools.policy.button': 'Richtlinie erstellen',
                
                // Banner Tester
                'tools.tester.title': 'Cookie-Banner-Tester',
                'tools.tester.description': 'Testen Sie verschiedene Cookie-Widget-Einstellungen und sehen Sie, wie sie auf Ihrer Website aussehen werden.',
                'tools.tester.feature1': 'Vorschau verschiedener Themes',
                'tools.tester.feature2': 'Testen von Banner-Positionen',
                'tools.tester.feature3': 'Überprüfung in verschiedenen Sprachen',
                'tools.tester.feature4': 'Mobile Responsivität',
                'tools.tester.theme.label': 'Theme:',
                'tools.tester.theme.modern': 'Modern',
                'tools.tester.theme.classic': 'Klassisch',
                'tools.tester.theme.dark': 'Dunkel',
                'tools.tester.theme.minimal': 'Minimal',
                'tools.tester.position.label': 'Position:',
                'tools.tester.position.bottom': 'Unten',
                'tools.tester.position.top': 'Oben',
                'tools.tester.position.center': 'Mitte',
                'tools.tester.button': 'Test anzeigen',
                'tools.tester.reset': 'Zurücksetzen',
                
                // Documentation
                'docs.title': 'Cookie Widget v3.3 Dokumentation',
                'docs.subtitle': 'Vollständiger Leitfaden zu neuen exklusiven Funktionen: Smart Auto-Detect Tracker, SEO-Friendly Mode, Script Guard, Zero-Reload Mode, Integrations Hub, Secure Storage und Geo-Adaptive Compliance',
                'docs.stats.version': 'Version',
                'docs.stats.size': 'Vollständige Größe',
                'docs.stats.features': 'Einzigartige Funktionen',
                'docs.stats.languages': 'Unterstützte Sprachen',
                'docs.stats.laws': 'Gesetzeskonformität',
                'docs.stats.dependencies': 'Abhängigkeiten',
                'docs.contents': 'Inhalt',
                
                // Documentation navigation
                'docs.nav.quickstart': 'Schnellstart',
                'docs.nav.installation': 'Installation',
                'docs.nav.advanced': '🆕 Exklusive Funktionen',
                'docs.nav.smart-detect': '🧠 Smart Auto-Detect',
                'docs.nav.seo-friendly': '🔍 SEO-Friendly Mode',
                'docs.nav.script-guard': '🔒 Script Guard',
                'docs.nav.integrations': '🤝 Integrations Hub',
                'docs.nav.zero-reload': '🚀 Zero-Reload Mode',
                'docs.nav.secure-storage': '🔒 Secure Storage',
                'docs.nav.configuration': 'Konfiguration',
                'docs.nav.api': 'API-Referenz',
                'docs.nav.customization': 'Text-Anpassung',
                'docs.nav.events': 'Ereignisse',
                'docs.nav.examples': 'Beispiele',
                'docs.nav.compliance': 'Gesetzeskonformität',
                'docs.nav.troubleshooting': 'Fehlerbehebung',
                
                // Quick start section
                'docs.quickstart.title': '🚀 Schnellstart',
                'docs.quickstart.description': 'Integrieren Sie Cookie Widget in 2 Minuten auf Ihrer Website und erhalten Sie vollständige Compliance mit internationalen Datenschutzstandards:',
                'docs.quickstart.features': '✨ Neue exklusive Funktionen in v3.3',
                'docs.quickstart.features.description': '🧠 Smart Auto-Detect Tracker • 🔍 SEO-Friendly Mode für Bots • 🔒 Script Guard Blockierung • 🚀 Zero-Reload Mode • 🤝 Integrations Hub • 🔒 Secure Storage • 🔄 Auto-Renew Consent • 🌍 Geo-Adaptive Compliance',
                'docs.quickstart.step1': '1. Dateien einbinden',
                'docs.quickstart.step2': '2. Fertig!',
                'docs.quickstart.step2.description': 'Cookie-Banner wird automatisch:',
                'docs.quickstart.step3': '3. Zusätzliche Einrichtung (optional)',
                'docs.quickstart.auto.region': '🌍 Region erkennen',
                'docs.quickstart.auto.region.description': 'Automatische Erkennung des Benutzerstandorts und Anwendung entsprechender Gesetzesanforderungen (DSGVO, CCPA, 152-FZ, LGPD, etc.)',
                'docs.quickstart.auto.language': '🗣️ Sprache wählen',
                'docs.quickstart.auto.language.description': 'Erkennung der Browser-Sprache aus 20+ unterstützten Sprachen einschließlich Deutsch, Englisch, Französisch, Spanisch, Chinesisch',
                'docs.quickstart.auto.blocking': '🛡️ Cookies blockieren',
                'docs.quickstart.auto.blocking.description': 'Blockierung aller unerwünschten Cookies bis zur Zustimmung und automatische Entfernung abgelehnter Cookies',
                'docs.quickstart.auto.responsive': '📱 Anpassen',
                'docs.quickstart.auto.responsive.description': 'Korrekte Anzeige auf allen Geräten und Bildschirmen mit modernem responsivem Design',
                
                // Tips and warnings
                'docs.tip.title': '💡 Tipp',
                'docs.tip.description': 'Für zusätzliche Anpassungen verwenden Sie die mächtige JavaScript-API. Alle Texte, Links, Themes und Verhalten können programmatisch geändert werden.',
                'docs.warning.title': '⚠️ Wichtig für Entwickler',
                'docs.warning.description': 'Cookie Widget blockiert automatisch alle Cookies bis zur Zustimmung. Stellen Sie sicher, dass Ihre Analytics- und Marketing-Skripte nur nach dem cookieConsentAccepted-Ereignis laden.',
                
                // Documentation sections - detailed features
                'docs.smart-detect.title': '🧠 Smart Auto-Detect Tracking',
                'docs.smart-detect.description': 'Automatische Erkennung von Trackern und Skripten auf der Seite mit Kategorisierung nach Typen.',
                'docs.seo-friendly.title': '🔍 SEO-Friendly Mode',
                'docs.seo-friendly.description': 'Suchbots sehen die Website als alle Cookies akzeptierend für bessere Indexierung, während echte Benutzer das Banner sehen.',
                'docs.script-guard.title': '🔒 Script Guard',
                'docs.script-guard.description': 'Skript-Blockierung für Analytics und Marketing noch vor dem Laden der Website durch Proxy-Stubs.',
                'docs.integrations-hub.title': '🤝 Integrations Hub',
                'docs.integrations-hub.description': 'Fertige Einstellungen für beliebte Services mit Zero-Config-Integration.',
                'docs.zero-reload.title': '🚀 Zero-Reload Mode',
                'docs.zero-reload.description': 'Aktivierung und Deaktivierung von Trackern ohne Seitenneuladen durch Warteschlangensystem.',
                'docs.secure-storage.title': '🔒 Secure LocalStorage Backup',
                'docs.secure-storage.description': 'Speicherung der Zustimmung in mehreren Speichern für maximale Zuverlässigkeit.'
            },
            
            'fr': {
                // Navigation
                'nav.features': 'Fonctionnalités',
                'nav.installation': 'Installation',
                'nav.docs': 'Documentation',
                'nav.examples': 'Exemples',
                'nav.tools': 'Outils',
                'nav.support': 'Support',
                
                // Hero Section
                'hero.title.main': 'Cookie Widget',
                'hero.title.sub': 'Conforme RGPD et Confidentialité Globale',
                'hero.description': 'Widget révolutionnaire de bannière de cookies v3.3 avec 4 systèmes de sécurité exclusifs qu\'aucun concurrent n\'a : Bloqueur iFrame, Scanner de Scripts, Sandbox Sécurisé, Garde de Scripts Paresseux. Plus Smart Auto-Detect trackers, Mode SEO-Friendly, Mode Zero-Reload et support de 21 langues. Conformité complète avec RGPD, CCPA, LGPD, 152-FZ.',
                'hero.btn.start': 'Commencer',
                'hero.btn.demo': 'Voir la démo',
                'hero.btn.examples': 'Exemples d\'intégration',
                'hero.btn.github': 'GitHub',
                'hero.stat.languages': 'Langues',
                'hero.stat.deps': 'Dépendances',
                'hero.stat.features': 'Fonctionnalités de Sécurité',
                'hero.stat.gdpr': 'Conformité RGPD',
                
                // Features
                'features.title': 'Fonctionnalités',
                'features.description': 'Cookie Widget v3.3 avec 4 systèmes de sécurité révolutionnaires qu\'aucun concurrent n\'a : Bloqueur iFrame, Scanner de Scripts, Sandbox Sécurisé, Garde de Scripts Paresseux. Plus Smart Auto-Detect trackers, Mode SEO-Friendly, Mode Zero-Reload, support de 21 langues et conformité complète avec les lois internationales de confidentialité.',
                
                // Advanced Features v3.3
                'advanced.title': '🚀 Fonctionnalités Exclusives',
                'advanced.description': 'Capacités uniques que les concurrents n\'ont pas. Essayez-les maintenant !',
                'advanced.cta.button': '🎮 Essayer toutes les fonctionnalités',
                'advanced.cta.note': 'Démonstration interactive de toutes les fonctionnalités exclusives',
                
                // Demo features
                'demo.smart.title': 'Smart Auto-Detect',
                'demo.smart.description': 'Détection automatique des trackers sur la page',
                'demo.smart.status.scanning': 'Analyse...',
                'demo.seo.title': 'Mode SEO-Friendly',
                'demo.seo.description': 'Détection des bots et robots de recherche',
                'demo.seo.status.checking': 'Vérification...',
                'demo.guard.title': 'Script Guard',
                'demo.guard.description': 'Blocage de scripts avant consentement',
                'demo.integrations.title': 'Hub d\'Intégrations',
                'demo.integrations.description': 'Configurations prêtes pour services populaires',
                'demo.new_badge': 'NOUVEAU',
                
                // New Advanced Security Features Demo
                'demo.iframe.title': 'Bloqueur iFrame',
                'demo.iframe.description': 'Bloque YouTube/TikTok/Maps sans consentement',
                'demo.iframe.status.scanning': 'Analyse des iframes...',
                'demo.iframe.status.blocked': 'iframes bloqués',
                
                'demo.scanner.title': 'Scanner de Scripts',
                'demo.scanner.description': 'Analyse les scripts comme CookieBot localement',
                'demo.scanner.status.analyzing': 'Analyse des scripts...',
                'demo.scanner.status.found': 'scripts trouvés',
                
                'demo.sandbox.title': 'Sandbox Sécurisé',
                'demo.sandbox.description': 'Environnement d\'exécution de scripts isolé',
                'demo.sandbox.status.testing': 'Test du sandbox...',
                'demo.sandbox.status.ready': 'Sandbox prêt',
                
                'demo.lazy.title': 'Garde de Scripts Paresseux',
                'demo.lazy.description': 'Bloque deferred/async jusqu\'au consentement',
                'demo.lazy.status.monitoring': 'Surveillance des scripts...',
                'demo.lazy.status.blocked': 'scripts en file d\'attente',
                
                // Feature translations for new security systems
                'feature.iframe-blocker.title': '🚫 Bloqueur iFrame',
                'feature.iframe-blocker.description': 'Bloque automatiquement YouTube, TikTok, Google Maps et autres iframes qui définissent des cookies sans consentement utilisateur. Affiche des espaces réservés de consentement à la place.',
                
                'feature.script-scanner.title': '🔍 Scanner de Scripts',
                'feature.script-scanner.description': 'Analyse tous les scripts de page comme CookieBot mais localement. Détecte les modèles de définition de cookies, classe par catégories et fournit des rapports détaillés.',
                
                'feature.secure-sandbox.title': '🏖️ Sandbox Sécurisé',
                'feature.secure-sandbox.description': 'Exécute les scripts dans des iframes sandbox isolés avec accès API limité. Approche de sécurité révolutionnaire que presque personne n\'implémente.',
                
                'feature.lazy-script-guard.title': '⏳ Garde de Scripts Paresseux',
                'feature.lazy-script-guard.description': 'Bloque les scripts deferred et async jusqu\'à ce que l\'utilisateur donne son consentement. Empêche l\'exécution de scripts en arrière-plan pendant le chargement de la page.',
                
                // Interface elements
                'ui.copy': 'Copier',
                'ui.copied': 'Copié !',
                'ui.read_more': 'Lire →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Menu',
                'ui.close': 'Fermer',
                
                // Footer
                'footer.description': 'Widget moderne de bannière de cookies avec conformité RGPD',
                'footer.project': 'Projet',
                'footer.documentation': 'Documentation',
                'footer.support': 'Support',
                'footer.settings': 'Paramètres des Cookies',
                'footer.copyright': 'Distribué sous licence MIT.',
                
                // Language Selector
                'lang.select': 'Choisir la langue',
                'lang.auto': 'Détection automatique',
                
                // Tools page
                'tools.title': 'Outils Webmaster',
                'tools.subtitle': 'Outils utiles pour l\'analyse des cookies, la vérification de conformité RGPD et les tests de bannières de cookies. Tous les outils fonctionnent localement dans votre navigateur et n\'envoient pas de données au serveur.',
                
                // Cookie Analyzer
                'tools.analyzer.title': 'Analyseur de Cookies',
                'tools.analyzer.description': 'Analysez tous les cookies sur le site actuel, vérifiez leurs types, dates d\'expiration et exigences de conformité RGPD.',
                'tools.analyzer.feature1': 'Liste de tous les cookies sur le site',
                'tools.analyzer.feature2': 'Classification par types (nécessaires, fonctionnels, analytiques)',
                'tools.analyzer.feature3': 'Vérification des dates d\'expiration et de sécurité',
                'tools.analyzer.feature4': 'Conformité RGPD de chaque cookie',
                'tools.analyzer.button': 'Analyser les Cookies',
                
                // GDPR Checker
                'tools.gdpr.title': 'Vérification RGPD',
                'tools.gdpr.description': 'Vérifiez la conformité de votre site avec le RGPD, CCPA, 152-FZ et autres lois de protection des données.',
                'tools.gdpr.feature1': 'Vérification de la présence de bannière de cookies',
                'tools.gdpr.feature2': 'Analyse de la politique de confidentialité',
                'tools.gdpr.feature3': 'Vérification du blocage des cookies avant consentement',
                'tools.gdpr.feature4': 'Conformité aux standards internationaux',
                'tools.gdpr.url.label': 'URL à vérifier :',
                'tools.gdpr.url.placeholder': 'https://example.com',
                'tools.gdpr.button': 'Vérifier RGPD',
                
                // Policy Generator
                'tools.policy.title': 'Générateur de Politique de Cookies',
                'tools.policy.description': 'Créez une politique de cookies professionnelle pour votre site web avec toutes les exigences RGPD.',
                'tools.policy.feature1': 'Modèles prêts pour différents types de sites',
                'tools.policy.feature2': 'Formulations conformes au RGPD',
                'tools.policy.feature3': 'Support multilingue',
                'tools.policy.feature4': 'Export en HTML et PDF',
                'tools.policy.company.label': 'Nom de l\'entreprise :',
                'tools.policy.company.placeholder': 'Votre Entreprise',
                'tools.policy.website.label': 'Site web :',
                'tools.policy.website.placeholder': 'https://example.com',
                'tools.policy.email.label': 'Email de contact :',
                'tools.policy.email.placeholder': 'contact@example.com',
                'tools.policy.button': 'Créer la Politique',
                
                // Banner Tester
                'tools.tester.title': 'Testeur de Bannière de Cookies',
                'tools.tester.description': 'Testez différents paramètres de Cookie Widget et voyez comment ils apparaîtront sur votre site.',
                'tools.tester.feature1': 'Aperçu de différents thèmes',
                'tools.tester.feature2': 'Test des positions de bannière',
                'tools.tester.feature3': 'Vérification en différentes langues',
                'tools.tester.feature4': 'Réactivité mobile',
                'tools.tester.theme.label': 'Thème :',
                'tools.tester.theme.modern': 'Moderne',
                'tools.tester.theme.classic': 'Classique',
                'tools.tester.theme.dark': 'Sombre',
                'tools.tester.theme.minimal': 'Minimal',
                'tools.tester.position.label': 'Position :',
                'tools.tester.position.bottom': 'Bas',
                'tools.tester.position.top': 'Haut',
                'tools.tester.position.center': 'Centre',
                'tools.tester.button': 'Afficher le Test',
                'tools.tester.reset': 'Réinitialiser',
                
                // Documentation
                'docs.title': 'Documentation Cookie Widget v3.3',
                'docs.subtitle': 'Guide complet des nouvelles fonctionnalités exclusives : Smart Auto-Detect trackers, Mode SEO-Friendly, Script Guard, Mode Zero-Reload, Hub d\'Intégrations, Stockage Sécurisé et Conformité Géo-Adaptative',
                'docs.stats.version': 'Version',
                'docs.stats.size': 'Taille complète',
                'docs.stats.features': 'Fonctionnalités uniques',
                'docs.stats.languages': 'Langues supportées',
                'docs.stats.laws': 'Conformité légale',
                'docs.stats.dependencies': 'Dépendances',
                'docs.contents': 'Contenu',
                
                // Documentation navigation
                'docs.nav.quickstart': 'Démarrage Rapide',
                'docs.nav.installation': 'Installation',
                'docs.nav.advanced': '🆕 Fonctionnalités Exclusives',
                'docs.nav.smart-detect': '🧠 Smart Auto-Detect',
                'docs.nav.seo-friendly': '🔍 Mode SEO-Friendly',
                'docs.nav.script-guard': '🔒 Script Guard',
                'docs.nav.integrations': '🤝 Hub d\'Intégrations',
                'docs.nav.zero-reload': '🚀 Mode Zero-Reload',
                'docs.nav.secure-storage': '🔒 Stockage Sécurisé',
                'docs.nav.configuration': 'Configuration',
                'docs.nav.api': 'Référence API',
                'docs.nav.customization': 'Personnalisation du Texte',
                'docs.nav.events': 'Événements',
                'docs.nav.examples': 'Exemples',
                'docs.nav.compliance': 'Conformité Légale',
                'docs.nav.troubleshooting': 'Dépannage',
                
                // Quick start section
                'docs.quickstart.title': '🚀 Démarrage Rapide',
                'docs.quickstart.description': 'Intégrez Cookie Widget sur votre site en 2 minutes et obtenez une conformité complète avec les standards internationaux de protection des données :',
                'docs.quickstart.features': '✨ Nouvelles fonctionnalités exclusives en v3.3',
                'docs.quickstart.features.description': '🧠 Smart Auto-Detect trackers • 🔍 Mode SEO-Friendly pour bots • 🔒 Blocage Script Guard • 🚀 Mode Zero-Reload • 🤝 Hub d\'Intégrations • 🔒 Stockage Sécurisé • 🔄 Renouvellement Auto du Consentement • 🌍 Conformité Géo-Adaptative',
                'docs.quickstart.step1': '1. Inclure les fichiers',
                'docs.quickstart.step2': '2. Terminé !',
                'docs.quickstart.step2.description': 'La bannière de cookies va automatiquement :',
                'docs.quickstart.step3': '3. Configuration supplémentaire (optionnelle)',
                'docs.quickstart.auto.region': '🌍 Détecter la région',
                'docs.quickstart.auto.region.description': 'Détection automatique de la localisation de l\'utilisateur et application des exigences légales correspondantes (RGPD, CCPA, 152-FZ, LGPD, etc.)',
                'docs.quickstart.auto.language': '🗣️ Choisir la langue',
                'docs.quickstart.auto.language.description': 'Détection de la langue du navigateur parmi 20+ langues supportées incluant le français, l\'anglais, l\'allemand, l\'espagnol, le chinois',
                'docs.quickstart.auto.blocking': '🛡️ Bloquer les cookies',
                'docs.quickstart.auto.blocking.description': 'Blocage de tous les cookies indésirables jusqu\'au consentement et suppression automatique des cookies rejetés',
                'docs.quickstart.auto.responsive': '📱 S\'adapter',
                'docs.quickstart.auto.responsive.description': 'Affichage correct sur tous les appareils et écrans avec un design responsive moderne',
                
                // Tips and warnings
                'docs.tip.title': '💡 Conseil',
                'docs.tip.description': 'Pour une personnalisation supplémentaire, utilisez la puissante API JavaScript. Tous les textes, liens, thèmes et comportements peuvent être modifiés par programmation.',
                'docs.warning.title': '⚠️ Important pour les développeurs',
                'docs.warning.description': 'Cookie Widget bloque automatiquement tous les cookies jusqu\'au consentement. Assurez-vous que vos scripts d\'analyse et de marketing se chargent uniquement après l\'événement cookieConsentAccepted.',
                
                // Documentation sections - detailed features
                'docs.smart-detect.title': '🧠 Smart Auto-Detect Tracking',
                'docs.smart-detect.description': 'Détection automatique des trackers et scripts sur la page avec catégorisation par types.',
                'docs.seo-friendly.title': '🔍 Mode SEO-Friendly',
                'docs.seo-friendly.description': 'Les bots de recherche voient le site comme acceptant tous les cookies pour une meilleure indexation, tandis que les vrais utilisateurs voient la bannière.',
                'docs.script-guard.title': '🔒 Script Guard',
                'docs.script-guard.description': 'Blocage de scripts pour Analytics et Marketing même avant le chargement du site via des stubs proxy.',
                'docs.integrations-hub.title': '🤝 Hub d\'Intégrations',
                'docs.integrations-hub.description': 'Paramètres prêts à l\'emploi pour les services populaires avec intégration zéro-config.',
                'docs.zero-reload.title': '🚀 Mode Zero-Reload',
                'docs.zero-reload.description': 'Activation et désactivation des trackers sans rechargement de page via système de file d\'attente.',
                'docs.secure-storage.title': '🔒 Sauvegarde LocalStorage Sécurisée',
                'docs.secure-storage.description': 'Sauvegarde du consentement dans plusieurs stockages pour une fiabilité maximale.'
            },
            
            'es': {
                // Navigation
                'nav.features': 'Características',
                'nav.installation': 'Instalación',
                'nav.docs': 'Documentación',
                'nav.examples': 'Ejemplos',
                'nav.tools': 'Herramientas',
                'nav.support': 'Soporte',
                
                // Hero Section
                'hero.title.main': 'Cookie Widget',
                'hero.title.sub': 'Cumple con GDPR y Privacidad Global',
                'hero.description': 'Widget revolucionario de banner de cookies v3.3 con 4 sistemas de seguridad exclusivos que ningún competidor tiene: Bloqueador iFrame, Escáner de Scripts, Sandbox Seguro, Guardia de Scripts Perezoso. Además Smart Auto-Detect trackers, Modo SEO-Friendly, Modo Zero-Reload y soporte para 21 idiomas. Cumplimiento completo con GDPR, CCPA, LGPD, 152-FZ.',
                'hero.btn.start': 'Comenzar',
                'hero.btn.demo': 'Ver demo',
                'hero.btn.examples': 'Ejemplos de integración',
                'hero.btn.github': 'GitHub',
                'hero.stat.languages': 'Idiomas',
                'hero.stat.deps': 'Dependencias',
                'hero.stat.features': 'Características de Seguridad',
                'hero.stat.gdpr': 'Cumplimiento GDPR',
                
                // Features
                'features.title': 'Características',
                'features.description': 'Cookie Widget v3.3 con 4 sistemas de seguridad revolucionarios que ningún competidor tiene: Bloqueador iFrame, Escáner de Scripts, Sandbox Seguro, Guardia de Scripts Perezoso. Además Smart Auto-Detect trackers, Modo SEO-Friendly, Modo Zero-Reload, soporte para 21 idiomas y cumplimiento completo con las leyes internacionales de privacidad.',
                
                // Advanced Features v3.3
                'advanced.title': '🚀 Características Exclusivas',
                'advanced.description': 'Capacidades únicas que los competidores no tienen. ¡Pruébalas ahora!',
                'advanced.cta.button': '🎮 Probar todas las características',
                'advanced.cta.note': 'Demostración interactiva de todas las características exclusivas',
                
                // Demo features
                'demo.smart.title': 'Smart Auto-Detect',
                'demo.smart.description': 'Detección automática de rastreadores en la página',
                'demo.smart.status.scanning': 'Escaneando...',
                'demo.seo.title': 'Modo SEO-Friendly',
                'demo.seo.description': 'Detección de bots y robots de búsqueda',
                'demo.seo.status.checking': 'Verificando...',
                'demo.guard.title': 'Script Guard',
                'demo.guard.description': 'Bloqueo de scripts antes del consentimiento',
                'demo.integrations.title': 'Hub de Integraciones',
                'demo.integrations.description': 'Configuraciones listas para servicios populares',
                'demo.new_badge': 'NUEVO',
                
                // New Advanced Security Features Demo
                'demo.iframe.title': 'Bloqueador iFrame',
                'demo.iframe.description': 'Bloquea YouTube/TikTok/Maps sin consentimiento',
                'demo.iframe.status.scanning': 'Escaneando iframes...',
                'demo.iframe.status.blocked': 'iframes bloqueados',
                
                'demo.scanner.title': 'Escáner de Scripts',
                'demo.scanner.description': 'Analiza scripts como CookieBot localmente',
                'demo.scanner.status.analyzing': 'Analizando scripts...',
                'demo.scanner.status.found': 'scripts encontrados',
                
                'demo.sandbox.title': 'Sandbox Seguro',
                'demo.sandbox.description': 'Entorno de ejecución de scripts aislado',
                'demo.sandbox.status.testing': 'Probando sandbox...',
                'demo.sandbox.status.ready': 'Sandbox listo',
                
                'demo.lazy.title': 'Guardia de Scripts Perezoso',
                'demo.lazy.description': 'Bloquea deferred/async hasta consentimiento',
                'demo.lazy.status.monitoring': 'Monitoreando scripts...',
                'demo.lazy.status.blocked': 'scripts en cola',
                
                // Feature translations for new security systems
                'feature.iframe-blocker.title': '🚫 Bloqueador iFrame',
                'feature.iframe-blocker.description': 'Bloquea automáticamente YouTube, TikTok, Google Maps y otros iframes que establecen cookies sin consentimiento del usuario. Muestra marcadores de posición de consentimiento en su lugar.',
                
                'feature.script-scanner.title': '🔍 Escáner de Scripts',
                'feature.script-scanner.description': 'Analiza todos los scripts de página como CookieBot pero localmente. Detecta patrones de configuración de cookies, clasifica por categorías y proporciona informes detallados.',
                
                'feature.secure-sandbox.title': '🏖️ Sandbox Seguro',
                'feature.secure-sandbox.description': 'Ejecuta scripts en iframes sandbox aislados con acceso API limitado. Enfoque de seguridad revolucionario que casi nadie implementa.',
                
                'feature.lazy-script-guard.title': '⏳ Guardia de Scripts Perezoso',
                'feature.lazy-script-guard.description': 'Bloquea scripts deferred y async hasta que el usuario proporcione consentimiento. Previene la ejecución de scripts en segundo plano durante la carga de la página.',
                
                // Interface elements
                'ui.copy': 'Copiar',
                'ui.copied': '¡Copiado!',
                'ui.read_more': 'Leer →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Menú',
                'ui.close': 'Cerrar',
                
                // Footer
                'footer.description': 'Widget moderno de banner de cookies con cumplimiento GDPR',
                'footer.project': 'Proyecto',
                'footer.documentation': 'Documentación',
                'footer.support': 'Soporte',
                'footer.settings': 'Configuración de Cookies',
                'footer.copyright': 'Distribuido bajo licencia MIT.',
                
                // Language Selector
                'lang.select': 'Seleccionar idioma',
                'lang.auto': 'Detección automática',
                
                // Tools page
                'tools.title': 'Herramientas para Webmasters',
                'tools.subtitle': 'Herramientas útiles para análisis de cookies, verificación de cumplimiento GDPR y pruebas de banners de cookies. Todas las herramientas funcionan localmente en su navegador y no envían datos al servidor.',
                
                // Cookie Analyzer
                'tools.analyzer.title': 'Analizador de Cookies',
                'tools.analyzer.description': 'Analice todas las cookies en el sitio actual, verifique sus tipos, fechas de vencimiento y requisitos de cumplimiento GDPR.',
                'tools.analyzer.feature1': 'Lista de todas las cookies en el sitio',
                'tools.analyzer.feature2': 'Clasificación por tipos (necesarias, funcionales, analíticas)',
                'tools.analyzer.feature3': 'Verificación de fechas de vencimiento y seguridad',
                'tools.analyzer.feature4': 'Cumplimiento GDPR de cada cookie',
                'tools.analyzer.button': 'Analizar Cookies',
                
                // GDPR Checker
                'tools.gdpr.title': 'Verificación GDPR',
                'tools.gdpr.description': 'Verifique el cumplimiento de su sitio con GDPR, CCPA, 152-FZ y otras leyes de protección de datos.',
                'tools.gdpr.feature1': 'Verificación de presencia de banner de cookies',
                'tools.gdpr.feature2': 'Análisis de política de privacidad',
                'tools.gdpr.feature3': 'Verificación de bloqueo de cookies antes del consentimiento',
                'tools.gdpr.feature4': 'Cumplimiento de estándares internacionales',
                'tools.gdpr.url.label': 'URL a verificar:',
                'tools.gdpr.url.placeholder': 'https://example.com',
                'tools.gdpr.button': 'Verificar GDPR',
                
                // Policy Generator
                'tools.policy.title': 'Generador de Política de Cookies',
                'tools.policy.description': 'Cree una política de cookies profesional para su sitio web con todos los requisitos GDPR.',
                'tools.policy.feature1': 'Plantillas listas para diferentes tipos de sitios',
                'tools.policy.feature2': 'Formulaciones compatibles con GDPR',
                'tools.policy.feature3': 'Soporte multiidioma',
                'tools.policy.feature4': 'Exportar a HTML y PDF',
                'tools.policy.company.label': 'Nombre de la empresa:',
                'tools.policy.company.placeholder': 'Su Empresa',
                'tools.policy.website.label': 'Sitio web:',
                'tools.policy.website.placeholder': 'https://example.com',
                'tools.policy.email.label': 'Email de contacto:',
                'tools.policy.email.placeholder': 'contact@example.com',
                'tools.policy.button': 'Generar Política',
                
                // Banner Tester
                'tools.tester.title': 'Probador de Banner de Cookies',
                'tools.tester.description': 'Pruebe diferentes configuraciones de Cookie Widget y vea cómo se verán en su sitio.',
                'tools.tester.feature1': 'Vista previa de diferentes temas',
                'tools.tester.feature2': 'Prueba de posiciones de banner',
                'tools.tester.feature3': 'Verificación en diferentes idiomas',
                'tools.tester.feature4': 'Capacidad de respuesta móvil',
                'tools.tester.theme.label': 'Tema:',
                'tools.tester.theme.modern': 'Moderno',
                'tools.tester.theme.classic': 'Clásico',
                'tools.tester.theme.dark': 'Oscuro',
                'tools.tester.theme.minimal': 'Mínimo',
                'tools.tester.position.label': 'Posición:',
                'tools.tester.position.bottom': 'Abajo',
                'tools.tester.position.top': 'Arriba',
                'tools.tester.position.center': 'Centro',
                'tools.tester.button': 'Mostrar Prueba',
                'tools.tester.reset': 'Restablecer',
                
                // Documentation
                'docs.title': 'Documentación Cookie Widget v3.3',
                'docs.subtitle': 'Guía completa de nuevas características exclusivas: Smart Auto-Detect trackers, Modo SEO-Friendly, Script Guard, Modo Zero-Reload, Hub de Integraciones, Almacenamiento Seguro y Cumplimiento Geo-Adaptativo',
                'docs.stats.version': 'Versión',
                'docs.stats.size': 'Tamaño completo',
                'docs.stats.features': 'Características únicas',
                'docs.stats.languages': 'Idiomas soportados',
                'docs.stats.laws': 'Cumplimiento legal',
                'docs.stats.dependencies': 'Dependencias',
                'docs.contents': 'Contenido',
                
                // Documentation navigation
                'docs.nav.quickstart': 'Inicio Rápido',
                'docs.nav.installation': 'Instalación',
                'docs.nav.advanced': '🆕 Características Exclusivas',
                'docs.nav.smart-detect': '🧠 Smart Auto-Detect',
                'docs.nav.seo-friendly': '🔍 Modo SEO-Friendly',
                'docs.nav.script-guard': '🔒 Script Guard',
                'docs.nav.integrations': '🤝 Hub de Integraciones',
                'docs.nav.zero-reload': '🚀 Modo Zero-Reload',
                'docs.nav.secure-storage': '🔒 Almacenamiento Seguro',
                'docs.nav.configuration': 'Configuración',
                'docs.nav.api': 'Referencia API',
                'docs.nav.customization': 'Personalización de Texto',
                'docs.nav.events': 'Eventos',
                'docs.nav.examples': 'Ejemplos',
                'docs.nav.compliance': 'Cumplimiento Legal',
                'docs.nav.troubleshooting': 'Solución de Problemas',
                
                // Quick start section
                'docs.quickstart.title': '🚀 Inicio Rápido',
                'docs.quickstart.description': 'Integre Cookie Widget en su sitio en 2 minutos y obtenga cumplimiento completo con estándares internacionales de protección de datos:',
                'docs.quickstart.features': '✨ Nuevas características exclusivas en v3.3',
                'docs.quickstart.features.description': '🧠 Smart Auto-Detect trackers • 🔍 Modo SEO-Friendly para bots • 🔒 Bloqueo Script Guard • 🚀 Modo Zero-Reload • 🤝 Hub de Integraciones • 🔒 Almacenamiento Seguro • 🔄 Renovación Auto del Consentimiento • 🌍 Cumplimiento Geo-Adaptativo',
                'docs.quickstart.step1': '1. Incluir archivos',
                'docs.quickstart.step2': '2. ¡Listo!',
                'docs.quickstart.step2.description': 'El banner de cookies automáticamente:',
                'docs.quickstart.step3': '3. Configuración adicional (opcional)',
                'docs.quickstart.auto.region': '🌍 Detectar región',
                'docs.quickstart.auto.region.description': 'Detección automática de la ubicación del usuario y aplicación de requisitos legales correspondientes (GDPR, CCPA, 152-FZ, LGPD, etc.)',
                'docs.quickstart.auto.language': '🗣️ Elegir idioma',
                'docs.quickstart.auto.language.description': 'Detección del idioma del navegador de 20+ idiomas soportados incluyendo español, inglés, alemán, francés, chino',
                'docs.quickstart.auto.blocking': '🛡️ Bloquear cookies',
                'docs.quickstart.auto.blocking.description': 'Bloqueo de todas las cookies no deseadas hasta el consentimiento y eliminación automática de cookies rechazadas',
                'docs.quickstart.auto.responsive': '📱 Adaptarse',
                'docs.quickstart.auto.responsive.description': 'Visualización correcta en todos los dispositivos y pantallas con diseño responsive moderno',
                
                // Tips and warnings
                'docs.tip.title': '💡 Consejo',
                'docs.tip.description': 'Para personalización adicional use la poderosa API de JavaScript. Todos los textos, enlaces, temas y comportamientos pueden cambiarse programáticamente.',
                'docs.warning.title': '⚠️ Importante para desarrolladores',
                'docs.warning.description': 'Cookie Widget bloquea automáticamente todas las cookies hasta el consentimiento. Asegúrese de que sus scripts de análisis y marketing se carguen solo después del evento cookieConsentAccepted.',
                
                // Documentation sections - detailed features
                'docs.smart-detect.title': '🧠 Smart Auto-Detect Tracking',
                'docs.smart-detect.description': 'Detección automática de rastreadores y scripts en la página con categorización por tipos.',
                'docs.seo-friendly.title': '🔍 Modo SEO-Friendly',
                'docs.seo-friendly.description': 'Los bots de búsqueda ven el sitio como aceptando todas las cookies para mejor indexación, mientras que los usuarios reales ven el banner.',
                'docs.script-guard.title': '🔒 Script Guard',
                'docs.script-guard.description': 'Bloqueo de scripts para Analytics y Marketing incluso antes de la carga del sitio a través de stubs proxy.',
                'docs.integrations-hub.title': '🤝 Hub de Integraciones',
                'docs.integrations-hub.description': 'Configuraciones listas para servicios populares con integración de configuración cero.',
                'docs.zero-reload.title': '🚀 Modo Zero-Reload',
                'docs.zero-reload.description': 'Activación y desactivación de rastreadores sin recarga de página a través del sistema de cola.',
                'docs.secure-storage.title': '🔒 Respaldo LocalStorage Seguro',
                'docs.secure-storage.description': 'Guardado del consentimiento en múltiples almacenamientos para máxima confiabilidad.'
            },
            
            'pl': {
                // Navigation
                'nav.features': 'Funkcje',
                'nav.installation': 'Instalacja',
                'nav.docs': 'Dokumentacja',
                'nav.examples': 'Przykłady',
                'nav.support': 'Wsparcie',
                
                // Hero Section
                'hero.title.main': 'Cookie Widget',
                'hero.title.sub': 'Zgodny z RODO i globalnymi przepisami o prywatności',
                'hero.description': 'Nowoczesny widget banera cookie z pełną zgodnością z RODO, CCPA, LGPD i wsparciem międzynarodowych standardów ochrony danych. Łatwa integracja, responsywny design i elastyczne ustawienia.',
                'hero.btn.start': 'Rozpocznij',
                'hero.btn.demo': 'Zobacz demo',
                'hero.btn.examples': 'Przykłady integracji',
                'hero.btn.github': 'GitHub',
                'hero.stat.size': 'Minimalny rozmiar',
                'hero.stat.deps': 'Zależności',
                'hero.stat.features': 'Unikalne funkcje',
                
                // Features
                'features.title': 'Funkcje',
                'features.description': 'Nowoczesny baner cookie z obsługą 20+ języków, automatycznym blokowaniem cookie i zgodnością z międzynarodowymi standardami ochrony danych',
                
                // Advanced Features v3.3
                'advanced.title': '🚀 Ekskluzywne funkcje',
                'advanced.description': 'Unikalne możliwości, których nie mają konkurenci. Wypróbuj je już teraz!',
                
                // Demo features
                'demo.smart.title': 'Smart Auto-Detect',
                'demo.smart.description': 'Automatyczne wykrywanie trackerów na stronie',
                'demo.smart.status.scanning': 'Skanowanie...',
                'demo.seo.title': 'Tryb SEO-Friendly',
                'demo.seo.description': 'Wykrywanie botów i robotów wyszukiwarek',
                'demo.seo.status.checking': 'Sprawdzanie...',
                'demo.guard.title': 'Script Guard',
                'demo.guard.description': 'Blokowanie skryptów przed zgodą',
                'demo.integrations.title': 'Hub Integracji',
                'demo.integrations.description': 'Gotowe konfiguracje dla popularnych usług',
                'demo.new_badge': 'NOWE',
                
                // New Advanced Security Features Demo
                'demo.iframe.title': 'Blokada iFrame',
                'demo.iframe.description': 'Blokuje YouTube/TikTok/Mapy bez zgody',
                'demo.iframe.status.scanning': 'Skanowanie iframe...',
                'demo.iframe.status.blocked': 'iframe zablokowane',
                
                'demo.scanner.title': 'Skaner skryptów',
                'demo.scanner.description': 'Analizuje skrypty jak CookieBot lokalnie',
                'demo.scanner.status.analyzing': 'Analiza skryptów...',
                'demo.scanner.status.found': 'skryptów znaleziono',
                
                'demo.sandbox.title': 'Bezpieczna piaskownica',
                'demo.sandbox.description': 'Izolowane środowisko wykonywania skryptów',
                'demo.sandbox.status.testing': 'Testowanie piaskownicy...',
                'demo.sandbox.status.ready': 'Piaskownica gotowa',
                
                'demo.lazy.title': 'Leniwa ochrona skryptów',
                'demo.lazy.description': 'Blokuje deferred/async do zgody',
                'demo.lazy.status.monitoring': 'Monitorowanie skryptów...',
                'demo.lazy.status.blocked': 'skryptów w kolejce',
                
                // Feature translations for new security systems
                'feature.iframe-blocker.title': '🚫 Blokada iFrame',
                'feature.iframe-blocker.description': 'Automatycznie blokuje YouTube, TikTok, Google Maps i inne iframe, które ustawiają cookie bez zgody użytkownika. Pokazuje zastępcze żądania zgody.',
                
                'feature.script-scanner.title': '🔍 Skaner skryptów',
                'feature.script-scanner.description': 'Analizuje wszystkie skrypty strony jak CookieBot, ale lokalnie. Wykrywa wzorce ustawiania cookie, klasyfikuje według kategorii i dostarcza szczegółowe raporty.',
                
                'feature.secure-sandbox.title': '🏖️ Bezpieczna piaskownica',
                'feature.secure-sandbox.description': 'Wykonuje skrypty w izolowanych iframe piaskownicy z ograniczonym dostępem do API. Rewolucyjne podejście do bezpieczeństwa, które prawie nikt nie implementuje.',
                
                'feature.lazy-script-guard.title': '⏳ Leniwa ochrona skryptów',
                'feature.lazy-script-guard.description': 'Blokuje skrypty deferred i async do momentu udzielenia zgody przez użytkownika. Zapobiega wykonywaniu skryptów w tle podczas ładowania strony.',
                
                // Advanced CTA
                'advanced.cta.button': '🎮 Wypróbuj wszystkie funkcje',
                'advanced.cta.note': 'Interaktywna demonstracja wszystkich ekskluzywnych funkcji',
                
                // Feature cards - new v3.3 features
                'feature.smart-detect.title': '🧠 Smart Auto-Detect Tracking',
                'feature.smart-detect.description': 'Automatyczne wykrywanie 20+ trackerów: Google Analytics, Meta Pixel, Yandex Metrica, TikTok Pixel. Skanowanie DOM, żądań sieciowych i cookies z kategoryzacją według typów.',
                'feature.seo-friendly.title': '🔍 Tryb SEO-Friendly',
                'feature.seo-friendly.description': 'Boty wyszukiwarek widzą stronę jako zaakceptowaną wszystkie cookies dla lepszej indeksacji. Wykrywanie GoogleBot, YandexBot, BingBot przez user-agent i wskaźniki automatyzacji.',
                'feature.integrations.title': '🤝 Hub Integracji',
                'feature.integrations.description': 'Gotowe konfiguracje dla Google Tag Manager, Yandex Metrica, Meta Pixel, TikTok Pixel, reCAPTCHA v3, Cloudflare Turnstile. Integracja zero-config.',
                'feature.script-guard.title': '🔒 Script Guard',
                'feature.script-guard.description': 'Blokowanie skryptów Analytics i Marketing przed załadowaniem strony przez proxy-zaślepki. Ochrona przed wykonywaniem trackerów bez zgody użytkownika.',
                'feature.zero-reload.title': '🚀 Tryb Zero-Reload',
                'feature.zero-reload.description': 'Włączanie/wyłączanie trackerów bez przeładowania strony. Natychmiastowa aktywacja skryptów po otrzymaniu zgody przez system kolejek.',
                'feature.auto-renew.title': '🔄 Auto-Renew Consent',
                'feature.auto-renew.description': 'Automatyczne odnawianie zgody po 3/6/12 miesiącach lub przy zmianie polityki. Zgodność z RODO z śledzeniem wersji polityki prywatności.',
                'feature.secure-storage.title': '🔐 Secure Storage',
                'feature.secure-storage.description': 'Przechowywanie zgody w localStorage, sessionStorage, IndexedDB i cookies. Działa nawet w przeglądarkach "anti-cookie" z pełnym blokowaniem cookies.',
                
                // Installation
                'install.title': 'Instalacja',
                'install.description': 'Zintegruj widget ze swoją stroną w kilka minut',
                'install.tab.cdn': 'CDN',
                'install.tab.download': 'Pobierz',
                'install.tab.integration': 'Integracja',
                
                // Support
                'support.title': 'Wsparcie projektu',
                'support.description': 'Pomóż w rozwoju projektu i uzyskaj wsparcie',
                'support.bug.title': 'Zgłoś błąd',
                'support.bug.description': 'Znalazłeś błąd lub masz sugestię ulepszenia?',
                'support.bug.link': 'Utwórz Issue →',
                'support.coffee.title': 'Wesprzyj dewelopera',
                'support.coffee.description': 'Kup mi kawę i wesprzyj dalszy rozwój projektu',
                'support.coffee.link': 'Buy me a coffee →',
                'support.docs.title': 'Dokumentacja',
                'support.docs.description': 'Szczegółowa dokumentacja i przykłady użycia',
                'support.docs.link': 'Czytaj dokumentację →',
                
                // Examples
                'examples.title': 'Przykłady integracji',
                'examples.subtitle': 'Gotowe rozwiązania do integracji Cookie Widget z popularnymi frameworkami, CMS i systemami analitycznymi. Skopiuj kod i dostosuj do swoich potrzeb.',
                
                // Example cards
                'example.react.title': '⚛️ React / Next.js',
                'example.react.description': 'Nowoczesna integracja dla aplikacji React z obsługą TypeScript',
                'example.vue.title': '🟢 Vue.js / Nuxt.js',
                'example.vue.description': 'Integracja dla ekosystemu Vue z Composition API',
                'example.wordpress.title': '📝 WordPress',
                'example.wordpress.description': 'Prosta integracja z WordPress z panelem administracyjnym',
                'example.ga4.title': '📊 Google Analytics 4',
                'example.ga4.description': 'Pełna integracja z GA4 i zarządzanie zdarzeniami',
                'example.yandex.title': '📈 Yandex.Metrica',
                'example.yandex.description': 'Integracja z rosyjskim systemem analitycznym',
                'example.advanced.title': '🚀 Zaawansowane funkcje v3.3',
                'example.advanced.description': 'Korzystanie z nowych ekskluzywnych możliwości',
                'example.api.title': '🔧 Integracja API',
                'example.api.description': 'Programowe sterowanie przez JavaScript API',
                'example.multilang.title': '🌍 Wielojęzyczność',
                'example.multilang.description': 'Obsługa wielu języków i lokalizacja',
                'example.mobile.title': '📱 Optymalizacja mobilna',
                'example.mobile.description': 'Responsywny design dla urządzeń mobilnych',
                'example.security.title': '🔒 Bezpieczeństwo i prywatność',
                'example.security.description': 'Maksymalna ochrona danych użytkowników',
                
                // Code examples
                'examples.basic.title': '🚀 Podstawowa integracja',
                'examples.basic.description': 'Najprostszy sposób podłączenia widgetu do strony',
                'examples.react.integration.title': '⚛️ Integracja React / Next.js',
                'examples.react.integration.description': 'Pełny przykład integracji Cookie Widget w aplikacji React',
                'examples.vue.integration.title': '🟢 Integracja Vue.js',
                'examples.vue.integration.description': 'Przykład integracji z Vue.js używając Composition API',
                'examples.wordpress.integration.title': '📝 Integracja WordPress',
                'examples.wordpress.integration.description': 'Prosta integracja Cookie Widget w WordPress',
                'examples.ga4.integration.title': '📊 Integracja Google Analytics 4',
                'examples.ga4.integration.description': 'Integracja z Google Analytics z zarządzaniem zgodą użytkownika',
                'examples.yandex.integration.title': '📈 Integracja Yandex.Metrica',
                'examples.yandex.integration.description': 'Integracja z Yandex.Metrica z warunkowym ładowaniem',
                'examples.angular.title': '🅰️ Integracja Angular',
                'examples.angular.description': 'Integracja Cookie Widget w aplikacji Angular z serwisem',
                'examples.svelte.title': '🧡 Integracja Svelte',
                'examples.svelte.description': 'Prosta integracja Cookie Widget w aplikacji Svelte',
                'examples.nuxt.title': '💚 Plugin Nuxt.js',
                'examples.nuxt.description': 'Tworzenie pluginu do automatycznej inicjalizacji w Nuxt.js',
                'examples.drupal.title': '🔷 Integracja Drupal',
                'examples.drupal.description': 'Tworzenie modułu dla Drupal z panelem administracyjnym',
                'examples.joomla.title': '🟠 Integracja Joomla',
                'examples.joomla.description': 'Tworzenie pluginu dla Joomla CMS',
                'examples.bitrix.title': '🔶 Integracja 1C-Bitrix',
                'examples.bitrix.description': 'Integracja Cookie Widget w 1C-Bitrix przez komponent',
                'examples.laravel.title': '🔴 Integracja Laravel',
                'examples.laravel.description': 'Tworzenie pakietu Laravel z middleware i dostawcą usług',
                'examples.django.title': '🐍 Integracja Django',
                'examples.django.description': 'Tworzenie aplikacji Django z middleware dla Cookie Widget',
                'examples.shopify.title': '🛒 Integracja Shopify',
                'examples.shopify.description': 'Integracja Cookie Widget w sklepie Shopify',
                'examples.wix.title': '🎨 Integracja Wix',
                'examples.wix.description': 'Dodawanie Cookie Widget do strony Wix',
                'examples.squarespace.title': '⬜ Integracja Squarespace',
                'examples.squarespace.description': 'Integracja Cookie Widget w stronie Squarespace',
                'examples.webflow.title': '🌊 Integracja Webflow',
                'examples.webflow.description': 'Dodawanie Cookie Widget do projektu Webflow',
                'examples.gtm.title': '📊 Google Tag Manager',
                'examples.gtm.description': 'Integracja przez Google Tag Manager z warunkowym ładowaniem tagów',
                'examples.facebook.title': '📘 Facebook Pixel',
                'examples.facebook.description': 'Integracja z Facebook Pixel z zarządzaniem zgodą',
                'examples.tiktok.title': '🎵 TikTok Pixel',
                'examples.tiktok.description': 'Integracja z TikTok Pixel dla kampanii reklamowych',
                'examples.hotjar.title': '🔥 Integracja Hotjar',
                'examples.hotjar.description': 'Warunkowe ładowanie Hotjar z zachowaniem prywatności',
                'examples.mixpanel.title': '📈 Integracja Mixpanel',
                'examples.mixpanel.description': 'Integracja z analityką Mixpanel',
                'examples.amplitude.title': '📊 Integracja Amplitude',
                'examples.amplitude.description': 'Integracja z Amplitude dla analityki produktowej',
                
                // Interface elements
                'ui.copy': 'Kopiuj',
                'ui.copied': 'Skopiowane!',
                'ui.read_more': 'Czytaj →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Menu',
                'ui.close': 'Zamknij',
                
                // Language Selector
                'lang.select': 'Wybierz język',
                'lang.auto': 'Automatyczne wykrywanie',
                
                // Footer
                'footer.description': 'Nowoczesny widget banera cookie ze zgodnością z RODO',
                'footer.project': 'Projekt',
                'footer.documentation': 'Dokumentacja',
                'footer.support': 'Wsparcie',
                'footer.settings': 'Ustawienia Cookie',
                'footer.copyright': 'Dystrybuowane na licencji MIT.',
                
                // Language Selector
                'lang.select': 'Wybierz język',
                'lang.auto': 'Automatyczne wykrywanie',
                
                // Documentation
                'docs.title': 'Dokumentacja Cookie Widget v3.3',
                'docs.subtitle': 'Kompletny przewodnik po nowych ekskluzywnych funkcjach: Smart Auto-Detect trackers, Tryb SEO-Friendly, Script Guard, Tryb Zero-Reload, Hub Integracji, Bezpieczne Przechowywanie i Geo-Adaptacyjna Zgodność',
                'docs.stats.version': 'Wersja',
                'docs.stats.size': 'Pełny rozmiar',
                'docs.stats.features': 'Unikalne funkcje',
                'docs.stats.languages': 'Obsługiwane języki',
                'docs.stats.laws': 'Zgodność z prawem',
                'docs.stats.dependencies': 'Zależności',
                'docs.contents': 'Spis treści',
                
                // Documentation navigation
                'docs.nav.quickstart': 'Szybki Start',
                'docs.nav.installation': 'Instalacja',
                'docs.nav.advanced': '🆕 Ekskluzywne Funkcje',
                'docs.nav.smart-detect': '🧠 Smart Auto-Detect',
                'docs.nav.seo-friendly': '🔍 Tryb SEO-Friendly',
                'docs.nav.script-guard': '🔒 Script Guard',
                'docs.nav.integrations': '🤝 Hub Integracji',
                'docs.nav.zero-reload': '🚀 Tryb Zero-Reload',
                'docs.nav.secure-storage': '🔒 Bezpieczne Przechowywanie',
                'docs.nav.configuration': 'Konfiguracja',
                'docs.nav.api': 'Dokumentacja API',
                'docs.nav.customization': 'Dostosowanie Tekstu',
                'docs.nav.events': 'Zdarzenia',
                'docs.nav.examples': 'Przykłady',
                'docs.nav.compliance': 'Zgodność z Prawem',
                'docs.nav.troubleshooting': 'Rozwiązywanie Problemów',
                
                // Quick start section
                'docs.quickstart.title': '🚀 Szybki Start',
                'docs.quickstart.description': 'Zintegruj Cookie Widget na swojej stronie w 2 minuty i uzyskaj pełną zgodność z międzynarodowymi standardami ochrony danych:',
                'docs.quickstart.features': '✨ Nowe ekskluzywne funkcje w v3.3',
                'docs.quickstart.features.description': '🧠 Smart Auto-Detect trackers • 🔍 Tryb SEO-Friendly dla botów • 🔒 Blokowanie Script Guard • 🚀 Tryb Zero-Reload • 🤝 Hub Integracji • 🔒 Bezpieczne Przechowywanie • 🔄 Auto-Odnowienie Zgody • 🌍 Geo-Adaptacyjna Zgodność',
                'docs.quickstart.step1': '1. Dołącz pliki',
                'docs.quickstart.step2': '2. Gotowe!',
                'docs.quickstart.step2.description': 'Banner cookie automatycznie:',
                'docs.quickstart.step3': '3. Dodatkowa konfiguracja (opcjonalna)',
                'docs.quickstart.auto.region': '🌍 Wykryj region',
                'docs.quickstart.auto.region.description': 'Automatyczne wykrywanie lokalizacji użytkownika i stosowanie odpowiednich wymagań prawnych (RODO, CCPA, 152-FZ, LGPD, itp.)',
                'docs.quickstart.auto.language': '🗣️ Wybierz język',
                'docs.quickstart.auto.language.description': 'Wykrywanie języka przeglądarki z 20+ obsługiwanych języków włączając polski, angielski, niemiecki, francuski, chiński',
                'docs.quickstart.auto.blocking': '🛡️ Blokuj cookies',
                'docs.quickstart.auto.blocking.description': 'Blokowanie wszystkich niechcianych cookies do momentu udzielenia zgody i automatyczne usuwanie odrzuconych cookies',
                'docs.quickstart.auto.responsive': '📱 Dostosuj się',
                'docs.quickstart.auto.responsive.description': 'Poprawne wyświetlanie na wszystkich urządzeniach i ekranach z nowoczesnym responsywnym designem',
                
                // Tips and warnings
                'docs.tip.title': '💡 Wskazówka',
                'docs.tip.description': 'Do dodatkowego dostosowania użyj potężnego JavaScript API. Wszystkie teksty, linki, motywy i zachowania mogą być zmieniane programowo.',
                'docs.warning.title': '⚠️ Ważne dla programistów',
                'docs.warning.description': 'Cookie Widget automatycznie blokuje wszystkie cookies do momentu udzielenia zgody. Upewnij się, że twoje skrypty analityczne i marketingowe ładują się tylko po zdarzeniu cookieConsentAccepted.',
                
                // Documentation sections - detailed features
                'docs.smart-detect.title': '🧠 Smart Auto-Detect Tracking',
                'docs.smart-detect.description': 'Automatyczne wykrywanie trackerów i skryptów na stronie z kategoryzacją według typów.',
                'docs.seo-friendly.title': '🔍 Tryb SEO-Friendly',
                'docs.seo-friendly.description': 'Boty wyszukiwarek widzą stronę jako akceptującą wszystkie cookies dla lepszej indeksacji, podczas gdy prawdziwi użytkownicy widzą banner.',
                'docs.script-guard.title': '🔒 Script Guard',
                'docs.script-guard.description': 'Blokowanie skryptów Analytics i Marketing jeszcze przed załadowaniem strony przez proxy stubs.',
                'docs.integrations-hub.title': '🤝 Hub Integracji',
                'docs.integrations-hub.description': 'Gotowe ustawienia dla popularnych usług z integracją zero-config.',
                'docs.zero-reload.title': '🚀 Tryb Zero-Reload',
                'docs.zero-reload.description': 'Włączanie i wyłączanie trackerów bez przeładowania strony przez system kolejek.',
                'docs.secure-storage.title': '🔒 Bezpieczna Kopia LocalStorage',
                'docs.secure-storage.description': 'Zapisywanie zgody w wielu magazynach dla maksymalnej niezawodności.',
                
                // Tools page
                'nav.tools': 'Narzędzia',
                'tools.title': 'Narzędzia dla webmasterów',
                'tools.subtitle': 'Przydatne narzędzia do analizy cookie, sprawdzania zgodności z RODO i testowania banerów cookie. Wszystkie narzędzia działają lokalnie w przeglądarce i nie wysyłają danych na serwer.',
                
                // Cookie Analyzer
                'tools.analyzer.title': 'Analizator Cookie',
                'tools.analyzer.description': 'Analizuj wszystkie cookie na bieżącej stronie, sprawdzaj ich typy, daty wygaśnięcia i zgodność z wymogami RODO.',
                'tools.analyzer.feature1': 'Lista wszystkich cookie na stronie',
                'tools.analyzer.feature2': 'Klasyfikacja według typów (niezbędne, funkcjonalne, analityczne)',
                'tools.analyzer.feature3': 'Sprawdzanie dat wygaśnięcia i bezpieczeństwa',
                'tools.analyzer.feature4': 'Zgodność z RODO każdego cookie',
                'tools.analyzer.button': 'Analizuj Cookie',
                
                // GDPR Checker
                'tools.gdpr.title': 'Sprawdzanie RODO',
                'tools.gdpr.description': 'Sprawdź zgodność swojej strony z RODO, CCPA, 152-FZ i innymi prawami ochrony danych.',
                'tools.gdpr.feature1': 'Sprawdzanie obecności banera cookie',
                'tools.gdpr.feature2': 'Analiza polityki prywatności',
                'tools.gdpr.feature3': 'Sprawdzanie blokowania cookie przed zgodą',
                'tools.gdpr.feature4': 'Zgodność z międzynarodowymi standardami',
                'tools.gdpr.url.label': 'URL do sprawdzenia:',
                'tools.gdpr.url.placeholder': 'https://example.com',
                'tools.gdpr.button': 'Sprawdź RODO',
                
                // Policy Generator
                'tools.policy.title': 'Generator Polityki Cookie',
                'tools.policy.description': 'Utwórz profesjonalną politykę używania cookie dla swojej strony z uwzględnieniem wszystkich wymogów RODO.',
                'tools.policy.feature1': 'Gotowe szablony dla różnych typów stron',
                'tools.policy.feature2': 'Sformułowania zgodne z RODO',
                'tools.policy.feature3': 'Obsługa wielu języków',
                'tools.policy.feature4': 'Eksport do HTML i PDF',
                'tools.policy.company.label': 'Nazwa firmy:',
                'tools.policy.company.placeholder': 'Twoja Firma',
                'tools.policy.website.label': 'Strona internetowa:',
                'tools.policy.website.placeholder': 'https://example.com',
                'tools.policy.email.label': 'Email kontaktowy:',
                'tools.policy.email.placeholder': 'contact@example.com',
                'tools.policy.button': 'Utwórz Politykę',
                
                // Banner Tester
                'tools.tester.title': 'Tester Banerów Cookie',
                'tools.tester.description': 'Testuj różne ustawienia Cookie Widget i zobacz, jak będą wyglądać na twojej stronie.',
                'tools.tester.feature1': 'Podgląd różnych motywów',
                'tools.tester.feature2': 'Testowanie pozycji banera',
                'tools.tester.feature3': 'Sprawdzanie w różnych językach',
                'tools.tester.feature4': 'Responsywność mobilna',
                'tools.tester.theme.label': 'Motyw:',
                'tools.tester.theme.modern': 'Nowoczesny',
                'tools.tester.theme.classic': 'Klasyczny',
                'tools.tester.theme.dark': 'Ciemny',
                'tools.tester.theme.minimal': 'Minimalny',
                'tools.tester.position.label': 'Pozycja:',
                'tools.tester.position.bottom': 'Na dole',
                'tools.tester.position.top': 'Na górze',
                'tools.tester.position.center': 'Na środku',
                'tools.tester.button': 'Pokaż Test',
                'tools.tester.reset': 'Resetuj',
                
                // Consent Simulator
                'tools.simulator.title': 'Symulator Zgody',
                'tools.simulator.description': 'Symuluj różne scenariusze zgody użytkowników i sprawdź, jak twoja strona reaguje na różne wybory.',
                'tools.simulator.feature1': 'Symulacja akceptowania/odrzucania cookie',
                'tools.simulator.feature2': 'Testowanie częściowej zgody',
                'tools.simulator.feature3': 'Sprawdzanie blokowania skryptów',
                'tools.simulator.feature4': 'Analiza zdarzeń zgody',
                'tools.simulator.scenario.label': 'Scenariusz:',
                'tools.simulator.scenario.accept': 'Zaakceptuj wszystkie',
                'tools.simulator.scenario.decline': 'Odrzuć wszystkie',
                'tools.simulator.scenario.partial': 'Częściowa zgoda',
                'tools.simulator.scenario.analytics': 'Tylko analityka',
                'tools.simulator.button': 'Uruchom Symulację',
                
                // Performance Monitor
                'tools.performance.title': 'Monitor Wydajności',
                'tools.performance.description': 'Śledź wpływ Cookie Widget na wydajność twojej strony i optymalizuj ładowanie.',
                'tools.performance.feature1': 'Czas ładowania widgetu',
                'tools.performance.feature2': 'Wpływ na Core Web Vitals',
                'tools.performance.feature3': 'Rozmiar ładowanych plików',
                'tools.performance.feature4': 'Rekomendacje optymalizacji',
                'tools.performance.button': 'Zmierz Wydajność',
                
                // Documentation sections
                'docs.description.setup': 'Szczegółowy przewodnik konfiguracji i użytkowania',
                'docs.stats.size': 'Minimalny Rozmiar',
                'docs.stats.languages': 'Obsługa Języków',
                'docs.stats.laws': 'Zgodność z Prawem',
                'docs.stats.dependencies': 'Zależności',
                'docs.contents': 'Spis treści',
                
                // Documentation content
                'docs.quickstart.title': '🚀 Szybki start',
                'docs.quickstart.description': 'Zintegruj Cookie Widget na swojej stronie w 2 minuty i uzyskaj pełną zgodność z międzynarodowymi standardami ochrony danych:',
                'docs.quickstart.features': '✨ Nowe funkcje w wersji 3.0',
                'docs.quickstart.features.description': 'Automatyczne blokowanie cookie, 20+ języków, API do dostosowywania tekstu, ochrona przed blokerami reklam, integracja z GA4 i Yandex.Metrica',
                'docs.quickstart.step1': '1. Podłącz pliki',
                'docs.quickstart.step2': '2. Gotowe!',
                'docs.quickstart.step3': '3. Dodatkowa konfiguracja (opcjonalnie)',
                'docs.quickstart.auto.region': 'Wykryj region',
                'docs.quickstart.auto.region.description': 'Automatycznie wykryj lokalizację użytkownika i zastosuj odpowiednie wymagania prawne (RODO, CCPA, 152-FZ, LGPD itp.)',
                'docs.quickstart.auto.language': 'Wybierz język',
                'docs.quickstart.auto.language.description': 'Wykryj język przeglądarki z 20+ obsługiwanych języków włączając polski, rosyjski, angielski, niemiecki, francuski, chiński',
                'docs.quickstart.auto.blocking': 'Zablokuj cookie',
                'docs.quickstart.auto.blocking.description': 'Zablokuj wszystkie niechciane cookie przed zgodą i automatycznie usuń odrzucone cookie',
                'docs.quickstart.auto.responsive': 'Dostosuj się',
                'docs.quickstart.auto.responsive.description': 'Wyświetl poprawnie na wszystkich urządzeniach i ekranach z nowoczesnym responsywnym designem',
                
                // Documentation sections - detailed
                'docs.quickstart.step2.description': 'Baner cookie automatycznie:',
                'docs.installation.title': '📦 Instalacja',
                'docs.installation.cdn.title': 'CDN (Zalecane)',
                'docs.installation.cdn.description': 'Najłatwiejszy sposób - użyj naszego CDN:',
                'docs.installation.local.title': 'Instalacja lokalna',
                'docs.installation.local.description': 'Pobierz pliki i umieść je na swoim serwerze:',
                'docs.installation.local.download.css': 'Pobierz CSS',
                'docs.installation.local.download.js': 'Pobierz JS',
                'docs.installation.platforms.title': 'Integracja z popularnymi platformami',
                'docs.configuration.title': '⚙️ Konfiguracja',
                'docs.configuration.basic.title': 'Podstawowa konfiguracja',
                'docs.configuration.basic.description': 'Tworzenie z niestandardowymi ustawieniami',
                'docs.configuration.options.autoShow': 'Automatycznie pokaż baner',
                'docs.configuration.options.theme': 'Motyw',
                'docs.configuration.options.position': 'Pozycja banera',
                'docs.configuration.options.privacyUrl': 'URL polityki prywatności',
                'docs.configuration.options.onAccept': 'Callback przy akceptacji',
                'docs.configuration.options.onDecline': 'Callback przy odrzuceniu',
                'docs.api.title': '📚 API Reference',
                'docs.api.methods.title': 'Główne metody',
                'docs.api.show.description': 'Pokaż baner cookie',
                'docs.api.hide.description': 'Ukryj baner cookie',
                'docs.api.getSettings.description': 'Pobierz bieżące ustawienia cookie',
                'docs.api.setSettings.description': 'Ustaw ustawienia cookie',
                'docs.api.reset.description': 'Resetuj wszystkie ustawienia i pokaż baner ponownie',
                'docs.api.getLanguage.description': 'Pobierz bieżący język interfejsu',
                'docs.api.getVersion.description': 'Pobierz wersję Cookie Widget',
                'docs.api.getAllTexts.description': 'Pobierz wszystkie teksty interfejsu (włączając niestandardowe)',
                'docs.api.setTheme.description': 'Ustaw motyw',
                'docs.api.setPosition.description': 'Ustaw pozycję banera',
                'docs.api.setTexts.title': 'setTexts(texts)',
                'docs.api.setTexts.description': 'Dostosowywanie tekstów interfejsu',
                'docs.api.customization.title': '🎨 Dostosowywanie tekstu',
                'docs.api.customization.description': 'Pełne dostosowywanie wszystkich tekstów interfejsu',
                'docs.api.customization.example': 'Przykład dostosowywania',
                'docs.api.events.title': '📡 Zdarzenia',
                'docs.api.events.description': 'Cookie Widget generuje zdarzenia do integracji z twoim kodem',
                'docs.api.events.initialized': 'Widget zainicjalizowany',
                'docs.api.events.shown': 'Baner pokazany',
                'docs.api.events.hidden': 'Baner ukryty',
                'docs.api.events.accepted': 'Zgoda zaakceptowana',
                'docs.api.events.declined': 'Zgoda odrzucona',
                'docs.api.events.settingsChanged': 'Ustawienia zmienione',
                'docs.examples.title': '💼 Zaawansowane przykłady',
                'docs.examples.description': 'Gotowe rozwiązania dla popularnych przypadków użycia',
                'docs.examples.ga4.title': 'Google Analytics 4',
                'docs.examples.ga4.description': 'Zaawansowana integracja z Google Analytics 4',
                'docs.examples.yandex.title': 'Yandex.Metrica',
                'docs.examples.yandex.description': 'Integracja z Yandex.Metrica z zachowaniem zgodności z 152-FZ',
                'docs.examples.react.title': 'React + TypeScript',
                'docs.examples.react.description': 'Komponent dla aplikacji React z TypeScript',
                'docs.examples.corporate.title': 'Konfiguracja korporacyjna',
                'docs.examples.corporate.description': 'Konfiguracja dla dużych firm',
                'docs.compliance.title': '⚖️ Zgodność prawna',
                'docs.compliance.description': 'Cookie Widget zapewnia zgodność z międzynarodowymi standardami',
                'docs.compliance.gdpr.title': 'RODO (Europa)',
                'docs.compliance.gdpr.description': 'Pełna zgodność z Ogólnym Rozporządzeniem o Ochronie Danych',
                'docs.compliance.ccpa.title': 'CCPA (Kalifornia)',
                'docs.compliance.ccpa.description': 'Zgodność z Kalifornijską Ustawą o Ochronie Prywatności Konsumentów',
                'docs.compliance.lgpd.title': 'LGPD (Brazylia)',
                'docs.compliance.lgpd.description': 'Zgodność z Brazylijskim Ogólnym Prawem Ochrony Danych',
                'docs.compliance.russia.title': '152-FZ (Rosja)',
                'docs.compliance.russia.description': 'Zgodność z rosyjskim prawem o danych osobowych',
                'docs.troubleshooting.title': '🔧 Rozwiązywanie problemów',
                'docs.troubleshooting.description': 'Często spotykane problemy i ich rozwiązania',
                'docs.troubleshooting.not.showing.title': 'Baner się nie pokazuje',
                'docs.troubleshooting.not.showing.description': 'Sprawdź inicjalizację i konsolę przeglądarki',
                'docs.troubleshooting.not.blocking.title': 'Cookie nie są blokowane',
                'docs.troubleshooting.not.blocking.description': 'Upewnij się, że skrypty ładują się po zgodzie',
                'docs.troubleshooting.styles.title': 'Problemy ze stylami',
                'docs.troubleshooting.styles.description': 'Sprawdź połączenie pliku CSS',
                'docs.tip.title': '💡 Wskazówka',
                'docs.tip.description': 'Do dodatkowego dostosowywania użyj potężnego JavaScript API. Wszystkie teksty, linki, motywy i zachowanie można zmienić programowo. Sprawdź zaawansowane przykłady poniżej dla integracji z Google Analytics 4, Yandex.Metrica, React i ustawień korporacyjnych.',
                'docs.warning.title': '⚠️ Ważne dla programistów',
                'docs.warning.description': 'Cookie Widget automatycznie blokuje wszystkie cookie przed zgodą. Upewnij się, że twoje skrypty analityczne i marketingowe ładują się tylko po zdarzeniu cookieConsentAccepted.',
                
                // Examples page - detailed
                'examples.react.integration.title': '⚛️ Integracja React / Next.js',
                'examples.react.integration.description': 'Pełny przykład integracji Cookie Widget w aplikacji React z TypeScript:',
                'examples.vue.integration.title': '🟢 Integracja Vue.js / Nuxt.js',
                'examples.vue.integration.description': 'Przykład integracji z Vue.js używając Composition API:',
                'examples.wordpress.integration.title': '📝 Integracja WordPress',
                'examples.wordpress.integration.description': 'Prosta integracja Cookie Widget w motywie lub wtyczce WordPress:',
                'examples.ga4.integration.title': '📊 Integracja Google Analytics 4',
                'examples.ga4.integration.description': 'Pełna integracja z Google Analytics 4 z zarządzaniem zgodą:',
                'examples.basic.title': '🚀 Podstawowa integracja',
                'examples.basic.description': 'Najprostszy sposób podłączenia widgetu do strony',
                'examples.ga4.simple.title': '📊 Google Analytics 4',
                'examples.ga4.simple.description': 'Integracja z Google Analytics z uwzględnieniem zgody użytkownika',
                'examples.yandex.simple.title': '📈 Yandex.Metrica',
                'examples.yandex.simple.description': 'Integracja z Yandex.Metrica z warunkowym ładowaniem',
                'examples.wordpress.simple.title': '🔌 WordPress',
                'examples.wordpress.simple.description': 'Integracja WordPress przez functions.php',
                'examples.react.simple.title': '⚛️ React',
                'examples.react.simple.description': 'Użycie w aplikacji React',
                'examples.vue.simple.title': '💚 Vue.js',
                'examples.vue.simple.description': 'Integracja w aplikacji Vue.js',
                'examples.customization.title': '🎨 Dostosowywanie stylów',
                'examples.customization.description': 'Dostosuj wygląd do swojego designu',
                'examples.page.title': 'Przykłady integracji',
                'examples.page.description': 'Gotowe przykłady do szybkiej integracji Cookie Widget w twoim projekcie',
                'examples.back.link': 'Powrót do głównej',
                'examples.back.main': 'Powrót do strony głównej',
                'nav.docs': 'Dokumentation',
                'nav.examples': 'Beispiele',
                'nav.support': 'Support',
                
                // Hero Section
                'hero.title.main': 'Cookie Widget',
                'hero.title.sub': 'DSGVO & Global Privacy Compliant',
                'hero.description': 'Modernes und schönes Cookie-Banner-Widget mit vollständiger DSGVO-, CCPA-, LGPD-Konformität und Unterstützung für internationale Datenschutzstandards. Einfache Integration, responsives Design und flexible Einstellungen.',
                'hero.btn.start': 'Loslegen',
                'hero.btn.demo': 'Demo ansehen',
                'hero.btn.examples': 'Integrationsbeispiele',
                'hero.btn.github': 'GitHub',
                'hero.stat.size': 'Minimale Größe',
                'hero.stat.deps': 'Abhängigkeiten',
                'hero.stat.gdpr': 'DSGVO-Konformität',
                

                // Features
                'features.title': 'Funktionen',
                'features.description': 'Modernes Cookie-Banner mit 20+ Sprachunterstützung, automatischer Cookie-Blockierung und Konformität mit internationalen Datenschutzstandards',
                
                // Installation
                'install.title': 'Installation',
                'install.description': 'Integrieren Sie das Widget in wenigen Minuten',
                'install.tab.cdn': 'CDN',
                'install.tab.download': 'Herunterladen',
                'install.tab.integration': 'Integration',
                
                // Support
                'support.title': 'Projekt-Support',
                'support.description': 'Helfen Sie bei der Entwicklung des Projekts und erhalten Sie Unterstützung',
                'support.bug.title': 'Fehler melden',
                'support.bug.description': 'Einen Fehler gefunden oder einen Verbesserungsvorschlag?',
                'support.bug.link': 'Issue erstellen →',
                'support.coffee.title': 'Entwickler unterstützen',
                'support.coffee.description': 'Kaufen Sie mir einen Kaffee und unterstützen Sie die weitere Projektentwicklung',
                'support.coffee.link': 'Buy me a coffee →',
                'support.docs.title': 'Dokumentation',
                'support.docs.description': 'Detaillierte Dokumentation und Verwendungsbeispiele',
                'support.docs.link': 'Dokumentation lesen →',
                
                // Demo Browser
                'demo.browser.url': 'https://ihrewebsite.com',
                'demo.browser.title': 'Ihre Website',
                'demo.banner.title': 'Verwendung von Cookies',
                'demo.banner.description': 'Wir verwenden Cookies zur Verbesserung der Website-Funktionalität...',
                'demo.banner.settings': 'Einstellungen',
                'demo.banner.accept': 'Akzeptieren',
                'demo.try': 'Widget ausprobieren',
                
                // License
                'license.title': 'Offene Lizenz',
                'license.description': 'Das Projekt wird unter der MIT-Lizenz vertrieben. Sie können den Code frei in kommerziellen und nicht-kommerziellen Projekten verwenden, modifizieren und verteilen.',
                'license.link': 'Lizenz lesen',
                
                // Documentation cards
                'docs.quickstart.title': 'Schnellstart',
                'docs.quickstart.description': 'Schritt-für-Schritt-Anleitung zur Integration des Widgets auf Ihrer Website',
                'docs.quickstart.link': 'Lesen →',
                'docs.config.title': 'Konfiguration',
                'docs.config.description': 'Wie Sie das Widget für Ihre Anforderungen und Website-Design konfigurieren',
                'docs.config.link': 'Lesen →',
                'docs.api.title': 'API',
                'docs.api.description': 'Referenz für Methoden und Ereignisse zur programmatischen Steuerung',
                'docs.api.link': 'Lesen →',
                'docs.compliance.title': 'Rechtliche Konformität',
                'docs.compliance.description': 'Wie das Widget DSGVO und rechtliche Konformität gewährleistet',
                'docs.compliance.link': 'Lesen →',
                
                // Installation tabs
                'install.cdn.title': 'CDN-Integration',
                'install.cdn.description': 'Der einfachste Weg - Dateien direkt von https://cookies-widget-sergioplay.vercel.app/ verbinden:',
                'install.download.title': 'Dateien herunterladen',
                'install.download.description': 'Laden Sie Dateien herunter und platzieren Sie sie auf Ihrem Server:',
                'install.integration.title': 'Integration mit beliebten Plattformen',
                'install.integration.description': 'Integrationsbeispiele mit verschiedenen CMS und Frameworks:',
                'install.example.title': 'Integrationsbeispiel',
                
                // Footer
                'footer.description': 'Modernes Cookie-Banner-Widget mit DSGVO-Konformität',
                'footer.project': 'Projekt',
                'footer.documentation': 'Dokumentation',
                'footer.support': 'Support',
                'footer.settings': 'Cookie-Einstellungen',
                'footer.copyright': 'Unter MIT-Lizenz verteilt.',
                
                // Language Selector
                'lang.select': 'Sprache wählen',
                'lang.auto': 'Automatisch erkennen',
                
                // Documentation
                'docs.title': 'Cookie Widget Dokumentation',
                'docs.subtitle': 'Vollständige Anleitung für Integration, Konfiguration und Verwendung von Cookie Widget für DSGVO, CCPA, LGPD Konformität und andere internationale Datenschutzstandards',
                'docs.nav.quickstart': 'Schnellstart',
                'docs.nav.installation': 'Installation',
                'docs.nav.configuration': 'Konfiguration',
                'docs.nav.api': 'API Referenz',
                'docs.nav.customization': 'Text-Anpassung',
                'docs.nav.events': 'Ereignisse',
                'docs.nav.examples': 'Beispiele',
                'docs.nav.compliance': 'Rechtliche Konformität',
                'docs.nav.troubleshooting': 'Fehlerbehebung',
                
                // Documentation content
                'docs.quickstart.title': '🚀 Schnellstart',
                'docs.quickstart.description': 'Integrieren Sie Cookie Widget in 2 Minuten auf Ihrer Website und erhalten Sie vollständige Konformität mit internationalen Datenschutzstandards:',
                'docs.quickstart.features': '✨ Neue Funktionen in Version 3.0',
                'docs.quickstart.features.description': 'Automatische Cookie-Blockierung, 20+ Sprachen, API für Textanpassung, Adblocker-Schutz, Integration mit GA4 und Yandex.Metrica',
                'docs.quickstart.step1': '1. Dateien verbinden',
                'docs.quickstart.step2': '2. Fertig!',
                'docs.quickstart.step3': '3. Zusätzliche Konfiguration (optional)',
                'docs.quickstart.auto.region': 'Region erkennen',
                'docs.quickstart.auto.region.description': 'Automatische Erkennung des Benutzerstandorts und Anwendung entsprechender Gesetzesanforderungen (DSGVO, CCPA, 152-FZ, LGPD usw.)',
                'docs.quickstart.auto.language': 'Sprache wählen',
                'docs.quickstart.auto.language.description': 'Browser-Sprache aus 20+ unterstützten Sprachen erkennen, einschließlich Russisch, Englisch, Deutsch, Französisch, Chinesisch',
                'docs.quickstart.auto.blocking': 'Cookies blockieren',
                'docs.quickstart.auto.blocking.description': 'Alle unerwünschten Cookies vor Zustimmung blockieren und abgelehnte Cookies automatisch löschen',
                'docs.quickstart.auto.responsive': 'Anpassen',
                'docs.quickstart.auto.responsive.description': 'Korrekte Anzeige auf allen Geräten und Bildschirmen mit modernem responsivem Design',
                
                // Interface elements
                'ui.copy': 'Kopieren',
                'ui.copied': 'Kopiert!',
                'ui.read_more': 'Lesen →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Menü',
                'ui.close': 'Schließen',
                
                // Documentation sections
                'docs.description.setup': 'Detaillierte Anleitung für Konfiguration und Verwendung',
                'docs.stats.size': 'Minimale Größe',
                'docs.stats.languages': 'Sprachunterstützung',
                'docs.stats.laws': 'Gesetzeskonformität',
                'docs.stats.dependencies': 'Abhängigkeiten',
                'docs.contents': 'Inhalt',
                
                // Installation section details
                'install.wordpress.title': 'WordPress',
                'install.react.title': 'React/Next.js',
                'install.react.file': '_app.js oder layout.js',
                'install.functions.file': 'functions.php',
                
                // Footer links
                'footer.releases': 'Releases',
                'footer.license': 'Lizenz',
                'footer.installation': 'Installation',
                'footer.guide': 'Anleitung',
                'footer.examples': 'Beispiele',
                'footer.issues': 'Issues',
                'footer.support_dev': 'Unterstützen',
                'footer.social': 'Soziale Medien',
                'footer.install_app': 'App installieren',
                
                // Feature cards
                'feature.compliance.title': '🌍 Globale Konformität',
                'feature.compliance.description': 'Vollständige Konformität mit DSGVO, CCPA, LGPD, russischem 152-FZ, PIPEDA, PIPL, APPI, PIPA und anderen internationalen Datenschutzstandards mit automatischer Regionserkennung',
                'feature.languages.title': '🗣️ 20+ Sprachunterstützung',
                'feature.languages.description': 'Automatische Browser-Spracherkennung mit Unterstützung für Russisch, Englisch, Deutsch, Französisch, Spanisch, Chinesisch, Japanisch und andere Sprachen',
                'feature.blocking.title': '🛡️ Automatische Blockierung',
                'feature.blocking.description': 'Intelligentes Cookie-Blockierungssystem vor Zustimmung mit automatischer Löschung abgelehnter Cookies und Umgehungsschutz',
                'feature.responsive.title': '📱 Responsives Design',
                'feature.responsive.description': 'Modernes Design mit Verläufen und Animationen, perfekt funktionierend auf allen Geräten von Mobiltelefonen bis zu großen Monitoren',
                'feature.api.title': '🎨 Mächtige Anpassungs-API',
                'feature.api.description': 'Vollständige Anpassung von Texten, Links, Themen und Verhalten über JavaScript API. Unterstützung für Corporate Branding und zusätzliche Kategorien',
                'feature.performance.title': '⚡ Maximale Leistung',
                'feature.performance.description': 'Nur 5KB minifizierter Code, keine externen Abhängigkeiten, mit Adblocker-Schutz und Optimierung für maximale Ladegeschwindigkeit',
                'feature.analytics.title': '📊 Analytics-Integration',
                'feature.analytics.description': 'Fertige Beispiele für Integration mit Google Analytics 4, Yandex.Metrica, Facebook Pixel und anderen Analytics-Systemen mit Consent Mode Unterstützung',
                'feature.frameworks.title': '⚛️ Framework-Unterstützung',
                'feature.frameworks.description': 'Fertige Integrationsbeispiele für React, Vue.js, Next.js, Nuxt.js, WordPress und andere beliebte Frameworks und CMS mit TypeScript-Unterstützung',
                
                // Tools page
                'nav.tools': 'Werkzeuge',
                'tools.title': 'Webmaster-Werkzeuge',
                'tools.subtitle': 'Nützliche Werkzeuge für Cookie-Analyse, DSGVO-Konformitätsprüfung und Cookie-Banner-Tests. Alle Werkzeuge arbeiten lokal in Ihrem Browser und senden keine Daten an den Server.',
                
                // Cookie Analyzer
                'tools.analyzer.title': 'Cookie-Analysator',
                'tools.analyzer.description': 'Analysieren Sie alle Cookies auf der aktuellen Website, überprüfen Sie deren Typen, Ablaufzeiten und DSGVO-Konformitätsanforderungen.',
                'tools.analyzer.feature1': 'Liste aller Cookies auf der Website',
                'tools.analyzer.feature2': 'Klassifizierung nach Typen (notwendig, funktional, analytisch)',
                'tools.analyzer.feature3': 'Überprüfung von Ablaufzeiten und Sicherheit',
                'tools.analyzer.feature4': 'DSGVO-Konformität jedes Cookies',
                'tools.analyzer.button': 'Cookies analysieren',
                
                // GDPR Checker
                'tools.gdpr.title': 'DSGVO-Prüfung',
                'tools.gdpr.description': 'Überprüfen Sie die Konformität Ihrer Website mit DSGVO, CCPA, 152-FZ und anderen Datenschutzgesetzen.',
                'tools.gdpr.feature1': 'Überprüfung auf Cookie-Banner-Vorhandensein',
                'tools.gdpr.feature2': 'Datenschutzrichtlinien-Analyse',
                'tools.gdpr.feature3': 'Überprüfung der Cookie-Blockierung vor Zustimmung',
                'tools.gdpr.feature4': 'Internationale Standards-Konformität',
                'tools.gdpr.url.label': 'Zu überprüfende URL:',
                'tools.gdpr.url.placeholder': 'https://example.com',
                'tools.gdpr.button': 'DSGVO prüfen',
                
                // Policy Generator
                'tools.policy.title': 'Cookie-Richtlinien-Generator',
                'tools.policy.description': 'Erstellen Sie eine professionelle Cookie-Nutzungsrichtlinie für Ihre Website unter Berücksichtigung aller DSGVO-Anforderungen.',
                'tools.policy.feature1': 'Fertige Vorlagen für verschiedene Website-Typen',
                'tools.policy.feature2': 'DSGVO-kompatible Formulierungen',
                'tools.policy.feature3': 'Mehrsprachige Unterstützung',
                'tools.policy.feature4': 'Export nach HTML und PDF',
                'tools.policy.company.label': 'Firmenname:',
                'tools.policy.company.placeholder': 'Ihr Unternehmen',
                'tools.policy.website.label': 'Website:',
                'tools.policy.website.placeholder': 'https://example.com',
                'tools.policy.email.label': 'Kontakt-E-Mail:',
                'tools.policy.email.placeholder': 'contact@example.com',
                'tools.policy.button': 'Richtlinie erstellen',
                
                // Banner Tester
                'tools.tester.title': 'Cookie-Banner-Tester',
                'tools.tester.description': 'Testen Sie verschiedene Cookie-Widget-Einstellungen und sehen Sie, wie sie auf Ihrer Website aussehen werden.',
                'tools.tester.feature1': 'Vorschau verschiedener Themen',
                'tools.tester.feature2': 'Testen von Banner-Positionen',
                'tools.tester.feature3': 'Überprüfung in verschiedenen Sprachen',
                'tools.tester.feature4': 'Mobile Responsivität',
                'tools.tester.theme.label': 'Thema:',
                'tools.tester.theme.modern': 'Modern',
                'tools.tester.theme.classic': 'Klassisch',
                'tools.tester.theme.dark': 'Dunkel',
                'tools.tester.theme.minimal': 'Minimal',
                'tools.tester.position.label': 'Position:',
                'tools.tester.position.bottom': 'Unten',
                'tools.tester.position.top': 'Oben',
                'tools.tester.position.center': 'Mitte',
                'tools.tester.button': 'Test anzeigen',
                'tools.tester.reset': 'Zurücksetzen',
                
                // Consent Simulator
                'tools.simulator.title': 'Zustimmungs-Simulator',
                'tools.simulator.description': 'Simulieren Sie verschiedene Benutzerzustimmungsszenarien und überprüfen Sie, wie Ihre Website auf verschiedene Entscheidungen reagiert.',
                'tools.simulator.feature1': 'Simulation von Akzeptieren/Ablehnen von Cookies',
                'tools.simulator.feature2': 'Testen teilweiser Zustimmung',
                'tools.simulator.feature3': 'Überprüfung der Skript-Blockierung',
                'tools.simulator.feature4': 'Zustimmungsereignis-Analyse',
                'tools.simulator.scenario.label': 'Szenario:',
                'tools.simulator.scenario.accept': 'Alle akzeptieren',
                'tools.simulator.scenario.decline': 'Alle ablehnen',
                'tools.simulator.scenario.partial': 'Teilweise Zustimmung',
                'tools.simulator.scenario.analytics': 'Nur Analytik',
                'tools.simulator.button': 'Simulation starten',
                
                // Performance Monitor
                'tools.performance.title': 'Leistungsmonitor',
                'tools.performance.description': 'Verfolgen Sie die Auswirkungen des Cookie-Widgets auf die Leistung Ihrer Website und optimieren Sie das Laden.',
                'tools.performance.feature1': 'Widget-Ladezeit',
                'tools.performance.feature2': 'Auswirkungen auf Core Web Vitals',
                'tools.performance.feature3': 'Größe der geladenen Dateien',
                'tools.performance.feature4': 'Optimierungsempfehlungen',
                'tools.performance.button': 'Leistung messen',
                
                // Example cards
                'example.react.title': '⚛️ React / Next.js',
                'example.react.description': 'Moderne Integration für React-Anwendungen mit TypeScript-Unterstützung',
                'example.vue.title': '🟢 Vue.js / Nuxt.js',
                'example.vue.description': 'Integration für Vue-Ökosystem mit Composition API',
                'example.wordpress.title': '📝 WordPress',
                'example.wordpress.description': 'Einfache WordPress-Integration mit Admin-Panel',
                'example.ga4.title': '📊 Google Analytics 4',
                'example.ga4.description': 'Vollständige GA4-Integration und Event-Management',
                'example.yandex.title': '📈 Yandex.Metrica',
                'example.yandex.description': 'Integration mit russischem Analytics-System',
                'example.corporate.title': '🏢 Unternehmenslösungen',
                'example.corporate.description': 'Konfiguration für große Unternehmen und Konzerne',
                
                // Documentation sections - detailed
                'docs.quickstart.step2.description': 'Cookie-Banner automatisch:',
                'docs.installation.title': '📦 Installation',
                'docs.installation.cdn.title': 'CDN (Empfohlen)',
                'docs.installation.cdn.description': 'Der einfachste Weg - verwenden Sie unser CDN:',
                'docs.installation.local.title': 'Lokale Installation',
                'docs.installation.local.description': 'Dateien herunterladen und auf Ihrem Server platzieren:',
                'docs.installation.platforms.title': 'Integration mit beliebten Plattformen',
                'docs.configuration.title': '⚙️ Konfiguration',
                'docs.configuration.basic.title': 'Grundkonfiguration',
                'docs.api.title': '📚 API Referenz',
                'docs.api.methods.title': 'Hauptmethoden',
                'docs.api.show.description': 'Cookie-Banner anzeigen',
                'docs.api.hide.description': 'Cookie-Banner ausblenden',
                'docs.api.getSettings.description': 'Aktuelle Cookie-Einstellungen abrufen',
                'docs.api.setSettings.description': 'Cookie-Einstellungen festlegen',
                'docs.api.reset.description': 'Alle Einstellungen zurücksetzen und Banner erneut anzeigen',
                'docs.api.getLanguage.description': 'Aktuelle Oberflächensprache abrufen',
                'docs.api.getVersion.description': 'Cookie Widget Version abrufen',
                'docs.api.getAllTexts.description': 'Alle Oberflächentexte abrufen (einschließlich benutzerdefinierte)',
                'docs.api.setTheme.description': 'Theme festlegen',
                'docs.api.setPosition.description': 'Banner-Position festlegen',
                'docs.tip.title': '💡 Tipp',
                'docs.tip.description': 'Für zusätzliche Anpassungen verwenden Sie die mächtige JavaScript API. Alle Texte, Links, Themes und Verhalten können programmatisch geändert werden. Schauen Sie sich die erweiterten Beispiele unten für Integration mit Google Analytics 4, Yandex.Metrica, React und Unternehmenseinstellungen an.',
                'docs.warning.title': '⚠️ Wichtig für Entwickler',
                'docs.warning.description': 'Cookie Widget blockiert automatisch alle Cookies vor Zustimmung. Stellen Sie sicher, dass Ihre Analytics- und Marketing-Skripte nur nach dem cookieConsentAccepted-Ereignis geladen werden.',
                
                // Examples page - detailed
                'examples.react.integration.title': '⚛️ React / Next.js Integration',
                'examples.react.integration.description': 'Vollständiges Beispiel der Cookie Widget Integration in React-Anwendung mit TypeScript:',
                'examples.vue.integration.title': '🟢 Vue.js / Nuxt.js Integration',
                'examples.vue.integration.description': 'Integrationsbeispiel mit Vue.js unter Verwendung der Composition API:',
                'examples.wordpress.integration.title': '📝 WordPress Integration',
                'examples.wordpress.integration.description': 'Einfache Cookie Widget Integration in WordPress Theme oder Plugin:',
                'examples.ga4.integration.title': '📊 Google Analytics 4 Integration',
                'examples.ga4.integration.description': 'Vollständige Integration mit Google Analytics 4 mit Zustimmungsverwaltung:',
                'examples.basic.title': '🚀 Grundintegration',
                'examples.basic.description': 'Der einfachste Weg, das Widget mit Ihrer Website zu verbinden',
                'examples.ga4.simple.title': '📊 Google Analytics 4',
                'examples.ga4.simple.description': 'Integration mit Google Analytics unter Berücksichtigung der Benutzerzustimmung',
                'examples.yandex.simple.title': '📈 Yandex.Metrica',
                'examples.yandex.simple.description': 'Integration mit Yandex.Metrica mit bedingtem Laden',
                'examples.wordpress.simple.title': '🔌 WordPress',
                'examples.wordpress.simple.description': 'WordPress-Integration über functions.php',
                'examples.react.simple.title': '⚛️ React',
                'examples.react.simple.description': 'Verwendung in React-Anwendung',
                'examples.vue.simple.title': '💚 Vue.js',
                'examples.vue.simple.description': 'Integration in Vue.js-Anwendung',
                'examples.customization.title': '🎨 Stil-Anpassung',
                'examples.customization.description': 'Aussehen für Ihr Design anpassen',
                'examples.page.title': 'Integrationsbeispiele',
                'examples.page.description': 'Fertige Beispiele für schnelle Cookie Widget Integration in Ihr Projekt',
                'examples.back.link': 'Zurück zur Hauptseite',
                'examples.back.main': 'Zur Hauptseite zurückkehren'
            },
            
            'uk': {
                // Navigation
                'nav.features': 'Можливості',
                'nav.installation': 'Встановлення',
                'nav.docs': 'Документація',
                'nav.examples': 'Приклади',
                'nav.support': 'Підтримка',
                
                // Hero Section
                'hero.title.main': 'Cookie Widget',
                'hero.title.sub': 'Сумісний з GDPR та глобальними правилами конфіденційності',
                'hero.description': 'Сучасний та красивий віджет банера cookie з повною підтримкою GDPR, CCPA, LGPD, 152-ФЗ РФ та міжнародних стандартів захисту даних. Легка інтеграція, адаптивний дизайн та гнучкі налаштування.',
                'hero.btn.start': 'Почати використання',
                'hero.btn.demo': 'Переглянути демо',
                'hero.btn.examples': 'Приклади інтеграції',
                'hero.btn.github': 'GitHub',
                'hero.stat.size': 'Мінімальний розмір',
                'hero.stat.deps': 'Залежностей',
                'hero.stat.features': 'Унікальних функцій',
                
                // Advanced Features v3.3
                'advanced.title': '🚀 Ексклюзивні функції',
                'advanced.description': 'Унікальні можливості, яких немає у конкурентів. Спробуйте їх прямо зараз!',
                
                // Demo features
                'demo.smart.title': 'Smart Auto-Detect',
                'demo.smart.description': 'Автоматичне виявлення трекерів на сторінці',
                'demo.smart.status.scanning': 'Сканування...',
                'demo.seo.title': 'SEO-Friendly режим',
                'demo.seo.description': 'Виявлення ботів та пошукових роботів',
                'demo.seo.status.checking': 'Перевірка...',
                'demo.guard.title': 'Script Guard',
                'demo.guard.description': 'Блокування скриптів до згоди',
                'demo.integrations.title': 'Хаб інтеграцій',
                'demo.integrations.description': 'Готові конфігурації для популярних сервісів',
                'demo.new_badge': 'НОВЕ',
                
                // New Advanced Security Features Demo
                'demo.iframe.title': 'Блокувальник iFrame',
                'demo.iframe.description': 'Блокує YouTube/TikTok/Карти без згоди',
                'demo.iframe.status.scanning': 'Сканування iframe...',
                'demo.iframe.status.blocked': 'iframe заблоковано',
                
                'demo.scanner.title': 'Сканер скриптів',
                'demo.scanner.description': 'Аналізує скрипти як CookieBot локально',
                'demo.scanner.status.analyzing': 'Аналіз скриптів...',
                'demo.scanner.status.found': 'скриптів знайдено',
                
                'demo.sandbox.title': 'Безпечна пісочниця',
                'demo.sandbox.description': 'Ізольоване середовище виконання скриптів',
                'demo.sandbox.status.testing': 'Тестування пісочниці...',
                'demo.sandbox.status.ready': 'Пісочниця готова',
                
                'demo.lazy.title': 'Лінива захист скриптів',
                'demo.lazy.description': 'Блокує deferred/async до згоди',
                'demo.lazy.status.monitoring': 'Моніторинг скриптів...',
                'demo.lazy.status.blocked': 'скриптів у черзі',
                
                // Feature translations for new security systems
                'feature.iframe-blocker.title': '🚫 Блокувальник iFrame',
                'feature.iframe-blocker.description': 'Автоматично блокує YouTube, TikTok, Google Maps та інші iframe, які встановлюють cookie без згоди користувача. Показує заглушки з запитом згоди.',
                
                'feature.script-scanner.title': '🔍 Сканер скриптів',
                'feature.script-scanner.description': 'Аналізує всі скрипти сторінки як CookieBot, але локально. Виявляє патерни встановлення cookie, класифікує за категоріями та надає детальні звіти.',
                
                'feature.secure-sandbox.title': '🏖️ Безпечна пісочниця',
                'feature.secure-sandbox.description': 'Виконує скрипти в ізольованих sandbox iframe з обмеженим доступом до API. Революційний підхід до безпеки, який майже ніхто не реалізує.',
                
                'feature.lazy-script-guard.title': '⏳ Лінива захист скриптів',
                'feature.lazy-script-guard.description': 'Блокує deferred та async скрипти до отримання згоди користувача. Запобігає фоновому виконанню скриптів під час завантаження сторінки.',
                
                // Advanced CTA
                'advanced.cta.button': '🎮 Спробувати всі функції',
                'advanced.cta.note': 'Інтерактивна демонстрація всіх ексклюзивних функцій',
                
                // Feature cards - new v3.3 features
                'feature.smart-detect.title': '🧠 Smart Auto-Detect Tracking',
                'feature.smart-detect.description': 'Автоматичне виявлення 20+ трекерів: Google Analytics, Meta Pixel, Yandex Metrica, TikTok Pixel. Сканування DOM, мережевих запитів та cookies з категоризацією за типами.',
                'feature.seo-friendly.title': '🔍 SEO-Friendly режим',
                'feature.seo-friendly.description': 'Пошукові боти бачать сайт як такий, що прийняв всі cookie для кращого індексування. Виявлення GoogleBot, YandexBot, BingBot через user-agent та індикатори автоматизації.',
                'feature.integrations.title': '🤝 Хаб інтеграцій',
                'feature.integrations.description': 'Готові конфігурації для Google Tag Manager, Yandex Metrica, Meta Pixel, TikTok Pixel, reCAPTCHA v3, Cloudflare Turnstile. Інтеграція без налаштувань.',
                'feature.script-guard.title': '🔒 Script Guard',
                'feature.script-guard.description': 'Блокування Analytics та Marketing скриптів до завантаження сторінки через proxy-заглушки. Захист від виконання трекерів без згоди користувача.',
                'feature.zero-reload.title': '🚀 Zero-Reload режим',
                'feature.zero-reload.description': 'Увімкнення/вимкнення трекерів без перезавантаження сторінки. Миттєва активація скриптів після отримання згоди через систему черг.',
                'feature.auto-renew.title': '🔄 Auto-Renew Consent',
                'feature.auto-renew.description': 'Автоматичне поновлення згоди через 3/6/12 місяців або при зміні політики. Відповідність GDPR з відстеженням версій політики конфіденційності.',
                'feature.secure-storage.title': '🔐 Secure Storage',
                'feature.secure-storage.description': 'Зберігання згоди в localStorage, sessionStorage, IndexedDB та cookies. Працює навіть у "анти-cookie" браузерах з повним блокуванням cookies.',

                // Features
                'features.title': 'Можливості',
                'features.description': 'Сучасний банер cookie з підтримкою 20+ мов, автоматичним блокуванням cookie та відповідністю міжнародним стандартам захисту даних',
                
                // Installation
                'install.title': 'Встановлення',
                'install.description': 'Інтегруйте віджет на свій сайт за кілька хвилин',
                'install.tab.cdn': 'CDN',
                'install.tab.download': 'Завантажити',
                'install.tab.integration': 'Інтеграція',
                
                // Support
                'support.title': 'Підтримка проекту',
                'support.description': 'Допоможіть розвитку проекту та отримайте підтримку',
                'support.bug.title': 'Повідомити про помилку',
                'support.bug.description': 'Знайшли баг або маєте пропозицію щодо покращення?',
                'support.bug.link': 'Створити Issue →',
                'support.coffee.title': 'Підтримати розробника',
                'support.coffee.description': 'Купіть мені каву та підтримайте подальший розвиток проекту',
                'support.coffee.link': 'Buy me a coffee →',
                'support.docs.title': 'Документація',
                'support.docs.description': 'Детальна документація та приклади використання',
                'support.docs.link': 'Читати документацію →',
                
                // Demo Browser
                'demo.browser.url': 'https://yoursite.com',
                'demo.browser.title': 'Ваш сайт',
                'demo.banner.title': 'Використання файлів cookie',
                'demo.banner.description': 'Ми використовуємо cookie для покращення роботи сайту...',
                'demo.banner.settings': 'Налаштування',
                'demo.banner.accept': 'Прийняти',
                'demo.try': 'Спробувати віджет',
                
                // License
                'license.title': 'Відкрита ліцензія',
                'license.description': 'Проект розповсюджується під ліцензією MIT. Ви можете вільно використовувати, модифікувати та розповсюджувати код у комерційних та некомерційних проектах.',
                'license.link': 'Читати ліцензію',
                
                // Documentation cards
                'docs.quickstart.title': 'Швидкий старт',
                'docs.quickstart.description': 'Покрокове керівництво з інтеграції віджета на ваш сайт',
                'docs.quickstart.link': 'Читати →',
                'docs.config.title': 'Налаштування',
                'docs.config.description': 'Як налаштувати віджет під ваші вимоги та дизайн сайту',
                'docs.config.link': 'Читати →',
                'docs.api.title': 'API',
                'docs.api.description': 'Довідник з методів та подій для програмного управління',
                'docs.api.link': 'Читати →',
                'docs.compliance.title': 'Відповідність законам',
                'docs.compliance.description': 'Як віджет забезпечує відповідність GDPR та 152-ФЗ',
                'docs.compliance.link': 'Читати →',
                
                // Installation tabs
                'install.cdn.title': 'Підключення через CDN',
                'install.cdn.description': 'Найпростіший спосіб - підключити файли напряму з https://cookies-widget-sergioplay.vercel.app/:',
                'install.download.title': 'Завантажити файли',
                'install.download.description': 'Завантажте файли та розмістіть їх на своєму сервері:',
                'install.integration.title': 'Інтеграція з популярними платформами',
                'install.integration.description': 'Приклади інтеграції з різними CMS та фреймворками:',
                'install.example.title': 'Приклад інтеграції',
                
                // Footer
                'footer.description': 'Сучасний віджет банера cookie з підтримкою GDPR та 152-ФЗ РФ',
                'footer.project': 'Проект',
                'footer.documentation': 'Документація',
                'footer.support': 'Підтримка',
                'footer.settings': 'Налаштування Cookie',
                'footer.copyright': 'Розповсюджується під ліцензією MIT.',
                
                // Language Selector
                'lang.select': 'Оберіть мову',
                'lang.auto': 'Автовизначення',
                
                // Documentation
                'docs.title': 'Документація Cookie Widget',
                'docs.subtitle': 'Повне керівництво з інтеграції, налаштування та використання Cookie Widget для дотримання GDPR, CCPA, 152-ФЗ РФ та інших міжнародних стандартів захисту даних',
                'docs.nav.quickstart': 'Швидкий старт',
                'docs.nav.installation': 'Встановлення',
                'docs.nav.configuration': 'Конфігурація',
                'docs.nav.api': 'API Reference',
                'docs.nav.customization': 'Кастомізація тексту',
                'docs.nav.events': 'Події',
                'docs.nav.examples': 'Приклади',
                'docs.nav.compliance': 'Відповідність законам',
                'docs.nav.troubleshooting': 'Вирішення проблем',
                
                // Documentation content
                'docs.quickstart.title': '🚀 Швидкий старт',
                'docs.quickstart.description': 'Інтегруйте Cookie Widget на ваш сайт за 2 хвилини та отримайте повну відповідність міжнародним стандартам захисту даних:',
                'docs.quickstart.features': '✨ Нові можливості у версії 3.0',
                'docs.quickstart.features.description': 'Автоматичне блокування cookie, 20+ мов, API для кастомізації тексту, захист від блокувальників реклами, інтеграція з GA4 та Яндекс.Метрикою',
                'docs.quickstart.step1': '1. Підключіть файли',
                'docs.quickstart.step2': '2. Готово!',
                'docs.quickstart.step3': '3. Додаткове налаштування (опціонально)',
                'docs.quickstart.auto.region': 'Визначить регіон',
                'docs.quickstart.auto.region.description': 'Автоматично визначить місцезнаходження користувача та застосує відповідні вимоги законів (GDPR, CCPA, 152-ФЗ, LGPD тощо)',
                'docs.quickstart.auto.language': 'Оберіть мову',
                'docs.quickstart.auto.language.description': 'Визначить мову браузера з 20+ підтримуваних мов включаючи українську, російську, англійську, німецьку, французьку, китайську',
                'docs.quickstart.auto.blocking': 'Заблокує cookie',
                'docs.quickstart.auto.blocking.description': 'Заблокує всі небажані cookie до отримання згоди та автоматично видалить відхилені cookie',
                'docs.quickstart.auto.responsive': 'Адаптується',
                'docs.quickstart.auto.responsive.description': 'Відобразиться коректно на всіх пристроях та екранах з сучасним адаптивним дизайном',
                
                // Interface elements
                'ui.copy': 'Копіювати',
                'ui.copied': 'Скопійовано!',
                'ui.read_more': 'Читати →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Меню',
                'ui.close': 'Закрити',
                
                // Documentation sections
                'docs.description.setup': 'Детальне керівництво з налаштування та використання',
                'docs.stats.size': 'Мінімальний розмір',
                'docs.stats.languages': 'Мов підтримки', 
                'docs.stats.laws': 'Законів відповідності',
                'docs.stats.dependencies': 'Залежностей',
                'docs.contents': 'Зміст',
                
                // Installation section details
                'install.wordpress.title': 'WordPress',
                'install.react.title': 'React/Next.js',
                'install.react.file': '_app.js або layout.js',
                'install.functions.file': 'functions.php',
                
                // Footer links
                'footer.releases': 'Релізи',
                'footer.license': 'Ліцензія',
                'footer.installation': 'Встановлення',
                'footer.guide': 'Керівництво',
                'footer.examples': 'Приклади',
                'footer.issues': 'Issues',
                'footer.support_dev': 'Підтримати',
                'footer.install_app': 'Встановити додаток',
                
                // Examples page
                'examples.title': 'Приклади інтеграції',
                'examples.subtitle': 'Готові рішення для інтеграції Cookie Widget у популярні фреймворки, CMS та аналітичні системи. Копіюйте код та адаптуйте під ваші потреби.',
                'examples.demo.title': 'Жива демонстрація',
                'examples.demo.description': 'Спробуйте Cookie Widget в дії:',
                'examples.demo.show': 'Показати Cookie Банер',
                'examples.demo.reset': 'Скинути налаштування',
                'examples.demo.current': 'Поточні налаштування',
                
                // Feature cards
                'feature.compliance.title': '🌍 Глобальна відповідність',
                'feature.compliance.description': 'Повна відповідність GDPR, CCPA, LGPD, 152-ФЗ РФ, PIPEDA, PIPL, APPI, PIPA та іншим міжнародним стандартам захисту даних з автоматичним визначенням регіону',
                'feature.languages.title': '🗣️ 20+ мов підтримки',
                'feature.languages.description': 'Автоматичне визначення мови браузера з підтримкою української, російської, англійської, німецької, французької, іспанської, китайської, японської та інших мов',
                'feature.blocking.title': '🛡️ Автоматичне блокування',
                'feature.blocking.description': 'Інтелектуальна система блокування cookie до отримання згоди з автоматичним видаленням відхилених cookie та захистом від обходу',
                'feature.responsive.title': '📱 Адаптивний дизайн',
                'feature.responsive.description': 'Сучасний дизайн з градієнтами та анімаціями, ідеально працюючий на всіх пристроях від мобільних телефонів до великих моніторів',
                'feature.api.title': '🎨 Потужний API кастомізації',
                'feature.api.description': 'Повна кастомізація текстів, посилань, тем оформлення та поведінки через JavaScript API. Підтримка корпоративного брендингу та додаткових категорій',
                'feature.performance.title': '⚡ Максимальна продуктивність',
                'feature.performance.description': 'Всього 5KB мінімізованого коду, без зовнішніх залежностей, з захистом від блокувальників реклами та оптимізацією для максимальної швидкості завантаження',
                'feature.analytics.title': '📊 Інтеграція з аналітикою',
                'feature.analytics.description': 'Готові приклади інтеграції з Google Analytics 4, Яндекс.Метрикою, Facebook Pixel та іншими аналітичними системами з підтримкою Consent Mode',
                'feature.frameworks.title': '⚛️ Підтримка фреймворків',
                'feature.frameworks.description': 'Готові приклади інтеграції для React, Vue.js, Next.js, Nuxt.js, WordPress та інших популярних фреймворків і CMS з підтримкою TypeScript',
                
                // Example cards
                'example.react.title': '⚛️ React / Next.js',
                'example.react.description': 'Сучасна інтеграція для React додатків з підтримкою TypeScript',
                'example.vue.title': '🟢 Vue.js / Nuxt.js',
                'example.vue.description': 'Інтеграція для Vue екосистеми з композиційним API',
                'example.wordpress.title': '📝 WordPress',
                'example.wordpress.description': 'Проста інтеграція в WordPress з адмін панеллю',
                'example.ga4.title': '📊 Google Analytics 4',
                'example.ga4.description': 'Повна інтеграція з GA4 та управління подіями',
                'example.yandex.title': '📈 Яндекс.Метрика',
                'example.yandex.description': 'Інтеграція з російською системою аналітики',
                'example.corporate.title': '🏢 Корпоративні рішення',
                'example.corporate.description': 'Налаштування для великих компаній та корпорацій',
                
                // Documentation sections - detailed
                'docs.quickstart.step2.description': 'Cookie банер автоматично:',
                'docs.installation.title': '📦 Встановлення',
                'docs.installation.cdn.title': 'CDN (Рекомендується)',
                'docs.installation.cdn.description': 'Найпростіший спосіб - використовувати наш CDN:',
                'docs.installation.local.title': 'Локальне встановлення',
                'docs.installation.local.description': 'Завантажте файли та розмістіть їх на вашому сервері:',
                'docs.installation.local.download.css': 'Завантажити CSS',
                'docs.installation.local.download.js': 'Завантажити JS',
                'docs.installation.platforms.title': 'Інтеграція з популярними платформами',
                'docs.configuration.title': '⚙️ Конфігурація',
                'docs.configuration.basic.title': 'Базова конфігурація',
                'docs.configuration.basic.description': 'Створення з користувацькими налаштуваннями',
                'docs.configuration.options.autoShow': 'Автоматично показувати банер',
                'docs.configuration.options.theme': 'Тема оформлення',
                'docs.configuration.options.position': 'Позиція банера',
                'docs.configuration.options.privacyUrl': 'Посилання на політику конфіденційності',
                'docs.configuration.options.onAccept': 'Callback при прийнятті',
                'docs.configuration.options.onDecline': 'Callback при відхиленні',
                'docs.api.title': '📚 API Reference',
                'docs.api.methods.title': 'Основні методи',
                'docs.api.show.description': 'Показати cookie банер',
                'docs.api.hide.description': 'Сховати cookie банер',
                'docs.api.getSettings.description': 'Отримати поточні налаштування cookie',
                'docs.api.setSettings.description': 'Встановити налаштування cookie',
                'docs.api.reset.description': 'Скинути всі налаштування та показати банер знову',
                'docs.api.getLanguage.description': 'Отримати поточну мову інтерфейсу',
                'docs.api.getVersion.description': 'Отримати версію Cookie Widget',
                'docs.api.getAllTexts.description': 'Отримати всі тексти інтерфейсу (включаючи кастомні)',
                'docs.api.setTheme.description': 'Встановити тему оформлення',
                'docs.api.setPosition.description': 'Встановити позицію банера',
                'docs.api.setTexts.title': 'setTexts(texts)',
                'docs.api.setTexts.description': 'Кастомізація текстів інтерфейсу',
                'docs.api.customization.title': '🎨 Кастомізація тексту',
                'docs.api.customization.description': 'Повна кастомізація всіх текстів інтерфейсу',
                'docs.api.customization.example': 'Приклад кастомізації',
                'docs.api.events.title': '📡 Події',
                'docs.api.events.description': 'Cookie Widget генерує події для інтеграції з вашим кодом',
                'docs.api.events.initialized': 'Віджет ініціалізовано',
                'docs.api.events.shown': 'Банер показано',
                'docs.api.events.hidden': 'Банер сховано',
                'docs.api.events.accepted': 'Згоду прийнято',
                'docs.api.events.declined': 'Згоду відхилено',
                'docs.api.events.settingsChanged': 'Налаштування змінено',
                'docs.examples.title': '💼 Розширені приклади',
                'docs.examples.description': 'Готові рішення для популярних сценаріїв використання',
                'docs.examples.ga4.title': 'Google Analytics 4',
                'docs.examples.ga4.description': 'Продвинута інтеграція з Google Analytics 4',
                'docs.examples.yandex.title': 'Яндекс.Метрика',
                'docs.examples.yandex.description': 'Інтеграція з Яндекс.Метрикою з дотриманням 152-ФЗ',
                'docs.examples.react.title': 'React + TypeScript',
                'docs.examples.react.description': 'Компонент для React додатків з TypeScript',
                'docs.examples.corporate.title': 'Корпоративне налаштування',
                'docs.examples.corporate.description': 'Налаштування для великих компаній',
                'docs.compliance.title': '⚖️ Відповідність законам',
                'docs.compliance.description': 'Cookie Widget забезпечує відповідність міжнародним стандартам',
                'docs.compliance.gdpr.title': 'GDPR (Європа)',
                'docs.compliance.gdpr.description': 'Повна відповідність Загальному регламенту із захисту даних',
                'docs.compliance.ccpa.title': 'CCPA (Каліфорнія)',
                'docs.compliance.ccpa.description': 'Відповідність Каліфорнійському закону про захист прав споживачів',
                'docs.compliance.lgpd.title': 'LGPD (Бразилія)',
                'docs.compliance.lgpd.description': 'Відповідність Загальному закону про захист даних Бразилії',
                'docs.compliance.russia.title': '152-ФЗ (Росія)',
                'docs.compliance.russia.description': 'Відповідність російському закону про персональні дані',
                'docs.troubleshooting.title': '🔧 Вирішення проблем',
                'docs.troubleshooting.description': 'Часто зустрічаються проблеми та їх рішення',
                'docs.troubleshooting.not.showing.title': 'Банер не відображається',
                'docs.troubleshooting.not.showing.description': 'Перевірте ініціалізацію та консоль браузера',
                'docs.troubleshooting.not.blocking.title': 'Cookie не блокуються',
                'docs.troubleshooting.not.blocking.description': 'Переконайтеся, що скрипти завантажуються після згоди',
                'docs.troubleshooting.styles.title': 'Проблеми зі стилями',
                'docs.troubleshooting.styles.description': 'Перевірте підключення CSS файлу',
                'docs.tip.title': '💡 Порада',
                'docs.tip.description': 'Для додаткового налаштування використовуйте потужний JavaScript API. Всі тексти, посилання, теми та поведінку можна змінити програмно. Подивіться розширені приклади нижче для інтеграції з Google Analytics 4, Яндекс.Метрикою, React та корпоративних налаштувань.',
                'docs.warning.title': '⚠️ Важливо для розробників',
                'docs.warning.description': 'Cookie Widget автоматично блокує всі cookie до отримання згоди. Переконайтеся, що ваші аналітичні та маркетингові скрипти завантажуються тільки після події cookieConsentAccepted.',
                
                // Examples page - detailed
                'examples.react.integration.title': '⚛️ React / Next.js інтеграція',
                'examples.react.integration.description': 'Повний приклад інтеграції Cookie Widget в React додаток з TypeScript:',
                'examples.vue.integration.title': '🟢 Vue.js / Nuxt.js інтеграція',
                'examples.vue.integration.description': 'Приклад інтеграції з Vue.js використовуючи Composition API:',
                'examples.wordpress.integration.title': '📝 WordPress інтеграція',
                'examples.wordpress.integration.description': 'Проста інтеграція Cookie Widget в WordPress тему або плагін:',
                'examples.ga4.integration.title': '📊 Google Analytics 4 інтеграція',
                'examples.ga4.integration.description': 'Повна інтеграція з Google Analytics 4 з управлінням згодою:',
                'examples.basic.title': '🚀 Базова інтеграція',
                'examples.basic.description': 'Найпростіший спосіб підключити віджет до вашого сайту',
                'examples.ga4.simple.title': '📊 Google Analytics 4',
                'examples.ga4.simple.description': 'Інтеграція з Google Analytics з урахуванням згоди користувача',
                'examples.yandex.simple.title': '📈 Яндекс.Метрика',
                'examples.yandex.simple.description': 'Інтеграція з Яндекс.Метрикою з умовним завантаженням',
                'examples.wordpress.simple.title': '🔌 WordPress',
                'examples.wordpress.simple.description': 'Інтеграція в WordPress через functions.php',
                'examples.react.simple.title': '⚛️ React',
                'examples.react.simple.description': 'Використання в React додатку',
                'examples.vue.simple.title': '💚 Vue.js',
                'examples.vue.simple.description': 'Інтеграція в Vue.js додаток',
                'examples.customization.title': '🎨 Кастомізація стилів',
                'examples.customization.description': 'Налаштування зовнішнього вигляду під ваш дизайн',
                'examples.page.title': 'Приклади інтеграції',
                'examples.page.description': 'Готові приклади для швидкої інтеграції Cookie Widget у ваш проект',
                'examples.back.link': 'Назад до головної',
                'examples.back.main': 'Повернутися до головної сторінки',
                
                // Tools page
                'nav.tools': 'Інструменти',
                'tools.title': 'Інструменти для веб-майстрів',
                'tools.subtitle': 'Корисні інструменти для аналізу cookie, перевірки GDPR відповідності та тестування cookie банерів. Всі інструменти працюють локально у вашому браузері та не відправляють дані на сервер.',
                
                // Cookie Analyzer
                'tools.analyzer.title': 'Аналізатор Cookie',
                'tools.analyzer.description': 'Аналізуйте всі cookie на поточному сайті, перевіряйте їх типи, терміни дії та відповідність GDPR вимогам.',
                'tools.analyzer.feature1': 'Список всіх cookie на сайті',
                'tools.analyzer.feature2': 'Класифікація за типами (необхідні, функціональні, аналітичні)',
                'tools.analyzer.feature3': 'Перевірка термінів дії та безпеки',
                'tools.analyzer.feature4': 'GDPR відповідність кожного cookie',
                'tools.analyzer.button': 'Аналізувати Cookie',
                
                // GDPR Checker
                'tools.gdpr.title': 'GDPR Перевірка',
                'tools.gdpr.description': 'Перевірте відповідність вашого сайту вимогам GDPR, CCPA, 152-ФЗ та інших законів про захист даних.',
                'tools.gdpr.feature1': 'Перевірка наявності cookie банера',
                'tools.gdpr.feature2': 'Аналіз політики конфіденційності',
                'tools.gdpr.feature3': 'Перевірка блокування cookie до згоди',
                'tools.gdpr.feature4': 'Відповідність міжнародним стандартам',
                'tools.gdpr.url.label': 'URL для перевірки:',
                'tools.gdpr.url.placeholder': 'https://example.com',
                'tools.gdpr.button': 'Перевірити GDPR',
                
                // Policy Generator
                'tools.policy.title': 'Генератор Політики Cookie',
                'tools.policy.description': 'Створіть професійну політику використання cookie для вашого сайту з урахуванням всіх вимог GDPR.',
                'tools.policy.feature1': 'Готові шаблони для різних типів сайтів',
                'tools.policy.feature2': 'GDPR сумісні формулювання',
                'tools.policy.feature3': 'Підтримка кількох мов',
                'tools.policy.feature4': 'Експорт в HTML та PDF',
                'tools.policy.company.label': 'Назва компанії:',
                'tools.policy.company.placeholder': 'Ваша компанія',
                'tools.policy.website.label': 'Веб-сайт:',
                'tools.policy.website.placeholder': 'https://example.com',
                'tools.policy.email.label': 'Email для зв\'язку:',
                'tools.policy.email.placeholder': 'contact@example.com',
                'tools.policy.button': 'Створити Політику',
                
                // Banner Tester
                'tools.tester.title': 'Тестер Cookie Банерів',
                'tools.tester.description': 'Протестуйте різні налаштування Cookie Widget та подивіться, як вони будуть виглядати на вашому сайті.',
                'tools.tester.feature1': 'Попередній перегляд різних тем',
                'tools.tester.feature2': 'Тестування позицій банера',
                'tools.tester.feature3': 'Перевірка на різних мовах',
                'tools.tester.feature4': 'Мобільна адаптивність',
                'tools.tester.theme.label': 'Тема:',
                'tools.tester.theme.modern': 'Сучасна',
                'tools.tester.theme.classic': 'Класична',
                'tools.tester.theme.dark': 'Темна',
                'tools.tester.theme.minimal': 'Мінімальна',
                'tools.tester.position.label': 'Позиція:',
                'tools.tester.position.bottom': 'Знизу',
                'tools.tester.position.top': 'Зверху',
                'tools.tester.position.center': 'По центру',
                'tools.tester.button': 'Показати Тест',
                'tools.tester.reset': 'Скинути',
                
                // Consent Simulator
                'tools.simulator.title': 'Симулятор Згоди',
                'tools.simulator.description': 'Симулюйте різні сценарії згоди користувачів та перевірте, як ваш сайт реагує на різні вибори.',
                'tools.simulator.feature1': 'Симуляція прийняття/відхилення cookie',
                'tools.simulator.feature2': 'Тестування часткової згоди',
                'tools.simulator.feature3': 'Перевірка блокування скриптів',
                'tools.simulator.feature4': 'Аналіз подій згоди',
                'tools.simulator.scenario.label': 'Сценарій:',
                'tools.simulator.scenario.accept': 'Прийняти все',
                'tools.simulator.scenario.decline': 'Відхилити все',
                'tools.simulator.scenario.partial': 'Часткова згода',
                'tools.simulator.scenario.analytics': 'Тільки аналітика',
                'tools.simulator.button': 'Запустити Симуляцію',
                
                // Performance Monitor
                'tools.performance.title': 'Монітор Продуктивності',
                'tools.performance.description': 'Відстежуйте вплив Cookie Widget на продуктивність вашого сайту та оптимізуйте завантаження.',
                'tools.performance.feature1': 'Час завантаження віджета',
                'tools.performance.feature2': 'Вплив на Core Web Vitals',
                'tools.performance.feature3': 'Розмір завантажуваних файлів',
                'tools.performance.feature4': 'Рекомендації з оптимізації',
                'tools.performance.button': 'Виміряти Продуктивність',
                
                // Additional examples
                'examples.angular.title': '🅰️ Angular інтеграція',
                'examples.angular.description': 'Інтеграція Cookie Widget в Angular додаток з сервісом',
                'examples.svelte.title': '🧡 Svelte інтеграція',
                'examples.svelte.description': 'Проста інтеграція Cookie Widget в Svelte додаток',
                'examples.nuxt.title': '💚 Nuxt.js плагін',
                'examples.nuxt.description': 'Створення плагіна для автоматичної ініціалізації в Nuxt.js',
                'examples.drupal.title': '🔷 Drupal інтеграція',
                'examples.drupal.description': 'Створення модуля для Drupal з адмін панеллю',
                'examples.joomla.title': '🟠 Joomla інтеграція',
                'examples.joomla.description': 'Створення плагіна для Joomla CMS',
                'examples.bitrix.title': '🔶 1C-Bitrix інтеграція',
                'examples.bitrix.description': 'Інтеграція Cookie Widget в 1C-Bitrix через компонент',
                'examples.laravel.title': '🔴 Laravel інтеграція',
                'examples.laravel.description': 'Створення пакета для Laravel з middleware та сервіс-провайдером',
                'examples.django.title': '🐍 Django інтеграція',
                'examples.django.description': 'Створення Django додатка з middleware для Cookie Widget',
                'examples.shopify.title': '🛒 Shopify інтеграція',
                'examples.shopify.description': 'Інтеграція Cookie Widget в Shopify магазин',
                'examples.wix.title': '🎨 Wix інтеграція',
                'examples.wix.description': 'Додавання Cookie Widget на сайт Wix',
                'examples.squarespace.title': '⬜ Squarespace інтеграція',
                'examples.squarespace.description': 'Інтеграція Cookie Widget в Squarespace сайт',
                'examples.webflow.title': '🌊 Webflow інтеграція',
                'examples.webflow.description': 'Додавання Cookie Widget в Webflow проект',
                'examples.gtm.title': '📊 Google Tag Manager',
                'examples.gtm.description': 'Інтеграція через Google Tag Manager з умовним завантаженням тегів',
                'examples.facebook.title': '📘 Facebook Pixel',
                'examples.facebook.description': 'Інтеграція з Facebook Pixel з управлінням згодою',
                'examples.tiktok.title': '🎵 TikTok Pixel',
                'examples.tiktok.description': 'Інтеграція з TikTok Pixel для рекламних кампаній',
                'examples.hotjar.title': '🔥 Hotjar інтеграція',
                'examples.hotjar.description': 'Умовне завантаження Hotjar з дотриманням приватності',
                'examples.mixpanel.title': '📈 Mixpanel інтеграція',
                'examples.mixpanel.description': 'Інтеграція з Mixpanel аналітикою',
                'examples.amplitude.title': '📊 Amplitude інтеграція',
                'examples.amplitude.description': 'Інтеграція з Amplitude для продуктової аналітики',
                'nav.installation': 'Встановлення',
                'nav.docs': 'Документація',
                'nav.examples': 'Приклади',
                'nav.support': 'Підтримка',
                
                // Hero Section
                'hero.title.main': 'Cookie Widget',
                'hero.title.sub': 'GDPR & Global Privacy Compliant',
                'hero.description': 'Сучасний та красивий віджет cookie банера з повною підтримкою GDPR, CCPA, LGPD та підтримкою міжнародних стандартів захисту даних. Легка інтеграція, адаптивний дизайн та гнучкі налаштування.',
                'hero.btn.start': 'Почати',
                'hero.btn.demo': 'Переглянути демо',
                'hero.btn.examples': 'Приклади інтеграції',
                'hero.btn.github': 'GitHub',
                'hero.stat.size': 'Мінімальний розмір',
                'hero.stat.deps': 'Залежностей',
                'hero.stat.gdpr': 'Відповідність GDPR',
                

                // Features
                'features.title': 'Можливості',
                'features.description': 'Сучасний cookie банер з підтримкою 20+ мов, автоматичним блокуванням cookie та відповідністю міжнародним стандартам захисту даних',
                
                // Installation
                'install.title': 'Встановлення',
                'install.description': 'Інтегруйте віджет на свій сайт за кілька хвилин',
                'install.tab.cdn': 'CDN',
                'install.tab.download': 'Завантажити',
                'install.tab.integration': 'Інтеграція',
                
                // Support
                'support.title': 'Підтримка проекту',
                'support.description': 'Допоможіть розвитку проекту та отримайте підтримку',
                'support.bug.title': 'Повідомити про помилку',
                'support.bug.description': 'Знайшли баг або маєте пропозицію щодо покращення?',
                'support.bug.link': 'Створити Issue →',
                'support.coffee.title': 'Підтримати розробника',
                'support.coffee.description': 'Купіть мені каву та підтримайте подальший розвиток проекту',
                'support.coffee.link': 'Buy me a coffee →',
                'support.docs.title': 'Документація',
                'support.docs.description': 'Детальна документація та приклади використання',
                'support.docs.link': 'Читати документацію →',
                
                // Demo Browser
                'demo.browser.url': 'https://вашсайт.com',
                'demo.browser.title': 'Ваш веб-сайт',
                'demo.banner.title': 'Використання файлів cookie',
                'demo.banner.description': 'Ми використовуємо cookie для покращення функціональності сайту...',
                'demo.banner.settings': 'Налаштування',
                'demo.banner.accept': 'Прийняти',
                'demo.try': 'Спробувати віджет',
                
                // License
                'license.title': 'Відкрита ліцензія',
                'license.description': 'Проект розповсюджується під ліцензією MIT. Ви можете вільно використовувати, модифікувати та розповсюджувати код у комерційних та некомерційних проектах.',
                'license.link': 'Читати ліцензію',
                
                // Documentation cards
                'docs.quickstart.title': 'Швидкий старт',
                'docs.quickstart.description': 'Покрокове керівництво з інтеграції віджета на ваш сайт',
                'docs.quickstart.link': 'Читати →',
                'docs.config.title': 'Налаштування',
                'docs.config.description': 'Як налаштувати віджет відповідно до ваших вимог та дизайну сайту',
                'docs.config.link': 'Читати →',
                'docs.api.title': 'API',
                'docs.api.description': 'Довідник методів та подій для програмного керування',
                'docs.api.link': 'Читати →',
                'docs.compliance.title': 'Правова відповідність',
                'docs.compliance.description': 'Як віджет забезпечує відповідність GDPR та правовим вимогам',
                'docs.compliance.link': 'Читати →',
                
                // Installation tabs
                'install.cdn.title': 'CDN інтеграція',
                'install.cdn.description': 'Найпростіший спосіб - підключити файли безпосередньо з https://cookies-widget-sergioplay.vercel.app/:',
                'install.download.title': 'Завантажити файли',
                'install.download.description': 'Завантажте файли та розмістіть їх на вашому сервері:',
                'install.integration.title': 'Інтеграція з популярними платформами',
                'install.integration.description': 'Приклади інтеграції з різними CMS та фреймворками:',
                'install.example.title': 'Приклад інтеграції',
                
                // Footer
                'footer.description': 'Сучасний віджет cookie банера з підтримкою GDPR',
                'footer.project': 'Проект',
                'footer.documentation': 'Документація',
                'footer.support': 'Підтримка',
                'footer.settings': 'Налаштування Cookie',
                'footer.copyright': 'Розповсюджується під ліцензією MIT.',
                
                // Language Selector
                'lang.select': 'Оберіть мову',
                'lang.auto': 'Автовизначення',
                
                // Documentation
                'docs.title': 'Документація Cookie Widget',
                'docs.subtitle': 'Повний посібник з інтеграції, налаштування та використання Cookie Widget для відповідності GDPR, CCPA, LGPD та інших міжнародних стандартів захисту даних',
                'docs.nav.quickstart': 'Швидкий старт',
                'docs.nav.installation': 'Встановлення',
                'docs.nav.configuration': 'Конфігурація',
                'docs.nav.api': 'API довідник',
                'docs.nav.customization': 'Налаштування тексту',
                'docs.nav.events': 'Події',
                'docs.nav.examples': 'Приклади',
                'docs.nav.compliance': 'Правова відповідність',
                'docs.nav.troubleshooting': 'Вирішення проблем',
                
                // Examples page
                'examples.title': 'Приклади інтеграції',
                'examples.subtitle': 'Готові рішення для інтеграції Cookie Widget у популярні фреймворки, CMS та аналітичні системи. Копіюйте код та адаптуйте під ваші потреби.',
                'examples.demo.title': 'Жива демонстрація',
                'examples.demo.description': 'Спробуйте Cookie Widget в дії:',
                'examples.demo.show': 'Показати Cookie Банер',
                'examples.demo.reset': 'Скинути налаштування',
                'examples.demo.current': 'Поточні налаштування',
                
                // Feature cards
                'feature.compliance.title': '🌍 Глобальна відповідність',
                'feature.compliance.description': 'Повна відповідність GDPR, CCPA, LGPD, російському 152-ФЗ, PIPEDA, PIPL, APPI, PIPA та іншим міжнародним стандартам захисту даних з автоматичним визначенням регіону',
                'feature.languages.title': '🗣️ Підтримка 20+ мов',
                'feature.languages.description': 'Автоматичне визначення мови браузера з підтримкою російської, англійської, німецької, французької, іспанської, китайської, японської та інших мов',
                'feature.blocking.title': '🛡️ Автоматичне блокування',
                'feature.blocking.description': 'Інтелектуальна система блокування cookie до отримання згоди з автоматичним видаленням відхилених cookie та захистом від обходу',
                'feature.responsive.title': '📱 Адаптивний дизайн',
                'feature.responsive.description': 'Сучасний дизайн з градієнтами та анімаціями, ідеально працюючий на всіх пристроях від мобільних телефонів до великих моніторів',
                'feature.api.title': '🎨 Потужний API налаштування',
                'feature.api.description': 'Повне налаштування текстів, посилань, тем оформлення та поведінки через JavaScript API. Підтримка корпоративного брендингу та додаткових категорій',
                'feature.performance.title': '⚡ Максимальна продуктивність',
                'feature.performance.description': 'Всього 5KB мінімізованого коду, без зовнішніх залежностей, із захистом від блокувальників реклами та оптимізацією для максимальної швидкості завантаження',
                'feature.analytics.title': '📊 Інтеграція з аналітикою',
                'feature.analytics.description': 'Готові приклади інтеграції з Google Analytics 4, Яндекс.Метрикою, Facebook Pixel та іншими аналітичними системами з підтримкою Consent Mode',
                'feature.frameworks.title': '⚛️ Підтримка фреймворків',
                'feature.frameworks.description': 'Готові приклади інтеграції для React, Vue.js, Next.js, Nuxt.js, WordPress та інших популярних фреймворків і CMS з підтримкою TypeScript',
                
                // Example cards
                'example.react.title': '⚛️ React / Next.js',
                // Interface elements
                'ui.copy': 'Копіювати',
                'ui.copied': 'Скопійовано!',
                'ui.read_more': 'Читати →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Меню',
                'ui.close': 'Закрити',
                
                // Documentation sections
                'docs.description.setup': 'Детальний посібник з налаштування та використання',
                'docs.stats.size': 'Мінімальний розмір',
                'docs.stats.languages': 'Підтримка мов',
                'docs.stats.laws': 'Правова відповідність',
                'docs.stats.dependencies': 'Залежності',
                'docs.contents': 'Зміст',
                
                // Installation section details
                'install.wordpress.title': 'WordPress',
                'install.react.title': 'React/Next.js',
                'install.react.file': '_app.js або layout.js',
                'install.functions.file': 'functions.php',
                
                // Footer links
                'footer.releases': 'Релізи',
                'footer.license': 'Ліцензія',
                'footer.installation': 'Встановлення',
                'footer.guide': 'Посібник',
                'footer.examples': 'Приклади',
                'footer.issues': 'Issues',
                'footer.support_dev': 'Підтримати',
                'footer.install_app': 'Встановити додаток',
                
                // Example cards
                'example.react.title': '⚛️ React / Next.js',
                'example.react.description': 'Сучасна інтеграція для React додатків з підтримкою TypeScript',
                'example.vue.title': '🟢 Vue.js / Nuxt.js',
                'example.vue.description': 'Інтеграція для Vue екосистеми з композиційним API',
                'example.wordpress.title': '📝 WordPress',
                'example.wordpress.description': 'Проста інтеграція в WordPress з адмін панеллю',
                'example.ga4.title': '📊 Google Analytics 4',
                'example.ga4.description': 'Повна інтеграція з GA4 та управління подіями',
                'example.yandex.title': '📈 Яндекс.Метрика',
                'example.yandex.description': 'Інтеграція з російською системою аналітики',
                'example.corporate.title': '🏢 Корпоративні рішення',
                'example.corporate.description': 'Налаштування для великих компаній та корпорацій',
                
                // Documentation sections - detailed
                'docs.quickstart.step2.description': 'Cookie банер автоматично:',
                'docs.installation.title': '📦 Встановлення',
                'docs.installation.cdn.title': 'CDN (Рекомендується)',
                'docs.installation.cdn.description': 'Найпростіший спосіб - використовуйте наш CDN:',
                'docs.installation.local.title': 'Локальне встановлення',
                'docs.installation.local.description': 'Завантажте файли та розмістіть їх на вашому сервері:',
                'docs.installation.platforms.title': 'Інтеграція з популярними платформами',
                'docs.configuration.title': '⚙️ Конфігурація',
                'docs.configuration.basic.title': 'Базова конфігурація',
                'docs.api.title': '📚 API довідник',
                'docs.api.methods.title': 'Основні методи',
                'docs.api.show.description': 'Показати cookie банер',
                'docs.api.hide.description': 'Сховати cookie банер',
                'docs.api.getSettings.description': 'Отримати поточні налаштування cookie',
                'docs.api.setSettings.description': 'Встановити налаштування cookie',
                'docs.api.reset.description': 'Скинути всі налаштування та показати банер знову',
                'docs.api.getLanguage.description': 'Отримати поточну мову інтерфейсу',
                'docs.api.getVersion.description': 'Отримати версію Cookie Widget',
                'docs.api.getAllTexts.description': 'Отримати всі тексти інтерфейсу (включаючи користувацькі)',
                'docs.api.setTheme.description': 'Встановити тему',
                'docs.api.setPosition.description': 'Встановити позицію банера',
                'docs.tip.title': '💡 Порада',
                'docs.tip.description': 'Для додаткового налаштування використовуйте потужний JavaScript API. Всі тексти, посилання, теми та поведінку можна змінити програмно. Подивіться розширені приклади нижче для інтеграції з Google Analytics 4, Яндекс.Метрикою, React та корпоративних налаштувань.',
                'docs.warning.title': '⚠️ Важливо для розробників',
                'docs.warning.description': 'Cookie Widget автоматично блокує всі cookie до отримання згоди. Переконайтеся, що ваші аналітичні та маркетингові скрипти завантажуються тільки після події cookieConsentAccepted.',
                
                // Examples page - detailed
                'examples.react.integration.title': '⚛️ Інтеграція React / Next.js',
                'examples.react.integration.description': 'Повний приклад інтеграції Cookie Widget в React додаток з TypeScript:',
                'examples.vue.integration.title': '🟢 Інтеграція Vue.js / Nuxt.js',
                'examples.vue.integration.description': 'Приклад інтеграції з Vue.js використовуючи Composition API:',
                'examples.wordpress.integration.title': '📝 Інтеграція WordPress',
                'examples.wordpress.integration.description': 'Проста інтеграція Cookie Widget в WordPress тему або плагін:',
                'examples.ga4.integration.title': '📊 Інтеграція Google Analytics 4',
                'examples.ga4.integration.description': 'Повна інтеграція з Google Analytics 4 з управлінням згодою:',
                'examples.basic.title': '🚀 Базова інтеграція',
                'examples.basic.description': 'Найпростіший спосіб підключити віджет до вашого сайту',
                'examples.ga4.simple.title': '📊 Google Analytics 4',
                'examples.ga4.simple.description': 'Інтеграція з Google Analytics з урахуванням згоди користувача',
                'examples.yandex.simple.title': '📈 Яндекс.Метрика',
                'examples.yandex.simple.description': 'Інтеграція з Яндекс.Метрикою з умовним завантаженням',
                'examples.wordpress.simple.title': '🔌 WordPress',
                'examples.wordpress.simple.description': 'Інтеграція WordPress через functions.php',
                'examples.react.simple.title': '⚛️ React',
                'examples.react.simple.description': 'Використання в React додатку',
                'examples.vue.simple.title': '💚 Vue.js',
                'examples.vue.simple.description': 'Інтеграція в Vue.js додаток',
                'examples.customization.title': '🎨 Налаштування стилів',
                'examples.customization.description': 'Налаштувати зовнішній вигляд під ваш дизайн',
                'examples.page.title': 'Приклади інтеграції',
                'examples.page.description': 'Готові приклади для швидкої інтеграції Cookie Widget у ваш проект',
                'examples.back.link': 'Назад до головної',
                'examples.back.main': 'Повернутися до головної сторінки',
                
                // Additional examples
                'examples.angular.title': '🅰️ Інтеграція Angular',
                'examples.angular.description': 'Інтеграція Cookie Widget в Angular додаток з сервісом',
                'examples.svelte.title': '🧡 Інтеграція Svelte',
                'examples.svelte.description': 'Проста інтеграція Cookie Widget в Svelte додаток',
                'examples.nuxt.title': '💚 Плагін Nuxt.js',
                'examples.nuxt.description': 'Створення плагіну для автоматичної ініціалізації в Nuxt.js',
                'examples.drupal.title': '🔷 Інтеграція Drupal',
                'examples.drupal.description': 'Створення модуля для Drupal з адмін панеллю',
                'examples.joomla.title': '🟠 Інтеграція Joomla',
                'examples.joomla.description': 'Створення плагіну для Joomla CMS',
                'examples.bitrix.title': '🔶 Інтеграція 1C-Bitrix',
                'examples.bitrix.description': 'Інтеграція Cookie Widget в 1C-Bitrix через компонент',
                'examples.laravel.title': '🔴 Інтеграція Laravel',
                'examples.laravel.description': 'Створення пакету Laravel з middleware та сервіс-провайдером',
                'examples.django.title': '🐍 Інтеграція Django',
                'examples.django.description': 'Створення Django додатку з middleware для Cookie Widget',
                'examples.shopify.title': '🛒 Інтеграція Shopify',
                'examples.shopify.description': 'Інтеграція Cookie Widget в Shopify магазин',
                'examples.wix.title': '🎨 Інтеграція Wix',
                'examples.wix.description': 'Додавання Cookie Widget на сайт Wix',
                'examples.squarespace.title': '⬜ Інтеграція Squarespace',
                'examples.squarespace.description': 'Інтеграція Cookie Widget в Squarespace сайт',
                'examples.webflow.title': '🌊 Інтеграція Webflow',
                'examples.webflow.description': 'Додавання Cookie Widget в Webflow проект',
                'examples.gtm.title': '📊 Google Tag Manager',
                'examples.gtm.description': 'Інтеграція через Google Tag Manager з умовним завантаженням тегів',
                'examples.facebook.title': '📘 Facebook Pixel',
                'examples.facebook.description': 'Інтеграція з Facebook Pixel з управлінням згодою',
                'examples.tiktok.title': '🎵 TikTok Pixel',
                'examples.tiktok.description': 'Інтеграція з TikTok Pixel для рекламних кампаній',
                'examples.hotjar.title': '🔥 Інтеграція Hotjar',
                'examples.hotjar.description': 'Умовне завантаження Hotjar з дотриманням приватності',
                'examples.mixpanel.title': '📈 Інтеграція Mixpanel',
                'examples.mixpanel.description': 'Інтеграція з Mixpanel аналітикою',
                'examples.amplitude.title': '📊 Інтеграція Amplitude',
                'examples.amplitude.description': 'Інтеграція з Amplitude для продуктової аналітики',
                
                // Documentation v3.3 updates
                'docs.title': 'Документація Cookie Widget v3.3',
                'docs.subtitle': 'Повний посібник з нових ексклюзивних функцій: Smart Auto-Detect трекери, SEO-Friendly режим, Script Guard, Zero-Reload режим, Hub інтеграцій, Безпечне сховище та Geo-Adaptive відповідність',
                'docs.stats.version': 'Версія',
                'docs.stats.size': 'Повний розмір',
                'docs.stats.features': 'Унікальні функції',
                'docs.stats.languages': 'Підтримувані мови',
                'docs.stats.laws': 'Правова відповідність',
                'docs.stats.dependencies': 'Залежності',
                
                // Documentation navigation
                'docs.nav.advanced': '🆕 Ексклюзивні функції',
                'docs.nav.smart-detect': '🧠 Smart Auto-Detect',
                'docs.nav.seo-friendly': '🔍 SEO-Friendly режим',
                'docs.nav.script-guard': '🔒 Script Guard',
                'docs.nav.integrations': '🤝 Hub інтеграцій',
                'docs.nav.zero-reload': '🚀 Zero-Reload режим',
                'docs.nav.secure-storage': '🔒 Безпечне сховище',
                
                // Quick start section v3.3
                'docs.quickstart.features': '✨ Нові ексклюзивні функції в v3.3',
                'docs.quickstart.features.description': '🧠 Smart Auto-Detect трекери • 🔍 SEO-Friendly режим для ботів • 🔒 Script Guard блокування • 🚀 Zero-Reload режим • 🤝 Hub інтеграцій • 🔒 Безпечне сховище • 🔄 Auto-Renew згода • 🌍 Geo-Adaptive відповідність',
                
                // Documentation sections - detailed features
                'docs.smart-detect.title': '🧠 Smart Auto-Detect трекінг',
                'docs.smart-detect.description': 'Автоматичне виявлення трекерів та скриптів на сторінці з категоризацією за типами.',
                'docs.seo-friendly.title': '🔍 SEO-Friendly режим',
                'docs.seo-friendly.description': 'Пошукові боти бачать сайт як такий, що прийняв всі cookie для кращого індексування, тоді як справжні користувачі бачать банер.',
                'docs.script-guard.title': '🔒 Script Guard',
                'docs.script-guard.description': 'Блокування скриптів Analytics та Marketing ще до завантаження сайту через proxy-заглушки.',
                'docs.integrations-hub.title': '🤝 Hub інтеграцій',
                'docs.integrations-hub.description': 'Готові налаштування для популярних сервісів з інтеграцією без налаштувань.',
                'docs.zero-reload.title': '🚀 Zero-Reload режим',
                'docs.zero-reload.description': 'Увімкнення та вимкнення трекерів без перезавантаження сторінки через систему черг.',
                'docs.secure-storage.title': '🔒 Безпечна резервна копія LocalStorage',
                'docs.secure-storage.description': 'Збереження згоди в кількох сховищах для максимальної надійності.'
            }
        };
    }
    
    detectLanguage() {
        // Проверяем сохраненный язык
        const savedLang = localStorage.getItem('cookie-widget-lang');
        if (savedLang && this.supportedLanguages[savedLang]) {
            this.currentLanguage = savedLang;
            console.log(`🌍 Language system initialized: ${this.currentLanguage} (saved)`);
            return;
        }
        
        // Автоопределение по браузеру
        const browserLang = navigator.language || navigator.languages[0];
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        // Специальные случаи для региональных языков
        const regionMap = {
            'uk': 'uk', // Украинский
            'be': 'be', // Белорусский
            'kk': 'kz', // Казахский
            'zh': 'zh', // Китайский
            'ja': 'ja', // Японский
            'ko': 'ko'  // Корейский
        };
        
        const detectedLang = regionMap[langCode] || langCode;
        
        if (this.supportedLanguages[detectedLang]) {
            this.currentLanguage = detectedLang;
            console.log(`🌍 Language system initialized: ${this.currentLanguage} (browser)`);
        } else {
            // Определяем по часовому поясу и региону
            this.currentLanguage = this.detectByRegion();
            console.log(`🌍 Language system initialized: ${this.currentLanguage} (region)`);
        }
    }
    
    detectByRegion() {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        // Российские часовые пояса (расширенный список)
        const russianZones = [
            'Europe/Moscow', 'Europe/Kaliningrad', 'Europe/Samara',
            'Asia/Yekaterinburg', 'Asia/Omsk', 'Asia/Krasnoyarsk',
            'Asia/Irkutsk', 'Asia/Yakutsk', 'Asia/Vladivostok',
            'Asia/Magadan', 'Asia/Kamchatka', 'Asia/Sakhalin',
            'Asia/Srednekolymsk', 'Asia/Ust-Nera', 'Asia/Chokurdakh'
        ];
        
        if (russianZones.includes(timezone)) {
            return 'ru';
        }
        
        // Европейские часовые пояса
        const europeanZones = {
            'Europe/Warsaw': 'pl',
            'Europe/Kiev': 'uk',
            'Europe/Minsk': 'be',
            'Europe/Berlin': 'de',
            'Europe/Paris': 'fr',
            'Europe/Madrid': 'es',
            'Europe/Rome': 'it',
            'Europe/Lisbon': 'pt'
        };
        
        if (europeanZones[timezone]) {
            return europeanZones[timezone];
        }
        
        // Дополнительная проверка по региону браузера
        const locale = Intl.DateTimeFormat().resolvedOptions().locale;
        if (locale.startsWith('ru')) {
            return 'ru';
        }
        
        // По умолчанию английский
        return 'en';
    }
    
    init() {
        this.createLanguageSelector();
        this.translatePage();
        this.updateDocumentLanguage();
        this.updatePageMeta();
    }
    
    createLanguageSelector() {
        // Проверяем, есть ли уже селектор языка
        const existingSelector = document.querySelector('.language-selector');
        if (existingSelector) {
            this.setupExistingSelector(existingSelector);
            return;
        }
        
        // Создаем новый селектор если его нет
        const selector = document.createElement('div');
        selector.className = 'language-selector';
        selector.innerHTML = `
            <button class="language-btn" id="languageBtn">
                <span class="language-flag" id="currentFlag">${this.supportedLanguages[this.currentLanguage].flag}</span>
                <span class="language-text" id="currentLang">${this.currentLanguage.toUpperCase()}</span>
                <svg class="language-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
            </button>
            <div class="language-dropdown" id="languageDropdown">
                ${Object.entries(this.supportedLanguages).map(([code, lang]) => `
                    <div class="language-option ${code === this.currentLanguage ? 'active' : ''}" 
                         data-lang="${code}" data-flag="${lang.flag}">
                        <span class="language-flag">${lang.flag}</span>
                        <span>${lang.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Добавляем в навигацию
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            // Вставляем перед GitHub ссылкой
            const githubLink = navMenu.querySelector('.nav-link--github');
            if (githubLink) {
                navMenu.insertBefore(selector, githubLink);
            } else {
                navMenu.appendChild(selector);
            }
        }
        
        this.setupLanguageEvents(selector);
    }
    
    setupExistingSelector(selector) {
        // Обновляем существующий селектор
        const currentFlag = selector.querySelector('#currentFlag, .language-flag');
        const currentLang = selector.querySelector('#currentLang, .language-text');
        
        if (currentFlag) currentFlag.textContent = this.supportedLanguages[this.currentLanguage].flag;
        if (currentLang) currentLang.textContent = this.currentLanguage.toUpperCase();
        
        this.setupLanguageEvents(selector);
    }
    
    setupLanguageEvents(selector) {
        const button = selector.querySelector('#languageBtn, .language-btn');
        const dropdown = selector.querySelector('#languageDropdown, .language-dropdown');
        const options = selector.querySelectorAll('.language-option');
        
        if (button && dropdown) {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('active');
            });
            
            // Закрытие при клике вне
            document.addEventListener('click', () => {
                dropdown.classList.remove('active');
            });
            
            // Закрытие при нажатии Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    dropdown.classList.remove('active');
                }
            });
        }
        
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = e.currentTarget.getAttribute('data-lang');
                if (lang) {
                    this.setLanguage(lang);
                    dropdown.classList.remove('active');
                    
                    // Закрываем мобильное меню после выбора языка
                    const navMenu = document.querySelector('.nav-menu');
                    const navToggle = document.querySelector('.nav-toggle');
                    if (navMenu && navToggle) {
                        navMenu.classList.remove('active');
                        navToggle.classList.remove('active');
                    }
                }
            });
        });
    }
    
    setLanguage(langCode) {
        if (!this.supportedLanguages[langCode]) return;
        
        this.currentLanguage = langCode;
        localStorage.setItem('cookie-widget-lang', langCode);
        
        this.translatePage();
        this.updateDocumentLanguage();
        this.updateLanguageSelector();
        this.updatePageMeta();
        
        // Уведомляем другие компоненты об изменении языка
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: langCode }
        }));
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else if (element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
    }
    
    updateDocumentLanguage() {
        document.documentElement.lang = this.currentLanguage;
        
        // Обновляем мета-теги
        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) {
            const localeMap = {
                'ru': 'ru_RU',
                'en': 'en_US',
                'pl': 'pl_PL',
                'uk': 'uk_UA'
            };
            ogLocale.content = localeMap[this.currentLanguage] || 'en_US';
        }
    }
    
    updateLanguageSelector() {
        const currentFlag = document.querySelector('#currentFlag, .language-flag');
        const currentLang = document.querySelector('#currentLang, .language-text');
        const options = document.querySelectorAll('.language-option');
        
        if (currentFlag) {
            currentFlag.textContent = this.supportedLanguages[this.currentLanguage].flag;
        }
        
        if (currentLang) {
            currentLang.textContent = this.currentLanguage.toUpperCase();
        }
        
        options.forEach(option => {
            const lang = option.getAttribute('data-lang');
            option.classList.toggle('active', lang === this.currentLanguage);
        });
    }
    
    t(key, params = {}) {
        const translation = this.translations[this.currentLanguage]?.[key] || 
                          this.translations[this.fallbackLanguage]?.[key] || 
                          key;
        
        // Простая замена параметров
        return translation.replace(/\{\{(\w+)\}\}/g, (match, param) => {
            return params[param] || match;
        });
    }
    
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    getSupportedLanguages() {
        return this.supportedLanguages;
    }
    
    getCurrentPage() {
        const path = window.location.pathname;
        return path.split('/').pop() || 'index.html';
    }
    
    updatePageMeta() {
        const currentPage = this.getCurrentPage();
        const lang = this.currentLanguage;
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update page title based on current page and language
        const titles = {
            'index.html': {
                'ru': 'Cookie Widget - GDPR совместимый баннер cookie | Современный виджет для сайта',
                'en': 'Cookie Widget - GDPR Compliant Cookie Banner | Modern Website Widget',
                'pl': 'Cookie Widget - Banner Cookie Zgodny z RODO | Nowoczesny Widget dla Strony',
                'uk': 'Cookie Widget - GDPR сумісний банер cookie | Сучасний віджет для сайту'
            },
            'documentation.html': {
                'ru': 'Документация Cookie Widget | Полное руководство по интеграции и настройке',
                'en': 'Cookie Widget Documentation | Complete Integration and Configuration Guide',
                'pl': 'Dokumentacja Cookie Widget | Kompletny Przewodnik Integracji i Konfiguracji',
                'uk': 'Документація Cookie Widget | Повний посібник з інтеграції та налаштування'
            },
            'examples.html': {
                'ru': 'Примеры интеграции Cookie Widget | React, Vue, WordPress, Google Analytics',
                'en': 'Cookie Widget Integration Examples | React, Vue, WordPress, Google Analytics',
                'pl': 'Przykłady Integracji Cookie Widget | React, Vue, WordPress, Google Analytics',
                'uk': 'Приклади інтеграції Cookie Widget | React, Vue, WordPress, Google Analytics'
            },
            'tools.html': {
                'ru': 'Инструменты для веб-мастеров - Cookie Widget | Анализ cookie, GDPR проверка',
                'en': 'Webmaster Tools - Cookie Widget | Cookie Analysis, GDPR Compliance Check',
                'pl': 'Narzędzia Webmaster - Cookie Widget | Analiza Cookie, Sprawdzanie Zgodności z RODO',
                'uk': 'Інструменти для веб-майстрів - Cookie Widget | Аналіз cookie, перевірка GDPR'
            },
            'privacy-policy.html': {
                'ru': 'Политика конфиденциальности - Cookie Widget | Защита персональных данных',
                'en': 'Privacy Policy - Cookie Widget | Personal Data Protection',
                'pl': 'Polityka Prywatności - Cookie Widget | Ochrona Danych Osobowych',
                'uk': 'Політика конфіденційності - Cookie Widget | Захист персональних даних'
            }
        };
        
        // Update meta descriptions
        const descriptions = {
            'index.html': {
                'ru': 'Современный виджет cookie баннера с полной поддержкой GDPR, CCPA, LGPD, 152-ФЗ РФ. Легкая интеграция, 20+ языков, автоматическая блокировка cookie, адаптивный дизайн.',
                'en': 'Modern cookie banner widget with full GDPR, CCPA, LGPD compliance. Easy integration, 20+ languages, automatic cookie blocking, responsive design.',
                'pl': 'Nowoczesny widget banera cookie z pełną zgodnością z RODO, CCPA, LGPD. Łatwa integracja, 20+ języków, automatyczne blokowanie cookie, responsywny design.',
                'uk': 'Сучасний віджет банера cookie з повною підтримкою GDPR, CCPA, LGPD, 152-ФЗ РФ. Легка інтеграція, 20+ мов, автоматичне блокування cookie, адаптивний дизайн.'
            },
            'documentation.html': {
                'ru': 'Подробная документация Cookie Widget: установка, настройка, API, примеры кода. Полное руководство по интеграции GDPR-совместимого cookie баннера.',
                'en': 'Detailed Cookie Widget documentation: installation, configuration, API, code examples. Complete guide for integrating GDPR-compliant cookie banner.',
                'de': 'Detaillierte Cookie Widget Dokumentation: Installation, Konfiguration, API, Code-Beispiele. Vollständige Anleitung zur Integration eines DSGVO-konformen Cookie-Banners.',
                'fr': 'Documentation détaillée Cookie Widget: installation, configuration, API, exemples de code. Guide complet pour intégrer une bannière de cookies conforme au RGPD.',
                'es': 'Documentación detallada Cookie Widget: instalación, configuración, API, ejemplos de código. Guía completa para integrar banner de cookies compatible con GDPR.',
                'uk': 'Детальна документація Cookie Widget: встановлення, налаштування, API, приклади коду. Повний посібник з інтеграції GDPR-сумісного банера cookie.'
            },
            'examples.html': {
                'ru': 'Готовые примеры интеграции Cookie Widget для React, Vue.js, WordPress, Google Analytics 4, Яндекс.Метрика. Пошаговые инструкции и код для копирования.',
                'en': 'Ready-made Cookie Widget integration examples for React, Vue.js, WordPress, Google Analytics 4, Yandex.Metrica. Step-by-step instructions and copy-paste code.',
                'de': 'Fertige Cookie Widget Integrationsbeispiele für React, Vue.js, WordPress, Google Analytics 4, Yandex.Metrica. Schritt-für-Schritt-Anleitungen und kopierbarer Code.',
                'fr': 'Exemples d\'intégration Cookie Widget prêts à l\'emploi pour React, Vue.js, WordPress, Google Analytics 4, Yandex.Metrica. Instructions étape par étape et code à copier.',
                'es': 'Ejemplos de integración Cookie Widget listos para usar para React, Vue.js, WordPress, Google Analytics 4, Yandex.Metrica. Instrucciones paso a paso y código para copiar.',
                'uk': 'Готові приклади інтеграції Cookie Widget для React, Vue.js, WordPress, Google Analytics 4, Яндекс.Метрика. Покрокові інструкції та код для копіювання.'
            },
            'tools.html': {
                'ru': 'Полезные инструменты для веб-мастеров: анализатор cookie, генератор политики конфиденциальности, проверка GDPR соответствия, тестирование cookie баннеров.',
                'en': 'Useful webmaster tools: cookie analyzer, privacy policy generator, GDPR compliance check, cookie banner testing. All tools work locally in browser.',
                'de': 'Nützliche Webmaster-Tools: Cookie-Analysator, Datenschutzrichtlinien-Generator, DSGVO-Compliance-Prüfung, Cookie-Banner-Tests. Alle Tools funktionieren lokal im Browser.',
                'fr': 'Outils webmaster utiles: analyseur de cookies, générateur de politique de confidentialité, vérification de conformité RGPD, test de bannière de cookies.',
                'es': 'Herramientas útiles para webmasters: analizador de cookies, generador de política de privacidad, verificación de cumplimiento GDPR, pruebas de banner de cookies.',
                'uk': 'Корисні інструменти для веб-майстрів: аналізатор cookie, генератор політики конфіденційності, перевірка відповідності GDPR, тестування банерів cookie.'
            },
            'privacy-policy.html': {
                'ru': 'Политика конфиденциальности Cookie Widget. Информация о сборе, обработке и защите персональных данных в соответствии с GDPR и 152-ФЗ РФ.',
                'en': 'Cookie Widget Privacy Policy. Information about collection, processing and protection of personal data in accordance with GDPR and privacy laws.',
                'de': 'Cookie Widget Datenschutzrichtlinie. Informationen über Sammlung, Verarbeitung und Schutz personenbezogener Daten gemäß DSGVO und Datenschutzgesetzen.',
                'fr': 'Politique de Confidentialité Cookie Widget. Informations sur la collecte, le traitement et la protection des données personnelles conformément au RGPD.',
                'es': 'Política de Privacidad Cookie Widget. Información sobre recopilación, procesamiento y protección de datos personales de acuerdo con GDPR.',
                'uk': 'Політика конфіденційності Cookie Widget. Інформація про збір, обробку та захист персональних даних відповідно до GDPR та законів про конфіденційність.'
            }
        };
        
        // Update keywords
        const keywords = {
            'index.html': {
                'ru': 'cookie widget, gdpr cookie banner, cookie баннер, согласие на cookie, 152-фз рф, ccpa, lgpd, cookie consent, веб виджет, javascript cookie',
                'en': 'cookie widget, gdpr cookie banner, cookie consent, ccpa compliance, lgpd, privacy banner, javascript widget, website cookie management',
                'de': 'cookie widget, dsgvo cookie banner, cookie einverständnis, ccpa konformität, lgpd, datenschutz banner, javascript widget, website cookie verwaltung',
                'fr': 'widget cookie, bannière cookie rgpd, consentement cookie, conformité ccpa, lgpd, bannière confidentialité, widget javascript, gestion cookies site',
                'es': 'widget cookie, banner cookie gdpr, consentimiento cookie, cumplimiento ccpa, lgpd, banner privacidad, widget javascript, gestión cookies sitio',
                'uk': 'cookie widget, gdpr cookie banner, згода на cookie, ccpa відповідність, lgpd, банер конфіденційності, javascript віджет, управління cookie сайту'
            },
            'documentation.html': {
                'ru': 'cookie widget документация, gdpr cookie banner api, настройка cookie баннера, интеграция cookie widget, javascript api, веб разработка',
                'en': 'cookie widget documentation, gdpr cookie banner api, cookie banner configuration, cookie widget integration, javascript api, web development',
                'pl': 'dokumentacja cookie widget, gdpr cookie banner api, konfiguracja banera cookie, integracja cookie widget, javascript api, rozwój web',
                'uk': 'документація cookie widget, gdpr cookie banner api, налаштування cookie банера, інтеграція cookie widget, javascript api, веб розробка'
            },
            'examples.html': {
                'ru': 'cookie widget примеры, интеграция cookie banner, react cookie, vue cookie, wordpress gdpr, google analytics gdpr, яндекс метрика cookie',
                'en': 'cookie widget examples, cookie banner integration, react cookie, vue cookie, wordpress gdpr, google analytics gdpr, cookie implementation',
                'pl': 'przykłady cookie widget, integracja banera cookie, react cookie, vue cookie, wordpress rodo, google analytics rodo, implementacja cookie',
                'uk': 'приклади cookie widget, інтеграція cookie banner, react cookie, vue cookie, wordpress gdpr, google analytics gdpr, реалізація cookie'
            },
            'tools.html': {
                'ru': 'cookie анализатор, gdpr проверка, политика конфиденциальности, веб-мастер инструменты, cookie тестирование, анализ сайта',
                'en': 'cookie analyzer, gdpr check, privacy policy generator, webmaster tools, cookie testing, website analysis, compliance check',
                'pl': 'analizator cookie, sprawdzanie rodo, generator polityki prywatności, narzędzia webmaster, testowanie cookie, analiza strony',
                'uk': 'аналізатор cookie, перевірка gdpr, генератор політики конфіденційності, інструменти веб-майстра, тестування cookie, аналіз сайту'
            },
            'privacy-policy.html': {
                'ru': 'политика конфиденциальности, защита данных, gdpr, 152-фз рф, персональные данные, cookie policy, конфиденциальность',
                'en': 'privacy policy, data protection, gdpr, personal data, cookie policy, privacy, data security, user privacy',
                'pl': 'polityka prywatności, ochrona danych, rodo, dane osobowe, polityka cookie, prywatność, bezpieczeństwo danych',
                'uk': 'політика конфіденційності, захист даних, gdpr, персональні дані, політика cookie, конфіденційність, безпека даних'
            }
        };
        
        // Update title
        if (titles[currentPage] && titles[currentPage][lang]) {
            document.title = titles[currentPage][lang];
        }
        
        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        if (descriptions[currentPage] && descriptions[currentPage][lang]) {
            metaDescription.content = descriptions[currentPage][lang];
        }
        
        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        if (keywords[currentPage] && keywords[currentPage][lang]) {
            metaKeywords.content = keywords[currentPage][lang];
        }
        
        // Update Open Graph tags
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        if (titles[currentPage] && titles[currentPage][lang]) {
            ogTitle.content = titles[currentPage][lang];
        }
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        if (descriptions[currentPage] && descriptions[currentPage][lang]) {
            ogDescription.content = descriptions[currentPage][lang];
        }
        
        // Update og:locale
        let ogLocale = document.querySelector('meta[property="og:locale"]');
        if (!ogLocale) {
            ogLocale = document.createElement('meta');
            ogLocale.setAttribute('property', 'og:locale');
            document.head.appendChild(ogLocale);
        }
        
        const localeMap = {
            'ru': 'ru_RU',
            'en': 'en_US',
            'pl': 'pl_PL',
            'uk': 'uk_UA'
        };
        ogLocale.content = localeMap[lang] || 'en_US';
        
        // Update canonical URL with language parameter
        let canonical = document.querySelector('link[rel="canonical"]');
        if (canonical && lang !== 'ru') {
            const url = new URL(canonical.href);
            url.searchParams.set('lang', lang);
            canonical.href = url.toString();
        }
        
        // Add hreflang tags for SEO
        this.updateHreflangTags(currentPage);
    }
    
    updateHreflangTags(currentPage) {
        // Remove existing hreflang tags
        const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
        existingHreflang.forEach(tag => tag.remove());
        
        // Add hreflang tags for each supported language
        const baseUrl = 'https://cookies-widget-sergioplay.vercel.app/';
        const supportedLangs = ['ru', 'en', 'de', 'fr', 'es', 'uk'];
        
        supportedLangs.forEach(lang => {
            const hreflang = document.createElement('link');
            hreflang.rel = 'alternate';
            hreflang.hreflang = lang;
            
            if (lang === 'ru') {
                hreflang.href = baseUrl + currentPage;
            } else {
                hreflang.href = baseUrl + currentPage + '?lang=' + lang;
            }
            
            document.head.appendChild(hreflang);
        });
        
        // Add x-default hreflang
        const xDefault = document.createElement('link');
        xDefault.rel = 'alternate';
        xDefault.hreflang = 'x-default';
        xDefault.href = baseUrl + currentPage;
        document.head.appendChild(xDefault);
    }
}

// Инициализируем систему переводов
let i18n;

document.addEventListener('DOMContentLoaded', () => {
    i18n = new I18n();
    window.i18n = i18n;
    
    console.log(`🌍 Language system initialized: ${i18n.getCurrentLanguage()}`);
});
