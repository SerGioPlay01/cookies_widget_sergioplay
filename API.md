# Cookie Widget API Documentation

## Table of Contents

1. [Quick Start](#quick-start)
2. [Configuration Options](#configuration-options)
3. [Methods](#methods)
4. [Events](#events)
5. [Customization](#customization)
6. [Examples](#examples)
7. [TypeScript Definitions](#typescript-definitions)

## Quick Start

### Basic Usage

```html
<!-- Include CSS and JS -->
<link rel="stylesheet" href="https://cookies-widget-sergioplay.vercel.app/cookie-banner.css">
<script src="https://cookies-widget-sergioplay.vercel.app/cookie-banner.js"></script>

<!-- The banner will show automatically -->
```

### Custom Configuration

```javascript
// Create banner with custom options
const banner = CookieBanner.create({
    title: 'We use cookies',
    theme: 'dark',
    position: 'top',
    onAccept: (settings) => console.log('Accepted:', settings)
});
```

## Configuration Options

### Constructor Options

```javascript
const options = {
    // Text Customization
    title: string,                    // Custom banner title
    description: string,              // Custom banner description
    acceptAll: string,               // Accept button text
    decline: string,                 // Decline button text
    settings: string,                // Settings button text
    privacyPolicy: string,           // Privacy policy link text
    
    // Settings Panel Texts
    settingsTitle: string,           // Settings panel title
    settingsDescription: string,     // Settings panel description
    necessary: string,               // Necessary cookies label
    necessaryDesc: string,           // Necessary cookies description
    functional: string,              // Functional cookies label
    functionalDesc: string,          // Functional cookies description
    analytics: string,               // Analytics cookies label
    analyticsDesc: string,           // Analytics cookies description
    marketing: string,               // Marketing cookies label
    marketingDesc: string,           // Marketing cookies description
    performance: string,             // Performance cookies label
    performanceDesc: string,         // Performance cookies description
    cancel: string,                  // Cancel button text
    saveSettings: string,            // Save settings button text
    
    // Appearance
    theme: 'default' | 'dark' | 'light' | 'minimal',
    position: 'bottom' | 'top' | 'center',
    layout: 'bar' | 'modal' | 'corner',
    
    // Behavior
    autoShow: boolean,               // Show automatically (default: true)
    showDeclineButton: boolean,      // Show decline button (default: true)
    showSettingsButton: boolean,     // Show settings button (default: true)
    
    // URLs
    privacyPolicyUrl: string,        // Privacy policy URL (default: '/privacy-policy')
    
    // Categories
    categories: string[],            // Custom cookie categories
    
    // Callbacks
    onAccept: (settings) => void,    // Called when user accepts
    onDecline: (settings) => void,   // Called when user declines
    onSettingsChange: (settings) => void, // Called when settings change
    
    // Custom CSS Classes
    customClasses: {
        banner: string,              // Banner container class
        main: string,                // Main content class
        container: string,           // Inner container class
        content: string,             // Content area class
        title: string,               // Title class
        text: string,                // Description text class
        link: string,                // Privacy policy link class
        actions: string,             // Actions container class
        acceptButton: string,        // Accept button class
        declineButton: string,       // Decline button class
        settingsButton: string,      // Settings button class
        settings: string             // Settings panel class
    }
};
```

## Methods

### Static Methods

#### `CookieBanner.create(options)`

Creates a new cookie banner instance.

```javascript
const banner = CookieBanner.create({
    theme: 'dark',
    onAccept: (settings) => console.log(settings)
});
```

**Parameters:**
- `options` (Object): Configuration options

**Returns:** CookieBanner instance

### Instance Methods

#### `show()`

Shows the cookie banner.

```javascript
banner.show();
```

**Returns:** CookieBanner instance (chainable)

#### `hide()`

Hides the cookie banner.

```javascript
banner.hide();
```

**Returns:** CookieBanner instance (chainable)

#### `reset()`

Resets all cookie settings and removes stored consent.

```javascript
banner.reset();
```

**Returns:** CookieBanner instance (chainable)

#### `getSettings()`

Gets current cookie settings.

```javascript
const settings = banner.getSettings();
console.log(settings);
// {
//   necessary: true,
//   functional: false,
//   analytics: true,
//   marketing: false,
//   performance: false,
//   timestamp: 1640995200000,
//   version: "2.0.0",
//   region: "EU",
//   laws: ["GDPR"]
// }
```

**Returns:** Object with current settings

#### `setSettings(settings)`

Sets cookie settings programmatically.

```javascript
banner.setSettings({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false,
    performance: true
});
```

**Parameters:**
- `settings` (Object): Cookie settings object

**Returns:** CookieBanner instance (chainable)

#### `updateTexts(texts)`

Updates custom texts dynamically.

```javascript
banner.updateTexts({
    title: 'New Cookie Title',
    description: 'Updated description text',
    acceptAll: 'Accept Cookies'
});
```

**Parameters:**
- `texts` (Object): Text overrides

**Returns:** CookieBanner instance (chainable)

#### `updateTheme(theme)`

Changes the banner theme.

```javascript
banner.updateTheme('dark');
```

**Parameters:**
- `theme` (String): Theme name ('default', 'dark', 'light', 'minimal')

**Returns:** CookieBanner instance (chainable)

#### `updatePosition(position)`

Changes the banner position.

```javascript
banner.updatePosition('top');
```

**Parameters:**
- `position` (String): Position ('bottom', 'top', 'center')

**Returns:** CookieBanner instance (chainable)

#### `refreshBanner()`

Refreshes the banner with current settings.

```javascript
banner.refreshBanner();
```

**Returns:** CookieBanner instance (chainable)

### Global Functions

#### `showCookieSettings()`

Global function to show cookie settings (works even if banner is not visible).

```javascript
// Can be called from anywhere
showCookieSettings();

// Or from HTML
<a href="#" onclick="showCookieSettings(); return false;">Cookie Settings</a>
```

## Events

### `cookieConsentChanged`

Fired when cookie consent changes.

```javascript
window.addEventListener('cookieConsentChanged', (event) => {
    const settings = event.detail;
    console.log('Consent changed:', settings);
    
    // Enable/disable scripts based on consent
    if (settings.analytics) {
        loadGoogleAnalytics();
    }
    
    if (settings.marketing) {
        loadMarketingScripts();
    }
});
```

**Event Detail:**
```javascript
{
    necessary: boolean,
    functional: boolean,
    analytics: boolean,
    marketing: boolean,
    performance: boolean,
    timestamp: number,
    version: string,
    region: string,
    laws: string[]
}
```

### `cookieBannerShown`

Fired when banner is shown.

```javascript
window.addEventListener('cookieBannerShown', () => {
    console.log('Banner shown');
});
```

### `cookieBannerHidden`

Fired when banner is hidden.

```javascript
window.addEventListener('cookieBannerHidden', () => {
    console.log('Banner hidden');
});
```

## Customization

### Custom Themes

Create custom themes using CSS variables:

```css
.cookie-banner.theme-custom {
    --cookie-primary-color: #ff6b6b;
    --cookie-secondary-color: #4ecdc4;
    --cookie-text-color: #2c3e50;
    --cookie-background: #ffffff;
    --cookie-border-radius: 12px;
    --cookie-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
```

### Custom Positioning

```css
.cookie-banner.position-custom {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
}
```

### Custom Animations

```css
.cookie-banner {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cookie-banner.show {
    animation: slideInUp 0.5s ease;
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## Examples

### E-commerce Integration

```javascript
const banner = CookieBanner.create({
    title: 'Enhance Your Shopping Experience',
    description: 'We use cookies to remember your preferences, show personalized recommendations, and improve our services.',
    theme: 'light',
    position: 'bottom',
    
    onAccept: (settings) => {
        // Enable analytics for conversion tracking
        if (settings.analytics) {
            gtag('config', 'GA_MEASUREMENT_ID');
            gtag('event', 'cookie_consent', { consent_type: 'accepted' });
        }
        
        // Enable marketing for retargeting
        if (settings.marketing) {
            fbq('init', 'FACEBOOK_PIXEL_ID');
            gtag('config', 'AW-CONVERSION_ID');
        }
        
        // Enable performance monitoring
        if (settings.performance) {
            loadPerformanceMonitoring();
        }
    },
    
    onDecline: (settings) => {
        gtag('event', 'cookie_consent', { consent_type: 'declined' });
        
        // Disable non-essential features
        disablePersonalization();
        disableRecommendations();
    }
});
```

### Blog/Content Site

```javascript
const banner = CookieBanner.create({
    title: 'We respect your privacy',
    description: 'Our website uses cookies to provide you with the best reading experience and to understand how you interact with our content.',
    theme: 'minimal',
    position: 'top',
    
    // Custom texts for content site
    analytics: 'Reading Analytics',
    analyticsDesc: 'Help us understand which articles are most popular and improve our content.',
    marketing: 'Content Recommendations',
    marketingDesc: 'Show you related articles and content you might enjoy.',
    
    onSettingsChange: (settings) => {
        // Update reading analytics
        if (settings.analytics) {
            enableReadingAnalytics();
        } else {
            disableReadingAnalytics();
        }
        
        // Update content recommendations
        if (settings.marketing) {
            enableContentRecommendations();
        } else {
            disableContentRecommendations();
        }
    }
});
```

### SaaS Application

```javascript
const banner = CookieBanner.create({
    title: 'Cookie Preferences',
    description: 'We use cookies to ensure our application works properly and to improve your user experience.',
    theme: 'dark',
    position: 'center',
    layout: 'modal',
    
    // Custom categories for SaaS
    categories: ['necessary', 'functional', 'analytics', 'performance'],
    
    onAccept: (settings) => {
        // Enable user analytics
        if (settings.analytics) {
            initializeUserAnalytics();
        }
        
        // Enable performance monitoring
        if (settings.performance) {
            initializePerformanceMonitoring();
            initializeErrorTracking();
        }
        
        // Enable functional features
        if (settings.functional) {
            enableAdvancedFeatures();
            enableUserPreferences();
        }
    }
});
```

### Multi-language Site

```javascript
// Detect user language
const userLang = navigator.language.split('-')[0];

const translations = {
    en: {
        title: 'Cookie Consent',
        description: 'We use cookies to improve your experience.',
        acceptAll: 'Accept All',
        decline: 'Decline'
    },
    es: {
        title: 'Consentimiento de Cookies',
        description: 'Utilizamos cookies para mejorar su experiencia.',
        acceptAll: 'Aceptar Todo',
        decline: 'Rechazar'
    },
    fr: {
        title: 'Consentement aux Cookies',
        description: 'Nous utilisons des cookies pour améliorer votre expérience.',
        acceptAll: 'Tout Accepter',
        decline: 'Refuser'
    }
};

const texts = translations[userLang] || translations.en;

const banner = CookieBanner.create({
    ...texts,
    theme: 'default',
    onAccept: (settings) => {
        // Track consent in user's language
        gtag('event', 'cookie_consent', {
            language: userLang,
            consent_type: 'accepted'
        });
    }
});
```

## TypeScript Definitions

```typescript
interface CookieBannerOptions {
    // Text customization
    title?: string;
    description?: string;
    acceptAll?: string;
    decline?: string;
    settings?: string;
    privacyPolicy?: string;
    settingsTitle?: string;
    settingsDescription?: string;
    necessary?: string;
    necessaryDesc?: string;
    functional?: string;
    functionalDesc?: string;
    analytics?: string;
    analyticsDesc?: string;
    marketing?: string;
    marketingDesc?: string;
    performance?: string;
    performanceDesc?: string;
    cancel?: string;
    saveSettings?: string;
    
    // Appearance
    theme?: 'default' | 'dark' | 'light' | 'minimal';
    position?: 'bottom' | 'top' | 'center';
    layout?: 'bar' | 'modal' | 'corner';
    
    // Behavior
    autoShow?: boolean;
    showDeclineButton?: boolean;
    showSettingsButton?: boolean;
    
    // URLs
    privacyPolicyUrl?: string;
    
    // Categories
    categories?: string[];
    
    // Callbacks
    onAccept?: (settings: CookieSettings) => void;
    onDecline?: (settings: CookieSettings) => void;
    onSettingsChange?: (settings: CookieSettings) => void;
    
    // Custom CSS classes
    customClasses?: {
        banner?: string;
        main?: string;
        container?: string;
        content?: string;
        title?: string;
        text?: string;
        link?: string;
        actions?: string;
        acceptButton?: string;
        declineButton?: string;
        settingsButton?: string;
        settings?: string;
    };
}

interface CookieSettings {
    necessary: boolean;
    functional: boolean;
    analytics: boolean;
    marketing: boolean;
    performance: boolean;
    timestamp: number;
    version: string;
    region: string;
    laws: string[];
}

declare class CookieBanner {
    constructor(options?: CookieBannerOptions);
    
    static create(options?: CookieBannerOptions): CookieBanner;
    
    show(): CookieBanner;
    hide(): CookieBanner;
    reset(): CookieBanner;
    getSettings(): CookieSettings | null;
    setSettings(settings: Partial<CookieSettings>): CookieBanner;
    updateTexts(texts: Partial<CookieBannerOptions>): CookieBanner;
    updateTheme(theme: string): CookieBanner;
    updatePosition(position: string): CookieBanner;
    refreshBanner(): CookieBanner;
}

declare function showCookieSettings(): void;

interface CookieConsentEvent extends CustomEvent {
    detail: CookieSettings;
}

declare global {
    interface WindowEventMap {
        'cookieConsentChanged': CookieConsentEvent;
        'cookieBannerShown': CustomEvent;
        'cookieBannerHidden': CustomEvent;
    }
}
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- iOS Safari 12+
- Android Chrome 60+

## Performance

- **Bundle size**: 5KB minified + gzipped
- **Dependencies**: Zero
- **Load time**: < 50ms on 3G
- **Memory usage**: < 1MB
- **CPU impact**: Minimal

## Security

- **CSP compatible**: Works with strict Content Security Policy
- **XSS protection**: All user inputs are sanitized
- **HTTPS only**: Secure cookie storage
- **No tracking**: Widget itself doesn't track users

---

For more examples and advanced usage, see the [main documentation](README.md).