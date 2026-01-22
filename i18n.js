// Internationalization для Cookie Widget
class I18n {
    constructor() {
        this.currentLanguage = 'ru';
        this.fallbackLanguage = 'en';
        this.translations = {};
        this.supportedLanguages = {
            'ru': { name: 'Русский', flag: '🇷🇺' },
            'en': { name: 'English', flag: '🇺🇸' },
            'de': { name: 'Deutsch', flag: '🇩🇪' },
            'fr': { name: 'Français', flag: '🇫🇷' },
            'es': { name: 'Español', flag: '🇪🇸' },
            'it': { name: 'Italiano', flag: '🇮🇹' },
            'pt': { name: 'Português', flag: '🇵🇹' },
            'pl': { name: 'Polski', flag: '🇵🇱' },
            'uk': { name: 'Українська', flag: '🇺🇦' },
            'be': { name: 'Беларуская', flag: '🇧🇾' },
            'kz': { name: 'Қазақша', flag: '🇰🇿' },
            'zh': { name: '中文', flag: '🇨🇳' },
            'ja': { name: '日本語', flag: '🇯🇵' },
            'ko': { name: '한국어', flag: '🇰🇷' }
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
                'nav.support': 'Поддержка',
                
                // Hero Section
                'hero.title.main': 'Cookie Widget',
                'hero.title.sub': 'GDPR & Global Privacy Compliant',
                'hero.description': 'Современный и красивый виджет cookie баннера с полной поддержкой GDPR, CCPA, LGPD, 152-ФЗ РФ и других международных стандартов защиты данных. Легкая интеграция, адаптивный дизайн и гибкие настройки.',
                'hero.btn.start': 'Начать использовать',
                'hero.btn.demo': 'Посмотреть демо',
                'hero.btn.examples': 'Примеры интеграции',
                'hero.btn.github': 'GitHub',
                'hero.stat.size': 'Минимальный размер',
                'hero.stat.deps': 'Зависимостей',
                'hero.stat.gdpr': 'Соответствие GDPR',
                

                // Features
                'features.title': 'Возможности',
                'features.description': 'Современный cookie баннер с поддержкой 20+ языков, автоматической блокировкой cookie и соответствием международным стандартам защиты данных',
                
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
                'footer.description': 'Современный виджет cookie баннера с поддержкой GDPR и 152-ФЗ РФ',
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
                'docs.api.title': '📚 API Reference',
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
                'tools.performance.button': 'Измерить Производительность'
            },
            
            'en': {
                // Navigation
                'nav.features': 'Features',
                'nav.installation': 'Installation',
                'nav.docs': 'Documentation',
                'nav.examples': 'Examples',
                'nav.support': 'Support',
                
                // Hero Section
                'hero.title.main': 'Cookie Widget',
                'hero.title.sub': 'GDPR & Global Privacy Compliant',
                'hero.description': 'Modern and beautiful cookie banner widget with full GDPR, CCPA, LGPD compliance and support for international data protection standards. Easy integration, responsive design, and flexible settings.',
                'hero.btn.start': 'Get Started',
                'hero.btn.demo': 'View Demo',
                'hero.btn.examples': 'Integration Examples',
                'hero.btn.github': 'GitHub',
                'hero.stat.size': 'Minimal Size',
                'hero.stat.deps': 'Dependencies',
                'hero.stat.gdpr': 'GDPR Compliance',
                

                // Features
                'features.title': 'Features',
                'features.description': 'Modern cookie banner with 20+ language support, automatic cookie blocking and compliance with international data protection standards',
                
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
                'examples.back.main': 'Return to main page'
            },
            
            'de': {
                // Navigation
                'nav.features': 'Funktionen',
                'nav.installation': 'Installation',
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
            
            'fr': {
                // Navigation
                'nav.features': 'Fonctionnalités',
                'nav.installation': 'Installation',
                'nav.docs': 'Documentation',
                'nav.examples': 'Exemples',
                'nav.support': 'Support',
                
                // Hero Section
                'hero.title.main': 'Cookie Widget',
                'hero.title.sub': 'RGPD & Global Privacy Compliant',
                'hero.description': 'Widget de bannière de cookies moderne et beau avec une conformité complète RGPD, CCPA, LGPD et support pour les standards internationaux de protection des données. Intégration facile, design réactif et paramètres flexibles.',
                'hero.btn.start': 'Commencer',
                'hero.btn.demo': 'Voir la démo',
                'hero.btn.examples': 'Exemples d\'intégration',
                'hero.btn.github': 'GitHub',
                'hero.stat.size': 'Taille minimale',
                'hero.stat.deps': 'Dépendances',
                'hero.stat.gdpr': 'Conformité RGPD',
                

                // Features
                'features.title': 'Fonctionnalités',
                'features.description': 'Bannière de cookies moderne avec support de 20+ langues, blocage automatique des cookies et conformité aux standards internationaux de protection des données',
                
                // Installation
                'install.title': 'Installation',
                'install.description': 'Intégrez le widget sur votre site en quelques minutes',
                'install.tab.cdn': 'CDN',
                'install.tab.download': 'Télécharger',
                'install.tab.integration': 'Intégration',
                
                // Support
                'support.title': 'Support du projet',
                'support.description': 'Aidez au développement du projet et obtenez du support',
                'support.bug.title': 'Signaler un bug',
                'support.bug.description': 'Trouvé un bug ou avez une suggestion d\'amélioration?',
                'support.bug.link': 'Créer une Issue →',
                'support.coffee.title': 'Soutenir le développeur',
                'support.coffee.description': 'Achetez-moi un café et soutenez le développement futur du projet',
                'support.coffee.link': 'Buy me a coffee →',
                'support.docs.title': 'Documentation',
                'support.docs.description': 'Documentation détaillée et exemples d\'utilisation',
                'support.docs.link': 'Lire la documentation →',
                
                // Demo Browser
                'demo.browser.url': 'https://votresite.com',
                'demo.browser.title': 'Votre site web',
                'demo.banner.title': 'Utilisation des cookies',
                'demo.banner.description': 'Nous utilisons des cookies pour améliorer les fonctionnalités du site...',
                'demo.banner.settings': 'Paramètres',
                'demo.banner.accept': 'Accepter',
                'demo.try': 'Essayer le widget',
                
                // License
                'license.title': 'Licence ouverte',
                'license.description': 'Le projet est distribué sous licence MIT. Vous pouvez librement utiliser, modifier et distribuer le code dans des projets commerciaux et non commerciaux.',
                'license.link': 'Lire la licence',
                
                // Documentation cards
                'docs.quickstart.title': 'Démarrage rapide',
                'docs.quickstart.description': 'Guide étape par étape pour intégrer le widget sur votre site',
                'docs.quickstart.link': 'Lire →',
                'docs.config.title': 'Configuration',
                'docs.config.description': 'Comment configurer le widget selon vos exigences et le design de votre site',
                'docs.config.link': 'Lire →',
                'docs.api.title': 'API',
                'docs.api.description': 'Référence des méthodes et événements pour le contrôle programmatique',
                'docs.api.link': 'Lire →',
                'docs.compliance.title': 'Conformité légale',
                'docs.compliance.description': 'Comment le widget assure la conformité RGPD et légale',
                'docs.compliance.link': 'Lire →',
                
                // Installation tabs
                'install.cdn.title': 'Intégration CDN',
                'install.cdn.description': 'Le moyen le plus simple - connecter les fichiers directement depuis https://cookies-widget-sergioplay.vercel.app/:',
                'install.download.title': 'Télécharger les fichiers',
                'install.download.description': 'Téléchargez les fichiers et placez-les sur votre serveur:',
                'install.integration.title': 'Intégration avec les plateformes populaires',
                'install.integration.description': 'Exemples d\'intégration avec divers CMS et frameworks:',
                'install.example.title': 'Exemple d\'intégration',
                
                // Footer
                'footer.description': 'Widget de bannière de cookies moderne avec conformité RGPD',
                'footer.project': 'Projet',
                'footer.documentation': 'Documentation',
                'footer.support': 'Support',
                'footer.settings': 'Paramètres des cookies',
                'footer.copyright': 'Distribué sous licence MIT.',
                
                // Language Selector
                'lang.select': 'Sélectionner la langue',
                'lang.auto': 'Détection automatique',
                
                // Documentation
                'docs.title': 'Documentation Cookie Widget',
                'docs.subtitle': 'Guide complet pour l\'intégration, la configuration et l\'utilisation de Cookie Widget pour la conformité RGPD, CCPA, LGPD et autres standards internationaux de protection des données',
                'docs.nav.quickstart': 'Démarrage rapide',
                'docs.nav.installation': 'Installation',
                'docs.nav.configuration': 'Configuration',
                'docs.nav.api': 'Référence API',
                'docs.nav.customization': 'Personnalisation du texte',
                'docs.nav.events': 'Événements',
                'docs.nav.examples': 'Exemples',
                'docs.nav.compliance': 'Conformité légale',
                'docs.nav.troubleshooting': 'Dépannage',
                
                // Interface elements
                'ui.copy': 'Copier',
                'ui.copied': 'Copié!',
                'ui.read_more': 'Lire →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Menu',
                'ui.close': 'Fermer',
                
                // Documentation sections
                'docs.description.setup': 'Guide détaillé pour la configuration et l\'utilisation',
                'docs.stats.size': 'Taille minimale',
                'docs.stats.languages': 'Support linguistique',
                'docs.stats.laws': 'Conformité légale',
                'docs.stats.dependencies': 'Dépendances',
                'docs.contents': 'Contenu',
                
                // Installation section details
                'install.wordpress.title': 'WordPress',
                'install.react.title': 'React/Next.js',
                'install.react.file': '_app.js ou layout.js',
                'install.functions.file': 'functions.php',
                
                // Footer links
                'footer.releases': 'Versions',
                'footer.license': 'Licence',
                'footer.installation': 'Installation',
                'footer.guide': 'Guide',
                'footer.examples': 'Exemples',
                'footer.issues': 'Issues',
                'footer.support_dev': 'Soutenir',
                'footer.install_app': 'Installer l\'app',
                
                // Feature cards
                'feature.compliance.title': '🌍 Conformité mondiale',
                'feature.compliance.description': 'Conformité complète avec RGPD, CCPA, LGPD, 152-FZ russe, PIPEDA, PIPL, APPI, PIPA et autres standards internationaux de protection des données avec détection automatique de région',
                'feature.languages.title': '🗣️ Support de 20+ langues',
                'feature.languages.description': 'Détection automatique de la langue du navigateur avec support pour russe, anglais, allemand, français, espagnol, chinois, japonais et autres langues',
                'feature.blocking.title': '🛡️ Blocage automatique',
                'feature.blocking.description': 'Système intelligent de blocage des cookies avant consentement avec suppression automatique des cookies rejetés et protection contre le contournement',
                'feature.responsive.title': '📱 Design réactif',
                'feature.responsive.description': 'Design moderne avec dégradés et animations, fonctionnant parfaitement sur tous les appareils des téléphones mobiles aux grands moniteurs',
                'feature.api.title': '🎨 API de personnalisation puissante',
                'feature.api.description': 'Personnalisation complète des textes, liens, thèmes et comportement via l\'API JavaScript. Support pour le branding d\'entreprise et catégories supplémentaires',
                'feature.performance.title': '⚡ Performance maximale',
                'feature.performance.description': 'Seulement 5KB de code minifié, aucune dépendance externe, avec protection anti-bloqueur de pub et optimisation pour vitesse de chargement maximale',
                'feature.analytics.title': '📊 Intégration Analytics',
                'feature.analytics.description': 'Exemples prêts pour intégration avec Google Analytics 4, Yandex.Metrica, Facebook Pixel et autres systèmes d\'analyse avec support Consent Mode',
                'feature.frameworks.title': '⚛️ Support des frameworks',
                'feature.frameworks.description': 'Exemples d\'intégration prêts pour React, Vue.js, Next.js, Nuxt.js, WordPress et autres frameworks et CMS populaires avec support TypeScript',
                
                // Example cards
                'example.react.title': '⚛️ React / Next.js',
                'example.react.description': 'Intégration moderne pour applications React avec support TypeScript',
                'example.vue.title': '🟢 Vue.js / Nuxt.js',
                'example.vue.description': 'Intégration pour écosystème Vue avec API de composition',
                'example.wordpress.title': '📝 WordPress',
                'example.wordpress.description': 'Intégration WordPress simple avec panneau d\'administration',
                'example.ga4.title': '📊 Google Analytics 4',
                'example.ga4.description': 'Intégration GA4 complète et gestion d\'événements',
                'example.yandex.title': '📈 Yandex.Metrica',
                'example.yandex.description': 'Intégration avec système d\'analyse russe',
                'example.corporate.title': '🏢 Solutions d\'entreprise',
                'example.corporate.description': 'Configuration pour grandes entreprises et corporations',
                
                // Documentation sections - detailed
                'docs.quickstart.step2.description': 'La bannière de cookies automatiquement:',
                'docs.installation.title': '📦 Installation',
                'docs.installation.cdn.title': 'CDN (Recommandé)',
                'docs.installation.cdn.description': 'Le moyen le plus simple - utilisez notre CDN:',
                'docs.installation.local.title': 'Installation locale',
                'docs.installation.local.description': 'Téléchargez les fichiers et placez-les sur votre serveur:',
                'docs.installation.platforms.title': 'Intégration avec plateformes populaires',
                'docs.configuration.title': '⚙️ Configuration',
                'docs.configuration.basic.title': 'Configuration de base',
                'docs.api.title': '📚 Référence API',
                'docs.api.methods.title': 'Méthodes principales',
                'docs.api.show.description': 'Afficher la bannière de cookies',
                'docs.api.hide.description': 'Masquer la bannière de cookies',
                'docs.api.getSettings.description': 'Obtenir les paramètres de cookies actuels',
                'docs.api.setSettings.description': 'Définir les paramètres de cookies',
                'docs.api.reset.description': 'Réinitialiser tous les paramètres et afficher la bannière à nouveau',
                'docs.api.getLanguage.description': 'Obtenir la langue d\'interface actuelle',
                'docs.api.getVersion.description': 'Obtenir la version de Cookie Widget',
                'docs.api.getAllTexts.description': 'Obtenir tous les textes d\'interface (y compris personnalisés)',
                'docs.api.setTheme.description': 'Définir le thème',
                'docs.api.setPosition.description': 'Définir la position de la bannière',
                'docs.tip.title': '💡 Conseil',
                'docs.tip.description': 'Pour une personnalisation supplémentaire, utilisez la puissante API JavaScript. Tous les textes, liens, thèmes et comportements peuvent être modifiés par programmation. Consultez les exemples avancés ci-dessous pour l\'intégration avec Google Analytics 4, Yandex.Metrica, React et les paramètres d\'entreprise.',
                'docs.warning.title': '⚠️ Important pour les développeurs',
                'docs.warning.description': 'Cookie Widget bloque automatiquement tous les cookies avant consentement. Assurez-vous que vos scripts d\'analyse et de marketing se chargent uniquement après l\'événement cookieConsentAccepted.',
                
                // Examples page - detailed
                'examples.react.integration.title': '⚛️ Intégration React / Next.js',
                'examples.react.integration.description': 'Exemple complet d\'intégration Cookie Widget dans une application React avec TypeScript:',
                'examples.vue.integration.title': '🟢 Intégration Vue.js / Nuxt.js',
                'examples.vue.integration.description': 'Exemple d\'intégration avec Vue.js utilisant l\'API de composition:',
                'examples.wordpress.integration.title': '📝 Intégration WordPress',
                'examples.wordpress.integration.description': 'Intégration simple de Cookie Widget dans un thème ou plugin WordPress:',
                'examples.ga4.integration.title': '📊 Intégration Google Analytics 4',
                'examples.ga4.integration.description': 'Intégration complète avec Google Analytics 4 avec gestion du consentement:',
                'examples.basic.title': '🚀 Intégration de base',
                'examples.basic.description': 'Le moyen le plus simple de connecter le widget à votre site',
                'examples.ga4.simple.title': '📊 Google Analytics 4',
                'examples.ga4.simple.description': 'Intégration avec Google Analytics en tenant compte du consentement utilisateur',
                'examples.yandex.simple.title': '📈 Yandex.Metrica',
                'examples.yandex.simple.description': 'Intégration avec Yandex.Metrica avec chargement conditionnel',
                'examples.wordpress.simple.title': '🔌 WordPress',
                'examples.wordpress.simple.description': 'Intégration WordPress via functions.php',
                'examples.react.simple.title': '⚛️ React',
                'examples.react.simple.description': 'Utilisation dans une application React',
                'examples.vue.simple.title': '💚 Vue.js',
                'examples.vue.simple.description': 'Intégration dans une application Vue.js',
                'examples.customization.title': '🎨 Personnalisation des styles',
                'examples.customization.description': 'Personnaliser l\'apparence pour votre design',
                'examples.page.title': 'Exemples d\'intégration',
                'examples.page.description': 'Exemples prêts pour une intégration rapide de Cookie Widget dans votre projet',
                'examples.back.link': 'Retour à l\'accueil',
                'examples.back.main': 'Retourner à la page principale'
            },
            
            'es': {
                // Navigation
                'nav.features': 'Características',
                'nav.installation': 'Instalación',
                'nav.docs': 'Documentación',
                'nav.examples': 'Ejemplos',
                'nav.support': 'Soporte',
                
                // Hero Section
                'hero.title.main': 'Cookie Widget',
                'hero.title.sub': 'RGPD & Global Privacy Compliant',
                'hero.description': 'Widget de banner de cookies moderno y hermoso con cumplimiento completo del RGPD, CCPA, LGPD y soporte para estándares internacionales de protección de datos. Integración fácil, diseño responsivo y configuraciones flexibles.',
                'hero.btn.start': 'Comenzar',
                'hero.btn.demo': 'Ver Demo',
                'hero.btn.examples': 'Ejemplos de Integración',
                'hero.btn.github': 'GitHub',
                'hero.stat.size': 'Tamaño Mínimo',
                'hero.stat.deps': 'Dependencias',
                'hero.stat.gdpr': 'Cumplimiento RGPD',
                

                // Features
                'features.title': 'Características',
                'features.description': 'Banner de cookies moderno con soporte para 20+ idiomas, bloqueo automático de cookies y cumplimiento de estándares internacionales de protección de datos',
                
                // Installation
                'install.title': 'Instalación',
                'install.description': 'Integra el widget en tu sitio en minutos',
                'install.tab.cdn': 'CDN',
                'install.tab.download': 'Descargar',
                'install.tab.integration': 'Integración',
                
                // Support
                'support.title': 'Soporte del proyecto',
                'support.description': 'Ayuda al desarrollo del proyecto y obtén soporte',
                'support.bug.title': 'Reportar un error',
                'support.bug.description': '¿Encontraste un error o tienes una sugerencia de mejora?',
                'support.bug.link': 'Crear Issue →',
                'support.coffee.title': 'Apoyar al desarrollador',
                'support.coffee.description': 'Cómprame un café y apoya el desarrollo futuro del proyecto',
                'support.coffee.link': 'Buy me a coffee →',
                'support.docs.title': 'Documentación',
                'support.docs.description': 'Documentación detallada y ejemplos de uso',
                'support.docs.link': 'Leer documentación →',
                
                // Demo Browser
                'demo.browser.url': 'https://tusitio.com',
                'demo.browser.title': 'Tu sitio web',
                'demo.banner.title': 'Uso de cookies',
                'demo.banner.description': 'Usamos cookies para mejorar la funcionalidad del sitio...',
                'demo.banner.settings': 'Configuración',
                'demo.banner.accept': 'Aceptar',
                'demo.try': 'Probar widget',
                
                // License
                'license.title': 'Licencia abierta',
                'license.description': 'El proyecto se distribuye bajo la licencia MIT. Puedes usar, modificar y distribuir libremente el código en proyectos comerciales y no comerciales.',
                'license.link': 'Leer licencia',
                
                // Documentation cards
                'docs.quickstart.title': 'Inicio rápido',
                'docs.quickstart.description': 'Guía paso a paso para integrar el widget en tu sitio',
                'docs.quickstart.link': 'Leer →',
                'docs.config.title': 'Configuración',
                'docs.config.description': 'Cómo configurar el widget según tus requisitos y diseño del sitio',
                'docs.config.link': 'Leer →',
                'docs.api.title': 'API',
                'docs.api.description': 'Referencia de métodos y eventos para control programático',
                'docs.api.link': 'Leer →',
                'docs.compliance.title': 'Cumplimiento legal',
                'docs.compliance.description': 'Cómo el widget asegura el cumplimiento del RGPD y legal',
                'docs.compliance.link': 'Leer →',
                
                // Installation tabs
                'install.cdn.title': 'Integración CDN',
                'install.cdn.description': 'La forma más fácil - conectar archivos directamente desde https://cookies-widget-sergioplay.vercel.app/:',
                'install.download.title': 'Descargar archivos',
                'install.download.description': 'Descarga los archivos y colócalos en tu servidor:',
                'install.integration.title': 'Integración con plataformas populares',
                'install.integration.description': 'Ejemplos de integración con varios CMS y frameworks:',
                'install.example.title': 'Ejemplo de integración',
                
                // Footer
                'footer.description': 'Widget de banner de cookies moderno con cumplimiento RGPD',
                'footer.project': 'Proyecto',
                'footer.documentation': 'Documentación',
                'footer.support': 'Soporte',
                'footer.settings': 'Configuración de Cookies',
                'footer.copyright': 'Distribuido bajo Licencia MIT.',
                
                // Language Selector
                'lang.select': 'Seleccionar Idioma',
                'lang.auto': 'Detección Automática',
                
                // Documentation
                'docs.title': 'Documentación Cookie Widget',
                'docs.subtitle': 'Guía completa para integración, configuración y uso de Cookie Widget para cumplimiento RGPD, CCPA, LGPD y otros estándares internacionales de protección de datos',
                'docs.nav.quickstart': 'Inicio rápido',
                'docs.nav.installation': 'Instalación',
                'docs.nav.configuration': 'Configuración',
                'docs.nav.api': 'Referencia API',
                'docs.nav.customization': 'Personalización de texto',
                'docs.nav.events': 'Eventos',
                'docs.nav.examples': 'Ejemplos',
                'docs.nav.compliance': 'Cumplimiento legal',
                'docs.nav.troubleshooting': 'Solución de problemas',
                
                // Examples page
                'examples.title': 'Ejemplos de integración',
                'examples.subtitle': 'Soluciones listas para integrar Cookie Widget en frameworks, CMS y sistemas de análisis populares. Copia el código y adáptalo a tus necesidades.',
                'examples.demo.title': 'Demostración en vivo',
                'examples.demo.description': 'Prueba Cookie Widget en acción:',
                'examples.demo.show': 'Mostrar Banner de Cookies',
                'examples.demo.reset': 'Restablecer configuración',
                'examples.demo.current': 'Configuración actual',
                
                // Feature cards
                'feature.compliance.title': '🌍 Cumplimiento global',
                'feature.compliance.description': 'Cumplimiento completo con RGPD, CCPA, LGPD, 152-FZ ruso, PIPEDA, PIPL, APPI, PIPA y otros estándares internacionales de protección de datos con detección automática de región',
                'feature.languages.title': '🗣️ Soporte de 20+ idiomas',
                'feature.languages.description': 'Detección automática del idioma del navegador con soporte para ruso, inglés, alemán, francés, español, chino, japonés y otros idiomas',
                'feature.blocking.title': '🛡️ Bloqueo automático',
                'feature.blocking.description': 'Sistema inteligente de bloqueo de cookies antes del consentimiento con eliminación automática de cookies rechazadas y protección contra elusión',
                'feature.responsive.title': '📱 Diseño responsivo',
                'feature.responsive.description': 'Diseño moderno con gradientes y animaciones, funcionando perfectamente en todos los dispositivos desde teléfonos móviles hasta monitores grandes',
                'feature.api.title': '🎨 API de personalización potente',
                'feature.api.description': 'Personalización completa de textos, enlaces, temas y comportamiento a través de la API JavaScript. Soporte para branding corporativo y categorías adicionales',
                'feature.performance.title': '⚡ Rendimiento máximo',
                'feature.performance.description': 'Solo 5KB de código minificado, sin dependencias externas, con protección anti-bloqueador de anuncios y optimización para velocidad máxima de carga',
                'feature.analytics.title': '📊 Integración de Analytics',
                'feature.analytics.description': 'Ejemplos listos para integración con Google Analytics 4, Yandex.Metrica, Facebook Pixel y otros sistemas de análisis con soporte Consent Mode',
                'feature.frameworks.title': '⚛️ Soporte de frameworks',
                'feature.frameworks.description': 'Ejemplos de integración listos para React, Vue.js, Next.js, Nuxt.js, WordPress y otros frameworks y CMS populares con soporte TypeScript',
                
                // Example cards
                'example.react.title': '⚛️ React / Next.js',
                // Interface elements
                'ui.copy': 'Copiar',
                'ui.copied': '¡Copiado!',
                'ui.read_more': 'Leer →',
                'ui.back_to_top': '↑',
                'ui.menu': 'Menú',
                'ui.close': 'Cerrar',
                
                // Documentation sections
                'docs.description.setup': 'Guía detallada para configuración y uso',
                'docs.stats.size': 'Tamaño mínimo',
                'docs.stats.languages': 'Soporte de idiomas',
                'docs.stats.laws': 'Cumplimiento legal',
                'docs.stats.dependencies': 'Dependencias',
                'docs.contents': 'Contenido',
                
                // Installation section details
                'install.wordpress.title': 'WordPress',
                'install.react.title': 'React/Next.js',
                'install.react.file': '_app.js o layout.js',
                'install.functions.file': 'functions.php',
                
                // Footer links
                'footer.releases': 'Versiones',
                'footer.license': 'Licencia',
                'footer.installation': 'Instalación',
                'footer.guide': 'Guía',
                'footer.examples': 'Ejemplos',
                'footer.issues': 'Issues',
                'footer.support_dev': 'Apoyar',
                'footer.install_app': 'Instalar app',
                
                // Example cards
                'example.react.title': '⚛️ React / Next.js',
                'example.react.description': 'Integración moderna para aplicaciones React con soporte TypeScript',
                'example.vue.title': '🟢 Vue.js / Nuxt.js',
                'example.vue.description': 'Integración para ecosistema Vue con API de composición',
                'example.wordpress.title': '📝 WordPress',
                'example.wordpress.description': 'Integración simple de WordPress con panel de administración',
                'example.ga4.title': '📊 Google Analytics 4',
                'example.ga4.description': 'Integración completa de GA4 y gestión de eventos',
                'example.yandex.title': '📈 Yandex.Metrica',
                'example.yandex.description': 'Integración con sistema de análisis ruso',
                'example.corporate.title': '🏢 Soluciones corporativas',
                'example.corporate.description': 'Configuración para grandes empresas y corporaciones',
                
                // Documentation sections - detailed
                'docs.quickstart.step2.description': 'El banner de cookies automáticamente:',
                'docs.installation.title': '📦 Instalación',
                'docs.installation.cdn.title': 'CDN (Recomendado)',
                'docs.installation.cdn.description': 'La forma más fácil - usa nuestro CDN:',
                'docs.installation.local.title': 'Instalación local',
                'docs.installation.local.description': 'Descarga archivos y colócalos en tu servidor:',
                'docs.installation.platforms.title': 'Integración con plataformas populares',
                'docs.configuration.title': '⚙️ Configuración',
                'docs.configuration.basic.title': 'Configuración básica',
                'docs.api.title': '📚 Referencia API',
                'docs.api.methods.title': 'Métodos principales',
                'docs.api.show.description': 'Mostrar banner de cookies',
                'docs.api.hide.description': 'Ocultar banner de cookies',
                'docs.api.getSettings.description': 'Obtener configuración actual de cookies',
                'docs.api.setSettings.description': 'Establecer configuración de cookies',
                'docs.api.reset.description': 'Restablecer toda la configuración y mostrar banner nuevamente',
                'docs.api.getLanguage.description': 'Obtener idioma de interfaz actual',
                'docs.api.getVersion.description': 'Obtener versión de Cookie Widget',
                'docs.api.getAllTexts.description': 'Obtener todos los textos de interfaz (incluyendo personalizados)',
                'docs.api.setTheme.description': 'Establecer tema',
                'docs.api.setPosition.description': 'Establecer posición del banner',
                'docs.tip.title': '💡 Consejo',
                'docs.tip.description': 'Para personalización adicional usa la potente API JavaScript. Todos los textos, enlaces, temas y comportamiento pueden cambiarse programáticamente. Consulta los ejemplos avanzados a continuación para integración con Google Analytics 4, Yandex.Metrica, React y configuraciones corporativas.',
                'docs.warning.title': '⚠️ Importante para desarrolladores',
                'docs.warning.description': 'Cookie Widget bloquea automáticamente todas las cookies antes del consentimiento. Asegúrate de que tus scripts de análisis y marketing se carguen solo después del evento cookieConsentAccepted.',
                
                // Examples page - detailed
                'examples.react.integration.title': '⚛️ Integración React / Next.js',
                'examples.react.integration.description': 'Ejemplo completo de integración Cookie Widget en aplicación React con TypeScript:',
                'examples.vue.integration.title': '🟢 Integración Vue.js / Nuxt.js',
                'examples.vue.integration.description': 'Ejemplo de integración con Vue.js usando API de composición:',
                'examples.wordpress.integration.title': '📝 Integración WordPress',
                'examples.wordpress.integration.description': 'Integración simple de Cookie Widget en tema o plugin WordPress:',
                'examples.ga4.integration.title': '📊 Integración Google Analytics 4',
                'examples.ga4.integration.description': 'Integración completa con Google Analytics 4 con gestión de consentimiento:',
                'examples.basic.title': '🚀 Integración básica',
                'examples.basic.description': 'La forma más simple de conectar el widget a tu sitio',
                'examples.ga4.simple.title': '📊 Google Analytics 4',
                'examples.ga4.simple.description': 'Integración con Google Analytics considerando consentimiento del usuario',
                'examples.yandex.simple.title': '📈 Yandex.Metrica',
                'examples.yandex.simple.description': 'Integración con Yandex.Metrica con carga condicional',
                'examples.wordpress.simple.title': '🔌 WordPress',
                'examples.wordpress.simple.description': 'Integración WordPress vía functions.php',
                'examples.react.simple.title': '⚛️ React',
                'examples.react.simple.description': 'Uso en aplicación React',
                'examples.vue.simple.title': '💚 Vue.js',
                'examples.vue.simple.description': 'Integración en aplicación Vue.js',
                'examples.customization.title': '🎨 Personalización de estilos',
                'examples.customization.description': 'Personalizar apariencia para tu diseño',
                'examples.page.title': 'Ejemplos de integración',
                'examples.page.description': 'Ejemplos listos para integración rápida de Cookie Widget en tu proyecto',
                'examples.back.link': 'Volver al inicio',
                'examples.back.main': 'Volver a la página principal'
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
                'examples.back.main': 'Повернутися до головної сторінки'
            }
        };
    }
    
