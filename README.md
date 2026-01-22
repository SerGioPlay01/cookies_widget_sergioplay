# 🍪 Cookie Widget - Global Privacy Compliance Made Easy

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)](https://github.com/SerGioPlay01/cookies_widget_sergioplay)
[![CDN](https://img.shields.io/badge/CDN-Ready-green.svg)](https://cookies-widget-sergioplay.vercel.app/)
[![PWA](https://img.shields.io/badge/PWA-Ready-purple.svg)](https://cookies-widget-sergioplay.vercel.app/)
[![Languages](https://img.shields.io/badge/Languages-14+-orange.svg)](https://cookies-widget-sergioplay.vercel.app/)

> **Modern, lightweight, and fully compliant cookie consent banner supporting GDPR, CCPA, LGPD, 152-ФЗ РФ, and other international privacy regulations with advanced cookie blocking and 20+ language support.**

## 🌟 Key Features

### 🌍 **Global Privacy Compliance**
- **GDPR** (European Union) - Full compliance with consent requirements
- **CCPA** (California) - Consumer privacy rights protection
- **LGPD** (Brazil) - Lei Geral de Proteção de Dados compliance
- **152-ФЗ РФ** (Russia) - Personal data protection law compliance
- **PIPEDA** (Canada) - Personal Information Protection compliance
- **PIPL** (China) - Personal Information Protection Law compliance
- **APPI** (Japan) - Act on Protection of Personal Information compliance
- **PIPA** (South Korea) - Personal Information Protection Act compliance

### 🌐 **Multilingual Support (20+ Languages)**
- 🇷🇺 Russian • 🇺🇸 English • 🇩🇪 German • 🇫🇷 French • 🇪🇸 Spanish
- 🇮🇹 Italian • 🇵🇹 Portuguese • 🇵🇱 Polish • 🇺🇦 Ukrainian • 🇧🇾 Belarusian
- 🇰🇿 Kazakh • 🇨🇳 Chinese • 🇯🇵 Japanese • 🇰🇷 Korean
- **Auto-detection** based on browser language and user region

### 🛡️ **Advanced Cookie Blocking**
- **Intelligent blocking** of cookies before consent
- **Automatic deletion** of rejected cookies
- **Real-time monitoring** and blocking of new cookies
- **Bypass protection** against cookie injection attempts

### 🎨 **Modern Design & UX**
- **Responsive design** - Perfect on all devices (mobile-first)
- **4 Built-in themes** - Default, Dark, Light, Minimal
- **Customizable positioning** - Bottom, Top, Center, Corner
- **Smooth animations** and gradient backgrounds
- **Accessibility compliant** (WCAG 2.1) with keyboard navigation

### ⚡ **Performance & Technical**
- **Ultra-lightweight** - Only 8KB total (CSS + JS minified)
- **Zero dependencies** - Pure vanilla JavaScript
- **CDN ready** - Global edge distribution
- **PWA support** - Installable web app
- **Ad-blocker safe** - Graceful degradation when blocked

## 🚀 Quick Start

### 📦 **CDN Installation (Recommended)**

```html
<!-- Add to your <head> section -->
<link rel="stylesheet" href="https://cookies-widget-sergioplay.vercel.app/cookie-banner.css">

<!-- Add before closing </body> tag -->
<script src="https://cookies-widget-sergioplay.vercel.app/cookie-banner.js"></script>
```

### 🎯 **Basic Implementation**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    
    <!-- Cookie Widget CSS -->
    <link rel="stylesheet" href="https://cookies-widget-sergioplay.vercel.app/cookie-banner.css">
</head>
<body>
    <!-- Your website content -->
    <main>
        <h1>Welcome to My Website</h1>
        <p>This website uses cookies to enhance your experience.</p>
    </main>
    
    <!-- Footer with cookie settings link -->
    <footer>
        <a href="#cookie-settings" onclick="showCookieSettings(); return false;">
            Cookie Settings
        </a>
    </footer>
    
    <!-- Cookie Widget JavaScript -->
    <script src="https://cookies-widget-sergioplay.vercel.app/cookie-banner.js"></script>
</body>
</html>
```

**That's it!** The widget will automatically:
- Detect user's region and apply appropriate privacy laws
- Show in user's preferred language
- Handle all cookie consent management
- Block cookies until consent is given

## 🔧 Advanced Configuration

### 🎨 **Custom Styling & Themes**

```javascript
// Initialize with custom configuration
const cookieBanner = CookieBanner.create({
    // Theme options
    theme: 'dark', // 'default', 'dark', 'light', 'minimal'
    position: 'bottom', // 'bottom', 'top', 'center'
    layout: 'bar', // 'bar', 'modal', 'corner'
    
    // Custom texts
    title: 'We value your privacy',
    description: 'We use cookies to enhance your browsing experience and analyze our traffic.',
    acceptAll: 'Accept All',
    decline: 'Decline Optional',
    settings: 'Manage Preferences',
    
    // Behavior
    autoShow: true,
    showDeclineButton: true,
    showSettingsButton: true,
    
    // Privacy policy
    privacyPolicyUrl: '/privacy-policy',
    
    // Callbacks
    onAccept: (settings) => {
        console.log('✅ Cookies accepted:', settings);
        // Enable analytics, marketing scripts
        enableAnalytics();
        enableMarketing();
    },
    
    onDecline: (settings) => {
        console.log('❌ Optional cookies declined:', settings);
        // Keep only necessary cookies
        disableOptionalTracking();
    },
    
    onSettingsChange: (settings) => {
        console.log('⚙️ Settings updated:', settings);
        // Update script loading based on preferences
        updateTrackingScripts(settings);
    }
});
```

### � **Multilingual Customization**

```javascript
// Override specific translations
CookieBanner.create({
    // Custom texts for any language
    customTexts: {
        en: {
            title: 'Cookie Consent',
            description: 'We use cookies to improve your experience.',
            acceptAll: 'Accept All Cookies',
            decline: 'Decline Optional Cookies'
        },
        es: {
            title: 'Consentimiento de Cookies',
            description: 'Utilizamos cookies para mejorar su experiencia.',
            acceptAll: 'Aceptar Todas las Cookies',
            decline: 'Rechazar Cookies Opcionales'
        }
    },
    
    // Force specific language (optional)
    forceLanguage: 'en', // Will override auto-detection
    
    // Custom language detection
    onLanguageDetected: (language) => {
        console.log('🌐 Detected language:', language);
    }
});
```

### 🛡️ **Advanced Cookie Management**

```javascript
// Advanced cookie blocking configuration
CookieBanner.create({
    // Cookie categories
    categories: {
        necessary: {
            enabled: true, // Always enabled
            locked: true,  // Cannot be disabled
            cookies: ['session_id', 'csrf_token']
        },
        functional: {
            enabled: false,
            cookies: ['user_preferences', 'language_setting']
        },
        analytics: {
            enabled: false,
            cookies: ['_ga', '_ga_*', '_gid', '_gat']
        },
        marketing: {
            enabled: false,
            cookies: ['_fbp', '_fbc', 'fr', '__Secure-*']
        },
        performance: {
            enabled: false,
            cookies: ['performance_*', 'speed_test']
        }
    },
    
    // Advanced blocking options
    blockingMode: 'aggressive', // 'standard', 'aggressive', 'minimal'
    
    // Custom cookie patterns to block
    customBlockPatterns: [
        /^_custom_tracking_/,
        /^marketing_pixel_/,
        'specific_cookie_name'
    ],
    
    // Whitelist patterns (never block these)
    whitelistPatterns: [
        /^essential_/,
        'important_cookie'
    ],
    
    // Real-time cookie monitoring
    onCookieBlocked: (cookieName, category) => {
        console.log(`🚫 Blocked cookie: ${cookieName} (${category})`);
    },
    
    onCookieAllowed: (cookieName, category) => {
        console.log(`✅ Allowed cookie: ${cookieName} (${category})`);
    }
});
```

## 🔌 Framework Integrations

### ⚛️ **React / Next.js**

```jsx
// components/CookieBanner.jsx
import { useEffect, useState } from 'react';

export default function CookieBanner() {
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        // Load CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cookies-widget-sergioplay.vercel.app/cookie-banner.css';
        document.head.appendChild(link);
        
        // Load JavaScript
        const script = document.createElement('script');
        script.src = 'https://cookies-widget-sergioplay.vercel.app/cookie-banner.js';
        script.onload = () => {
            // Initialize banner
            window.cookieBanner = CookieBanner.create({
                theme: 'light',
                onAccept: (settings) => {
                    // Enable React-specific tracking
                    if (settings.analytics) {
                        // Initialize Google Analytics
                        gtag('config', 'GA_MEASUREMENT_ID');
                    }
                }
            });
            setIsLoaded(true);
        };
        document.head.appendChild(script);
        
        return () => {
            link.remove();
            script.remove();
        };
    }, []);
    
    const showSettings = () => {
        if (window.showCookieSettings) {
            window.showCookieSettings();
        }
    };
    
    return (
        <footer className="footer">
            <button onClick={showSettings} disabled={!isLoaded}>
                🍪 Cookie Settings
            </button>
        </footer>
    );
}
```

### � **Vue.js / Nuxt.js**

```vue
<!-- components/CookieBanner.vue -->
<template>
    <div>
        <!-- Your app content -->
        <footer>
            <button @click="showCookieSettings" :disabled="!isLoaded">
                🍪 Cookie Settings
            </button>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'CookieBanner',
    data() {
        return {
            isLoaded: false
        };
    },
    mounted() {
        this.loadCookieBanner();
    },
    methods: {
        async loadCookieBanner() {
            // Load CSS
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cookies-widget-sergioplay.vercel.app/cookie-banner.css';
            document.head.appendChild(link);
            
            // Load JavaScript
            const script = document.createElement('script');
            script.src = 'https://cookies-widget-sergioplay.vercel.app/cookie-banner.js';
            script.onload = () => {
                this.$cookieBanner = CookieBanner.create({
                    theme: 'minimal',
                    onSettingsChange: (settings) => {
                        this.$emit('cookie-settings-changed', settings);
                        
                        // Update Vue app state
                        this.$store.commit('updateCookieSettings', settings);
                    }
                });
                this.isLoaded = true;
            };
            document.head.appendChild(script);
        },
        
        showCookieSettings() {
            if (window.showCookieSettings) {
                window.showCookieSettings();
            }
        }
    }
};
</script>
```

### 📝 **WordPress**

```php
<?php
// functions.php

// Enqueue Cookie Widget
function enqueue_cookie_widget() {
    wp_enqueue_style(
        'cookie-banner-css',
        'https://cookies-widget-sergioplay.vercel.app/cookie-banner.css',
        array(),
        '3.0.0'
    );
    
    wp_enqueue_script(
        'cookie-banner-js',
        'https://cookies-widget-sergioplay.vercel.app/cookie-banner.js',
        array(),
        '3.0.0',
        true
    );
    
    // Add configuration
    wp_add_inline_script('cookie-banner-js', '
        document.addEventListener("DOMContentLoaded", function() {
            if (typeof CookieBanner !== "undefined") {
                window.cookieBanner = CookieBanner.create({
                    theme: "' . get_theme_mod('cookie_banner_theme', 'default') . '",
                    privacyPolicyUrl: "' . get_privacy_policy_url() . '",
                    onAccept: function(settings) {
                        // Enable WordPress-specific tracking
                        if (settings.analytics && typeof gtag !== "undefined") {
                            gtag("config", "' . get_option('ga_measurement_id') . '");
                        }
                    }
                });
            }
        });
    ');
}
add_action('wp_enqueue_scripts', 'enqueue_cookie_widget');

// Add cookie settings link to footer
function add_cookie_settings_link() {
    echo '<div class="cookie-settings-link">';
    echo '<a href="#cookie-settings" onclick="showCookieSettings(); return false;">';
    echo '🍪 ' . __('Cookie Settings', 'textdomain');
    echo '</a>';
    echo '</div>';
}
add_action('wp_footer', 'add_cookie_settings_link');

// Customizer options
function cookie_banner_customizer($wp_customize) {
    $wp_customize->add_section('cookie_banner', array(
        'title' => __('Cookie Banner', 'textdomain'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('cookie_banner_theme', array(
        'default' => 'default',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('cookie_banner_theme', array(
        'label' => __('Banner Theme', 'textdomain'),
        'section' => 'cookie_banner',
        'type' => 'select',
        'choices' => array(
            'default' => __('Default', 'textdomain'),
            'dark' => __('Dark', 'textdomain'),
            'light' => __('Light', 'textdomain'),
            'minimal' => __('Minimal', 'textdomain'),
        ),
    ));
}
add_action('customize_register', 'cookie_banner_customizer');
?>
```

## 📊 Analytics Integration

### 📈 **Google Analytics 4 with Consent Mode**

```javascript
// Initialize GA4 with consent mode
gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted'
});

// Configure cookie banner
CookieBanner.create({
    onAccept: (settings) => {
        // Update consent based on user choices
        gtag('consent', 'update', {
            'analytics_storage': settings.analytics ? 'granted' : 'denied',
            'ad_storage': settings.marketing ? 'granted' : 'denied',
            'ad_user_data': settings.marketing ? 'granted' : 'denied',
            'ad_personalization': settings.marketing ? 'granted' : 'denied',
            'functionality_storage': settings.functional ? 'granted' : 'denied',
            'personalization_storage': settings.functional ? 'granted' : 'denied'
        });
        
        // Send consent event
        gtag('event', 'cookie_consent_granted', {
            'consent_categories': Object.keys(settings).filter(key => settings[key])
        });
    },
    
    onDecline: (settings) => {
        gtag('event', 'cookie_consent_declined', {
            'declined_categories': Object.keys(settings).filter(key => !settings[key])
        });
    }
});
```

### �️ **Google Tag Manager Integration**

```javascript
// GTM with enhanced consent mode
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Set default consent state
gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied'
});

// Cookie banner with GTM integration
CookieBanner.create({
    onSettingsChange: (settings) => {
        // Update consent for GTM
        gtag('consent', 'update', {
            'analytics_storage': settings.analytics ? 'granted' : 'denied',
            'ad_storage': settings.marketing ? 'granted' : 'denied',
            'ad_user_data': settings.marketing ? 'granted' : 'denied',
            'ad_personalization': settings.marketing ? 'granted' : 'denied'
        });
        
        // Push custom event to dataLayer
        window.dataLayer.push({
            'event': 'cookie_consent_update',
            'cookie_settings': settings,
            'consent_timestamp': new Date().toISOString()
        });
    }
});
```

## 🛠️ Developer Tools & Utilities

### 🔍 **Debug Mode**

```javascript
// Enable comprehensive debugging
CookieBanner.create({
    debug: true, // Enables console logging
    
    onDebug: (level, message, data) => {
        console.log(`[Cookie Banner ${level.toUpperCase()}]`, message, data);
    },
    
    // Test different scenarios
    forceRegion: 'EU', // Force GDPR compliance
    forceLanguage: 'de', // Force German language
    
    // Development helpers
    onInit: () => console.log('🚀 Cookie Banner initialized'),
    onShow: () => console.log('👁️ Banner shown'),
    onHide: () => console.log('🙈 Banner hidden'),
    onReset: () => console.log('🔄 Settings reset')
});

// Development utilities
window.cookieDebug = {
    // Show current settings
    getSettings: () => window.cookieBanner?.getSettings(),
    
    // Force show banner
    showBanner: () => window.cookieBanner?.show(),
    
    // Reset for testing
    reset: () => window.cookieBanner?.reset(),
    
    // Test different languages
    setLanguage: (lang) => window.cookieBanner?.setLanguage(lang),
    
    // Check blocked cookies
    getBlockedCookies: () => window.cookieBanner?.getBlockedCookies(),
    
    // Simulate different regions
    setRegion: (region) => window.cookieBanner?.setRegion(region)
};
```

### 🧪 **Testing Utilities**

```javascript
// Automated testing helpers
class CookieBannerTester {
    constructor() {
        this.tests = [];
        this.results = [];
    }
    
    // Test banner visibility
    testVisibility() {
        const banner = document.querySelector('.cookie-banner');
        return {
            test: 'Banner Visibility',
            passed: banner && banner.style.display !== 'none',
            element: banner
        };
    }
    
    // Test language detection
    testLanguageDetection() {
        const detectedLang = window.cookieBanner?.getCurrentLanguage();
        const browserLang = navigator.language.split('-')[0];
        
        return {
            test: 'Language Detection',
            passed: detectedLang === browserLang,
            detected: detectedLang,
            expected: browserLang
        };
    }
    
    // Test cookie blocking
    async testCookieBlocking() {
        // Set a test cookie
        document.cookie = 'test_cookie=blocked; path=/';
        
        // Check if it was blocked
        const cookieExists = document.cookie.includes('test_cookie=blocked');
        
        return {
            test: 'Cookie Blocking',
            passed: !cookieExists, // Should be blocked
            cookieExists
        };
    }
    
    // Run all tests
    async runAllTests() {
        this.results = [
            this.testVisibility(),
            this.testLanguageDetection(),
            await this.testCookieBlocking()
        ];
        
        console.table(this.results);
        return this.results;
    }
}

// Usage
const tester = new CookieBannerTester();
tester.runAllTests();
```

## 🌐 Live Demo & Documentation

### 🎮 **Interactive Demo**
Visit our live demo to see Cookie Widget in action:
**[https://cookies-widget-sergioplay.vercel.app/](https://cookies-widget-sergioplay.vercel.app/)**

### 📚 **Complete Documentation**
- **[Installation Guide](https://cookies-widget-sergioplay.vercel.app/documentation.html)**
- **[API Reference](https://cookies-widget-sergioplay.vercel.app/documentation.html#api)**
- **[Integration Examples](https://cookies-widget-sergioplay.vercel.app/examples.html)**
- **[Webmaster Tools](https://cookies-widget-sergioplay.vercel.app/tools.html)**

### 🛠️ **Developer Resources**
- **[GitHub Repository](https://github.com/SerGioPlay01/cookies_widget_sergioplay)**
- **[Issue Tracker](https://github.com/SerGioPlay01/cookies_widget_sergioplay/issues)**
- **[Contributing Guide](https://github.com/SerGioPlay01/cookies_widget_sergioplay/blob/main/CONTRIBUTING.md)**
- **[Deployment Guide](https://github.com/SerGioPlay01/cookies_widget_sergioplay/blob/main/DEPLOY.md)**

## 📱 PWA Features

Cookie Widget comes with a full Progressive Web App experience:

### 🔧 **Installation**
- **Installable** on desktop and mobile devices
- **Offline support** with service worker caching
- **App shortcuts** for quick access to documentation and tools
- **Native app experience** with standalone display mode

### 📲 **Mobile Optimization**
- **Touch-friendly** interface with proper touch targets
- **Responsive design** that works on all screen sizes
- **iOS Safari** and **Android Chrome** optimized
- **Custom splash screens** for iOS devices

## 🔒 Security & Privacy

### 🛡️ **Security Features**
- **Content Security Policy** (CSP) compatible
- **Subresource Integrity** (SRI) support available
- **No external dependencies** - reduces attack surface
- **XSS protection** with proper input sanitization

### 🔐 **Privacy by Design**
- **No data collection** by the widget itself
- **Local storage only** - no external servers
- **Transparent operation** - open source code
- **User control** - complete consent management

## 📈 Performance Metrics

### ⚡ **Lighthouse Scores**
- **Performance**: 100/100
- **Accessibility**: 100/100
- **Best Practices**: 100/100
- **SEO**: 100/100

### 📊 **Technical Specs**
- **Total Size**: ~8KB (CSS + JS minified + gzipped)
- **Load Time**: <100ms on 3G connection
- **Memory Usage**: <1MB RAM
- **CPU Impact**: Minimal (<1% on mobile devices)

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🐛 **Bug Reports**
Found a bug? Please [create an issue](https://github.com/SerGioPlay01/cookies_widget_sergioplay/issues) with:
- Detailed description
- Steps to reproduce
- Browser and OS information
- Screenshots if applicable

### 💡 **Feature Requests**
Have an idea for improvement? We'd love to hear it!
- [Open a discussion](https://github.com/SerGioPlay01/cookies_widget_sergioplay/discussions)
- Describe your use case
- Explain the expected behavior

### 🔧 **Development**
Ready to contribute code?

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/cookies_widget_sergioplay.git
cd cookies_widget_sergioplay

# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes and test thoroughly
# Commit with descriptive messages
git commit -m "Add amazing feature"

# Push to your fork and create a pull request
git push origin feature/amazing-feature
```

### 🌐 **Translations**
Help us support more languages:
- Check `i18n.js` for current translations
- Add your language following the existing pattern
- Test with different regions and browsers
- Submit a pull request

## � License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### 🆓 **What this means:**
- ✅ **Commercial use** - Use in commercial projects
- ✅ **Modification** - Modify the code as needed
- ✅ **Distribution** - Distribute original or modified versions
- ✅ **Private use** - Use for private projects
- ❌ **Liability** - No warranty or liability
- ❌ **Trademark use** - Cannot use project trademarks

## 🙏 Acknowledgments

Special thanks to:
- **Privacy law experts** who helped ensure compliance
- **International community** for translations and feedback
- **Open source contributors** who made this project better
- **Web developers** who tested and provided valuable feedback

## 📞 Support & Community

### 💬 **Get Help**
- 📖 **[Documentation](https://cookies-widget-sergioplay.vercel.app/documentation.html)** - Comprehensive guides
- 🐛 **[GitHub Issues](https://github.com/SerGioPlay01/cookies_widget_sergioplay/issues)** - Bug reports and feature requests
- 💭 **[Discussions](https://github.com/SerGioPlay01/cookies_widget_sergioplay/discussions)** - Community Q&A
- 📧 **Email**: [support@sergioplay.dev](mailto:support@sergioplay.dev)

### 🌟 **Show Your Support**
If Cookie Widget helped your project, consider:
- ⭐ **[Star the repository](https://github.com/SerGioPlay01/cookies_widget_sergioplay)**
- ☕ **[Buy me a coffee](https://www.buymeacoffee.com/sergioplay)**
- 🐦 **[Follow on X](https://x.com/_SerGio_Play_)**
- 📸 **[Follow on Instagram](https://instagram.com/_sergio_play_)**

### 📊 **Project Stats**
![GitHub stars](https://img.shields.io/github/stars/SerGioPlay01/cookies_widget_sergioplay?style=social)
![GitHub forks](https://img.shields.io/github/forks/SerGioPlay01/cookies_widget_sergioplay?style=social)
![GitHub issues](https://img.shields.io/github/issues/SerGioPlay01/cookies_widget_sergioplay)
![GitHub pull requests](https://img.shields.io/github/issues-pr/SerGioPlay01/cookies_widget_sergioplay)

---

<div align="center">

**Made with ❤️ by [SerGioPlay](https://github.com/SerGioPlay01)**

*Helping developers build privacy-compliant websites since 2024*

[🌐 Website](https://cookies-widget-sergioplay.vercel.app/) • 
[📚 Docs](https://cookies-widget-sergioplay.vercel.app/documentation.html) • 
[🎮 Demo](https://cookies-widget-sergioplay.vercel.app/#demo) • 
[🛠️ Tools](https://cookies-widget-sergioplay.vercel.app/tools.html)

</div>