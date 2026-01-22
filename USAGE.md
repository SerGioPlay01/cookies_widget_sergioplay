# Cookie Widget - Руководство по использованию

## 🚀 Быстрый старт

### 1. Подключение через CDN (рекомендуется)

Добавьте эти строки в ваш HTML:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cookies-widget-sergioplay.vercel.app/cookie-banner.css">

<!-- JavaScript -->
<script src="https://cookies-widget-sergioplay.vercel.app/cookie-banner.js"></script>
```

### 2. Добавьте ссылку на настройки в футер

```html
<footer>
    <a href="#cookie-settings" onclick="showCookieSettings(); return false;">
        Настройки Cookie
    </a>
</footer>
```

**Готово!** Виджет автоматически определит регион пользователя и покажет баннер при необходимости.

## 🎨 Кастомизация

### Базовая настройка

```javascript
const banner = CookieBanner.create({
    title: 'Мы используем cookie',
    description: 'Этот сайт использует cookie для улучшения вашего опыта.',
    theme: 'dark',
    position: 'top'
});
```

### Доступные темы

- `default` - Стандартная синяя тема
- `dark` - Темная тема
- `light` - Светлая тема  
- `minimal` - Минималистичная тема

### Позиционирование

- `bottom` - Внизу экрана (по умолчанию)
- `top` - Вверху экрана
- `center` - По центру как модальное окно

## 🔧 Продвинутые настройки

### Обработка согласия

```javascript
CookieBanner.create({
    onAccept: (settings) => {
        console.log('Пользователь принял:', settings);
        
        // Включаем аналитику
        if (settings.analytics) {
            gtag('config', 'GA_MEASUREMENT_ID');
        }
        
        // Включаем маркетинг
        if (settings.marketing) {
            loadMarketingScripts();
        }
    },
    
    onDecline: (settings) => {
        console.log('Пользователь отклонил:', settings);
        // Отключаем необязательные скрипты
    }
});
```

### Кастомные тексты

```javascript
CookieBanner.create({
    title: 'Согласие на обработку данных',
    description: 'Мы используем файлы cookie и другие технологии...',
    acceptAll: 'Принять все',
    decline: 'Отклонить',
    settings: 'Настроить',
    
    // Тексты панели настроек
    settingsTitle: 'Настройки конфиденциальности',
    necessary: 'Обязательные cookie',
    analytics: 'Аналитические cookie',
    marketing: 'Маркетинговые cookie'
});
```

## 📱 Интеграция с популярными платформами

### WordPress

```php
// functions.php
function add_cookie_widget() {
    wp_enqueue_style('cookie-banner', 'https://cookies-widget-sergioplay.vercel.app/cookie-banner.css');
    wp_enqueue_script('cookie-banner', 'https://cookies-widget-sergioplay.vercel.app/cookie-banner.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'add_cookie_widget');
```

### React

```jsx
useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cookies-widget-sergioplay.vercel.app/cookie-banner.js';
    script.onload = () => {
        window.cookieBanner = CookieBanner.create({
            theme: 'light',
            onAccept: (settings) => console.log(settings)
        });
    };
    document.head.appendChild(script);
}, []);
```

### Vue.js

```vue
<script>
export default {
    mounted() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cookies-widget-sergioplay.vercel.app/cookie-banner.css';
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = 'https://cookies-widget-sergioplay.vercel.app/cookie-banner.js';
        document.head.appendChild(script);
    }
}
</script>
```

## 🌍 Поддерживаемые языки

Виджет автоматически определяет язык пользователя и поддерживает:

- 🇷🇺 Русский
- 🇺🇸 Английский  
- 🇩🇪 Немецкий
- 🇫🇷 Французский
- 🇪🇸 Испанский
- 🇮🇹 Итальянский
- 🇵🇹 Португальский
- 🇵🇱 Польский
- 🇺🇦 Украинский
- 🇧🇾 Белорусский
- 🇰🇿 Казахский
- 🇨🇳 Китайский
- 🇯🇵 Японский
- 🇰🇷 Корейский

## 🔒 Соответствие законам

Виджет автоматически определяет регион пользователя и применяет соответствующие требования:

- **ЕС**: GDPR
- **США**: CCPA
- **Канада**: PIPEDA
- **Бразилия**: LGPD
- **Россия**: 152-ФЗ
- **Австралия**: Privacy Act
- **Китай**: PIPL
- **Япония**: APPI
- **Южная Корея**: PIPA

## 📊 Интеграция с аналитикой

### Google Analytics 4

```javascript
// Настройка consent mode
gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied'
});

// Обновление согласия
CookieBanner.create({
    onSettingsChange: (settings) => {
        gtag('consent', 'update', {
            'analytics_storage': settings.analytics ? 'granted' : 'denied',
            'ad_storage': settings.marketing ? 'granted' : 'denied'
        });
    }
});
```

### Яндекс.Метрика

```javascript
CookieBanner.create({
    onAccept: (settings) => {
        if (settings.analytics) {
            ym(COUNTER_ID, 'init', {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
            });
        }
    }
});
```

## 🛠️ API методы

```javascript
const banner = CookieBanner.create();

// Показать баннер
banner.show();

// Скрыть баннер
banner.hide();

// Получить текущие настройки
const settings = banner.getSettings();

// Установить настройки
banner.setSettings({
    necessary: true,
    analytics: true,
    marketing: false
});

// Сбросить все настройки
banner.reset();

// Обновить тексты
banner.updateTexts({
    title: 'Новый заголовок'
});

// Изменить тему
banner.updateTheme('dark');
```

## 🎯 События

```javascript
// Слушать изменения согласия
window.addEventListener('cookieConsentChanged', (event) => {
    const settings = event.detail;
    console.log('Согласие изменено:', settings);
    
    // Включить/выключить скрипты
    if (settings.analytics) {
        loadAnalytics();
    }
});
```

## 🚨 Решение проблем

### Баннер не показывается

1. Проверьте консоль браузера на ошибки
2. Убедитесь, что CSS и JS файлы загружаются
3. Проверьте, что пользователь из региона, требующего согласия

### Блокировка ad blocker'ом

Виджет автоматически показывает fallback-баннер при блокировке:

```javascript
// Проверить доступность
if (typeof CookieBanner === 'undefined') {
    console.log('Виджет заблокирован ad blocker\'ом');
}
```

### Настройки не сохраняются

1. Проверьте, что cookies не блокируются браузером
2. Убедитесь, что сайт работает по HTTPS
3. Проверьте настройки SameSite для cookies

## 💡 Советы по производительности

1. **Используйте CDN** - файлы загружаются быстрее
2. **Preconnect** - добавьте в `<head>`:
   ```html
   <link rel="preconnect" href="https://cookies-widget-sergioplay.vercel.app">
   ```
3. **Lazy loading** - загружайте виджет только при необходимости
4. **Кэширование** - файлы кэшируются браузером автоматически

## 📞 Поддержка

- 📖 [Полная документация](README.md)
- 🔧 [API справочник](API.md)
- 🐛 [Сообщить об ошибке](https://github.com/SerGioPlay01/cookies_widget_sergioplay/issues)
- ☕ [Поддержать проект](https://www.buymeacoffee.com/sergioplay)

---

**Нужна помощь?** Создайте issue в GitHub или напишите нам!