    detectLanguage() {
        // Проверяем сохраненный язык
        const savedLang = localStorage.getItem('cookie-widget-lang');
        if (savedLang && this.supportedLanguages[savedLang]) {
            this.currentLanguage = savedLang;
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
        } else {
            // Определяем по часовому поясу и региону
            this.currentLanguage = this.detectByRegion();
        }
    }
    
    detectByRegion() {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        // Европейские часовые пояса
        const europeanZones = {
            'Europe/Berlin': 'de',
            'Europe/Paris': 'fr',
            'Europe/Madrid': 'es',
            'Europe/Rome': 'it',
            'Europe/Warsaw': 'pl',
            'Europe/Kiev': 'uk',
            'Europe/Minsk': 'be',
            'Asia/Almaty': 'kz'
        };
        
        if (europeanZones[timezone]) {
            return europeanZones[timezone];
        }
        
        // Российские часовые пояса
        const russianZones = [
            'Europe/Moscow', 'Europe/Kaliningrad', 'Europe/Samara',
            'Asia/Yekaterinburg', 'Asia/Omsk', 'Asia/Krasnoyarsk',
            'Asia/Irkutsk', 'Asia/Yakutsk', 'Asia/Vladivostok',
            'Asia/Magadan', 'Asia/Kamchatka'
        ];
        
        if (russianZones.includes(timezone)) {
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
                'de': 'de_DE',
                'fr': 'fr_FR',
                'es': 'es_ES',
                'it': 'it_IT',
                'pt': 'pt_PT',
                'pl': 'pl_PL',
                'uk': 'uk_UA',
                'be': 'be_BY',
                'kz': 'kk_KZ',
                'zh': 'zh_CN',
                'ja': 'ja_JP',
                'ko': 'ko_KR'
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
                'de': 'Cookie Widget - DSGVO-konformer Cookie-Banner | Modernes Website-Widget',
                'fr': 'Cookie Widget - Bannière Cookie Conforme RGPD | Widget Moderne pour Site Web',
                'es': 'Cookie Widget - Banner de Cookies Compatible con GDPR | Widget Moderno para Sitio Web',
                'uk': 'Cookie Widget - GDPR сумісний банер cookie | Сучасний віджет для сайту'
            },
            'documentation.html': {
                'ru': 'Документация Cookie Widget | Полное руководство по интеграции и настройке',
                'en': 'Cookie Widget Documentation | Complete Integration and Configuration Guide',
                'de': 'Cookie Widget Dokumentation | Vollständige Integrations- und Konfigurationsanleitung',
                'fr': 'Documentation Cookie Widget | Guide Complet d\'Intégration et de Configuration',
                'es': 'Documentación Cookie Widget | Guía Completa de Integración y Configuración',
                'uk': 'Документація Cookie Widget | Повний посібник з інтеграції та налаштування'
            },
            'examples.html': {
                'ru': 'Примеры интеграции Cookie Widget | React, Vue, WordPress, Google Analytics',
                'en': 'Cookie Widget Integration Examples | React, Vue, WordPress, Google Analytics',
                'de': 'Cookie Widget Integrationsbeispiele | React, Vue, WordPress, Google Analytics',
                'fr': 'Exemples d\'Intégration Cookie Widget | React, Vue, WordPress, Google Analytics',
                'es': 'Ejemplos de Integración Cookie Widget | React, Vue, WordPress, Google Analytics',
                'uk': 'Приклади інтеграції Cookie Widget | React, Vue, WordPress, Google Analytics'
            },
            'tools.html': {
                'ru': 'Инструменты для веб-мастеров - Cookie Widget | Анализ cookie, GDPR проверка',
                'en': 'Webmaster Tools - Cookie Widget | Cookie Analysis, GDPR Compliance Check',
                'de': 'Webmaster-Tools - Cookie Widget | Cookie-Analyse, DSGVO-Compliance-Prüfung',
                'fr': 'Outils Webmaster - Cookie Widget | Analyse des Cookies, Vérification RGPD',
                'es': 'Herramientas Webmaster - Cookie Widget | Análisis de Cookies, Verificación GDPR',
                'uk': 'Інструменти для веб-майстрів - Cookie Widget | Аналіз cookie, перевірка GDPR'
            },
            'privacy-policy.html': {
                'ru': 'Политика конфиденциальности - Cookie Widget | Защита персональных данных',
                'en': 'Privacy Policy - Cookie Widget | Personal Data Protection',
                'de': 'Datenschutzrichtlinie - Cookie Widget | Schutz personenbezogener Daten',
                'fr': 'Politique de Confidentialité - Cookie Widget | Protection des Données Personnelles',
                'es': 'Política de Privacidad - Cookie Widget | Protección de Datos Personales',
                'uk': 'Політика конфіденційності - Cookie Widget | Захист персональних даних'
            }
        };
        
        // Update meta descriptions
        const descriptions = {
            'index.html': {
                'ru': 'Современный виджет cookie баннера с полной поддержкой GDPR, CCPA, LGPD, 152-ФЗ РФ. Легкая интеграция, 20+ языков, автоматическая блокировка cookie, адаптивный дизайн.',
                'en': 'Modern cookie banner widget with full GDPR, CCPA, LGPD compliance. Easy integration, 20+ languages, automatic cookie blocking, responsive design.',
                'de': 'Modernes Cookie-Banner-Widget mit vollständiger DSGVO-, CCPA-, LGPD-Konformität. Einfache Integration, 20+ Sprachen, automatische Cookie-Blockierung, responsives Design.',
                'fr': 'Widget de bannière de cookies moderne avec conformité complète RGPD, CCPA, LGPD. Intégration facile, 20+ langues, blocage automatique des cookies, design responsive.',
                'es': 'Widget moderno de banner de cookies con cumplimiento completo de GDPR, CCPA, LGPD. Integración fácil, 20+ idiomas, bloqueo automático de cookies, diseño responsive.',
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
                'de': 'cookie widget dokumentation, dsgvo cookie banner api, cookie banner konfiguration, cookie widget integration, javascript api, webentwicklung',
                'fr': 'documentation widget cookie, api bannière cookie rgpd, configuration bannière cookie, intégration widget cookie, api javascript, développement web',
                'es': 'documentación widget cookie, api banner cookie gdpr, configuración banner cookie, integración widget cookie, api javascript, desarrollo web',
                'uk': 'документація cookie widget, gdpr cookie banner api, налаштування cookie банера, інтеграція cookie widget, javascript api, веб розробка'
            },
            'examples.html': {
                'ru': 'cookie widget примеры, интеграция cookie banner, react cookie, vue cookie, wordpress gdpr, google analytics gdpr, яндекс метрика cookie',
                'en': 'cookie widget examples, cookie banner integration, react cookie, vue cookie, wordpress gdpr, google analytics gdpr, cookie implementation',
                'de': 'cookie widget beispiele, cookie banner integration, react cookie, vue cookie, wordpress dsgvo, google analytics dsgvo, cookie implementierung',
                'fr': 'exemples widget cookie, intégration bannière cookie, react cookie, vue cookie, wordpress rgpd, google analytics rgpd, implémentation cookie',
                'es': 'ejemplos widget cookie, integración banner cookie, react cookie, vue cookie, wordpress gdpr, google analytics gdpr, implementación cookie',
                'uk': 'приклади cookie widget, інтеграція cookie banner, react cookie, vue cookie, wordpress gdpr, google analytics gdpr, реалізація cookie'
            },
            'tools.html': {
                'ru': 'cookie анализатор, gdpr проверка, политика конфиденциальности, веб-мастер инструменты, cookie тестирование, анализ сайта',
                'en': 'cookie analyzer, gdpr check, privacy policy generator, webmaster tools, cookie testing, website analysis, compliance check',
                'de': 'cookie analysator, dsgvo prüfung, datenschutzrichtlinien generator, webmaster tools, cookie tests, website analyse, compliance prüfung',
                'fr': 'analyseur cookie, vérification rgpd, générateur politique confidentialité, outils webmaster, test cookie, analyse site web',
                'es': 'analizador cookie, verificación gdpr, generador política privacidad, herramientas webmaster, prueba cookie, análisis sitio web',
                'uk': 'аналізатор cookie, перевірка gdpr, генератор політики конфіденційності, інструменти веб-майстра, тестування cookie, аналіз сайту'
            },
            'privacy-policy.html': {
                'ru': 'политика конфиденциальности, защита данных, gdpr, 152-фз рф, персональные данные, cookie policy, конфиденциальность',
                'en': 'privacy policy, data protection, gdpr, personal data, cookie policy, privacy, data security, user privacy',
                'de': 'datenschutzrichtlinie, datenschutz, dsgvo, personenbezogene daten, cookie richtlinie, privatsphäre, datensicherheit',
                'fr': 'politique confidentialité, protection données, rgpd, données personnelles, politique cookie, confidentialité, sécurité données',
                'es': 'política privacidad, protección datos, gdpr, datos personales, política cookie, privacidad, seguridad datos',
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
            'de': 'de_DE',
            'fr': 'fr_FR',
            'es': 'es_ES',
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
